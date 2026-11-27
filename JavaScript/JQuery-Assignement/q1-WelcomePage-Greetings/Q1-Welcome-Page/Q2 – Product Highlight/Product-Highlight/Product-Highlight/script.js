
$(document).ready(function () {

    // 1. Click product to highlight background
    $(".product").click(function () {
        $(".product").removeClass("selected-product");
        $(this).addClass("selected-product");

        // 5. Check stock using data attribute
        if ($(this).attr("data-stock") === "no") {
            alert("Sorry! This product is out of stock.");
        }
    });

    // 2. Hover to show additional product details
    $(".product").hover(
        function () {
            $(this).find(".details").show();
        },
        function () {
            $(this).find(".details").hide();
        }
    );

    // 3. Favorite icon toggles selected class
    $(".favorite").click(function (event) {
        event.stopPropagation();

        $(this).toggleClass("selected");

        if ($(this).hasClass("selected")) {
            $(this).text("♥");
        } else {
            $(this).text("♡");
        }
    });

});
