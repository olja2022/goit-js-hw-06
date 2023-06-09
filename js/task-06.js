const inputEl = document.querySelector("#validation-input");
const onBlur = (event) => {
  event.currentTarget.classList.remove("invalid");
  if (
    event.currentTarget.value.trim().length < event.currentTarget.dataset.length
  ) {
    event.currentTarget.classList.add("invalid");
  }
  event.currentTarget.classList.add("valid");
};
inputEl.addEventListener("blur", onBlur);
