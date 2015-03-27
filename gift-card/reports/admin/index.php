<?php

include '../../html/header.php';

umask(0);
require '../../../app/Mage.php';
Mage::app('default')->setCurrentStore('1');

$discount_amt = $_POST['discount_amt'];
$discount_type = $_POST['discount_type'];
$customer = $_POST['customer'];
$rep = $_COOKIE['GT'];

$w = Mage::getSingleton('core/resource')->getConnection('core_read');
$result = 'SELECT * FROM coupon_generator_reports';

$rows = $w->fetchAll($result);
?>
<?php if($_COOKIE["Generator"] == 'Approved' && $_COOKIE["Admin"] == 'True'): ?>
	<div class="row">
		<div class="contain-to-grid">
			<nav class="top-bar" data-topbar role="navigation">
				<ul class="title-area">
					<li class="name">
					  <h1><a href="javascript:void(0);"> Gift Card Full System Log</a></h1>
					</li>
				</ul>
				<section class="top-bar-section">
					<ul class="right">
					  <li><a href="javascript:void(0);" id="generator">Generator</a></li>
					  <li><a href="javascript:void(0);" id="reports">Reports</a></li>
					  <?php if($_COOKIE["Admin"] == 'True'): ?><li class="active"><a href="javascript:void(0);" id="system">System Log</a></li><?php endif; ?>
					  <li><a href="javascript:void(0);" id="logout">Log Out</a></li>
					</ul>
				</section>
			</nav>
		</div>
	</div>

	<div class="row"> &nbsp; </div>
	
	<div class="row">
		<div class="large12-12 columns">

			<table role="grid" width="100%">
				<thead>
					<tr>
						<th>Customer</th>
						<th>Coupon Code</th>
						<th>Used</th>
						<th>Representative</th>
					</tr>
				</thead>
				<tbody>
			

<?php
foreach($rows as $row) {

	$sql = 'SELECT * from salesrule_coupon where code=:code';
	$code = array(
				'code' => $row['code']
		);
	$uses = $w->fetchAll($sql, $code);
	$used = $uses[0]['times_used'];
	if($used == 0) {
		$used = "No";
	}else{
		$used = "Yes";
	}
?>

					<tr>
						<td> <?php echo $row['customer'] ?> </td>
						<td> <?php echo $row['code'] ?> </td>
						<td> <?php echo $used; ?> </td>
						<td> <?php echo $row['rep'] ?> </td>
					</tr>

<?php
}
?>

			  </tbody>
			</table>
		</div>
	</div>

<?php elseif($_COOKIE["Generator"] != 'Approved'): header("Location: /gift-card/login/");?>

<?php elseif($_COOKIE["Admin"] != 'True'): header("Location: /gift-card/reports/");?>
	
<?php endif; ?>

<?php
include '../../html/footer.php';
?>