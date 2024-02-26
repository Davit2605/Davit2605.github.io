const answerEl = document.querySelector(".answer-container");
const plusEl = document.querySelector(".plus");
const minusEl = document.querySelector(".minus");

plusEl.addEventListener("click", () => {
  answerEl.style.display = "block";
  minusEl.classList.remove("minus-active");
});

minusEl.addEventListener("click", () => {
  answerEl.style.display = "none";
  minusEl.classList.add("minus-active");
});
