$(document).ready(function () {
  // functionality for new accord
  $(".wak-accordion-container-item-content-title, .wak-accordion-container-item-icons").click(
    function () {
      const item = $(this).closest(".wak-accordion-container-item");

      if (item.hasClass("active")) {
        item.removeClass("active");
        item.find(".wak-accordion-container-item-content-text").slideUp(300);
      } else {
        item.addClass("active");
        item.find(".wak-accordion-container-item-content-text").slideDown(300);
      }
    }
  );
});
