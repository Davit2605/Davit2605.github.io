const header = document.getElementById("header");
const titleEl = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile-img");
const nameEl = document.getElementById("name");
const dateEl = document.getElementById("date");

const bg_loadings = document.querySelectorAll(".bg-loading");
const bg_loading_texts = document.querySelectorAll(".bg-loading-text");

setTimeout(getData, 2500);

function getData() {
  header.innerHTML = ` <img
  src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1771&auto=format&fit=crop&
ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  alt="Image"/>
    `;

  titleEl.innerHTML = ` Lorem ipsum dolor sit`;

  excerpt.innerHTML = ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nemo similique ea corrupti! Placeat ab ex quo! Dolorum
  `;

  profile_img.innerHTML = ` <img
    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&
 ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="user-img" />
    `;
  nameEl.innerHTML = `John Devlin`;
  dateEl.innerHTML = `Oct 08, 2023`;

  bg_loadings.forEach((bg) => bg.classList.remove("bg-loading"));
  bg_loading_texts.forEach((text) => text.classList.remove("bg-loading-text"));
}
