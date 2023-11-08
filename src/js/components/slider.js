// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// init Swiper:
const swiper = new Swiper('.mySwiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  mousewheel: true,
  breakpoints: {
    // Коли розширення екрану менше або дорівнює 800px
    800: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
})


