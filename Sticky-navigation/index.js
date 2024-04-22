const navEl = document.querySelector(".nav");
const anchorEls = document.querySelectorAll("nav a");

window.addEventListener("scroll", fixNav);

function fixNav() {
  window.scrollY > navEl.offsetHeight + 150
    ? navEl.classList.add("active")
    : navEl.classList.remove("active");
}

anchorEls.forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    document.querySelector("nav a.current").classList.remove("current");
    e.target.classList.add("current");
  });
});
