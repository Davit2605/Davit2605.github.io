const ContainerEl = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
  const colorContainerEl = document.createElement("div");
  colorContainerEl.classList.add("color-container");
  ContainerEl.appendChild(colorContainerEl);
}
const colorContainerEls = document.querySelectorAll(".color-container");
generateColors();
function generateColors() {
  colorContainerEls.forEach((element) => {
    const newColorCode = randomColor();
    element.style.backgroundColor = "#" + newColorCode;
    element.innerText = "#" + newColorCode;
  });
}
function randomColor() {
  const chars = "0123456789abcdef";
  const colorCodeLenght = 6;
  let colorCode = "";
  for (let index = 0; index < colorCodeLenght; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNum, randomNum + 1);
  }
  return colorCode;
}
