jQuery(document).ready(function() {
	jQuery('a#logmein').click(function() {

		jQuery(".ajax-loader").show();

		jQuery.ajax({
			type: "POST",
			url: "/gift-card/login/action/",
			data: {
				username: jQuery("#username").val(),
				password: jQuery("#password").val()
			},
			success: function(data)
			{
				jQuery(".ajax-loader").hide();
				if (data === 'Correct') {
					window.location.replace('/gift-card/generator/');
				}
				else {
					alert("Failed");
				}
			}
		});
	});

	jQuery('form#login').keydown(function(ev) {
		
		if (ev.which == 13) {
			jQuery(".ajax-loader").show();

			jQuery.ajax({
				type: "POST",
				url: "/gift-card/login/action/",
				data: {
					username: jQuery("#username").val(),
					password: jQuery("#password").val()
				},
				success: function(data)
				{
					jQuery(".ajax-loader").hide();
					if (data === 'Correct') {
						window.location.replace('/gift-card/generator/');
					}
					else {
						alert("Failed");
					}
				}
			});
		}
	});


	jQuery("div.couponWrapper").hide();
	jQuery("div#options").hide();


	jQuery('a#generate').click(function(e) {
		
		jQuery(".ajax-loader").show();
		jQuery("div.couponWrapper").hide();
		jQuery("div#options").hide();

		if(jQuery("#discount_amt").val() != '' && jQuery("#customer").val() != '') {
			jQuery.ajax({
				type: "POST",
				url: "/coupon_generator.php",
				data: {
					discount_amt: jQuery("#discount_amt").val(),
					customer: jQuery("#customer").val(),
					discount_type: jQuery("#discount_type").val()
				},
				success: function(data)
				{
					jQuery(".ajax-loader").hide();

					if (data === 'Failed') {
						alert("Failed");
					}
					else {
						jQuery("#coupon_code div.couponCode span").text(data);
						if(jQuery("#discount_type").val() == "by_percent") {
							var couponAmount = jQuery("#discount_amt").val()+"% Off";
						}
						else if (jQuery("#discount_type").val() == "cart_fixed")
						{
							var couponAmount = "$"+jQuery("#discount_amt").val();
						}
						jQuery("span.couponAmount").text(couponAmount);
						jQuery("div.couponWrapper").show();
						jQuery("div#options").show();
						jQuery('input#couponCodeSave').val(data);
						jQuery('input#discountAmountSave').val(couponAmount);
						jQuery('input#customerEmailSave').val(jQuery("#customer").val());
						jQuery("div#formGenerator").hide();
					}
				}
			});
		}
		else {

			jQuery(".ajax-loader").hide();
			Foundation.libs.abide.parse_patterns(jQuery("#discount_amt"));
			Foundation.libs.abide.parse_patterns(jQuery("#customer"));
		}
	});

	jQuery('form#generator').keydown(function(enter) {
		
		if (enter.which == 13) {
			jQuery(".ajax-loader").show();
			jQuery("div.couponWrapper").hide();
			jQuery("div#options").hide();

			if(jQuery("#discount_amt").val() != '' && jQuery("#customer").val() != '') {
				jQuery.ajax({
					type: "POST",
					url: "/coupon_generator.php",
					data: {
						discount_amt: jQuery("#discount_amt").val(),
						customer: jQuery("#customer").val(),
						discount_type: jQuery("#discount_type").val()
					},
					success: function(data)
					{
						jQuery(".ajax-loader").hide();

						if (data === 'Failed') {
							alert("Failed");
						}
						else {
							jQuery("#coupon_code div.couponCode span").text(data);
							if(jQuery("#discount_type").val() == "by_percent") {
								var couponAmount = jQuery("#discount_amt").val()+"% Off";
							}
							else if (jQuery("#discount_type").val() == "cart_fixed")
							{
								var couponAmount = "$"+jQuery("#discount_amt").val();
							}
							jQuery("span.couponAmount").text(couponAmount);
							jQuery("div.couponWrapper").show();
							jQuery("div#options").show();
							jQuery('input#couponCodeSave').val(data);
							jQuery('input#discountAmountSave').val(couponAmount);
							jQuery('input#customerEmailSave').val(jQuery("#customer").val());
							jQuery("div#formGenerator").hide();
						}
					}
				});
			}
			else {

				jQuery(".ajax-loader").hide();
				Foundation.libs.abide.parse_patterns(jQuery("#discount_amt"));
				Foundation.libs.abide.parse_patterns(jQuery("#customer"));
			}
		}
	});

	jQuery('a#savePDF').click(function(e) {
		
		jQuery(".ajax-loader").show();

		jQuery.ajax({
			type: "POST",
			url: "/gift-card/generator/pdf/save/",
			data: {
				discount_amt: jQuery('input#discountAmountSave').val(),
				customer: jQuery('input#customerEmailSave').val(),
				coupon_code: jQuery('input#couponCodeSave').val()
			},
			success: function(data)
			{
				jQuery(".ajax-loader").hide();
				PDF = jQuery('input#couponCodeSave').val()+".pdf";
				jQuery("#downloadConfirmed a").attr('href', '/gift-card/generator/pdf/save/generated/'+PDF);
				jQuery("#downloadConfirmed").foundation('reveal', 'open');
			}
		});
	});

	jQuery('a#emailPDF').click(function(e) {
		
		jQuery(".ajax-loader").show();
		jQuery.ajax({
			type: "POST",
			url: "/gift-card/generator/pdf/email/",
			data: {
				discount_amt: jQuery('input#discountAmountSave').val(),
				customer: jQuery('input#customerEmailSave').val(),
				coupon_code: jQuery('input#couponCodeSave').val()
			},
			success: function()
			{
				jQuery(".ajax-loader").hide();
				jQuery("#emailConfirmed").foundation('reveal', 'open');
				jQuery("#emailConfirmed strong").text(jQuery('input#customerEmailSave').val());
			}
		});
	});

	jQuery('a#restart').click(function(e) {
		jQuery("div.couponWrapper").hide();
		jQuery("div#options").hide();
		jQuery("div#formGenerator").show();
	});

	jQuery('a#logout').click(function(e) {
		window.location.replace('/gift-card/logout/');
	});

	jQuery('a#generator').click(function(e) {
		window.location.replace('/gift-card/generator/');
	});

	jQuery('a#reports').click(function(e) {
		window.location.replace('/gift-card/reports/');
	});

	jQuery('a#system').click(function(e) {
		window.location.replace('/gift-card/reports/admin/');
	});

});