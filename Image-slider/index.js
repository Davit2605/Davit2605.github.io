const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
const imageContainer = document.querySelector(".image-container");
const imagesEl = document.querySelectorAll("img");

let imgs = 1;
let timeout;
updateImage();
nextEl.addEventListener("click", () => {
  imgs++;
  clearTimeout(timeout);
  updateImage();
});
prevEl.addEventListener("click", () => {
  imgs--;
  clearTimeout(timeout);
  updateImage();
});
function updateImage() {
  if (imgs > imagesEl.length) {
    imgs = 1;
  } else if (imgs < 1) {
    imgs = imagesEl.length;
  }
  imageContainer.style.transform = `translateX(-${(imgs - 1) * 500}px)`;
  timeout = setTimeout(() => {
    imgs++;
    updateImage();
  }, 3000);
}
