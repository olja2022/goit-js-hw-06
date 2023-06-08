const refs = {
  input: document.querySelector("#font-size-control"),
  span: document.querySelector("#text"),
};
refs.input.addEventListener("input", handleChangeFontSize);
function handleChangeFontSize(event) {
  refs.input = Number(event.target.value);
  refs.span.style.fontSize = `${refs.input}px`;
}
