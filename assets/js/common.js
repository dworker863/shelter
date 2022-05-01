document.addEventListener("DOMContentLoaded", function (event) {
  $(".hamburger-wrapper").on("click", function (e) {
    const th = $(this);
    $(th).toggleClass("active");
  });
});
