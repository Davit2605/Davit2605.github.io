const btnEl = document.getElementById("calculate");
const billEl = document.getElementById("bill");
const tipEl = document.getElementById("tip");
const totalSpan = document.getElementById("total");

function calculateTotal() {
  let billValue = billEl.value;
  let tipValue = tipEl.value;
  let totalValue = billValue * (1 + tipValue / 100);
  totalSpan.innerHTML = "\u20ac" + " " + totalValue.toFixed(2);
}

btnEl.addEventListener("click", calculateTotal);
