$(document).ready(function() {
	$(".titre").click(function() {
		var i = $(this).parent().parent();
		if ($(i).css("height") == "80px") {
		$(i).animate({height:"800px"}, 500);
		} else {
			$(i).animate({height:"80px"}, 500);
		}
	});
});