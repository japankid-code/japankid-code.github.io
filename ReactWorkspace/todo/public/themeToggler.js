// this was gotten here: https://kevdees.com/adding-dark-mode-toggle-to-your-website/
// A function for toggling the theme
function toggleTheme() {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");

    localStorage.setItem(
        "colorTheme", // detects what color theme is set to.
        document.body.classList.contains("dark") ? "dark" : "light" // sets the theme.
    );
    // console.log(localStorage.getItem("colorTheme"))
}

// Initialize the theme
function themeInitializer() {
    if (localStorage.getItem("colorTheme") === "light" &&
        window.matchMedia("(prefers-color-scheme: light)").matches
        ) {
            toggleTheme();
    } else if (
        localStorage.getItem("colorTheme") === "dark" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
        toggleTheme();
    }
}
