function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  body: document.querySelector("body"),
  spanColor: document.querySelector(".color"),
  buttonChangeColor: document.querySelector(".change-color"),
};
refs.buttonChangeColor.addEventListener("click", randomColor);
function randomColor(event) {
  const qwe = (refs.body.style.backgroundColor = getRandomHexColor());
  console.log(qwe);
  refs.spanColor.textContent = qwe;
}
randomColor();
