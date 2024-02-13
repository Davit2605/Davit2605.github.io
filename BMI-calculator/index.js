const btnEl = document.getElementById("btn");
const bmiOutputEl = document.getElementById("bmi-result");
const weightConditionEl = document.getElementById("weight-condition");
function calculateBmi() {
  const heightValue = document.getElementById("height").value / 100;
  const weightValue = document.getElementById("weight").value;
  const bmiValue = weightValue / (heightValue * heightValue);
  bmiOutputEl.value = bmiValue.toFixed(3);
  if (heightValue == "" || weightValue == "") {
    weightConditionEl.style.color = "red";
    weightConditionEl.innerText = "Please enter height and weight";
    bmiOutputEl.value = null;
  } else if (bmiValue < 18.5) {
    weightConditionEl.style.color = "Black";
    weightConditionEl.innerText = "Underweight" + " " + "\u{1F615}";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    weightConditionEl.style.color = "black";
    weightConditionEl.innerText = "Normal weight" + " " + "\u{1F60A}";
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    weightConditionEl.style.color = "black";
    weightConditionEl.innerText = "Overweight" + " " + "\u{1F610}";
  } else if (bmiValue >= 30) {
    weightConditionEl.style.color = "black";
    weightConditionEl.innerText = "Obesity" + " " + `\u{1F605}`;
  }
}
btnEl.addEventListener("click", calculateBmi);
