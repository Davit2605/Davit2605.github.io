const currencyFirstEl = document.getElementById("currency-first");
const currencySecondEl = document.getElementById("currency-second");
const worthFirstEl = document.getElementById("worth-first");
const worthSecondEl = document.getElementById("worth-second");
const exchangeRateEl = document.getElementById("exchange-rate");
getRate();
function getRate() {
  fetch(
    `https://v6.exchangerate-api.com/v6/bf9de5ed704785029475402e/latest/${currencyFirstEl.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[currencySecondEl.value];
      exchangeRateEl.innerText = `1 ${
        currencyFirstEl.value + " = " + rate + " " + currencySecondEl.value
      }`;
      worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2);
    });
}
currencyFirstEl.addEventListener("change", getRate);
currencySecondEl.addEventListener("change", getRate);
worthFirstEl.addEventListener("input", getRate);
