$(document).ready(function () {

  
  const $button = $(".wak-news-listing-filter-wrapper-button");
  const $inputs = $(".wak-news-listing-filter-wrapper-input");
  const filterQuery = {};

  function updateButtonState() {
    const hasSelection = Object.values(filterQuery).some((arr) => arr.length);
    $button
      .prop("disabled", !hasSelection)
      .toggleClass("active", hasSelection)
      .off("click")
      .on("click", clearAll);
  }

  function updateUrl() {
    const params = new URLSearchParams(location.search);
    Object.keys(filterQuery).forEach((k) => {
      const vals = filterQuery[k];
      if (vals && vals.length) params.set(k, vals.join(","));
      else params.delete(k);
    });
    history.replaceState(null, "", `${location.pathname}?${params}`);
  }

  function clearAll() {
    $inputs.find("input[type=checkbox]").prop("checked", false);
    Object.keys(filterQuery).forEach((k) => (filterQuery[k] = []));

    $inputs.each((_, el) => {
      const $c = $(el);
      $c.find(".selected").text($c.find(".select-box").data("placeholder")).removeClass("active");
    });

    updateButtonState();
    updateUrl();
  }

  // open / close
  $(".wak-news-listing-filter-wrapper-input .select-box").on("click", function (e) {
    e.stopPropagation();
    $inputs.not($(this).parent()).removeClass("open");
    $(this).parent().toggleClass("open");
  });

  // stop label
  $inputs.on("click", "label, input[type=checkbox]", (e) => e.stopPropagation());

  // checkbox change
  $inputs.on("change", "input[type=checkbox]", function () {
    const $container = $(this).closest(".wak-news-listing-filter-wrapper-input");
    const key = $container.data("filter-key");

    filterQuery[key] = $container
      .find("input:checked")
      .map((_, cb) => cb.value)
      .get();

    updateButtonState();
    updateUrl();
  });

  $(document).on("click", () => $inputs.removeClass("open"));

  const params = new URLSearchParams(location.search);
  params.forEach((val, key) => {
    val.split(",").forEach((v) => {
      $(`.wak-news-listing-filter-wrapper-input[data-filter-key="${key}"]`)
        .find(`input[value="${v}"]`)
        .prop("checked", true)
        .trigger("change");
    });
  });

  // tag event
  $(document).on("click", ".wak-news-listing-filter-items-tag .remove-tag", function (e) {
    e.stopPropagation(); 

    const $tag = $(this).closest(".wak-news-listing-filter-items-tag");
    const key = $tag.data("key");
    const value = $tag.data("value");

    /* 1. remove value from URL */
    const params = new URLSearchParams(location.search);
    const current = (params.get(key) || "").split(",").filter((v) => v !== value);
    if (current.length) params.set(key, current.join(","));
    else params.delete(key);

    history.replaceState(null, "", `${location.pathname}?${params}`);

    /* 2. un-check the matching checkbox (triggers your change handler) */
    $(`.wak-news-listing-filter-wrapper-input[data-filter-key="${key}"]`)
      .find(`input[value="${value}"]`)
      .prop("checked", false)
      .trigger("change");
  });

  updateButtonState();
});
