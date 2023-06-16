import { workcards } from './data.js';
import { displayDetailView } from './detail-view.js';

let selectedCardId = null;

const generateworkCardHTML = (workCard, cardId) => {
  const { title, subtitle, tags, image } = workCard; // Add 'image' to destructuring assignment
  const tagsHTML = tags.map((tag) => `<li>${tag}</li>`).join('');
  const cardHTML = `
    <div class="works-card" style="background-image: url('${image}')">
      <div class="works-card-content">
        <h3 class="works-card-title">${title}<span><br>${subtitle}</span></h3>
        <div class="works-tags">
          <ul>
            ${tagsHTML}
          </ul>
        </div>
        <button class="project-btn" onclick="openDetailView(${cardId}, '${image}')">See Project</button> 
      </div>
    </div>
  `;

  return cardHTML;
};

const openDetailView = (cardId, detailViewImage) => {
  // Add 'detailViewImage' as a parameter
  selectedCardId = cardId;
  const card = document.getElementById(`card-${cardId}`);
  card.style.backgroundImage = `url('${detailViewImage}')`;
};

const displayWorksCards = () => {
  const workCardsContainer = document.getElementById('works-cards-container');
  workcards.forEach((workCard, index) => {
    const cardHTML = generateworkCardHTML(workCard, index);
    workCardsContainer.insertAdjacentHTML('beforeend', cardHTML);
  });
};

displayWorksCards();
