const refs = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputEvent);

function onInputEvent(event) {
  refs.span.textContent =
    event.currentTarget.value === "" ? "Anonymous" : event.currentTarget.value;
}
