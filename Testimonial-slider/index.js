const testimonials = [
  {
    name: "Meri Pipenbaher",
    photoUrl:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    text: "Sometimes, you read a book and it fills you with this weird evangelical zeal, and you become convinced that the shattered world will never be put back together unless and until all living humans read the book.",
  },

  {
    name: "Annie Dillard",
    photoUrl:
      "https://images.unsplash.com/photo-1490195117352-aa267f47f2d9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    text: "Do not hoard what seems good for a later place in the book, or for another book; give it, give it all, give it now.",
  },

  {
    name: "Franz Kafka",
    photoUrl:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    text: "Don't bend; don't water it down; don't try to make it logical; don't edit your own soul according to the fashion. Rather, follow your most intense obsessions mercilessly.",
  },
];

const imageEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const authorEl = document.querySelector(".author");

let idx = 0;

updateTestimonials();

function updateTestimonials() {
  const { name, photoUrl, text } = testimonials[idx];
  imageEl.src = photoUrl;
  textEl.innerText = text;
  authorEl.innerText = name;
  idx++;

  if (idx === testimonials.length) {
    idx = 0;
  }

  setTimeout(() => {
    updateTestimonials();
  }, 5000);
}
