// Init Swiper
var swiper = new Swiper('.swiper', {
    // Install Plugin To Swiper
    modules: [myPlugin],
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
    },
    // Optional Parameter
    spaceBetween: 5,
    slidesPerView: 2,
    loop: false,
    freeMode: true,
    loopAdditionalSlides: 5,
    speed: 600,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
            // when window width is >= 640px
            640: {
                slidesPerView: 6,
                slidesPerGroup: 6,
                freeMode: false
            }
        },
    // Enable debugger
    debugger: true,
  });