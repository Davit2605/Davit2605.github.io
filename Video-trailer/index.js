const closeBtnEl = document.querySelector(".close-btn");
const watchBtn = document.querySelector(".btn");
const videoEl = document.querySelector("video");
const trailerContainerEl = document.querySelector(".trailer-container");

watchBtn.addEventListener("click", () => {
  trailerContainerEl.classList.remove("active");
});

closeBtnEl.addEventListener("click", () => {
  trailerContainerEl.classList.add("active");
  videoEl.pause();
  videoEl.currentTime = 0;
});
