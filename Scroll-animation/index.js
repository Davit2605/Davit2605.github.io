const contentEls = document.querySelectorAll(".content");

updateContent();

window.addEventListener("scroll", updateContent);

function updateContent() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  contentEls.forEach((contentEl) => {
    const boxTop = contentEl.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      contentEl.classList.add("show");
    } else {
      contentEl.classList.remove("show");
    }
  });
}
