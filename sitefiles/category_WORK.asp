						<div id="twocolumns">
							<div id="sidebar">
								<ul class="accordion">
<%
mySQL = "select categorydesc,pagename,idCategory from categories order by sortorder"
set rsTemp = openRSopen(mySQL,0,adOpenStatic,adLockReadOnly,adCmdText,pMaxItemsPerPage)
if not rsTemp.eof then
    rsTemp.moveFirst
    while not rsTemp.eof
        mySQL="select count(*) from categories_products where idCategory = "&rstemp("idcategory")
        set rstemp2=openRSexecute(mySQL)
%>
									<li>
										<a href="#" class="opener selected"><%= rstemp("CategoryDesc") %> <span>(<%= rstemp2(0) %>)</span></a>
										<div class="slide">
											<ul>
<%
            call closeRS(rstemp2)
            mySQL = "select pagename,description from products where idproduct in (select idproduct from categories_products where idCategory="&rstemp("idcategory")&") and active = -1 ORDER BY SortOrder"
	        set rsTemp2 = openRSopen(mySQL,0,adOpenStatic,adLockReadOnly,adCmdText,pMaxItemsPerPage)
            if not rsTemp2.eof then
                rsTemp2.movefirst
                while not rsTemp2.eof
%>
												<li><a href="#">GG1000 Pluggable UV-C Air Sanitizer</a></li>
<%
                    rsTemp2.movenext
                wend
            end if
%>
											</ul>
										</div>
<%
        rsTemp.moveNext
    wend
end if
call closeRS(rsTemp)
%>
								</ul>
							</div>
							<div id="content">
								<div class="entry">
									<strong class="main-title">Ultrasonic Humidifiers</strong>
<%
		    'Display Category HTML (Long)
		    if len(categoryHTMLLong) > 0 then
%>
<p><%= categoryHTMLLong %></p>
<% end if %>
								</div>
								<form name="selectPageTopForm" action="#" class="category-form">
									<fieldset>
										<label for="sort">sort by:</label>
										<select id="sort">
											<option>price high to low</option>
											<option>price high to low</option>
										</select>
										<label for="items">items per page:</label>
										<select id="items">
											<option>price high to low</option>
											<option>price high to low</option>
										</select>
                <%
					    'Show Page Navigation if more than one page
					    if totalPages > 1 then
						    if SetNumericValue (idCategory, 0, "I")<>0 then
							    call pageNavigation("selectPageTop")
						    else
							    call pageNavigation2("selectPageTop")	
						    end if 
					    else
						    Response.Write "&nbsp;"
					    end if
                %>
									</fieldset>
								</form>
								<ul class="products-list" id="products-list">
<%        
		    'Show list of Products
		    do while not rstemp.eof and count < rstemp.pageSize
    	
			    IDProduct		= rstemp("idProduct")
			    SKU             = trim(rstemp("SKU")&"")
			    if session("language") = "en" then
				    Description		= trim(rstemp("description")&"")
				    DescriptionLong	= trim(rstemp("descriptionLong")&"")
			    else
				    Description		= trim(langProduct(idProduct,"description",rstemp("description"))&"")
				    DescriptionLong	= trim(langProduct(idProduct,"descriptionLong",rstemp("descriptionLong"))&"")
			    end if			
			    listPrice		= rstemp("listPrice")   
			    Price			= rstemp("price")   
			    ImageURL	    = trim(rstemp("ImageUrl")&"")
			    SmallImageURL	= trim(rstemp("SmallImageUrl")&"")
			    Stock      		= rstemp("Stock")
			    fileName		= trim(rstemp("fileName")&"")
			    noShipCharge	= trim(rstemp("noShipCharge")&"")
			    handlingFee		= rstemp("handlingFee")
			    Pagename    = rstemp("Pagename")
    ' Custom user exit to change pricing etc.
			    ' Currency Support
			    listPrice = Exchange(listPrice)
			    price = Exchange(price)
			    handlingFee = Exchange(handlingFee)
   			    sendPage = (count+1)*curPage
				    'Increment sub counter
				    subCount = subCount + 1
 if subcount=4 then
        subcount=0
%>
								</ul>
								<ul class="products-list">
<%
    end if
%>
									<li>
										<div class="popup-holder">
											<a href="#"><img src="images/img5.jpg" alt="pureguardian H1000 Table Top Humidifier" width="110" height="89" /></a>
											<strong class="item-title">pureguardian H1000 Table Top Humidifier</strong>
											<dl>
												<dt><span>List Price:</span></dt>
												<dd><span>$229.99</span></dd>
												<dt>Our Price:</dt>
												<dd><strong>$199.99</strong></dd>
											</dl>
											<a class="buy open" href="#">buy now</a>
											<a class="view" href="#">quick view</a>
											<div class="popup">
												<div class="t"></div>
												<div class="c">
													<a class="close" href="#">close [x]</a>
													<div class="popup-product">
														<div class="popup-photo">
															<a href="#"><img src="images/img6.jpg" alt="pureguardian H1000 Table Top Humidifier" width="157" height="181" /></a>
															<a href="#">Click for more photos</a>
															<ul class="star-reiting">
																<li><a href="#"></a></li>
																<li><a href="#"></a></li>
																<li><a href="#"></a></li>
																<li><a href="#"></a></li>
																<li><a class="active" href="#"></a></li>
															</ul>
														</div>
														<div class="popup-title">
															<strong>pureguardian H1000 Table Top Humidifier</strong>
															<span>$79.99</span>
															<span class="price">$59.99</span>
															<form action="#" class="popup-form">
																<fieldset>
																	<div class="row">
																		<div class="text"><input type="text" value="" /></div>
																		<label for="quantity">Quantity:</label>
																	</div>
																	<input type="submit" class="submit" value="buy now" />
																	<a href="#">instruction manual</a>
																</fieldset>
															</form>
															<div class="option">
																<ul>
																	<li><a href="#">print</a></li>
																	<li><a href="#">email</a></li>
																	<li><a href="#">share</a></li>
																</ul>
															</div>
														</div>
													</div>
													<div class="tabs-area">
														<ul class="tabset">
															<li><a href="#tab-10" class="tab active"><span><em>features <br />&amp; benefits</em></span></a></li>
															<li><a href="#tab-11" class="tab"><span><em>product <br />specifications</em></span></a></li>
															<li><a href="#tab-12" class="tab"><span><em>reviews</em></span></a></li>
															<li><a href="#tab-13" class="tab"><span><em>accessories</em></span></a></li>
														</ul>
														<div class="tab-content" id="tab-10">
															<div class="holder">
																<div class="frame vscrollable">
																	<div class="tab-column">
																		<strong>Mold &amp; Mildew Resistant Tank</strong>
																		<p>Silver Clean&trade; Technology: The water tank has been treated with a fungistatic agent to protect the surface of the tank from fungal and mold growth.</p>
																		<strong>Cool Mist Humidification</strong>
																		<p>Emits a cool mist into the air.</p>
																		<strong>No Added Costs</strong>
																		<p>No evaporating pads, wicks or filters to clean or replace</p>
																		<strong>Mold &amp; Mildew Resistant Tank</strong>
																		<p>Silver Clean&trade; Technology: The water tank has been treated with a fungistatic agent to protect the surface of the tank from fungal and mold growth.</p>
																		<strong>Cool Mist Humidification</strong>
																		<p>Emits a cool mist into the air.</p>
																		<strong>No Added Costs</strong>
																		<p>No evaporating pads, wicks or filters to clean or replace</p>
																	</div>
																</div>
															</div>
														</div>
														<div class="tab-content" id="tab-11">
															<div class="holder">
																<div class="frame vscrollable">
																	<div class="tab-column">
																		<strong>No Added Costs</strong>
																		<p>No evaporating pads, wicks or filters to clean or replace</p>
																		<strong>Mold &amp; Mildew Resistant Tank</strong>
																		<p>Silver Clean&trade; Technology: The water tank has been treated with a fungistatic agent to protect the surface of the tank from fungal and mold growth.</p>
																		<strong>Cool Mist Humidification</strong>
																		<p>Emits a cool mist into the air.</p>
																		<strong>No Added Costs</strong>
																		<p>No evaporating pads, wicks or filters to clean or replace</p>
																		<strong>Mold &amp; Mildew Resistant Tank</strong>
																		<p>Silver Clean&trade; Technology: The water tank has been treated with a fungistatic agent to protect the surface of the tank from fungal and mold growth.</p>
																	</div>
																</div>
															</div>
														</div>
														<div class="tab-content" id="tab-12">
															<div class="holder">
																<div class="frame vscrollable">
																	<div class="tab-column">
																		<strong>No Added Costs</strong>
																		<p>No evaporating pads, wicks or filters to clean or replace</p>
																		<strong>Mold &amp; Mildew Resistant Tank</strong>
																		<p>Silver Clean&trade; Technology: The water tank has been treated with a fungistatic agent to protect the surface of the tank from fungal and mold growth.</p>
																		<strong>Cool Mist Humidification</strong>
																		<p>Emits a cool mist into the air.</p>
																		<strong>No Added Costs</strong>
																		<p>No evaporating pads, wicks or filters to clean or replace</p>
																		<strong>Mold &amp; Mildew Resistant Tank</strong>
																		<p>Silver Clean&trade; Technology: The water tank has been treated with a fungistatic agent to protect the surface of the tank from fungal and mold growth.</p>
																	</div>
																</div>
															</div>
														</div>
														<div class="tab-content" id="tab-13">
															<div class="holder">
																<div class="frame vscrollable">
																	<div class="tab-column">
																		<strong>Cool Mist Humidification</strong>
																		<p>Emits a cool mist into the air.</p>
																		<strong>No Added Costs</strong>
																		<p>No evaporating pads, wicks or filters to clean or replace</p>
																		<strong>Mold &amp; Mildew Resistant Tank</strong>
																		<p>Silver Clean&trade; Technology: The water tank has been treated with a fungistatic agent to protect the surface of the tank from fungal and mold growth.</p>
																		<strong>Mold &amp; Mildew Resistant Tank</strong>
																		<p>Silver Clean&trade; Technology: The water tank has been treated with a fungistatic agent to protect the surface of the tank from fungal and mold growth.</p>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div class="b"></div>
											</div>
										</div>
									</li>
            <%					
				    count = count + 1
				    rstemp.moveNext
					    loop
					end if
				end if
		loop
        %>
								</ul>
								<form name="selectPageBotForm action="#" class="category-form bottom">
									<fieldset>
										<label for="sort2">sort by:</label>
										<select id="sort2">
											<option>price high to low</option>
											<option>price high to low</option>
										</select>
										<label for="items2">items per page:</label>
										<select id="items2">
											<option>price high to low</option>
											<option>price high to low</option>
										</select>
                <%
					    'Show Page Navigation if more than one page
					    if totalPages > 1 then
                            response.Write "<li>Go to Page</li>"
						    if SetNumericValue (idCategory, 0, "I")<>0 then
							    call pageNavigation("selectPageBot")
						    else
							    call pageNavigation2("selectPageBot")	
						    end if 
					    else
						    Response.Write "&nbsp;"
					    end if
                %>
									</fieldset>
								</form>
							</div>
						</div>
