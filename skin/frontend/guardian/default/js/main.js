jQuery( document ).ready(function() {
	jQuery(function() {
		jQuery('select#filterselector').change(function(){
			var href = jQuery('input#' + jQuery(this).val()).val();
				jQuery('button[name=' + jQuery(this).val().slice(0,-3) + ']').attr("onclick", "parent.location='"+href+"'");
		});
	});
});

jQuery(function() {
	jQuery("div.purifiers").hide();
	jQuery('.img a').click(function() {
		var model = this.id;
		jQuery("div.purifiers").delay(200).fadeOut();
		jQuery("div#" + model).delay(200).fadeIn();
		jQuery('html, body').animate({
			scrollTop: jQuery(".filterBy").offset().top-50
		}, 1000);
		if (!jQuery("a#" + model).hasClass("active"))
		{	
			jQuery("a#" + model).addClass('active');
		}
		jQuery("a").not(this).removeClass('active');
	}); 
});

jQuery(function() {
	jQuery('button').click(function() {
		if(jQuery(this).attr("onclick") == '') {
			var name = jQuery(this).attr("name");
			var selected = jQuery('select[name='+name+']');
			if(!jQuery(selected).hasClass("failed")) {
				jQuery(selected).addClass("failed");
				jQuery(selected).after("<span style='color:red; text-align:left;'>Select a Frequency.</span>");
			}
		}
	});

	jQuery(".addthis_toolbox").detach().appendTo('.add-to-box')
});

