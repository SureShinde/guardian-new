<?php include '../html/header.php' ; ?> 

	<?php if($_COOKIE["Generator"] != 'Approved'): ?>

    <div class="row">
		<div class="contain-to-grid">
			<nav class="top-bar" data-topbar role="navigation">
				<ul class="title-area">
					<li class="name">
					  <h1><a href="javascript:void(0);">Login </a></h1>
					</li>
				</ul>
			</nav>
		</div>
	</div>
	
	<div class="row"> &nbsp; </div>

	<div class="row callout panel">
		<form id="login" method="post">
			<div class="large-6 columns">
				<label>Username</label>
				<input type="text" placeholder="@guardiantechnologies.com email" id="username">
			</div>
			<div class="large-6 columns">
				<label>Password</label>
				<input type="password" placeholder="password" id="password">
			</div>
			<div class="large-12 columns">
				<a class="large success button right" id="logmein">Login</a>
			</div>
		</form>
	</div>
	
	<?php else: header("Location: /gift-card/generator/"); ?>
		
	<?php endif; ?>
<?php include '../html/footer.php' ; ?> 