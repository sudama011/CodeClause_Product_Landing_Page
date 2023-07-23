// jQuery function to show/hide product details and handle image slider
$(document).ready(function () {
  $(".details-btn").on("click", function () {
    const productDetails = $(this).siblings(".product-details");
    const sliderImages = productDetails.find(".slider img");
    const sliderContainer = productDetails.data("slider-container");

    productDetails.slideToggle();
    $(".product-details").not(productDetails).slideUp();

    // Reset the slider to the first image when showing details
    currentSlide[sliderContainer] = 0;
    sliderImages.hide().eq(0).show();
  });

  // Image slider functionality
  const currentSlide = {};

  $(".next-btn").on("click", function () {
    const sliderContainer = $(this)
      .closest(".product-details")
      .data("slider-container");
    const sliderImages = $(
      `.product-details[data-slider-container="${sliderContainer}"] .slider img`
    );
    showNextSlide(sliderImages, sliderContainer);
  });

  $(".prev-btn").on("click", function () {
    const sliderContainer = $(this)
      .closest(".product-details")
      .data("slider-container");
    const sliderImages = $(
      `.product-details[data-slider-container="${sliderContainer}"] .slider img`
    );
    showPrevSlide(sliderImages, sliderContainer);
  });

  function showNextSlide(sliderImages, sliderContainer) {
    sliderImages.eq(currentSlide[sliderContainer]).hide();
    currentSlide[sliderContainer] =
      (currentSlide[sliderContainer] + 1) % sliderImages.length;
    sliderImages.eq(currentSlide[sliderContainer]).show();
  }

  function showPrevSlide(sliderImages, sliderContainer) {
    sliderImages.eq(currentSlide[sliderContainer]).hide();
    currentSlide[sliderContainer] =
      (currentSlide[sliderContainer] - 1 + sliderImages.length) %
      sliderImages.length;
    sliderImages.eq(currentSlide[sliderContainer]).show();
  }
});
