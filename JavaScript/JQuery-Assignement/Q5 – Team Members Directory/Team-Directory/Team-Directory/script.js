
$(document).ready(function () {

    // 1. Click manager to highlight direct reports
    $(".manager").click(function () {

        $(this).siblings(".employee").toggleClass("highlight");

    });

    // 2. Hover employee to show contact using next()
    $(".employee").hover(
        function () {
            $(this).children(".contact").show();
        },
        function () {
            $(this).children(".contact").hide();
        }
    );

    // 3. Click department to change all member backgrounds
    $(".dept-name").click(function () {

        $(this).next(".team")
            .children(".employee")
            .css("background-color", "lightblue");

    });

    // 4. Select random employee and highlight siblings
    $("#random").click(function () {

        $(".employee").removeClass("highlight");

        let employees = $(".employee");
        let randomIndex = Math.floor(Math.random() * employees.length);

        employees.eq(randomIndex)
            .siblings(".employee")
            .addClass("highlight");

    });

    // 5. Collapse or expand team using parent() and find()
    $("#collapse").click(function () {

        $(".team").parent(".department")
            .find(".employee")
            .slideToggle();

    });

});
