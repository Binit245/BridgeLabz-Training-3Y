// Q4: Theme Switcher using setAttribute()

const buttons = document.querySelectorAll("[data-theme-choice]");
const themeStatus = document.getElementById("themeStatus");

function applyTheme(theme) {
    const themeStyles = {
        light: "background:#f4f6f8;color:#222;",
        dark: "background:#222;color:white;",
        blue: "background:lightblue;color:darkblue;"
    };

    document.body.setAttribute("data-theme", theme);
    document.body.setAttribute("class", "theme-" + theme);
    document.body.setAttribute("style", themeStyles[theme]);

    themeStatus.textContent = "Current theme: " + theme;
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        applyTheme(button.getAttribute("data-theme-choice"));
    });
});

applyTheme("light");