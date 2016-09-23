// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require owl.carousel
//= require bootstrap-sprockets
//= require lazy_load_iframe
//= require jquery.sticky
//= require_tree .


$(document).ready(function() {
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

  $('#advanced_toggle').on("click", function() {
    $('.filter_radio').toggle();
    if ($("#advanced_toggle").text() == 'advanced search') {
      $('#advanced_toggle').text('simple search');
    } else {
      $('#advanced_toggle').text('advanced search');
    };
  });
});
