let input = document.querySelector("input");
let form = document.querySelector(".input-group");
let small = document.querySelector("small");

const isEmailValid = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!isEmailValid(input.value)) {
    input.classList.add("inputError");
    small.classList.add("error");
    small.textContent = "Please provide a valid email address";
  } else if (input.value === "") {
    input.classList.add("inputError");
    small.classList.add("error");
    small.textContent = "Whoops! It looks like you forgot to add your email";
  } else {
    input.classList.add("inputSuccess");
    small.classList.add("success");
    small.textContent = "Email successfully submited";
  }
});
