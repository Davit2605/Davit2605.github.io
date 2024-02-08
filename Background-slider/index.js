const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.querySelector(".arrow-left");
const rightBtn = document.querySelector(".arrow-right");
let currentSlide = 0;

updateImage();
setActiveSlide();

rightBtn.addEventListener("click", () => {
  currentSlide++;
  if (currentSlide > slides.length - 1) {
    currentSlide = 0;
  }
  updateImage();
  setActiveSlide();
});

leftBtn.addEventListener("click", () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  updateImage();
  setActiveSlide();
});

function updateImage() {
  body.style.backgroundImage = slides[currentSlide].style.backgroundImage;
}

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[currentSlide].classList.add("active");
}
