const timeContainer = document.querySelector(".content__time");
setInterval(() => {
const timeNow = new Date();
timeContainer.textContent = `${timeNow.getHours()}:${timeNow.getMinutes()}:${timeNow.getSeconds()}`;
}, 1000);