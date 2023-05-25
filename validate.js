// Validation Contact Form
const error = document.querySelector("#error-msg");
const form = document.querySelector(".contact-form");
const email = document.querySelector("#email");
const errorMsg = "Please write your email address in lower case";

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const userInput = email.value;
  const emailErr = userInput.toLowerCase();
  if (userInput !== emailErr) {
    error.innerHTML = errorMsg;
  } else {
    error.innerHTML = "";
    form.submit();
  }
});