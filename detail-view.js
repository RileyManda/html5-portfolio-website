import { workcards } from './data.js';
import { detailscontent } from './data.js';

const closeView = () => {
  const blurOverlay = document.querySelector('.blur-overlay');
  document.querySelector('.mobile-menu').style.display = 'none';
  document.querySelector('.detail-view').style.display = 'none';
  blurOverlay.remove();
};

const generateDetailView = (index) => {
  const {
    title,
    tags,
    summary,
    desktopsummary,
    liveLink,
    sourceLink,
    detailimage,
  } = detailscontent[index];
  const detailView = document.createElement('div');
  detailView.classList.add('detail-view', 'hidden');
  detailView.id = `detail-view-${index}`;

  const detailViewContainer = document.createElement('div');
  detailViewContainer.classList.add('detail-view-container');

  const closeButton = document.createElement('button');
  closeButton.classList.add('detail-close-btn');
  closeButton.id = `close-view-${index}`;

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('image-container');

const image = document.createElement('img');
image.src = detailimage;
image.alt = 'Project Image';
imageContainer.appendChild(image);

  const detailTitle = document.createElement('h3');
  detailTitle.classList.add('detail-title');
  detailTitle.id = 'detail-title';

  if (window.innerWidth >= 768) {
    const titleText = 'Keeping track of hundreds of<br>components';
    detailTitle.innerHTML = titleText;
  } else {
    detailTitle.textContent = 'Keeping track of hundreds of components';
  }

  const tagList = document.createElement('ul');
  const allowedTags = [];

  if (window.innerWidth > 768) {
    allowedTags.push(
      'Codekit',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen'
    );
  } else {
    allowedTags.push('Ruby on Rails', 'CSS', 'Javascript');
  }

  tags.forEach((tag) => {
    if (allowedTags.includes(tag)) {
      const tagItem = document.createElement('li');
      tagItem.textContent = tag;
      tagList.appendChild(tagItem);
    }
  });

  const detailTags = document.createElement('div');
  detailTags.classList.add('detail-tags');
  detailTags.appendChild(tagList);

  const detailSummary = document.createElement('div');
  detailSummary.classList.add('detail-summary');

  if (window.innerWidth > 768) {
    detailSummary.innerHTML = `${desktopsummary}<br>`;
  } else {
    detailSummary.innerHTML = `${summary}<br>`;
  }

  const sourceButton1 = document.createElement('button');
  sourceButton1.classList.add('detail-btn');
  sourceButton1.textContent = 'See live';
  sourceButton1.addEventListener('click', () => {
    window.open(liveLink, '_blank');
  });
  const sourceLink1 = document.createElement('a');
  sourceLink1.href = liveLink;
  const sourceIcon1 = document.createElement('img');
  sourceIcon1.src = './assets/icons/live-icon.svg';
  sourceIcon1.alt = 'Live icon';
  sourceLink1.appendChild(sourceIcon1);
  sourceButton1.appendChild(sourceLink1);

  const sourceButton2 = document.createElement('button');
  sourceButton2.classList.add('detail-btn');
  sourceButton2.textContent = 'See source';
  sourceButton2.addEventListener('click', () => {
    window.open(sourceLink, '_blank');
  });
  const sourceLink2 = document.createElement('a');
  sourceLink2.href = sourceLink;
  const sourceIcon2 = document.createElement('img');
  sourceIcon2.src = './assets/icons/github-light.svg';
  sourceIcon2.alt = 'GitHub icon';
  sourceLink2.appendChild(sourceIcon2);
  sourceButton2.appendChild(sourceLink2);

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('detail-btn-container');
  buttonContainer.appendChild(sourceButton1);
  buttonContainer.appendChild(sourceButton2);

  detailViewContainer.appendChild(closeButton);
  detailViewContainer.appendChild(imageContainer);
  detailViewContainer.appendChild(detailTitle);
  detailViewContainer.appendChild(detailTags);
  detailViewContainer.appendChild(detailSummary);
  detailViewContainer.appendChild(buttonContainer);

  detailView.appendChild(detailViewContainer);

  return detailView;
};

export const displayDetailView = () => {
  const detailViewContainer = document.getElementById('detail-view-container');

  detailscontent.forEach((data, index) => {
    const detailViewImage = detailscontent[index].detailimage;
    const detailView = generateDetailView(index);
    const closeButton = detailView.querySelector(`#close-view-${index}`);
    closeButton.addEventListener('click', closeView);
    detailViewContainer.appendChild(detailView);
  });
};

displayDetailView();
