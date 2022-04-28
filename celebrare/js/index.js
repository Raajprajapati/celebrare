
$("#close").click(()=>{
    $("#menu").css("left","-100%");
    $("#open").css("display","inline");
    $("#close").css("display","none");
})
$("#open").click(()=>{
    $("#menu").css("left","0");
    $("#close").css("display","inline");
    $("#open").css("display","none");
})

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate:0,
      stretch: 0,
      depth: 0,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
          el: ".swiper-pagination",
        },

  });