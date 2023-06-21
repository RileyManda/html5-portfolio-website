import { detailscontent } from './data.js';

export const openDetailView = (detailscontent,index) => {
  const card = document.getElementById(`card-${index}`);
  const detailViewImage = detailscontent[index].detailimage;
  card.style.backgroundImage = `url('${detailViewImage}')`;
};
