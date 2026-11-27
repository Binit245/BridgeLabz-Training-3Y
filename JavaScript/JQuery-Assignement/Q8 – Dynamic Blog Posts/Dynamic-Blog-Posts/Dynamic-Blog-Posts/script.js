
$(document).ready(function () {

    // 1. Append a new post at the end
    $("#add").click(function () {

        $("#blogList").append(`
            <article class="post">
                <h2>New Blog Post</h2>
                <p>This is a dynamically added blog post.</p>
            </article>
        `);

    });

    // 2. Prepend featured post at the beginning
    $("#featured").click(function () {

        $("#blogList").prepend(`
            <article class="post featured">
                <h2>Featured Blog Post</h2>
                <p>This is our special featured article.</p>
            </article>
        `);

    });

    // 3. Remove the last post
    $("#remove").click(function () {

        $("#blogList .post").last().remove();

    });

    // 4. Add tags using before() and after()
    $("#tags").click(function () {

        // Remove old tags to prevent duplication
        $(".tag").remove();

        // Add tag before the first post
        $("#blogList .post").first().before(
            '<p class="tag">Latest Blogs</p>'
        );

        // Add tag after the last post
        $("#blogList .post").last().after(
            '<p class="tag">End of Blog Posts</p>'
        );

    });

    // 5. Highlight posts containing specific keywords
    $("#highlight").click(function () {

        $(".post").each(function () {

            let content = $(this).text().toLowerCase();

            if (
                content.includes("javascript") ||
                content.includes("data science") ||
                content.includes("machine learning")
            ) {

                $(this).css({
                    "background-color": "lightyellow",
                    "border": "2px solid orange"
                });

            }

        });

    });

});
