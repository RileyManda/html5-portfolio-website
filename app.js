const openNav = () => {
  document.querySelector('.mobile-menu').style.display = 'block';
};

const closeView = () => {
  document.querySelector('.mobile-menu').style.display = 'none';
};

const openDetailView = (index) => {
  const detailViews = document.querySelectorAll('.detail-view');
  const detailView = detailViews[index];

  const blurOverlay = document.createElement('div');
  blurOverlay.classList.add('blur-overlay');
  document.body.appendChild(blurOverlay);

  detailView.style.display = 'block';
  document.body.classList.add('modal-open');
};

document.querySelector('#open-nav').addEventListener('click', openNav);
document.querySelector('#close-nav').addEventListener('click', closeView);
document.querySelector('#project-btn').addEventListener('click', openDetailView);
