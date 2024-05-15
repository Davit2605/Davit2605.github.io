const mainBg = document.querySelector(".main");
const inputEL = document.getElementById("password");

inputEL.addEventListener("input", (e) => {
  const inputValue = e.target.value;

  const inputLength = inputValue.length;

  const blurValue = 20 - inputLength * 2;

  mainBg.style.filter = `blur(${blurValue}px)`;
});
