let butger_toggler = document.getElementById("burger-toggle");
let header = document.querySelector(".header");
let headerHeight = header.clientHeight;
let lastScrollPos = 0;

butger_toggler.addEventListener("click", () => {
    header.classList.toggle("showed");
});

document.addEventListener("scroll", (event) => {
    let pos = window.pageYOffset;

    if (pos < lastScrollPos && pos > headerHeight) {
        header.classList.add("floating");
    } else {
        header.classList.remove("floating");
    }

    lastScrollPos = pos;
});

let socials_copy = document.getElementsByClassName("socials__copy");

for (let i = 0; i < socials_copy.length; i++) {
    let element = socials_copy[i];
    element.addEventListener("click", () => {
        let data = element.querySelector(".socials__copy-data").innerText;
        navigator.clipboard.writeText(data);
        new Notify("Данные скопированы в буфер обмена.", 5000);
    });
}