$(document).ready(function() {
  if (window.location.pathname == '/') {

    for (i = 10; i < 200; i++) {
      var owl = $("#" + i + "-carousel"),
      status = $("#owlStatus");
      $("#" + i + "-carousel").owlCarousel({
        navigation : false, // Show next and prev buttons
        slideSpeed : 400,
        paginationSpeed : 400,
        singleItem: true,
        touchDrag: false,
        mouseDrag: false
      });
    }

    for (i = 10; i < 150; i++) {
      $("#" + i + "-city-title").sticky({topSpacing:192});
    }

    $('#advanced-toggle').on("click", function() {
      $('.filter-radio').toggle();
      $('#reset-radio').toggle();
      if ($("#advanced-toggle").text() == 'advanced search') {
        $('#advanced-toggle').text('simple search');
      } else {
        $('#advanced-toggle').text('advanced search');
      };
    });

    $('#reset-radio').on("click", function() {
      $('.filter-radio').prop('checked', false);
    });

    $('.vibe').on("click", function(e) {
      $('.carousel-tile').show();
      $('.owl-page').show()
      var vibe = $(this).attr('vibe');
      $('.artist').not('.' + vibe).hide();
      $('.' + vibe).show();
      $('#filter-title').html(vibe);
    });

    $('.region').on("click", function() {
      $('.carousel-tile').show();
      $('.owl-page').show()
      var region = $(this).attr('region');
      $('.artist').not('.' + region).hide();
      $('.' + region).show();
      $('#filter-title').html(region);
    });

    $('.city').on("click", function() {
      $('.carousel-tile').show();
      $('.owl-page').show()
      var city = $(this).attr('city');
      $('.artist').not('.' + city).hide();
      $('.' + city).show();
      $('#filter-title').html(city);
    });

    $('.year').on("click", function() {
      $('.carousel-tile').show();
      $('.owl-page').show()
      var year = $(this).attr('year');
      $('.artist').not('.' + year).hide();
      $('.' + year).show();
      $('#filter-title').html(year);

      $('.carousel-tile').not('.' + year).hide();
      $('.owl-carousel').trigger('owl.jumpTo', 0);

      $.each($('.owl-item').children('.carousel-tile').not('.' + year), function() {
        var route_to_pagination = $(this).parents('.owl-wrapper-outer').siblings('.owl-controls');
        route_to_pagination.find('.owl-page:visible:last').hide();
        if(route_to_pagination.find('.owl-page:visible').length == 1) {
          route_to_pagination.find('.owl-page:visible').hide()
        }
      });
    });

    $('.alphabet-marker').on('click', function() {
      var alphabet_character = $(this).attr('id')[0]
      position = $('.' + alphabet_character + '-marker').first().offset();
      window.scrollTo( 0, position.top - 200)
    });

    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    var alphabet_positions = [];
    alphabet.forEach(function(i) {
      position = $('.' + i + '-marker').first().offset();
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
          $("#" + alphabet[i] + "-marker").css({
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
