<?php

include '../../../mpdf/mpdf.php';
include '../../../html/header.php';

$couponCode = $_POST['coupon_code'];
$discountAmount = $_POST['discount_amt'];

$mpdf=new mPDF();
$mpdf->WriteHTML('<div class="couponWrapper" style="display: block;">

				<div class="couponContainer">
					<img src="../../../img/coupon_bg2.png">
					<div class="couponCode">'.$couponCode.'</div>
					
					<div class="couponOffer">
						<span class="couponAmount">'.$discountAmount.' Off</span> Digital Gift Card
					</div>
				</div>
				
				<div class="couponNote">
					To redeem this free <span class="couponAmount">'.$discountAmount.' Off</span> Digital Gift Card, go to <a href="http://www.guardiantechnologies.com/">GuardianTechnologies.com</a> <br> and enter the promo code (above) in your shopping cart. 
				</div>

			</div>');
$mpdf->Output('generated/'.$couponCode.'.pdf', 'F');

header("Content-type:application/pdf");
header("Content-Disposition:attachment;filename='generated/".$couponCode.".pdf'");
readfile("generated/".$couponCode.".pdf");

include '../../../html/footer.php';
?>