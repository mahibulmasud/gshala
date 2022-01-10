let carouselIndicatorButtons = document.querySelectorAll('#custom-carousel-indicators button')
document.querySelectorAll('.carousel').forEach((button) => {
    button.addEventListener('slid.bs.carousel', function () {
        let activeIndicator = document.querySelector('.carousel-indicators button.active')

        carouselIndicatorButtons.forEach((button2) => {
            button2.classList.remove('active')
        })

        document.querySelector('#custom-carousel-indicators button[data-bs-slide-to="'
            + activeIndicator.dataset.bsSlideTo + '"]').classList.add('active')
    });
});




const nextIcon = '<img src="../images/prev-btn.png" class="nexticon np-icon"/>  ';
const prevIcon = '<img src="../images/prev-btn.png" class="previcon np-icon"/> ';

$('.owl-carousel').owlCarousel({
    loop: true,
    items: 3,
    margin: 50,
    nav: true,
    navText:[
        prevIcon,
        nextIcon
    ],
    autoplay:true,
    dots:false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      768: {
        items: 3
      },
      1300: {
        items: 3
      },
      1400:{
        items: 3
      }
    }
  })