
$(document).ready(function () {

    // Select all banners
    let banners = $(".banner");

    // 1. Hide a specific banner
    $("#hide").click(function () {
        $("#banner1").hide();
    });

    // 2. Show all hidden banners
    $("#show").click(function () {
        banners.show();
    });

    // 3. Slide up and slide down
    $("#slideUp").click(function () {
        banners.slideUp();
    });

    $("#slideDown").click(function () {
        banners.slideDown();
    });

    // 4. Fade out and fade in
    $("#fadeOut").click(function () {
        banners.fadeOut(1000);
    });

    $("#fadeIn").click(function () {
        banners.fadeIn(1000);
    });

    // 5. Automatically rotate banners every 5 seconds
    let currentBanner = 0;

    banners.hide();
    banners.eq(currentBanner).fadeIn();

    setInterval(function () {

        banners.eq(currentBanner).fadeOut(500);

        currentBanner++;

        if (currentBanner >= banners.length) {
            currentBanner = 0;
        }

        banners.eq(currentBanner).fadeIn(500);

    }, 5000);

});
