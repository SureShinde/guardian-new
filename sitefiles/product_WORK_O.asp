						<div class="product-block">
							<div class="product-info">
								<div class="product-title">
									<h1><%= Description %></h1>
									<div class="title-price">
										<span><%= money(listprice) %></span>
										<strong><%= money(price) %></strong>
									</div>
								</div>
								<div class="panel">
									<ul class="star-reiting">
										<li><a href="#"></a></li>
										<li><a href="#"></a></li>
										<li><a href="#"></a></li>
										<li><a href="#"></a></li>
										<li><a class="active" href="#"></a></li>
									</ul>
									<ul class="links">
										<li><a href="#">read reviews</a> (12 reviews)</li>
										<li><a href="#">write reviews</a></li>
									</ul>
								</div>
								<div class="info-section">
                                    <p><%= DescriptionLong %></p>
                                    
								</div>
								<form class="buy-form" action="#">
									<fieldset>
										<label for="quantity">Quantity:</label>
										<div class="text"><input type="text" value="" /></div>
										<input type="submit" class="submit" value="buy now" />
										<a href="#">instruction manual</a>
									</fieldset>
								</form>
							</div>
							<div class="product-photo">
            <%call getProdImage()%>
							</div>
						</div>
						<div class="tabs-area">
							<ul class="tabset">
								<li><a href="#tab-1" class="tab active"><span><em>features <br />&amp; benefits</em></span></a></li>
								<li><a href="#tab-2" class="tab"><span><em>product <br />specifications</em></span></a></li>
								<li><a href="#tab-3" class="tab"><span><em>how it <br />works</em></span></a></li>
								<li><a href="#tab-4" class="tab"><span><em>FAQs</em></span></a></li>
								<li><a href="#tab-5" class="tab"><span><em>waranty <br />regestration</em></span></a></li>
								<li><a href="#tab-6" class="tab"><span><em>accessories</em></span></a></li>
								<li><a href="#tab-7" class="tab"><span><em>reviews</em></span></a></li>
								<li><a href="#tab-8" class="tab"><span><em>links</em></span></a></li>
								<li><a href="#tab-9" class="tab"><span><em>store locator</em></span></a></li>
							</ul>
							<div class="tab-content" id="tab-1">
								<div class="holder">
									<div class="frame">
                                        <%= details %>
									</div>
								</div>
							</div>
							<div class="tab-content" id="tab-2">
								<div class="holder">
									<div class="frame">
										<div class="tab-column">
            <%= specs %>
										</div>
									</div>
								</div>
							</div>
							<div class="tab-content" id="tab-3">
								<div class="holder">
									<div class="frame">
										<div class="tab-column">
            <%= how %>
										</div>
									</div>
								</div>
							</div>
							<div class="tab-content" id="tab-4">
								<div class="holder">
									<div class="frame">
										<div class="tab-column">
            <%= faq %>
										</div>
									</div>
								</div>
							</div>
							<div class="tab-content" id="tab-5">
								<div class="holder">
<% call getWarrantyRegistration() %>
									<div class="frame">
                                    	<div class="tab-column">
                                    	<h3>Welcome to the Guardian Technologies® Product Registration.</h3>
                                        <p> Please take a few moments to fill out the form below to register your product with
            Guardian Technologies&reg;.</p> 
            							<form method="POST" action="SendWarranty.asp" id="registrationform" onsubmit="return Validator(this)"
language="JavaScript" name="FrontPage_Form1">
                                        
										<div class="warranty-row">
                                        	<div class="warranty-field-title">First Name</div> 
                                            <div class="warranty-field"><input type="text" size="30" /></div>
                                        </div>
                                        <div class="clear"></div>
                                        <div class="warranty-row">
                                        	<div class="warranty-field-title">Last Name</div> 
                                            <div class="warranty-field"><input type="text" size="30" /></div>
                                        </div>
                                        <div class="clear"></div>
                                        <div class="warranty-row">
                                        	<div class="warranty-field-title">Street Address</div> 
                                            <div class="warranty-field"><input type="text" size="30" /></div>
                                        </div>
                                        <div class="clear"></div>
                                        <div class="warranty-row">
                                        	<div class="warranty-field-title">Address 2</div> 
                                            <div class="warranty-field"><input type="text" size="30" /></div>
                                        </div>
                                        <div class="clear"></div>
                                        <div class="warranty-row">
                                        	<div class="warranty-field-title">City</div> 
                                            <div class="warranty-field"><input type="text" size="30" /></div>
                                        </div>
                                        <div class="clear"></div>
                                        <div class="warranty-row">
                                        	<div class="warranty-field-title">State/Province</div> 
                                            <div class="warranty-field"><select class="warranty-select"><option>Ohio</option></select></div>
                                        </div>
                                        <div class="clear"></div>
                                        <div class="warranty-row">
                                        	<div class="warranty-field-title">Zip Code 	</div> 
                                            <div class="warranty-field"><input type="text" size="30" /></div>
                                        </div>
                                        <div class="clear"></div>
                                        <div class="warranty-row">
                                        	<div class="warranty-field-title">Region of Country</div> 
                                            <div class="warranty-field">
                                            <select class="warranty-select">
                                            <option>West</option>
                                            <option>Mid-West</option>
                                            <option>Southwest</option>
                                            <option>Southeast</option>
                                            <option>Northwest</option>
                                            <option>Northweast</option>
                                            </select></div>
                                        </div>
                                        <div class="clear"></div>
                                        <div class="warranty-row">
                                        	<div class="warranty-field-title">E-mail Address	</div> 
                                            <div class="warranty-field"><input type="text" size="30" /></div>
                                        </div>
                                        <div class="clear"></div>
                                        <div class="warranty-row">
                                        	<div class="warranty-field-title">Phone Number (optional)	</div> 
                                            <div class="warranty-field"><input type="text" size="30" /></div>
                                        </div>
                                        <div class="clear"></div>
                                        <div class="warranty-row">
                                        	<div class="warranty-field-title">Gender</div> 
                                            <div class="warranty-field"><select class="warranty-select"><option>Male</option><option>Female</option></select></div>
                                        </div>
                                        <div class="clear"></div>
                                        <div class="warranty-row">
                                        	<div class="warranty-field-title">Age</div> 
                                            <div class="warranty-field">
                                            <select class="warranty-select">
                                            <option>under 25</option>
                                            <option>25-34</option>
                                            <option>35-49</option>
                                            <option>50-65</option>
                                            <option>65+</option>
                                            </select></div>
                                        </div>
                                        <div class="clear"></div>
                                        <div class="warranty-row">
                                        	<div class="warranty-field-title">Household Size </div> 
                                            <div class="warranty-field">
                                            <select class="warranty-select">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5+</option>
                                            </select></div>
                                        </div>
                                        <div class="clear"></div>
                                        <div class="warranty-row">
                                        	<div class="warranty-field-title">Household income </div> 
                                            <div class="warranty-field">
                                            <select class="warranty-select">
                                            <option>15k</option>
                                            <option>15-24, 999</option>
                                            <option>25-49, 999</option>
                                            <option>50-100K</option>
                                            <option>100K+</option>
                                            </select></div>
                                        </div>
                                        <div class="clear"></div>
                                        <div class="warranty-row">
                                        	<div class="warranty-field-title">Reason for Purchase</div> 
                                            <div class="warranty-field"><input type="text" size="30" /></div>
                                        </div>
                                        </div>
                                        <div class="tab-column">
                                        	<div class="warranty-row-top">
                                        		<div class="warranty-field-title">Model Number</div> 
                                            	<div class="warranty-field"><select class="warranty-select"><option>12345</option></select></div>
                                        	</div>
                                        	<div class="clear"></div>
                                        	<div class="warranty-row">
                                        		<div class="warranty-field-title">Date of Purchase 	 </div> 
                                            	<div class="warranty-field"><input type="text" size="30" /></div>
                                        	</div>
                                           <div class="clear"></div>
                                           <div class="warranty-row">
                                        		<div class="warranty-field-title">Purchase Price 	 	 </div> 
                                            	<div class="warranty-field"><input type="text" size="30" /></div>
                                        	</div>
                                           <div class="clear"></div>
                                           <div class="warranty-row">
                                        		<div class="warranty-field-title">Where Purchased 	 	 </div> 
                                            	<div class="warranty-field"><input type="text" size="30" /></div>
                                        	</div>
                                           <div class="clear"></div>
                                           <div class="warranty-row">
                                        		<div class="warranty-field-title">How would you like to be notified with
replacement part reminders? </div> 
                                            	<div class="warranty-field"><input type="radio" value="Email" name="ReplacementPartNotices">Email
            <input type="radio" value="Post" name="ReplacementPartNotices">Post
            <input type="radio" value="None" name="ReplacementPartNotices" checked>Don't send
            notices</div>
                                        	</div>
                                           <div class="clear"></div>
                                           <div class="warranty-row">
                                        		<div class="warranty-field-title">How would you like to receive updates about your product
and other Guardian Technologies® products? 	  </div> 
                                            	<div class="warranty-field"><input type="radio" value="Email" name="ReplacementPartNotices">Email
            <input type="radio" value="Post" name="ReplacementPartNotices">Post
            <input type="radio" value="None" name="ReplacementPartNotices" checked>Don't send
            notices</div>
                                        	</div>
                                           <div class="clear"></div>
                                           <br /><br />
                                           <div align="center">
                                           <input type="submit" value="Register Product Now !">
                                           <input type="reset" value="Reset">
                                           </div>
                                        </form>
									</div>
								</div>
							</div>
							<div class="tab-content" id="tab-6">
								<div class="holder">
									<div class="frame">
										<div class="tab-column">
            <% call getAccessories() %>
										</div>
									</div>
								</div>
							</div>
							<div class="tab-content" id="tab-7">
								<div class="holder">
									<div class="frame">
										<div class="tab-column">
            <%call getProdReview()%>
										</div>
									</div>
								</div>
							</div>
							<div class="tab-content" id="tab-8">
								<div class="holder">
									<div class="frame">
										<div class="tab-column">
            <%= links %>
										</div>
									</div>
								</div>
							</div>
							<div class="tab-content" id="tab-9">
								<div class="holder">
									<div class="frame">
										<div class="tab-column">
											<strong>Mold &amp; Mildew Resistant Tank</strong>
											<p>Silver Clean&trade; Technology: The water tank has been treated with a fungistatic agent to protect the surface of the tank from fungal and mold growth.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
