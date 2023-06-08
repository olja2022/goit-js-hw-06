const inputElm = document.querySelector("#validation-input");
inputElm.addEventListener("blur", onBlur);
function onBlur(event) {
  const input = event.currentTarget;

  if (input.value.length === 6) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
