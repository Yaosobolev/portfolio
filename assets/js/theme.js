let theme_toggler = document.getElementById("theme-toggler");
let themes = {
    // name: css class
    "light": "light-theme",
    "dark": "dark-theme",
}
let theme = localStorage.getItem("theme");

if (!theme) {
    theme = Object.keys(themes)[0]
    localStorage.setItem("theme", theme);
}
setTheme(theme);

theme_toggler.addEventListener("click", () => {
    setTheme(getNextTheme());
})

function setTheme(newTheme) {
    document.body.classList.remove(themes[theme]);
    document.body.classList.add(themes[newTheme])
    theme = newTheme;
    localStorage.setItem("theme", theme);
}

function getNextTheme() {
    let i = Object.keys(themes).indexOf(theme);
    i++;
    if (i >= Object.keys(themes).length) {
        i = 0;
    }
    return Object.keys(themes)[i];
}
