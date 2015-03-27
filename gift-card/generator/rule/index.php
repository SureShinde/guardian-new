<?php

//** Create Coupon Code Test **//

umask(0);
require '/app/Mage.php';
Mage::app('default')->setCurrentStore('1');

$discount_amt = $_POST['discount_amt'];
$discount_type = $_POST['discount_type'];
$customer = $_POST['customer'];
$coupon_code = uniqid();
$rule->setName($customer)
    ->setDescription($customer)
    ->setFromDate('')
    ->setCouponType(2)
    ->setCouponCode($coupon_code)
    ->setUsesPerCustomer(1)
    ->setIsActive(1)
    ->setConditionsSerialized('')
    ->setActionsSerialized('')
    ->setStopRulesProcessing(0)
    ->setIsAdvanced(1)
    ->setProductIds('')
    ->setSortOrder(0)
    ->setSimpleAction($discount_type)
    ->setDiscountAmount($discount_amt)
    ->setDiscountQty(null)
    ->setDiscountStep(0)
    ->setSimpleFreeShipping('0')
    ->setApplyToShipping('0')
    ->setIsRss(0)
    ->setWebsiteIds(array(1))
	->save();
echo($coupon_code);
?>