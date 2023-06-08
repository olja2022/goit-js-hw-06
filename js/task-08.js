const refs = {
  form: document.querySelector(".login-form"),
  button: document.querySelector('button[type="submit"]'),
  email: document.querySelector('input[type="email"]'),
  password: document.querySelector('input[type="password"]'),
};

refs.form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const user = {};
  user.email = refs.email.value;
  user.password = refs.password.value;
  if (refs.email.value === "" || refs.password.value === "") {
    alert("Всі поля повинні бути заповнені!");
  }
  console.log(user);
  event.currentTarget.reset();
}
