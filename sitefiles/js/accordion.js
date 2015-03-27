window.addEvent('domready', function(){
	var accordion_block =$$('.accordion');
	if(accordion_block.length)
	{
		accordion_block.each(function(el , i){
			var accordion = new Accordion('a.opener', 'div.slide', {
				alwaysHide: true,
				opacity: false,
				show: false,
				onActive: function(toggler, element){
					if(toggler.className.indexOf("selected ") == -1)
						toggler.className += ' selected ';
				},
				onBackground: function(toggler, element){
					toggler.className = toggler.className.replace('selected','');
				}
			}, el);
		});
	}
});