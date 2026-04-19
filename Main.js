const hour = document.querySelector('.box-clock-hour');
const minute = document.querySelector('.box-clock-minute');
const second = document.querySelector('.box-clock-second');
const span = document.querySelectorAll('span');
function clock() {
    const date = new Date();
    span.forEach(item => {
        item.innerHTML = ":";
    })
    hour.innerHTML = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    minute.innerHTML = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    second.innerHTML = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
}
clock();
