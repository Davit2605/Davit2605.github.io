const hourEl = document.querySelector(".hour");
const minutesEl = document.querySelector(".minutes");
const secondsEl = document.querySelector(".seconds");

function updateClock() {
  const data = new Date();
  const hours = data.getHours();
  const mins = data.getMinutes();
  const sec = data.getSeconds();
  hourEl.style.transform = `rotate(${(hours / 12) * 360}deg)`;
  minutesEl.style.transform = `rotate(${(mins / 60) * 360}deg)`;
  secondsEl.style.transform = `rotate(${(sec / 60) * 360}deg)`;
}

setInterval(updateClock, 1000);
