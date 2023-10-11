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
