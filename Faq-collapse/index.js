const containerEls = document.querySelectorAll(".question-container");

containerEls.forEach((container) => {
  container.addEventListener("click", () => {
    container.classList.toggle("active");
  });
});
