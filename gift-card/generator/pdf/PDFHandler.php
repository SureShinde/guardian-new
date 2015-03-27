<?php

include '../../mpdf/mpdf.php';
include '../../html/header.php';

$couponCode = $_POST['couponCodeSave'];
$discountAmount = $_POST['discountAmountSave'];

$mpdf=new mPDF();
$mpdf->WriteHTML('<div class="couponWrapper" style="display: block;">

				<div class="couponContainer">
					<img src="../../img/coupon_bg2.png">
					<div class="couponCode">'.$couponCode.'</div>
					
					<div class="couponOffer">
						<span class="couponAmount">'.$discountAmount.' Off</span> Digital Gift Card
					</div>
				</div>
				
				<div class="couponNote">
					To redeem this free <span class="couponAmount">'.$discountAmount.' Off</span> Digital Gift Card, go to <a href="http://www.guardiantechnologies.com/">GuardianTechnologies.com</a> <br> and enter the promo code (above) in your shopping cart. 
				</div>

			</div>');
$mpdf->Output('{$couponCode}.pdf', 'F');

header("Content-type:application/pdf");
header("Content-Disposition:attachment;filename='{$couponCode}.pdf'");
readfile("{$couponCode}.pdf");

include '../../html/footer.php';
?>