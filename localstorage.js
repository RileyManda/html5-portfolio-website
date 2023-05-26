const form = document.querySelector('.contact-form');
const fullName = document.querySelector('#full-name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');

// Load form data from local storage
window.addEventListener('DOMContentLoaded', () => {
  const contactFormDetails = JSON.parse(
    localStorage.getItem('contactFormDetails'),
  );

  if (contactFormDetails) {
    fullName.value = contactFormDetails.name;
    email.value = contactFormDetails.email;
    message.value = contactFormDetails.message;
  }
});

// Save form data to local storage
form.addEventListener('input', () => {
  const contactFormDetails = {
    name: fullName.value,
    email: email.value,
    message: message.value,
  };

  localStorage.setItem(
    'contactFormDetails',
    JSON.stringify(contactFormDetails),
  );
});
