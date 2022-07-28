function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyEl = document.querySelector("body");
console.log(bodyEl);
const buttonEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

buttonEl.addEventListener("click", onChangeBackground);

function onChangeBackground() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor();
}

// const refs = {
//   bodyColor: document.querySelector("body"),
//   btn: document.querySelector(".change-color"),
//   text: document.querySelector(".color"),
// }

// refs.btn.addEventListener("click", () => {
//   console.log("click")
// console.log(getRandomHexColor())
// });

// function changeColor () {
//   refs.bodyColor.style.backgroundColor = getRandomHexColor;
//   refs.text.textContents = function getRandomHexColor (event) {
// retutn 
//   };
// }
