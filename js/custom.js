$(function() {
	var home = $('div.wrap');
	home.on('click', 'td[name = "btn-sub-menu"]',function( event ) {	
		var effect = "blind";
		var options = { percent: 50 };
		home.find('table[name = "sub-menu-xs"]').toggle(effect,options,500);
	});
});