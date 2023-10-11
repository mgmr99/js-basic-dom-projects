const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = "Give an valid height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Give an valid weight";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.5) {
      results.innerHTML = `Your BMI is ${bmi}, so you are underweight.`;
    } else if (bmi >= 18.5 && bmi < 25) {
      results.innerHTML = `Your BMI is ${bmi}, so you have a normal weight.`;
    } else if (bmi >= 25 && bmi < 30) {
      results.innerHTML = `Your BMI is ${bmi}, so you are overweight.`;
    } else if (bmi >= 30) {
      results.innerHTML = `Your BMI is ${bmi}, so you are obese.`;
    }
  }
});
