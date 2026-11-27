
/*
    jq1 = jQuery version 3.7.1
    jq2 = jQuery version 3.6.4
*/

// jQuery Version 1
jq1(document).ready(function () {

    // 1. Carousel slider rotation
    let slides = [
        "Welcome to Slide 1",
        "Welcome to Slide 2",
        "Welcome to Slide 3",
        "Welcome to Slide 4",
        "Welcome to Slide 5"
    ];

    let index = 0;

    function changeSlide() {

        jq1("#slideText").text(slides[index]);

        index++;

        if (index >= slides.length) {
            index = 0;
        }
    }

    // Automatically rotate slides
    setInterval(changeSlide, 3000);

    // 3. Highlight active widget
    jq1(".widgetButton").click(function () {

        jq1(".widgetButton").removeClass("active");

        jq1(this).addClass("active");

        jq1(this).css({
            "background-color": "lightgreen"
        });

    });

});


// jQuery Version 2
jq2(document).ready(function () {

    // 2. Manage modal popup
    jq2("#openModal").click(function () {

        jq2("#modal").fadeIn();

    });

    jq2("#closeModal").click(function () {

        jq2("#modal").fadeOut();

    });

    // 4. Attach tooltips on hover
    jq2(".tipButton").hover(

        function () {

            let message = jq2(this).attr("data-tip");

            jq2("#tooltip").text(message).fadeIn();

        },

        function () {

            jq2("#tooltip").fadeOut();

        }

    );

});
