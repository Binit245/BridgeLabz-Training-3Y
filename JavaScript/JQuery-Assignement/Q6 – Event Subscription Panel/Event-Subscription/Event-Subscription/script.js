
$(document).ready(function () {

    let notificationsEnabled = false;
    let selectedTopic = null;

    // Function to attach click event to topics
    function attachTopicEvent() {

        $(".topic").off("click").on("click", function () {

            $(".topic").css("background-color", "lightblue");

            $(this).css("background-color", "lightgreen");

            selectedTopic = $(this).text();

            $("#message").text("Selected: " + selectedTopic);

        });
    }

    // Attach events to existing topics
    attachTopicEvent();

    // 1. Subscribe enables notifications
    $("#subscribe").click(function () {

        notificationsEnabled = true;

        $("#message").text("Successfully subscribed! Notifications enabled.");

    });

    // 2. Unsubscribe disables notifications
    $("#unsubscribe").click(function () {

        notificationsEnabled = false;

        $("#message").text("Unsubscribed! Notifications disabled.");

    });

    // 3. Dynamically add a new topic and attach .on() event
    $("#addTopic").click(function () {

        let topicName = $("#newTopic").val().trim();

        if (topicName === "") {
            alert("Please enter a topic!");
            return;
        }

        $("#topics").append(
            $("<li>").addClass("topic").text(topicName)
        );

        attachTopicEvent();

        $("#newTopic").val("");

        $("#message").text("New topic added successfully!");

    });

    // 4. Remove selected topic and detach its event using .off()
    $("#remove").click(function () {

        if (selectedTopic === null) {
            alert("Please select a topic first!");
            return;
        }

        $(".topic").filter(function () {
            return $(this).text() === selectedTopic;
        }).off("click").remove();

        $("#message").text("Topic removed successfully!");

        selectedTopic = null;

    });

});
