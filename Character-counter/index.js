const textareaEl = document.getElementById("textarea");
const totalEls = document.getElementById("total-counter");
const remainingEls = document.getElementById("remaining-counter");

updateCounter();
textareaEl.addEventListener("keyup", () => {
  updateCounter();
});
function updateCounter() {
  totalEls.innerText = textareaEl.value.length;
  remainingEls.innerText =
    textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}
