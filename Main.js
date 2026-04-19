const hour = document.querySelector('.box-clock-hour');
const minute = document.querySelector('.box-clock-minute');
const second = document.querySelector('.box-clock-second');
const utcDate = document.querySelector(".box-utc-date")
const loc = document.querySelector(".box-utc-location")
const span = document.querySelectorAll('span');

const button = document.querySelector('.button');
const body = document.querySelector('body');

function clock() {
    const date = new Date();
    span.forEach(item => {
        item.innerHTML = ":";
    })
    hour.innerHTML = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    minute.innerHTML = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    second.innerHTML = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    utcDate.innerHTML = `${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`;
    loc.innerHTML = "Tashkent, Uzbekistan";
    button.addEventListener('click', () => {
        body.style.background = "black";

        function utcStyle() {
            utcDate.addEventListener("mouseenter", () => {
                utcDate.style.backgroundColor = "white";
                utcDate.style.color = "black";
            })
            utcDate.addEventListener("mouseleave", () => {
                utcDate.style.backgroundColor = "black";
                utcDate.style.color = "white";
                utcDate.style.transition = "0.3s";
            })
        }

        utcStyle();

        function locStyle() {
            loc.addEventListener("mouseenter", () => {
                loc.style.backgroundColor = "white";
                loc.style.color = "black";
            })
            loc.addEventListener("mouseleave", () => {
                loc.style.backgroundColor = "black";
                loc.style.color = "white";
                loc.style.transition = "0.3s";
            })
        }

        locStyle()

        function buttonStyle() {
            button.addEventListener("mouseenter", () => {
                button.style.backgroundColor = "white";
                button.style.color = "black";
            })
            button.addEventListener("mouseleave", () => {
                button.style.backgroundColor = "black";
                button.style.color = "white";
                button.style.transition = "0.3s";
            })
        }

        buttonStyle();
    })
}

clock();
