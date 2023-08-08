class Typewriter {
    constructor(element) {
        this.target = element;
        if (this.target) {
            this.text = this.target.innerHTML;
            this.target.innerHTML = "";
            this.interval = 60;
            this.i = 0;

            this.int = setInterval(() => {
                if (this.i < this.text.length) {
                    this.target.innerHTML += this.text[this.i];
                    this.i++;
                } else {
                    clearInterval(this.int);
                    delete this;
                }
            }, this.interval);
        } else {
            console.log(this.target + " not found!");
        }
    }
}

let elements = document.getElementsByClassName("twriter");
for(let i = 0; i < elements.length; i++) {
    let elem = elements.item(i);
    new Typewriter(elem);
}