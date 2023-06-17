import { aboutcards } from './data/data.js';
import { generateAboutCardHTML } from './aboutCardUtils.js';

const displayAboutCards = () => {
  const aboutCardsContainer = document.getElementById('about-cards-container');
  aboutcards.forEach((aboutCard) => {
    const cardHTML = generateAboutCardHTML(aboutCard);
    aboutCardsContainer.insertAdjacentHTML('beforeend', cardHTML);
  });
};

const initializeApp = () => {
  displayAboutCards();
};

initializeApp();
