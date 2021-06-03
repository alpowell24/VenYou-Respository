$(document).ready(function () {

    $('.fadein').each(function (i) {

        var bottom_of_object = $(this).position().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if (bottom_of_window > bottom_of_object) {

            $(this).animate({ 'opacity': '1' }, 1500);

        }

    });
});


$("button").hover(
    function () {
        $(this).css("background-color", "#f88410");
        $(this).css("font-weight", "800");
    }, function () {
        $(this).css("background-color", "#f9a756");
        $(this).css("font-weight", "700");

    }
);


$("a").click(function () {
    var pageId = $(this).attr("dataPage");
    $("html, body").animate({ scrollTop: $("#" + pageId).offset().top }, 1000);
});