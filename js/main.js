// chart

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',

  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    
    datasets: [{
        label: 'Guests',
        data: [19, 13, 15, 7, 17, 25, 19],
        backgroundColor: ['rgba(248, 101, 73, 1)'],
        barPercentage: 0.15,
        borderWidth: 2,
        borderColor: ['rgba(248, 101, 73, 1)'],
        borderRadius: 10,
        borderSkipped: false,
 
      },

      {
        label: 'Registered',
        data: [40, 26, 29, 21, 37, 35, 26],
        backgroundColor: ['rgba(237, 239, 239, 1)'],
        barPercentage: 0.15,
        borderWidth: 0,
        borderRadius: 5,
        borderSkipped: false,
      },
    ]
  },
  options: {

    scales: {
      x: {
        stacked: true,
        grid: {
          color: 'transparent',
        },
        label: {
          borderRadius: 10,
        }
      },



    }
  }
});

// menu tabs
const tabsMenu = document.querySelectorAll('[data-tabs-menu]');

for (const menuButton of tabsMenu) {
  menuButton.addEventListener('click', () => {
    
    tabsMenu.forEach(item => {
      let iconImage = item.querySelector('.menu__icon-image');
    // console.log('iconImage: ', iconImage);
      if (menuButton == item) {
        item.classList.add('menu__icon--active');
        iconImage.classList.add('menu__icon-image--active');
      } else {
        item.classList.remove('menu__icon--active');
        iconImage.classList.remove('menu__icon-image--active');
      }
    });
  });
}

// menu hidden
const menu = document.querySelector('.menu');
const menuHidden = document.querySelector('.menu__start');
const dashboard = document.querySelector('.dashboard__container');

menuHidden.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  if(menu.classList.contains('hidden')) {
    dashboard.style.marginLeft = "0";
  } else {
    dashboard.style.marginLeft = "130px";
  };
  
});
// explore tabs

const tabsArea = document.querySelectorAll('[data-tabs-area]');
const tabsPlace = document.querySelectorAll('[data-tabs-place]');

for (const area of tabsArea) {
  area.addEventListener('click', () => {
    
    tabsArea.forEach(item => {
      if (area == item) {
        item.classList.add('explore__menu-item--active');
      } else {
        item.classList.remove('explore__menu-item--active');
      }
    });

    tabsPlace.forEach(place => {
      console.log('area.dataset.tabsArea: ', area.dataset.tabsArea);
      console.log('place.dataset.tabsPlace: ', place.dataset.tabsPlace);
      if(place.dataset.tabsPlace === area.dataset.tabsArea) {
        place.classList.remove('hidden');

      } else {
        place.classList.add('hidden');

      }
    });
  });
};


// gallery

lightGallery(document.getElementById('gallery-hash-demo'), {
  customSlideName: true,
  // prevHtml: '<span class="icon icon-prev">',
});

// swiper

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  // watchOverFlow: true,
  spaceBetween: 30,
  // slidesPerGroup: 1,
  // centeredSlides: false,
  // initialSlide: 0,
  slidesPerColumn: 1,
  loop: false,
  loopedSlides: 3,
  // loopFillGroupWithBlank: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});
