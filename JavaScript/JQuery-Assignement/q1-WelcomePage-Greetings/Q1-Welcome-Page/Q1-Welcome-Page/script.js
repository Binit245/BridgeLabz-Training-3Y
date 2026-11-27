
$(document).ready(function () {

    // Array containing motivational quotes
    let quotes = [
        "Believe in yourself!",
        "Never give up on your dreams!",
        "Success comes from hard work!",
        "Every day is a new opportunity!",
        "Keep learning and keep growing!"
    ];

    let quoteIndex = 0;

    // 1. Display greeting according to current time
    let hour = new Date().getHours();

    if (hour < 12) {
        $("#greeting").text("Good Morning, Binit!");
    }
    else if (hour < 17) {
        $("#greeting").text("Good Afternoon, Binit!");
    }
    else {
        $("#greeting").text("Good Evening, Binit!");
    }

    // 2. Change greeting into motivational quotes
    $("#changeGreeting").click(function () {

        $("#greeting").text(quotes[quoteIndex]);

        quoteIndex++;

        if (quoteIndex >= quotes.length) {
            quoteIndex = 0;
        }
    });

    // 3. Show or hide welcome message
    $("#toggleWelcome").click(function () {

        $("#welcomeMessage").toggle();
    });

    // 4. Display alert when greeting is clicked
    $("#greeting").click(function () {

        alert("Keep smiling! Have a great day!");
    });

});
