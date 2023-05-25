const generateDetailViewHTML = () => {
  const title = 'Keeping track of hundreds of components';
  const words = title.split(' ');
  const lineBreaks = words
    .map((word) => (word === 'of' ? `${word}<br>` : word))
    .join(' ');

  const detailViewHTML = `
    <div class="detail-view" id="detail-view">
      <div class="detail-view-container">
        <button onclick="closeView()" class="detail-close-btn" id="close-view"></button>
           
        <div class="image-container"></div>
        <h2 class="detail-title" id="detail-title">${lineBreaks}</h2>
        <div class="detail-tags">
          <ul>
            <li>Ruby on Rails</li>
            <li>CSS</li>
            <li>Javascript</li>
          </ul>
        </div>
        <div class="detail-summary">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.</p>
          <p>Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
          1960s.</p>
        </div>
        <div class="detail-btn-container">
          <button class="detail-btn">See Live<a href="https://rileymanda.github.io/portfolio-website/"><img src="./assets/icons/live-icon.svg"
          alt="Twitter icon"></a></button>
          <button class="detail-btn">See Source<a href="https://github.com/RileyManda/portfolio-website"><img src="./assets/icons/github-light.svg" alt="Twitter icon"></a></button>
        </div>
      </div>
    </div>
  `;

  return detailViewHTML;
};

const displayDetailView = () => {
  const detailViewContainer = document.getElementById('detail-view-container');
  const detailViewHTML = generateDetailViewHTML();
  detailViewContainer.innerHTML = detailViewHTML;
  detailViewContainer.classList.add('hidden');
};
displayDetailView();