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
    1800: {
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerGroup: 3,
      slidesPerColumn: 2,
    },

    1300: {
      spaceBetween: 34,
      slidesPerView: 2,
      slidesPerGroup: 2,
      slidesPerColumn: 2,
    },

    768: {
      spaceBetween: 34,
      slidesPerView: 2,
      slidesPerGroup: 2,
      slidesPerColumn: 2,
    },

    320: {
      spaceBetween: 1,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerColumn: 1,
    },
  },
});

/* Событие клик Header */
function myFunction1() {
  document.getElementById("scroll--1").classList.toggle("is-active");
}

function myFunction2() {
  document.getElementById("scroll--2").classList.toggle("is-active");
}

function myFunction3() {
  document.getElementById("scroll--3").classList.toggle("is-active");
}

function myFunction4() {
  document.getElementById("scroll--4").classList.toggle("is-active");
}

function myFunction5() {
  document.getElementById("scroll--5").classList.toggle("is-active");
}

window.onclick = function (event) {
  if (!event.target.matches('.list__title')) {

    var dropdowns = document.getElementsByClassName("list-scroll");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('is-active')) {
        openDropdown.classList.remove('is-active');
      }
    }
  }
}

/* Клик Gallery */
$(document).ready(function () {
  
  $(".mymagicoverbox").click(function () {
    $('#myfond_gris').fadeIn(300);
    var iddiv = $(this).attr("iddiv");
    $('#' + iddiv).fadeIn(300);
    $('#myfond_gris').attr('opendiv', iddiv);
    return false;
  });

  $('#myfond_gris, .coverbox__btn').click(function () {
    var iddiv = $("#myfond_gris").attr('opendiv');
    $('#myfond_gris').fadeOut(300);
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


