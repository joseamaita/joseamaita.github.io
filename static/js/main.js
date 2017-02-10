$(document).ready(function() {
	// console.log('Message here !!!');
	// alert('Message here !!!');
	$('table').addClass("table table-bordered table-hover");
	
	$('a.read-more-less').click(function(event) {
		event.preventDefault();
		var $moreContent = $('a.read-more-less').parent().prev();
		$moreContent.slideToggle('slow');
		var $link = $(this);
		if ($link.text() == '(read more ...)') {
			$link.text('read less');
		}
		else {
			$link.text('(read more ...)');
		}
	});
});
