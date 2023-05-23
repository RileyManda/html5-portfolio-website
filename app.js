const workcards = [
  {
    title: 'Multi-Post Stories',
    subtitle: 'Gain+Glory',
    image: './assets/images/mobile/img-placeholder.png',
    tags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    projectLink: '',
  },
  {
    title: 'Multi-Post Stories',
    subtitle: 'Gain+Glory',
    image: 'path/to/image2.jpg',
    tags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    projectLink: '',
  },
  {
    title: 'Multi-Post Stories',
    subtitle: 'Gain+Glory',
    image: 'path/to/image2.jpg',
    tags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    projectLink: '',
  },
  {
    title: 'Multi-Post Stories',
    subtitle: 'Gain+Glory',
    image: 'path/to/image2.jpg',
    tags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    projectLink: '',
  },
  {
    title: 'Multi-Post Stories',
    subtitle: 'Gain+Glory',
    image: 'path/to/image2.jpg',
    tags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    projectLink: '',
  },
  {
    title: 'Multi-Post Stories',
    subtitle: 'Gain+Glory',
    image: 'path/to/image2.jpg',
    tags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    projectLink: '',
  },
];
export default workcards;
const openNav = function openNavHandler() {
  document.querySelector('.mobile-menu').style.display = 'block';
};

const closeNav = function closeNavHandler() {
  document.querySelector('.mobile-menu').style.display = 'none';
};

document.querySelector('#open-nav').addEventListener('click', openNav);
document.querySelector('#close-nav').addEventListener('click', closeNav);
