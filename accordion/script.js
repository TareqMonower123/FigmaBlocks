$(document).ready(function () {
  // functionality for new accord
  $(".wak-accordion-container-item-icons-container").click(
    function () {
      const item = $(this).closest(".wak-accordion-container-item");

      if (item.hasClass("active")) {
        item.removeClass("active");
        item.find(".wak-accordion-container-item-content").slideUp(300);
        item.find(".wak-accordion-container-item-icons-icon-add").show();
        item.find(".wak-accordion-container-item-icons-icon-remove").hide();
      } else {
        item.addClass("active");
        item.find(".wak-accordion-container-item-content").slideDown(300);
        item.find(".wak-accordion-container-item-icons-icon-add").hide();
        item.find(".wak-accordion-container-item-icons-icon-remove").show();
      }
    }
  );
});
