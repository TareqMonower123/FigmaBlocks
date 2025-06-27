$(document).ready(function () {
  // active class for first accord
  const firstItem = $(".wak-accordion-container-item").first();
  firstItem.addClass("active");
  firstItem.find(".wak-accordion-container-item-content-text").show();

  // functionality for new accord
  $(".wak-accordion-container-item-content-title, .wak-accordion-container-item-icons").click(
    function () {
      const item = $(this).closest(".wak-accordion-container-item");

      if (item.hasClass("active")) {
        item.removeClass("active");
        item.find(".wak-accordion-container-item-content-text").slideUp(300);
      } else {
        $(".wak-accordion-container-item").removeClass("active");
        $(".wak-accordion-container-item-content-text").slideUp(300);

        item.addClass("active");
        item.find(".wak-accordion-container-item-content-text").slideDown(300);
      }
    }
  );
});
