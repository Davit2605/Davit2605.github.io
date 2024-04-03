const bgImageEl = document.getElementById("bg-image");

window.addEventListener("scroll", updateBg);

function updateBg() {
  bgImageEl.style.opacity = 1 - window.scrollY / 900;
  bgImageEl.style.backgroundSize = 160 - window.scrollY / 12 + "%";
}
