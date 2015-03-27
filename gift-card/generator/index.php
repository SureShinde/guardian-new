<?php include '../html/header.php' ; ?> 
    
	<?php if($_COOKIE["Generator"] == 'Approved'): ?>

	<div class="row">
		<div class="contain-to-grid">
			<nav class="top-bar" data-topbar role="navigation">
				<ul class="title-area">
					<li class="name">
					  <h1><a href="javascript:void(0);"> Gift Card Generator</a></h1>
					</li>
				</ul>
				<section class="top-bar-section">
					<ul class="right">
					  <li class="active"><a href="javascript:void(0);" id="generator">Generator</a></li>
					  <li><a href="javascript:void(0);" id="reports">Reports</a></li>
					  <?php if($_COOKIE["Admin"] == 'True'): ?><li><a href="javascript:void(0);" id="system">System Log</a></li><?php endif; ?>
					  <li><a href="javascript:void(0);" id="logout">Log Out</a></li>
					</ul>
				</section>
			</nav>
		</div>
	</div>

	<div class="row"> &nbsp; </div>

	<div class="row callout panel" id="formGenerator">

		<div class="row">
			<div class="large-12">
				<form data-abide="ajax" id="generator">
					<div class="large-4 columns">
						<label>Discount Type</label>
						<select name="discount_type" id="discount_type">
							<option value="by_percent">Percentage</option>
							<option value="cart_fixed">Dollar</option>
						</select>
						 <small class="error">Invalid entry</small>
					</div>
					<div class="large-4 columns">
						<label>Discount Amount</label>
						<input type="text" placeholder="Dollars or Percentage" name="discount_amt" id="discount_amt" required>
						 <small class="error">Please Enter Dollar or Percentage Amount</small>
						 <input type="hidden" id="discountAmountSave" name="discountAmountSave">
					</div>
					<div class="large-4 columns">
						<label>Customer Email</label>
						<input type="email" placeholder="customer@example.com" id="customer" required>
						 <small class="error">Please Enter Customer's Email</small>
						 <input type="hidden" id="customerEmailSave" name="customerEmailSave">
					</div>
					<input type="hidden" id="couponCodeSave" name="couponCodeSave">
				</form>
			</div>
		</div>
		
		<div class="row">
			<div class="large-12 columns">
				<a class="expand success button right" id="generate">Generate</a>
			</div>
		</div>

	</div>

	<div class="row callout" id="coupon_code">
		
		<div class="row" id="options">
			<div class="large-4 columns">
				<a class="expand secondary button right" id="emailPDF">Email PDF</a>
			</div>

			<div class="large-4 columns">
				<a class="expand secondary button right" id="savePDF">Download PDF</a>
			</div>

			<div class="large-4 columns">
				<a class="expand alert button right" id="restart">Start Over</a>
			</div>
		</div>

		<div class="row">
			<div class="large-12 columns">
				<div class="couponWrapper">

					<div class="couponContainer">
						<div class="couponCode">
							<span> </span>
						</div>
						
						<div class="couponOffer">
							<span class="couponAmount"></span> Digital Gift Card
						</div>
					</div>
					
					<div class="couponNote">
						To redeem this free <span class="couponAmount"></span> Digital Gift Card, go to <a href="http://www.guardiantechnologies.com/">GuardianTechnologies.com</a> <br/> and enter the promo code (above) in your shopping cart. 
					</div>

				</div>
			</div>
		</div>
	</div>

	<div id="emailConfirmed" class="reveal-modal" data-reveal>
		<h2>Customer Emailed.</h2>
		<p><strong></strong> has received an email from <i>Guardian Technologies Support</i> with an attached PDF Gift Card. Please remind them to check their spam/junk folders if they have not received it.</p>
		<a class="close-reveal-modal">&#215;</a>
	</div>

	<div id="downloadConfirmed" class="reveal-modal" data-reveal>
		<h2>Download Ready.</h2>

		<div class="row">
			<div class="large-12 columns">
				<p>Your Gift-Card is ready for download.</p>
			</div>
		</div>

		<div class="row">
			<div class="large-12 columns">
				<a href="" target="_blank" class="button large">Save PDF</a>
			</div>
		</div>

		<a class="close-reveal-modal">&#215;</a>

	</div>


	
	<?php elseif($_COOKIE["Generator"] != 'Approved'): header("Location: /gift-card/login/");?>
	
	<?php endif; ?>

<?php include '../html/footer.php' ; ?> 
