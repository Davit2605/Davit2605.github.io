const loveMe = document.querySelector(".loveMe");
const times = document.getElementById("times");

let timesClicked = 0;

loveMe.addEventListener("dblclick", (e) => {
  createHeart(e);
});

function createHeart(e) {
  const heart = document.createElement("i");
  heart.classList.add("fa");
  heart.classList.add("fa-heart");

  const x = e.offsetX;
  const y = e.offsetY;

  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;

  loveMe.appendChild(heart);

  times.innerHTML = ++timesClicked;

  setTimeout(() => heart.remove(), 1000);
}
