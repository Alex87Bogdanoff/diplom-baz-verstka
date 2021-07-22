/* Селект Header */
const element = document.querySelector('select');
const choices = new Choices(element, {
  searchEnabled: false
});

/* Клик Header */
const button = document.querySelectorAll('.list-item__btn');
const drop = document.querySelectorAll('.list-dropdown')

button.forEach(el => {
  el.addEventListener('click', (e) => {
    drop.forEach(el => { el.classList.remove(('list-dropdown--active')) })
    e.currentTarget.closest('li').querySelector('.list-dropdown').classList.toggle('list-dropdown--active');
    button.forEach(el => { el.classList.remove(('list-item__btn--active')) })
    e.currentTarget.closest('li').querySelector('.list-item__btn').classList.toggle('list-item__btn--active');
  });
});

document.addEventListener('click', (e) => {
  console.log(e.target)
  if (!e.target.classList.contains('list-dropdown') && !e.target.classList.contains('list-item__btn')) {
    drop.forEach(el => { el.classList.remove(('list-dropdown--active')) })
    button.forEach(el => { el.classList.remove(('list-item__btn--active')) })
  }
});

/* Слайдер Gallery */
const swiperGallery = new Swiper('.gallery__swiper', {
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

  speed: 600,
  spaceBetween: 50,
  slidesPerView: 3,
  slidesPerGroup: 3,
  slidesPerColumn: 2,
  slidesPerColumnFill: 'row',

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
$('#gallery__modal').attr('open-info');

$(document).ready(function () {

  $(".slide-hover").click(function () {
    $('#gallery__modal').fadeIn(300);
    var iddiv = $(this).attr("data-path");
    $('#' + iddiv).fadeIn(300);
    $('#gallery__modal').attr('open-info', iddiv);
    return false;
  });

  $('#gallery__modal, .modal__btn').click(function () {
    var iddiv = $("#gallery__modal").attr('open-info');
    $('#gallery__modal').fadeOut(300);
    $('#' + iddiv).fadeOut(300);
  });
});

/* Аккордеон Catalog */
$(function () {
  $("#italian__accordion").accordion({
    collapsible: true,
    heightStyle: "content"
  });
});

$(function () {
  $("#germany__accordion").accordion({
    collapsible: true,
    heightStyle: "content"
  });
});

$(function () {
  $("#france__accordion").accordion({
    collapsible: true,
    heightStyle: "content"
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
      $('.accordion').accordion("refresh");
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


/* Слайдер Events */
const swiperEvents = new Swiper('.events__swiper', {
  cssMode: true,
  widthStyle: 1650,

  speed: 600,
  spaceBetween: 50,
  slidesPerView: 3,
  slidesPerGroup: 3,
  slidesPerColumn: 2,
  slidesPerColumnFill: 'row',
});

/* Кнопка Events */
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.events__btn').addEventListener('click', function() {
      document.querySelector('.events-list__item:nth-child(n+4)').classList.toggle('events-active')
      document.querySelector('.events-list__item:nth-child(n+5)').classList.toggle('events-active')
      document.querySelector('.events-list__item:nth-child(n+3)').classList.toggle('events-active')
      document.querySelector('.events__btn').classList.toggle('events__btn-none')
  })
})
