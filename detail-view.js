import { detailscontent } from './data.js';

const closeView = function closeNavHandler() {
  document.querySelector('.mobile-menu').style.display = 'none';
  document.querySelector('.detail-view').style.display = 'none';
};

const generateDetailView = (data) => {
  const detailView = document.createElement('div');
  detailView.classList.add('detail-view', 'hidden');
  detailView.id = 'detail-view';

  const detailViewContainer = document.createElement('div');
  detailViewContainer.classList.add('detail-view-container');

  const closeButton = document.createElement('button');
  closeButton.classList.add('detail-close-btn');
  closeButton.id = 'close-view';

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('image-container');

  const title = document.createElement('h2');
  title.classList.add('detail-title');
  title.id = 'detail-title';
  title.textContent = data.title;

  const tagList = document.createElement('ul');
  data.tags.forEach((tag) => {
    const tagItem = document.createElement('li');
    tagItem.textContent = tag;
    tagList.appendChild(tagItem);
  });

  const tags = document.createElement('div');
  tags.classList.add('detail-tags');
  tags.appendChild(tagList);

  const summary = document.createElement('div');
  summary.classList.add('detail-summary');
  summary.textContent = data.summary;

  const sourceButton = document.createElement('button');
  sourceButton.classList.add('detail-btn');
  sourceButton.textContent = 'See Source';
  const sourceLink = document.createElement('a');
  sourceLink.href = data.sourceLink;
  const sourceIcon = document.createElement('img');
  sourceIcon.src = './assets/icons/github-light.svg';
  sourceIcon.alt = 'GitHub icon';
  sourceLink.appendChild(sourceIcon);
  sourceButton.appendChild(sourceLink);

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('detail-btn-container');
  buttonContainer.appendChild(sourceButton);

  detailViewContainer.appendChild(closeButton);
  detailViewContainer.appendChild(imageContainer);
  detailViewContainer.appendChild(title);
  detailViewContainer.appendChild(tags);
  detailViewContainer.appendChild(summary);
  detailViewContainer.appendChild(buttonContainer);

  detailView.appendChild(detailViewContainer);

  return detailView;
};

const displayDetailView = () => {
  const detailViewContainer = document.getElementById('detail-view-container');

  detailscontent.forEach((data) => {
    const detailView = generateDetailView(data);
    detailView
      .querySelector('#close-view')
      .addEventListener('click', closeView);
    detailViewContainer.appendChild(detailView);
  });
};
displayDetailView();