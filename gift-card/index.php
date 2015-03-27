<?php include 'html/header.php' ; ?> 

	<?php if($_COOKIE["Generator"] != 'Approved'): header("Location: /gift-card/login/");?>
	<?php elseif($_COOKIE["Generator"] == 'Approved'): header("Location: /gift-card/generator/"); ?>
	<?php endif; ?>
<?php include 'html/footer.php' ; ?> 