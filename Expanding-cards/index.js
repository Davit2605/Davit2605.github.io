const imagesEl = document.querySelectorAll(".image");
imagesEl.forEach((image) => {
  image.addEventListener("click", () => {
    updateImages();
    image.classList.add("active");
  });
});
function updateImages() {
  imagesEl.forEach((image) => {
    image.classList.remove("active");
  });
}
