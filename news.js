$(document).ready(function() {
	$(".titre").click(function() {
		var i = $(this).parent().parent();
		var j = $(this).parent().height();
		if ($(i).css("height") == "80px") {
		$(i).animate({height:j+"px"}, 500);
		} else {
			$(i).animate({height:"80px"}, 500);
		}
	});
});