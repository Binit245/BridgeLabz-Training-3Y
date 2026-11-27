
$(document).ready(function () {

    // 1. Click question to show or hide answer
    $(".question").click(function () {
        $(this).next(".answer").slideToggle();
    });

    // 2. Hover changes question color
    $(".question").hover(
        function () {
            $(this).css("color", "red");
        },
        function () {
            $(this).css("color", "darkblue");
        }
    );

    // 3. Double-click collapses all answers
    $(".question").dblclick(function () {
        $(".answer").slideUp();
    });

    // 4. Focus on input highlights parent question
    $(".faq-item input").focus(function () {
        $(this).closest(".faq-item")
            .find(".question")
            .css("background-color", "lightyellow");
    });

    // 5. Blur resets question background
    $(".faq-item input").blur(function () {
        $(this).closest(".faq-item")
            .find(".question")
            .css("background-color", "");
    });

});
