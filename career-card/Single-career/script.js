$(document).ready(function () {
  // mobile stickey trigger bar
  $("#sticky-trigger").click(function () {
    $(".wak-single-career-content-bottom-sticky-content").slideToggle(300);
  });

  // file upload view
  $(".wak-single-career-apply-form-file-input").each(function () {
    var defaultText = $(this).find(".wak-single-career-apply-form-file-input-icon p").text();
    $(this).data("default-text", defaultText);
  });

  $('.wak-single-career-apply-form-file-input input[type="file"]').on("change", function (e) {
    var fileName = e.target.files[0]?.name;
    var container = $(this).closest(".wak-single-career-apply-form-file-input");
    var displayElement = container.find(".wak-single-career-apply-form-file-input-icon p");

    displayElement.text(fileName || container.data("default-text"));
  });
});
