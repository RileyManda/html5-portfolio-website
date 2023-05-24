const title = 'Keeping track of hundreds of components';
const words = title.split(' ');
const lineBreaks = words
  .map((word) => (word === 'of' ? `${word}<br>` : word))
  .join(' ');
document.getElementById('detail-title').innerHTML = lineBreaks;
