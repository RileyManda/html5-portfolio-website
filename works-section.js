import { workcards, detailscontent } from './data.js'; // Import the detailscontent array
import { displayDetailView } from './detail-view.js';

let selectedCardId = null;

const generateworkCardHTML = (workCard, index) => {
  const { title, subtitle, tags } = workCard;
  const tagsHTML = tags.map((tag) => `<li>${tag}</li>`).join('');
  const cardImage = workcards[index].image;
  const cardHTML = `
    <div class="works-card" style="background-image: url('${cardImage}')">
      <div class="works-card-content">
        <h3 class="works-card-title">${title}<span><br>${subtitle}</span></h3>
        <div class="works-tags">
          <ul>
            ${tagsHTML}
          </ul>
        </div>
        <button class="project-btn" onclick="openDetailView(${index})">See Project</button>
      </div>
    </div>
  `;

  return cardHTML;
};

const openDetailView = (data, index) => {
  const card = document.getElementById(`card-${index}`);
  const detailViewImage = detailscontent[index].detailimage;
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
