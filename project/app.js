$(document).ready(function () {

  $('.pricing-slide').slick({
      arrows: true,
      centerPadding: '60px',
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
    {
      breakpoint: 1200,
      settings: {
        centerPadding: '40px',
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 770,
      settings: {
        centerPadding: '40px',
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
  });


  let screenHeight = $(window).height();

  $(window).scroll(function () {
    let currentPosition = $(this).scrollTop();
    if (currentPosition >= screenHeight) {
      $(".site-nav").addClass("site-nav-scroll");
    } else {
      $(".site-nav").removeClass("site-nav-scroll");
    }
  });

  $('.navbar-toggler').click(function(){
      $('.navbar-toggler i').toggleClass('fa-bars')
      $('.navbar-toggler i').toggleClass('fa-close')
  })

  function setActive(el){
  $(`.nav-link`).removeClass('current-section');
  $(`.nav-link[href="#${el}"]`).addClass("current-section");
}

function navScroll(){

  let currentSection = $('section[id]');
  currentSection.waypoint(function (direction) {
    if(direction == 'down'){
      let currentSectionId = $(this.element).attr('id');
      setActive(currentSectionId);
    }
  },{ offset: '150px' });

  currentSection.waypoint(function (direction) {
    if(direction == 'down'){
      let currentSectionId = $(this.element).attr('id');
      setActive(currentSectionId);
    }
  },{ offset: '-10%' });


  currentSection.waypoint(function (direction) {
    if(direction == 'up'){
      let currentSectionId = $(this.element).attr('id');
      setActive(currentSectionId);
    }
  },{ offset: '150px' });

  currentSection.waypoint(function (direction) {
    if(direction == 'up'){
      let currentSectionId = $(this.element).attr('id');
      setActive(currentSectionId);
    }
  },{ offset: '-10%' });
}

  navScroll();  

});


$(window).on('load', function(){
  $('#home').hide();
  $('.loader-container').fadeOut(500,function(){
    $(this).remove();
  });
  $('#home').show();
})

let wow1 = new WOW(
  {
    boxClass:     'wow1',      // default
    animateClass: 'animate__animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
)
wow1.init();

let wow2 = new WOW(
  {
    boxClass:     'wow2',      // default
    animateClass: 'animate__animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
)
wow2.init();