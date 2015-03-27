<?php
umask(0);
require 'app/Mage.php';
Mage::app('default')->setCurrentStore('1');
$orders = Mage::getModel('sales/order')->getCollection()->getData();
	foreach($orders as $order) {
		if($order['increment_id'] > '100005584') {
			//echo $order['increment_id']."<br/>";
			//$_order = Mage::getModel('sales/order')->loadByIncrementId($order['increment_id']);
			//echo $_order->getShippingAddress()->getCountry()."<br/>";
			//echo $_order->getShippingDescription()."<br/>";
			//echo "<br/>";
			
				/*if($order->getEmailSent()) {
					$order->setEmailSent(false);
					$order->save();
					echo "unset email";
				}
				else
				{
					try { 
						$order->sendNewOrderEmail(true);
						$order->setEmailSent(true);
						$order->save();
						echo $order->getEmailSent();
						echo "successfully sent";
					}
					catch (Exception $e) {
						echo $e->getMessage();
					}
				}*/
		}
	}
?>