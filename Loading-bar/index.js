const counterEl = document.querySelector(".counter");
const progressBar = document.querySelector(".progress-bar-front");
let idx = 0;

updateProgress();
function updateProgress() {
  counterEl.innerText = idx + "%";
  progressBar.style.width = idx + "%";
  idx++;
  if (idx < 101) {
    setTimeout(updateProgress, 20);
  }
}
