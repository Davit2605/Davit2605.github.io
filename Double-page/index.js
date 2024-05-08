const containerEl = document.querySelector(".container");
const leftEl = document.querySelector(".left");
const rightEl = document.querySelector(".right");

leftEl.addEventListener("mouseenter", () => {
  containerEl.classList.add("active");
});

leftEl.addEventListener("mouseleave", () => {
  containerEl.classList.remove("active");
});

rightEl.addEventListener("mouseenter", () => {
  containerEl.classList.add("active-2");
});

rightEl.addEventListener("mouseleave", () => {
  containerEl.classList.remove("active-2");
});
