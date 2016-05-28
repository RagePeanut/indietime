$(document).ready(function taille() {
	$(".titre").click(function() {
		var test = true;
		var i = $(this).parent().parent();
		if ($(i).css("height") == "80px") {
				var j = $(this).parent().height();
				$(i).animate({height:j+"px"}, 500);
		} else {
			$(i).animate({height:"80px"}, 500);
		};
	});
});