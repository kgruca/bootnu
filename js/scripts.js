$(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton").on("click", function() {
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play").addClass("fa-pause"); 
        }
    }) 
});

$(function() {
    $("#reserveButton").on("click", function() {
        $("#reserveModal").modal();
    });
});

$(function() {
    $("#loginButton").on("click", function() {
        $("#loginModal").modal();
    });
});