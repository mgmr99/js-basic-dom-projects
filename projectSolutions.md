## color changer Solution

```javascript
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    // code to change the color of the body goes here
    console.log(e.target);
    // if (e.target.id == "grey") {
    //   body.style.backgroundColor = "grey";
    // }
    switch (e.target.id) {
      case "grey":
        body.style.backgroundColor = "grey";
        break;
      case "white":
        body.style.backgroundColor = "white";
        break;
      case "blue":
        body.style.backgroundColor = "blue";
        break;
      case "yellow":
        body.style.backgroundColor = "yellow";
        break;
      default:
        body.style.backgroundColor = "white";
        break;
    }
  });
});
```

## BMI Calculator

```javascript
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Give an valid height ${height}`;
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
```

## Digital Clock

```javascript
const clock = document.querySelector("#clock");
const dateToday = document.querySelector("#date");
// console.log(clock);
console.log(date);

setInterval(() => {
  const date = new Date();
  //console.log(date);
  clock.innerHTML = date.toLocaleTimeString();
  //   console.log(date.toLocaleDateString());
  dateToday.innerHTML = date.toLocaleDateString();
}, 1000);
```

## Background Color Changer - setInterval(),clearInterval()

```javascript
const randomColor = function () {
  const hexValues = "123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexValues[Math.floor(Math.random() * 10)];
  }
  return color;
};
let intervalID;
const changeBgColor = function () {
  intervalID = setInterval(function () {
    console.log(randomColor());
    document.body.style.backgroundColor = randomColor();
  }, 1000);
};
const stopchangeBgColor = function () {
  clearInterval(intervalID);
};

document.querySelector("#start").addEventListener("click", changeBgColor);
document.querySelector("#stop").addEventListener("click", stopchangeBgColor);
```

# KeyBoard KeyPressed Checker

```javascript
const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
    <div >
    <table border>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === " " ? "Space" : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
    `;
});
console.log("helloo");
```
