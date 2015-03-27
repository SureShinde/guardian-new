<?php
/**
 * Author: Michal Filik
 * Date: May 22, 2014
 *
 * @category    Polcode
 * @package     Mage_Shell
 * @copyright   Copyright (c) 2014 Michal Filik (http://www.polcode.com)
 */

require_once 'abstract.php';

/**
 * Polcode exporter shell script
 *
 * @category    Polcode
 * @package     Mage_Shell
 * @author      Michal Filik
 */
class Polcode_Shell_Exporter extends Mage_Shell_Abstract
{
    protected $csv = null;
    protected $exportPath = null;

    /**
     * Perform export
     */
    function _export()
    {
        # Check to make sure Magento is installed
        if (!Mage::isInstalled()) {
            echo "Application is not installed yet, please complete install wizard first.";
            exit;
        }

        Mage::app('default')->setCurrentStore('1');

        $rootpath = $this->_getRootPath();
        $this->exportPath = $rootpath.'sales_orders';

        # Create the exports directory if not exists
        $io = new Varien_Io_File();
        $io->mkdir($this->exportPath);

        $result = $this->processOrders();

        if($result == FALSE) {
            echo "Error during saving CSV file";
        } else {
            echo "Orders exported successfully: ".date("m_d_Y_h_i_s",strtotime(now()));
        }

    }

    function getHHeader() {
        return "record_type,order_no,order_date,customer_name,address_1,address_2,city,state,zip,country,ship_via,freight, tax_code, tax_amount, tax_percent, phone, email_addr, address_3\r\n";
    }

    function getIHeader() {
        return "record_type,order_no,line_no,item_no,qty_ordered,unit_price\r\n";
    }

    function prepareContent($_orders, $_items) {

        $csv = "Header Record\r\n";
        $csv .= $this->getHHeader();
        $csv .= $_orders;
        $csv .= "\r\n";
        $csv .= "Item Record\r\n";
        $csv .= $this->getiHeader();
        $csv .= $_items;

        return $csv;
    }

    protected  function processOrders() {

        $currentTimestamp = strtotime("-30 minutes");
        $fromDate = date('Y-m-d H:i:s', $currentTimestamp);

        $orders = Mage::getModel('sales/order')->getCollection()
        ->addAttributeToFilter('created_at', array('from' => $fromDate));

        if(!count($orders)) {
            echo "Error: Nothing to export here :(\n";
                return;
        }

        $_orders = null;
        $_items = null;

        foreach($orders as $order) {

            $recordType = "H";
            $orderNo = $order['increment_id'];
            $orderDate = date("m/d/Y",strtotime($order->getData('created_at')));
           // $CustomerName = $order->getData('customer_firstname') ." ".$order->getData('customer_lastname');
			$CustomerName = $order->getShippingAddress()->getName(); 
            $street = $order->getShippingAddress()->getStreet();
            $address1 = str_replace(',', '', $street[0]);
            $address2 = str_replace(',', '', $street[1]);
            $city = str_replace(',', ' ', $order->getShippingAddress()->getCity());
            $state = $order->getShippingAddress()->getRegionCode();
            $zip = strval($order->getShippingAddress()->getPostcode());
            $country = $order->getShippingAddress()->getCountryId();
            $ship_via = $order->getShippingDescription();
            $freight = number_format($order->getShippingAmount(), 2);
            $taxAmount = number_format($order->getTaxAmount(), 2);
            $phone = $order->getShippingAddress()->getTelephone();
			$company = $order->getShippingAddress()->getCompany();

            $firstItem = $order->getItemsCollection()->getFirstItem();
            $store = $store = Mage::app()->getStore('default');
            $request = Mage::getSingleton('tax/calculation')->getRateRequest(null, null, null, $store);
            $taxclassid = $firstItem->getProduct()->getData('tax_class_id');
            $taxPercent = Mage::getSingleton('tax/calculation')->getRate($request->setProductClassId($taxclassid));

            $order = Mage::getModel('sales/order')->load($order->getId());
            $taxInfo = Mage::getModel('tax/sales_order_tax')->getCollection()->loadByOrder($order)->toArray();
            $taxCode = isset($taxInfo['items'][0][code]) ? $taxInfo['items'][0][code] : "";

            $emailAddr = $order->getCustomerEmail();

            $_orders .= sprintf("%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,\r\n",
                $recordType,
                $orderNo,
                $orderDate,
                $CustomerName,
                $address1,
                $address2,
                $city,
                $state,
                $zip,
                $country,
                $ship_via,
                $freight,
                $taxCode,
                $taxAmount,
                $taxPercent,
                $phone,
                $emailAddr,
				$company);

            $items = $order->getAllItems();

            $i = 1;
            foreach($items as $item) {

                $recordType = "L";
                $orderNo = $order['increment_id'];
                $lineNo = $i;
                $itemNo = $item->getSku();
                $qtyOrdered = number_format($item->getQtyOrdered(), 0);
				$unitPrice = number_format($item->getPrice(), 2);

                $_items .= sprintf("%s,%s,%s,%s,%s,%s\r\n",
                    $recordType,
                    $orderNo,
                    $lineNo,
                    $itemNo,
                    $qtyOrdered,
                    $unitPrice);

                $i++;
            }
        }

        $content = $this->prepareContent($_orders, $_items);
        $fileName = "Orders_export_".date("m_d_Y_H_i_s",strtotime(now())).".csv";
        $filePath = $this->exportPath."/export/".$fileName;
		$copied = $this->exportPath."/export/processed/".$fileName;
        $out .= file_put_contents($filePath,$content);
		$out .= file_put_contents($copied,$content);
		return $out;
    }

    /**
     * Run script
     */
    public function run()
    {
        if ($this->getArg('export')) {
            $this->_export();
        } else {
            echo $this->usageHelp();
        }
    }

    /**
     * Retrieve Usage Help Message
     *
     */
    public function usageHelp()
    {
        global $argv;
        $self = basename($argv[0]);
        return <<<USAGE

Orders exporter

Export orders to CSV file and upload it via FTP

Usage:  php -f $self -- [options]

Options:

  help              This help
  export            Export orders

USAGE;
    }
}

if (basename($argv[0]) == basename(__FILE__)) {
    $shell = new Polcode_Shell_Exporter();
    $shell->run();
}