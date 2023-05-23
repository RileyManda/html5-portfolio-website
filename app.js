const openNav = function openNavHandler() {
  document.querySelector('.mobile-menu').style.display = 'block';
};

const closeView = function closeNavHandler() {
  document.querySelector('.mobile-menu').style.display = 'none';
  document.querySelector('.detail-view').style.display = 'none';
};

const openDetailView = function openDetailHandler() {
  document.querySelector('.detail-view').style.display = 'block';
};

document.querySelector('#open-nav').addEventListener('click', openNav);
document.querySelector('#close-view').addEventListener('click', closeView);
document.querySelector('#project-btn').addEventListener('click', openDetailView);
