$(document).ready(function() {
    $("#up").click(function() {
        $("#box").stop().animate({ top: "-=50px" }, 500, function() {
            console.log("Moved up");
        });
    });

    $("#down").click(function() {
        $("#box").stop().animate({ top: "+=50px" }, 500, function() {
            console.log("Moved down");
        });
    });

    $("#left").click(function() {
        $("#box").stop().animate({ left: "-=50px" }, 500, function() {
            console.log("Moved left");
        });
    });

    $("#right").click(function() {
        $("#box").stop().animate({ left: "+=50px" }, 500, function() {
            console.log("Moved right");
        });
    });

    $("#stop").click(function() {
        $("#box").stop();
    });
});