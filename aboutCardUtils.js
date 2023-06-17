export const generateAboutCardHTML = (aboutCard) => {
  const { title, tags, icon } = aboutCard;
  const tagsHTML = tags.map((tag) => `<li>${tag}</li>`).join('');
  const cardHTML = `
    <div class="about-card">
      <div class="icon-container">
        <img src="${icon}" alt="${title} image">
      </div>
      <div class="about-card-content">
        <h3 class="about-card-title">${title}</h3>
        <div class="about-tags">
          <ul>
            ${tagsHTML}
          </ul>
        </div>
      </div>
    </div>
  `;

  return cardHTML;
};
