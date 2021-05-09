/* Слайдер Gallery */
const swiperGallery = new Swiper ('.gallery__swiper', {
  speed: 600,
  spaceBetween: 50,
  slidesPerView: 3,
  slidesPerGroup: 3,
  slidesPerColumn: 2,
  slidesPerColumnFill: 'row',

  pagination: {
    el: '.swip__pagination',
    type: 'fraction',
  },

  navigation: {
    nextEl: '.swip__btn-next',
    prevEl: '.swip__btn-prev',
  },

  keyboard: {
    enable: true,
    onlyInViewport: true,
    pageUpDown: false,
  },

  breakpoints: {
    1: {
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerColumn: 1,
    },

    321: {
      spaceBetween: 34,
      slidesPerView: 2,
      slidesPerGroup: 2,
      slidesPerColumn: 2,
    },
    
    769: {
      spaceBetween: 34,
      slidesPerView: 2,
      slidesPerGroup: 2,
      slidesPerColumn: 2,
    },

    1801: {
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerGroup: 3,
      slidesPerColumn: 2,
    },
  },
});

/* Клик Gallery */
$(document).ready(function () {
  
  $(".slide-hover").click(function () {
    $('#gallery__hover').fadeIn(300);
    var iddiv = $(this).attr("id-hover");
    $('#' + iddiv).fadeIn(300);
    $('#gallery__hover').attr('open-info', iddiv);
    return false;
  });

  $('#gallery__hover, .hover__btn').click(function () {
    var iddiv = $("#gallery__hover").attr('open-info');
    $('#gallery__hover').fadeOut(300);
    $('#' + iddiv).fadeOut(300);
  });
});

/* Аккордеон Catalog */
$(function () {
  $("#accordion").accordion({
    collapsible: true
  });
});

/* Табы Catalog */
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.tabs-country__btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.tabs__item').forEach(function (tabContent) {
        tabContent.classList.remove('tabs__item-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tabs__item-active')

      document.querySelectorAll('.tabs-country__btn').forEach(function (tabContent) {
        tabContent.classList.remove('tabs-country__btn-active')
      })
      document.querySelector(`[data-path="${path}"]`).classList.add('tabs-country__btn-active')
    })
  })
  document.querySelectorAll('.accordion__artist-name').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.artist__item').forEach(function (tabContent) {
        tabContent.classList.remove('artist__item-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('artist__item-active')

      document.querySelectorAll('.accordion__artist-name').forEach(function (tabContent) {
        tabContent.classList.remove('accordion__artist-name-active')
      })
      document.querySelector(`[data-path="${path}"]`).classList.add('accordion__artist-name-active')
    })
  })
})

const element = document.querySelector('select');
const choices = new Choices(element, {
  searchEnabled: false
});


