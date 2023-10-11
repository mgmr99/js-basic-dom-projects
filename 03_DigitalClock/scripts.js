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
