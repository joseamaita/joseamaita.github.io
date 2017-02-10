$(document).ready(function() {
	// console.log('Message here !!!');
	// alert('Message here !!!');
	$('table').addClass("table table-bordered table-hover");
	
	var $more-content = $('.more-content').first();
	$('a.more').click(function(event) {
		event.preventDefault();
		$more-content.slideToggle('slow');
		var $link = $(this);
		if ($link.text() == 'read more') {
			$link.text('read less');
		}
		else {
			$link.text('read more');
		}
	});
});
