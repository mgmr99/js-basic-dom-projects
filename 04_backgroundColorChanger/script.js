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
