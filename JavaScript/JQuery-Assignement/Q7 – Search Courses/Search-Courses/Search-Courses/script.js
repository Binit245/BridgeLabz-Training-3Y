
$(document).ready(function () {

    // Store original course content
    $(".course").each(function () {
        $(this).data("original", $(this).html());
    });

    // 1. Filter courses in real time using keyup()
    $("#search").keyup(function () {

        let searchText = $(this).val().toLowerCase();
        let matchedCount = 0;

        $(".course").each(function () {

            let course = $(this);

            // Restore original content before searching
            course.html(course.data("original"));

            let courseText = course.text().toLowerCase();

            // 2. Match search text and highlight using CSS
            if (courseText.includes(searchText)) {

                course.show();
                matchedCount++;

                if (searchText !== "") {

                    course.find("h2, p").each(function () {

                        let originalText = $(this).text();

                        let escaped = searchText.replace(
                            /[.*+?^${}()|[\]\\]/g, "\\$&"
                        );

                        let regex = new RegExp("(" + escaped + ")", "gi");

                        let highlighted = originalText.replace(
                            regex,
                            "<mark>$1</mark>"
                        );

                        $(this).html(highlighted);

                    });

                }

                course.css("border-left", "5px solid green");

            } else {

                // 3. Hide courses that do not match
                course.hide();

            }

        });

        // 4. Update matched course count
        $("#count").text("Matched Courses: " + matchedCount);

    });

    // 5. Clear search and display all courses
    $("#clear").click(function () {

        $("#search").val("");

        $(".course").each(function () {
            $(this).html($(this).data("original"));
            $(this).show();
            $(this).css("border-left", "");
        });

        $("#count").text("Total Courses: " + $(".course").length);

    });

});
