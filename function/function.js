



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
