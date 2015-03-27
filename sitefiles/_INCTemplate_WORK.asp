<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>Guardian</title>
	<link media="all" rel="stylesheet" type="text/css" href="css/all.css" />
	<script type="text/javascript" src="js/mootools.js"></script>
	<script type="text/javascript" src="js/mootools.slideGallery.js"></script>
	<script type="text/javascript" src="js/cufon-yui.js"></script>
	<script type="text/javascript" src="js/fonts.js"></script>
	<script type="text/javascript" src="js/main.js"></script>
	<script type="text/javascript" src="js/items-position.js"></script>
	<!--[if lt IE 8]>
		<link rel="stylesheet" type="text/css" href="css/ie.css" />
		<script type="text/javascript" src="js/png-fix.js"></script>
		<script type="text/javascript" src="js/ie-hover.js"></script>
	<![endif]-->
</head>
	<body>
		<div id="wrapper">
			<div class="wrapper-box">
				<div id="section2">
					<div id="container">
						<div class="container-top">
							<div class="container-colored">
								<div class="holder">
									<div class="frame">
                                        <%= getContent(2) %>
									</div>
								</div>
							</div>
						</div>
						<div class="container-center">
							<div class="holder">
								<div class="sitemap">
									<strong>Site Map</strong>
									<div class="sitemap-holder">
										<ul>
											<li><a href="<%=urlNonSSL%>">home</a></li>
											<li><a href="<%=urlNonSSL%>All-Departments-Products.html">shop all products</a></li>
											<li><a href="<%=urlNonSSL%>AboutUs.html">about</a></li>
											<li><a href="<%=urlNonSSL%>news.html">latest news</a></li>
											<li><a href="<%=urlNonSSL%>healthy-living.html">healthy living</a></li>
										</ul>
										<ul>
											<li><a href="<%=urlNonSSL%>warrantyregistration.html">warranty registration</a></li>
											<li><a href="<%=urlNonSSL%>ContactUs.html">contact</a></li>
											<li><a href="<%=urlNonSSL%>PrivacyPolicy.html">privacy policy</a></li>
											<li><a href="<%=urlNonSSL%>returns.html">return policy</a></li>
											<li><a href="<%=urlNonSSL%>TermsandCond.html">terms of use</a></li>
										</ul>
									</div>
									<ul class="container-socials">
										<li><a href="#" class="rss"></a></li>
										<li><a href="#" class="twitter"></a></li>
										<li><a href="http://www.facebook.com/guardiantechnologies" target="_blank"" class="facebook"></a></li>
									</ul>
								</div>
								<div class="container-info">
                                    <%= getcontent(5) %>
								</div>
								<div class="cards-box">
									<a href="#" class="authorize"></a>
									<span class="cards"></span>
								</div>
							</div>
						</div>
						<div class="container-bottom">
							<ul>
								<li>eCommerce Website Design &amp; Development by <a href="http://www.outerboxdesign.com/ecommerce.asp"  target="_blank">OuterBox Solutions</a> - Copyright Guardian Technologies 2005-2011 </li>
								<li><a href="<%=urlNonSSL%>sitemap.html">Site Map</a></li>
							</ul>
						</div>
					</div>
				</div>
				<div id="section1">
					<div id="header">
						<div class="header-holder">
							<strong class="logo"><a href="<%=urlNonSSL%>"><img class="png" src="images/logo.png" alt="Air Purifiers and Air Sanitizers by Guardian Technologies" width="377" height="101" /></a></strong>
							<div class="header-box">
								<div class="shopping-cart">
									<div class="holder">
										<dl>
											<dt>shopping cart: </dt>
											<dd> <%=cartQty(idOrder)%>  items</dd>
										</dl>
										<ul>
											<li><a href="<%=urlNonSSL%>10_Logon.asp?action=logon">My Account </a></li>
											<li><a href="<%=urlNonSSL%>prodList.asp?favorites=Y">Wishlist</a></li>
											<li><a href="<%=urlNonSSL%>cart.as">Checkout</a></li>
										</ul>
									</div>
								</div>
								<div class="social-networks">
									<ul>
										<li><a class="twitter" href="#">twitter</a></li>
										<li><a class="facebook" href="#">facebook</a></li>
										<li><strong><span>call us:</span> 866.603.5900</strong></li>
									</ul>
								</div>
								<form action="<%=urlNonSSL%>prodList.asp" class="search-form">
									<fieldset>
										<a href="<%=urlNonSSL%>prodSearch.asp">Advanced Search</a>
										<div class="row">
											<div class="text"><input name="strSearch" type="text" value="Search Guardian Technologies" /></div>
											<input class="submit" type="submit" value="Go" />
										</div>
									</fieldset>
								</form>
							</div>
						</div>
						<ul id="nav">
							<li class="products">
								<a href="<%=urlNonSSL%>All-Departments-Products.html">products</a>
								<ul>
									<li><a href="<%=urlNonSSL%>UVC-Sanitizers-Products.html">UV-C Sanitizers</a></li>
									<li><a href="<%=urlNonSSL%>Air-Purifiers-Products.html">Air Purifiers</a></li>
									<li><a href="<%=urlNonSSL%>Heat-Sanitizers-Products.html">Heat Sanitizers</a></li>
									<li><a href="<%=urlNonSSL%>Humidifiers-Products.html">Humidifiers</a></li>
									<li><a href="<%=urlNonSSL%>Floor-Care-Products.html">Floor Care</a></li>
									<li><a href="<%=urlNonSSL%>Clearance-Products.html">Clearance</a></li>
								</ul>
							</li>
							<li class="accessories"><a href="<%=urlNonSSL%>Accessories-Products.html">accessories</a></li>
							<li class="education"><a href="<%=urlNonSSL%>uvc-technology.html">air education</a></li>
							<li class="customer"><a href="<%=urlNonSSL%>customer-care-extrapages.html">customer care</a></li>
						</ul>
					</div>
					<div id="main">
				<%
			  cartMain()
				%>
					</div>
<% if inStr(request.servervariables("URL"),"default")>0 then %>
					<div class="slider">
						<div class="slider-holder">
							<strong class="slider-title">Featured Products </strong>
							<div id="gallery" class="slides-gallery">
								<div class="slides-holder">
									<a class="prev" href="#"></a>
									<div class="slide-mask">
										<ul>
											<li>
												<a href="#"><img src="images/img1-slider.jpg" alt="Pureguardian H1500 55-Hour Ultrasonic Humidifier" width="190" height="152" /></a>
												<strong><a href="#">Pureguardian H1500 55-Hour Ultrasonic Humidifier</a></strong>
												<dl>
													<dt>List Price:</dt>
													<dd>$149.99</dd>
													<dt><span>Our Price:</span></dt>
													<dd><span>$129.99</span></dd>
												</dl>
												<a class="buy" href="#">BUY NOW!</a>
											</li>
											<li>
												<a href="#"><img src="images/img2-slider.jpg" alt="Pureguardian H1500 55-Hour Ultrasonic Humidifier" width="190" height="152" /></a>
												<strong><a href="#">Pureguardian H1500 55-Hour Ultrasonic Humidifier</a></strong>
												<dl>
													<dt>List Price:</dt>
													<dd>$149.99</dd>
													<dt><span>Our Price:</span></dt>
													<dd><span>$129.99</span></dd>
												</dl>
												<a class="buy" href="#">BUY NOW!</a>
											</li>
											<li>
												<a href="#"><img src="images/img3-slider.jpg" alt="Pureguardian H1500 55-Hour Ultrasonic Humidifier" width="190" height="152" /></a>
												<strong><a href="#">Pureguardian H1500 55-Hour Ultrasonic Humidifier</a></strong>
												<dl>
													<dt>List Price:</dt>
													<dd>$149.99</dd>
													<dt><span>Our Price:</span></dt>
													<dd><span>$129.99</span></dd>
												</dl>
												<a class="buy" href="#">BUY NOW!</a>
											</li>
											<li>
												<a href="#"><img src="images/img3-slider.jpg" alt="Pureguardian H1500 55-Hour Ultrasonic Humidifier" width="190" height="152" /></a>
												<strong><a href="#">Pureguardian H1500 55-Hour Ultrasonic Humidifier</a></strong>
												<dl>
													<dt>List Price:</dt>
													<dd>$149.99</dd>
													<dt><span>Our Price:</span></dt>
													<dd><span>$129.99</span></dd>
												</dl>
												<a class="buy" href="#">BUY NOW!</a>
											</li>
										</ul>
									</div>
									<a class="next" href="#"></a>
								</div>
							</div>
						</div>
					</div>
<% end if %>
				</div>
			</div>
		</div>
	</body>
</html>
