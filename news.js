$(document).ready(function article() {
    $(".titre").click(function() {
        var i = $(this).next().outerHeight();
        var j = $(this).outerHeight();
        var k = i+j+500;
        if($(this).parent().css("max-height") == "80px") {
            $(this).parent().css("max-height", k+"px");
        } else {
            $(this).parent().css("max-height", "80px");
        };
    });
	$(".close").click(function() {
        $(this).parent().parent().css("max-height", "80px");
    });
});
