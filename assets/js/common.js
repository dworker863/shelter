document.addEventListener("DOMContentLoaded", function (event) {
  $(".hamburger-wrapper").on("click", function (e) {
    const th = $(this);
    $(th).toggleClass("active");

    if ($(th).hasClass("active")) {
      $(".nav-mobile").addClass("active");
    } else {
      $(".nav-mobile").removeClass("active");
    }
  });
});
