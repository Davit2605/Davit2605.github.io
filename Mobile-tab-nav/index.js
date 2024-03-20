const tabs = document.querySelectorAll("nav ul li");
const images = document.querySelectorAll(".content");

tabs.forEach((tab, idx) => {
  tab.addEventListener("click", () => {
    removeActiveTab();
    removeShowImg();

    tab.classList.add("active");
    images[idx].classList.add("show");
  });
});

function removeActiveTab() {
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
}

function removeShowImg() {
  images.forEach((image) => {
    image.classList.remove("show");
  });
}
