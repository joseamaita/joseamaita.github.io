$(document).ready(function() {
	// console.log('Message here !!!');
	// alert('Message here !!!');
	$('table').addClass("table table-bordered table-hover");
	
	$('a.read-more-less').click(function(event) {
		event.preventDefault();
		var $moreContent = $(this).parent().prev();
		var offset = $moreContent.offset();
		var $link = $(this);
		$moreContent.slideToggle('slow');
		if ($link.text() == 'read more »') {
			$link.text('« read less');
		}
		else {
			$link.text('read more »');
			$('html,body').animate({scrollTop: (offset.top + 100)}, 'slow');
		}
	});
});
