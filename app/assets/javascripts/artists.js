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
      $("#" + i + "_city").sticky({topSpacing:192});
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

    $('.alphabet-marker').on('click', function() {
      var alphabet_character = $(this).attr('id')[0]
      position = $('.' + alphabet_character + '-char').first().offset();
      window.scrollTo( 0, position.top - 200)
    });

    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    var alphabet_positions = [];
    alphabet.forEach(function(i) {
      position = $('.' + i + '-char').first().offset();
      if(position) {
        alphabet_positions.push(position.top - 201);
      } else {
        alphabet_positions.push(99999);
      }
    });
    $(window).scroll(function() {
      var scroll_position = $(window).scrollTop();
      for(i = 0; i < 25; i++) {
        if(scroll_position > alphabet_positions[i]) {
          $(".alphabet-marker").css({
            'color': '#1edbcc', 'opacity': '0.3'
          });
          $("#" + alphabet[i] + "-char").css({
            'color': 'gold', 'opacity': '1'
          });
        }
      }
    });

  } else {
    $('.tags').hide();
    $('#alphabet-container').hide();
    $('#my-nav').removeClass('navbar-fixed-top');
    $('#content_container').css({'margin-top' : '0'});
  };
});
