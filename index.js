$(function() { // Use $(function() { ... }); for document ready

    var body = $("body"),
        universe = $("#universe"),
        solarSystem = $("#solar-system"); // More descriptive variable name

    var init = function() {
        body.removeClass('view-2D opening').addClass("view-3D").delay(2000).queue(function() {
            $(this).removeClass('hide-UI').addClass("set-speed").dequeue();
        });
    };

    var setView = function(view) {
        universe.removeClass().addClass(view);
    };

    $("#toggle-data").click(function(e) {
        body.toggleClass("data-open data-close");
        e.preventDefault();
    });

    $("#toggle-controls").click(function(e) {
        body.toggleClass("controls-open controls-close");
        e.preventDefault();
    });

    $("#data").on("click", "a", function(e) { // Use event delegation
        var ref = $(this).attr("class");
        solarSystem.removeClass().addClass(ref);
        $(this).siblings('a').removeClass('active'); // Use siblings for clarity
        $(this).addClass('active');
        e.preventDefault();
    });

    $(".set-view").click(function() {
        body.toggleClass("view-3D view-2D");
    });

    $(".set-zoom").click(function() {
        body.toggleClass("zoom-large zoom-close");
    });

    $(".set-speed").click(function() {
        setView("scale-stretched set-speed");
    });

    $(".set-size").click(function() {
        setView("scale-s set-size");
    });

    $(".set-distance").click(function() {
        setView("scale-d set-distance");
    });

    init();
});
