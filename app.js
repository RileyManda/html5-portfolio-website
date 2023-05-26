const openNav = function openNavHandler() {
  document.querySelector('.mobile-menu').style.display = 'block';
};

const closeView = function closeNavHandler() {
  document.querySelector('.mobile-menu').style.display = 'none';
};

const openDetailView = function openDetailHandler() {
  const detailView = document.querySelector('.detail-view');
  const blurOverlay = document.createElement('div');
  blurOverlay.classList.add('blur-overlay');
  document.body.appendChild(blurOverlay);

  detailView.style.display = 'block';
  document.body.classList.add('modal-open');
};

document.querySelector('#open-nav').addEventListener('click', openNav);
document.querySelector('#close-view').addEventListener('click', closeView);
document.querySelector('#project-btn').addEventListener('click', openDetailView);
