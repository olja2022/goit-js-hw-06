const incrementBtnEl = document.querySelector(
  "button[data-action='increment']"
);
const decrementBtnEl = document.querySelector(
  "button[data-action='decrement']"
);
const valueEl = document.querySelector("#value");

let counterValue = 0;

incrementBtnEl.addEventListener("click", () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});

decrementBtnEl.addEventListener("click", () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});
