import { workcards } from './data.js';

const generateworkCardHTML = (workCard) => {
  const { title, subtitle, tags } = workCard;
  const tagsHTML = tags.map((tag) => `<li>${tag}</li>`).join('');
  const cardHTML = `
    <div class="works-card">
      <div class="works-card-content">
        <h3 class="works-card-title">${title}<span><br>${subtitle}</span></h3>
        <div class="works-tags">
          <ul>
            ${tagsHTML}
          </ul>
        </div>
        <button class="project-btn" onclick="openDetailView()">See Project</button>
      </div>
    </div>
  `;

  return cardHTML;
};

const displayWorksCards = () => {
  const workCardsContainer = document.getElementById('works-cards-container');

  workcards.forEach((workCard) => {
    const cardHTML = generateworkCardHTML(workCard);
    workCardsContainer.insertAdjacentHTML('beforeend', cardHTML);
  });
};

displayWorksCards();
