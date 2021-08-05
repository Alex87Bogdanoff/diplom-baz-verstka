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

/* Кнопка Events */
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.events__btn').addEventListener('click', function() {
      document.querySelector('.events-list__item:nth-child(n+4)').classList.toggle('events-active')
      document.querySelector('.events-list__item:nth-child(n+5)').classList.toggle('events-active')
      document.querySelector('.events-list__item:nth-child(n+3)').classList.toggle('events-active')
      document.querySelector('.events__btn').classList.toggle('events__btn-none')
  })
})

/* Слайдер Publishes */
const publishesSwiper = new Swiper('.publishes__swiper-container', {
  pagination: {
    el: '.publishes__swiper-pagination',
    type: 'fraction',
  },

  navigation: {
    nextEl: '.publishes__swiper-button-next',
    prevEl: '.publishes__swiper-button-prev',
  },

  keyboard: {
    enable: true,
    onlyInViewport: true,
    pageUpDown: false,
  },

  speed: 600,
  spaceBetween: 50,
  slidesPerView: 3,
  slidesPerGroup: 2,


  breakpoints: {

    320: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 49,
      slidesPerGroup: 2,
    },

    1920: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 2,
    },
  }
});


/* Слайдер Projects */
const projectsSwiper = new Swiper('.projects__swiper-container', {

  navigation: {
        nextEl: '.projects__swiper-button-next',
        prevEl: '.projects__swiper-button-prev',
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


  breakpoints: {
    540: {
        slidesPerView: 2,
        spaceBetween: 10,
        slidesPerGroup: 2,
    },
    768: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2,
    },
    1024: {
        slidesPerView: 2,
        spaceBetween: 50,
        slidesPerGroup: 2,
    },
    1900: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
    }
  }
});

/* Tooltips Projects */
tippy('#tooltip-one', {
  content: 'Пример современных тенденций - современная методология разработки',
});
tippy('#tooltip-two', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
});
tippy('#tooltip-three', {
  content: 'В стремлении повысить качество',
});

/* Карта Contacts */
ymaps.ready(init);
function init(){
  var myMap = new ymaps.Map("map", {
    center: [55.758468, 37.621088],
    zoom: 14,
    controls:  []
  });

  var zoomControl = new ymaps.control.ZoomControl({
    options: {
      size: "small",
      position: {
        left: 'auto',
        right: 10,
        top: 265
      }
    }
  });
  myMap.controls.add(zoomControl);

  var GeolocationControl = new ymaps.control.GeolocationControl({
    options: {
      position: {
        left: 'auto',
        right: 10,
        top: 360
      }
    }
  });
  myMap.controls.add(GeolocationControl);

  var myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "Point"
    }
  });

  var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../img/contacts_img/maps-icon.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [20, 20]
  });

  myMap.geoObjects.add(myGeoObject);
  myMap.geoObjects.add(myPlacemark);
}

/* Форма Contacts */
var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7(999) 999-99-99");
im.mask(selector);
const regex = /[\\\/:*?"<>|%;]+/;

new JustValidate('.contacts__form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 10
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
  },
  messages: {
    name: {
      minLength: 'Имя должно содержать более двух символов',
      maxLength: 'Имя не должно содержать более десяти символов',
      required: 'Напишите ваше имя',
      function: 'Недопустиый формат'
    },
    tel: {
      required: 'Укажите контактный телефон',
      function: 'Номер указан неверно'
    },
  },
});
