const counterEl = document.querySelectorAll(".counter");
counterEl.forEach((counter) => {
  counter.innerText = "0";
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;
    const increment = target / 200;
    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
    } else {
      counter.innerText = target;
    }
    setTimeout(updateCounter, 2);
  };
  updateCounter();
});
