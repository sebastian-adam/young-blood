$(document).ready(function() {
  for (i = 10; i < 50; i++) {
    $("#" + i + "_carousel").owlCarousel({
      navigation : false, // Show next and prev buttons
      slideSpeed : 400,
      paginationSpeed : 400,
      singleItem: true
    });
  }
});
