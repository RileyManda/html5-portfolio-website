const errorMsgElement = document.querySelector('#error-msg');
const contactForm = document.querySelector('.contact-form');
const emailInput = document.querySelector('#email');
const errorMsg = 'Please write your email address in lowercase';

const validateEmail = (email) => {
  const lowercaseEmail = email.toLowerCase();
  return email === lowercaseEmail;
};

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const userInput = emailInput.value;

  if (!validateEmail(userInput)) {
    errorMsgElement.textContent = errorMsg;
  } else {
    errorMsgElement.textContent = '';
    contactForm.submit();
  }
});
