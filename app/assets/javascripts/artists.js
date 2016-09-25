$(document).ready(function() {
  if (window.location.pathname == '/') {

    for (i = 10; i < 150; i++) {
      var owl = $("#" + i + "_carousel"),
      status = $("#owlStatus");
      $("#" + i + "_carousel").owlCarousel({
        navigation : false, // Show next and prev buttons
        slideSpeed : 400,
        paginationSpeed : 400,
        singleItem: true,
      });
    }

    for (i = 10; i < 150; i++) {
      $("#" + i + "_city").sticky({topSpacing:200});
    }

    $('#advanced-toggle').on("click", function() {
      $('.filter_radio').toggle();
      $('#reset-radio').toggle();
      if ($("#advanced-toggle").text() == 'advanced search') {
        $('#advanced-toggle').text('simple search');
      } else {
        $('#advanced-toggle').text('advanced search');
      };
    });

    $('#reset-radio').on("click", function() {
      $('.filter_radio').prop('checked', false);
    });

  } else {
    $('.tags').hide();
    $('#my-nav').removeClass('navbar-fixed-top');
    $('#content_container').css({'margin-top' : '0'});
  };
});
