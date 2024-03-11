const containerEl = document.querySelector(".container");

const careers = ["YouTuber", "Web-Developer", "Freelancer", "Instructor"];

let charactersIndex = 0;
let careersIndex = 0;

updateCareers();
function updateCareers() {
  charactersIndex++;
  containerEl.innerHTML = `
      <h1>I am ${
        careers[careersIndex].slice(0, 1) === "I" ? "an" : "a"
      } ${careers[careersIndex].slice(0, charactersIndex)} </h1>
      `;
  if (charactersIndex === careers[careersIndex].length) {
    careersIndex++;
    charactersIndex = 0;
  }
  if (careersIndex === careers.length) {
    careersIndex = 0;
  }
  setTimeout(updateCareers, 400);
}
