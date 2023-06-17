import { detailscontent } from './data/data.js';

export const openDetailView = (index) => {
  const card = document.getElementById(`card-${index}`);
  const detailViewImage = detailscontent[index].detailimage;
  card.style.backgroundImage = `url('${detailViewImage}')`;
};
