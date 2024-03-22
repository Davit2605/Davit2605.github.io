const menuEl = document.querySelector(".menu");
const menuTextEl = document.querySelector(".menu p");
const listElements = document.querySelector(".social-lists");
const listsEl = document.querySelectorAll(".social-lists li");

menuEl.addEventListener("click", () => {
  listElements.classList.toggle("hide");
  menuEl.classList.toggle("rotate");
});

listsEl.forEach((listEl) => {
  listEl.addEventListener("click", () => {
    menuTextEl.innerHTML = listEl.innerHTML;
    listElements.classList.add("hide");
    menuEl.classList.toggle("rotate");
  });
});
