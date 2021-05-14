/* Селект Header */
const element = document.querySelector('select');
const choices = new Choices(element, {
  searchEnabled: false
});

/* Клик Header */
document.querySelector('.list-item__btn-1').addEventListener('click', function () {
  document.querySelector('.list-dropdown-1').classList.toggle('is-active')
})

document.querySelector('.list-item__btn-2').addEventListener('click', function () {
  document.querySelector('.list-dropdown-2').classList.toggle('is-active')
})

document.querySelector('.list-item__btn-3').addEventListener('click', function () {
  document.querySelector('.list-dropdown-3').classList.toggle('is-active')
})

document.querySelector('.list-item__btn-4').addEventListener('click', function () {
  document.querySelector('.list-dropdown-4').classList.toggle('is-active')
})

document.querySelector('.list-item__btn-5').addEventListener('click', function () {
  document.querySelector('.list-dropdown-5').classList.toggle('is-active')
})



/* Слайдер Gallery */
const swiperGallery = new Swiper('.gallery__swiper', {
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
    320: {
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerColumn: 1,
    },

    460: {
      spaceBetween: 34,
      slidesPerView: 2,
      slidesPerGroup: 2,
      slidesPerColumn: 1,
    },

    768: {
      spaceBetween: 34,
      slidesPerView: 2,
      slidesPerGroup: 2,
      slidesPerColumn: 2,
    },

    1024: {
      spaceBetween: 50,
      slidesPerView: 2,
      slidesPerGroup: 2,
      slidesPerColumn: 2,
    },

    1920: {
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerGroup: 3,
      slidesPerColumn: 2,
    },
  },
});

/* Клик Gallery */
$('#gallery__hover').attr('open-info');

$(document).ready(function () {

  $(".slide-hover").click(function () {
    $('#gallery__hover').fadeIn(300);
    var iddiv = $(this).attr("data-path");
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
