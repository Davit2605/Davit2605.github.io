const containerEl = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {
  imageNum = 6;
  loadImages();
});

function loadImages() {
  for (let index = 0; index < imageNum; index++) {
    const randomImgs = document.createElement("img");
    randomImgs.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 2000
    )}`;
    containerEl.appendChild(randomImgs);
  }
}
