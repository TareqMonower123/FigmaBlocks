document.querySelectorAll(".wak-locations-card").forEach((el) => {
  el.addEventListener("click", (event) => {
    document.querySelector(".wak-locations-card.active").classList.remove("active");
    event.currentTarget.classList.add("active");
  });
});
