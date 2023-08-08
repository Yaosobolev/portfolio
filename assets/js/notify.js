let lastNotifyId = 0;
let notifies = document.querySelector(".notifies");
let currentNotifies = 0;
let maxNotifies = 3;
audio = new Audio("./assets/sounds/notify.mp3");

class Notify {
    constructor(text, duration) {
        if (currentNotifies < maxNotifies) {
            lastNotifyId++;
            this.id = lastNotifyId;
            notifies.innerHTML += `
            <div class="notify" id="notify-${lastNotifyId}">
                <div class="notify__header">Уведомление</div>
                <div class="notify__content">${text}</div>
            </div>
            `
            audio.play();
            currentNotifies += 1;
            setTimeout(() => {
                let element = document.querySelector(`#notify-${this.id}`);
                element.parentNode.removeChild(element);
                currentNotifies -= 1;
            }, duration);
        }
    }
}