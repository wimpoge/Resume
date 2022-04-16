const swiper = new Swiper('.swiper', {
    effect: "cube",
        grabCursor: true,
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
   
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  });