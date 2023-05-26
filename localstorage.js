//Local Storage
const form = document.querySelector(".contact-form");
const fullName = document.querySelector("#full-name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const contactFormDetails = {
    name: String,
    email: String,
    message: String
};

form.addEventListener('input', () => {
    contactFormDetails.name = fullName.value;
    contactFormDetails.email = email.value;
    contactFormDetails.message = message.value;

    localStorage.setItem('contactFormDetails', JSON.stringify(contactFormDetails));
});

window.onload = () => {
    const contactData = JSON.parse(localStorage.getItem('contactFormDetails'));

    if(contactData) {
        fullName.value = contactData.name;
        email.value = contactData.email;
        message.value = contactData.message;
    }
};