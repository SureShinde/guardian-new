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
 * Polcode importer shell script
 *
 * @category    Polcode
 * @package     Mage_Shell
 * @author      Michal Filik
 */
class Polcode_Shell_Importer extends Mage_Shell_Abstract
{

	protected $fileProcessedPath;
    /**
     * Perform import
     */
    protected function _import()
    {
        # Check to make sure Magento is installed
        if (!Mage::isInstalled()) {
            echo "Application is not installed yet, please complete install wizard first.";
            exit;
        }

        $rootpath = $this->_getRootPath();
        $this->importPath = $rootpath.'sales_orders/import';
        $this->importProcessedPath = $rootpath.'sales_orders/import/processed';

        $iterator = new DirectoryIterator($this->importPath);

        foreach ($iterator as $fileinfo) {

            if ($fileinfo->isFile()) {

                $filePath = $this->importPath . "/" . $fileinfo->getFilename();
                $this->fileProcessedPath = $this->importProcessedPath . "/" . $fileinfo->getFilename();

                $row = 0;
                if (($handle = fopen($filePath, "r")) !== FALSE) {

                    while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {

                        // Skip first row
                        if($row == 0 ) {
                            $row++;
                            continue;
                        } else {
                            $row++;
                        }

                        if(count($data)) {
                            try {
								$this->process($data);
							} catch (Exception $e) {
								mail('chris@vividfront.com', 'URGENT: Failed Import: '.$data[0], $e->getMessage(). ". Located in file: ".$fileinfo->getFilename(), 'From: websupport@guardiantechnologies.com');
							}
                        }

                    }
                    fclose($handle);
                }

                //Move File
                $moveResult = rename($filePath, $this->fileProcessedPath);
                if($moveResult) {
                    echo "\r\nFile moved to processed folder\r\n";
                } else {
                    echo "\r\nError: File not moved to processed folder\r\n";
                }
            }
        }

    }

    protected function process($data){

        $orderId = $data[0];

        if(strlen($orderId) > 4)
        {
            $order = Mage::getModel('sales/order')->loadByIncrementId($orderId);
        }
        else
        {
            $order = Mage::getModel('sales/order')->load($orderId);
        }

        if(!$order->getId()) {
            echo "\r\nOrder #$orderId doesnt exist\r\n";
			mail('chris@vividfront.com', 'URGENT: Failed Import: '.$orderId, 'Order '.$orderId.' doesnt exist. Located in file: '.$this->fileProcessedPath, 'From: websupport@guardiantechnologies.com');
            return;
        }

        if($order->getStatus() == 'canceled') {
            echo "\r\nError: Imported order cannnot be canceled \r\n";
			mail('chris@vividfront.com', 'URGENT: Failed Import: '.$orderId, 'Imported Order '.$orderId.' cannot be canceled. Located in file: '.$this->fileProcessedPath, 'From: websupport@guardiantechnologies.com');
            return;
        }

        $shipment = Mage::getModel('sales/service_order', $order)->prepareShipment();

        $transactionSave = Mage::getModel('core/resource_transaction')
            ->addObject($shipment)
            ->save();

		$shipCountry = $order->getShippingAddress()->getCountry();
		$shipType = $order->getShippingDescription();

        /* Preparing Track... */
        $track_code = 'custom';
        $track_title = 'Custom Carrier';
        $track_id = $data[2];
		
		if($shipCountry == 'US') {
			if( substr($track_id,0,2) == "1Z")
			{
				$track_code = 'ups';
				$track_title = 'UPS';
			}
			else
			{
				$track_code = 'fedex';
				$track_title = 'FedEx';
			}
		}
        else
        {
            $track_title = 'Purolator';
        }

        if ($shipment->getId() != '') {
            $track = Mage::getModel('sales/order_shipment_track')
                ->setShipment($shipment)
                ->setData('title', $track_title)
                ->setData('number', $track_id)
                ->setData('carrier_code', $track_code)
                ->setData('order_id', $shipment->getData('order_id'))
                ->save();
        }

        if ($shipment) {
            if (!$shipment->getEmailSent()) {
                $shipment->sendEmail(true);
                $shipment->setEmailSent(true);
                $shipment->save();
				$order->setData('state', "complete");
				$order->setStatus("complete");
				$order->save();
            }
        }

        echo "\r\nOrder #$orderId imported\r\n";

    }

    /**
     * Run script
     */
    public function run()
    {
        if ($this->getArg('import')) {
            $this->_import();
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

Guardia importer

Updates orders statuses and add tracking codes loaded from CSV file

Usage:  php -f $self -- [options]

Options:

  help              This help
  import            Import orders statuses and shippings

USAGE;
    }
}

if (basename($argv[0]) == basename(__FILE__)) {
    $shell = new Polcode_Shell_Importer();
    $shell->run();
}