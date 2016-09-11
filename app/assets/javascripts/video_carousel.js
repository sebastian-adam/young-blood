$(document).ready(function() {
  for (i = 10; i < 50; i++) {
    $("#" + i).owlCarousel({
      navigation : false, // Show next and prev buttons
      slideSpeed : 400,
      paginationSpeed : 400,
      singleItem: true
    })

    var owl = $("#" + i);
    // Custom Navigation Events
    $("#" + i + "_next").click(function(){
      owl.trigger('owl.next');
    });
    $("#" + i + "_prev").click(function(){
      owl.trigger('owl.prev');
    });
  }
});
