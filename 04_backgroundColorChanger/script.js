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
  if (!intervalID) {
    intervalID = setInterval(bgChanger, 1000);
  }

  function bgChanger() {
    console.log(randomColor());
    document.body.style.backgroundColor = randomColor();
  }
};
const stopchangeBgColor = function () {
  clearInterval(intervalID);
  intervalID = null; //de-referencing the value
};

document.querySelector("#start").addEventListener("click", changeBgColor);
document.querySelector("#stop").addEventListener("click", stopchangeBgColor);
