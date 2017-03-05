$( document ).ready(function() {
	console.log("Work")
	$('.close').on('click', function() {
		$(this).closest('.message').fadeOut();
	});
});