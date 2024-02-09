const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");
btnEl.addEventListener("click", calculateAge);
function calculateAge() {
  let birthdayValue = birthdayEl.value;
  if (birthdayValue == "") {
    alert("Please enter your birthday");
  } else {
    let age = getAge(birthdayValue);
    resultEl.innerHTML = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
}
function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  age = currentDate.getFullYear() - birthdayDate.getFullYear();
  let month = currentDate.getMonth() - birthdayDate.getMonth();
  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }
  return age;
}
