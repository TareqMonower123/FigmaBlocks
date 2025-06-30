$(document).ready(function () {
  var splide = new Splide("#main-slider", {
    type: "slide",
    perPage: 3,
    arrows: true,
    pagination: false,
    classes: {
      arrows: "wak-blog-slider-container-arrows",
      arrow: "wak-blog-slider-container-arrows-button",
      prev: "wak-blog-slider-container-arrows-button-prev",
      next: "wak-blog-slider-container-arrows-button-next",
    },

    breakpoints: {
      1024: {
        perPage: 2,
      },
      767: {
        perPage: 1,
      },
    },
  });

  splide.mount();
});
