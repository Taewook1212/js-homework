import { renderSpinner, renderSwiper } from './dom/Loading.js';
import { delayP } from './utils/dealy.js';

renderSpinner('.swiper-container');

async function renderSpinnerLoading() {
  try {
    await delayP(3000);

    gsap.to('.loadingSpinner', {
      opacity: 0,
      onComplete() {
        $('.loadingSpinner').remove();
      },
    });

    renderSwiper('.swiper-container');
  } catch (error) {}
}
renderSpinnerLoading();

// const swiper = new Swiper('.swiper-container', {
//   direction: 'vertical',
//   mousewheel: {},
//   effect: 'cube',
//   loop: true,
//   keyboard: {
//     enabled: true,
//     onlyInViewport: false,
//   },
// });
