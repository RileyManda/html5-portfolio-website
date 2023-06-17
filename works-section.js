import { workcards } from './data.js';
import { generateWorkCardHTML } from './workCardsUtils.js';
import { openDetailView } from './detailViewUtils.js';

const displayWorksCards = () => {
  const workCardsContainer = document.getElementById('works-cards-container');
  workcards.forEach((workCard, index) => {
    const cardHTML = generateWorkCardHTML(workCard, index);
    workCardsContainer.insertAdjacentHTML('beforeend', cardHTML);
  });
};

const initializeApp = () => {
  displayWorksCards();
};

initializeApp();
