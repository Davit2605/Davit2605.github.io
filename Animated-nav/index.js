const navEl = document.querySelector(".active");
const btnEl = document.getElementById("toggle");

btnEl.addEventListener("click", () => {
  navEl.classList.toggle("active");
});
