let guideBackground = document.querySelector(".guide");
let guideBlock = document.querySelector(".guide__block");
let guideText = document.querySelector(".guide__text");
let guideButton = document.querySelector(".guide__next");
let buttonAudio = new Audio("./assets/sounds/button_click.mp3");

class Guide {
    constructor(target, text, x = 0, y = 0) {
        this.target = target;
        this.text = text;
        this.x = x;
        this.y = y;
    }

    startGuide() {
        guideBlock.style.display = "";
        guideText.innerText = this.text;
        if (this.target) {
            guideBlock.style.left = `${this.target.getBoundingClientRect().x + this.x}px`;
            guideBlock.style.top = `${this.target.getBoundingClientRect().top + this.y}px`;
            this.target.style.zIndex = "201";
            this.target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        } else {
            guideBlock.style.left = `50%`;
            guideBlock.style.top = `50%`;
            guideBlock.style.transform = `translate(-50%, -50%)`;
        }
    }

    endGuide() {
        if (this.target) this.target.style.zIndex = "";
        else {
            guideBlock.style.left = ``;
            guideBlock.style.top = ``;
            guideBlock.style.transform = ``;
        }
        guideText.innerText = "";
        guideBlock.style.left = "";
        guideBlock.style.top = "";
        guideBlock.style.display = "none";
    }
}

class GuideTour {
    static currentTour = null;

    constructor(name, guides) {
        this.guides = guides;
        this.currentGuide = 0;
        this.name = `guide-${name}`;
        this.ready = localStorage.getItem(this.name);
    }

    startTour() {
        if (!this.ready) {
            GuideTour.currentTour = this;
            guideBackground.style.display = "block";
            this.guides[this.currentGuide].startGuide();
        }
    }

    next() {
        this.guides[this.currentGuide].endGuide();
        this.currentGuide++;
        if (this.currentGuide < this.guides.length) {
            this.guides[this.currentGuide].startGuide();
        }
        else this.endTour();
    }

    endTour() {
        guideBackground.style.display = "none";
        localStorage.setItem(this.name, true);
    }
}

guideButton.addEventListener("click", () => {
    GuideTour.currentTour.next();
    buttonAudio.play();
})

let guide1 = new Guide(null, "Добро пожаловать на мой сайт. Предлагаю посмотреть небольшой интерактивный тур по сайту, от которого вы, к счастью, не сможете отказаться.", 0, 60);
let guide2 = new Guide(document.querySelector(".header"), "Это шапка сайта. С помощью неё осуществляется навигация по страницам.", 0, 60);
let guide3 = new Guide(document.querySelector(".socials"), "Тут расположены возможные способы связи со мной, некоторые иконки являеются ссылками, а некоторые копируют данные, например телефон, вам в буфер обмена. Нажмите на значок Telegram.", -520, 0);
let guide4 = new Guide(document.querySelector("#first-tour-target"), "Некоторые изображения можно просмотреть в увеличенном формате, достаточно просто нажать на них. Сделайте это до нажатия на кнопку 'Далее' )", 0, -140);
let tour = new GuideTour("first-tour", [guide1, guide2, guide3, guide4]);
tour.startTour();