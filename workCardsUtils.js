import { workcards } from './data.js';

export const generateWorkCardHTML = (workCard, index) => {
  const { title, subtitle, tags, image } = workCard; // Destructure the image property
  const tagsHTML = tags.map((tag) => `<li>${tag}</li>`).join('');
  const cardHTML = `
    <div class="works-card" style="background-image: url('${image}')"> <!-- Use the image variable here -->
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
