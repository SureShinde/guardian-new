<?php

include '../../../mpdf/mpdf.php';
include '../../../html/header.php';

$couponCode = $_POST['coupon_code'];
$discountAmount = $_POST['discount_amt'];
$customerEmail = $_POST['customer'];
$user_email = $_COOKIE['GT'];
$filename = $couponCode.".pdf";

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

$content = $mpdf->Output('', 'S');

$content = chunk_split(base64_encode($content));
$uid = md5(uniqid(time())); 
$subject = 'From Your Friends at Guardian Technologies';
$message = 'Thank you, for being a loyal customer, please use the attached gift card for your next purchase!';

$header = "From: Guardian Technologies Customer Support <".$user_email.">\r\n";
$header .= "Reply-To: ".$user_email."\r\n";
$header .= "MIME-Version: 1.0\r\n";
$header .= "Content-Type: multipart/mixed; boundary=\"".$uid."\"\r\n\r\n";
$header .= "This is a multi-part message in MIME format.\r\n";
$header .= "--".$uid."\r\n";
$header .= "Content-type:text/plain; charset=iso-8859-1\r\n";
$header .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
$header .= $message."\r\n\r\n";
$header .= "--".$uid."\r\n";
$header .= "Content-Type: application/pdf; name=\"".$filename."\"\r\n";
$header .= "Content-Transfer-Encoding: base64\r\n";
$header .= "Content-Disposition: attachment; filename=\"".$filename."\"\r\n\r\n";
$header .= $content."\r\n\r\n";
$header .= "--".$uid."--";
mail($customerEmail, $subject, $message, $header);

$mpdf->Output();

include '../../../html/footer.php';
?>