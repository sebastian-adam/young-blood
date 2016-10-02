$(document).ready(function() {
  if (window.location.pathname == '/') {

    $.each($('.center-column-body'), function() {
      if($(this).children('button:visible').length == 1) {
        $(this).children('button:visible').remove();
      }
    });

    var number_of_artists = $('.music-videos-wrapper > div').length;
    for (i = 0; i < number_of_artists; i++) {
      var owl = $("#" + i + "-carousel"),
      status = $("#owlStatus");
      $("#" + i + "-carousel").owlCarousel({
        navigation : false, // Show next and prev buttons
        slideSpeed : 400,
        paginationSpeed : 400,
        singleItem: true,
        touchDrag: false,
        mouseDrag: false,
      });
    }

    $(".pagination-marker").on("click", function(){
        var carousel_id = $(this).siblings('.owl-carousel').attr('id');
        var carousel_number = carousel_id.split('-')[0];
        var pagination_id = $(this).attr('id');
        var pagination_position = pagination_id.split('-')[0];

        var adjust_for_hidden = $(this).prevAll('.pagination-marker:hidden').length;
        pagination_position -= adjust_for_hidden;

        $('#' + carousel_number + '-carousel').trigger('owl.goTo', pagination_position)
    });

    for (i = 0; i < number_of_artists; i++) {
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

    $('#remove-filter').on("click", function() {
      year = false;
      $('.carousel-tile').show();
      $('.artist').show();
      $('.pagination-marker').show()
      $('#filter-header').hide()
      $('#alphabet-container').show()
      window.scrollTo( 0, 0)
    });

    $('.vibe').on("click", function(e) {
      year = false;
      $('.carousel-tile').show();
      $('.pagination-marker').show()
      var vibe = $(this).attr('vibe');
      $('.artist').not('.' + vibe).hide();
      $('.' + vibe).show();
      $('#filter-title').html(vibe);
    });

    $('.region').on("click", function() {
      year = false;
      $('.carousel-tile').show();
      $('.pagination-marker').show()
      var region = $(this).attr('region');
      $('.artist').not('.' + region).hide();
      $('.' + region).show();
      $('#filter-title').html(region);
    });

    $('.city').on("click", function() {
      year = false;
      $('.carousel-tile').show();
      $('.pagination-marker').show()
      var city = $(this).attr('city');
      $('.artist').not('.' + city).hide();
      $('.' + city).show();
      $('#filter-title').html(city);
    });

    $('.year').on("click", function() {
      $('.carousel-tile').show();
      $('.pagination-marker').show()
      var year = $(this).attr('year');
      $('.artist').not('.' + year).hide();
      $('.' + year).show();
      $('#filter-title').html(year);

      $('.carousel-tile').not('.' + year).hide();
      $('.owl-carousel').trigger('owl.jumpTo', 0);

      $.each($('.artist:visible .carousel-tile:hidden'), function() {
        var carousel_tile_number = $(this).attr('id').split('-')[0];
        var carousel_artist = $(this).attr('artist');
        $('.pagination-marker[id="' + carousel_tile_number + '-pagination"][artist="' + carousel_artist + '"]').hide();
      });

      $.each($('.center-column-body'), function() {
        if($(this).children('button:visible').length == 1) {
          $(this).children('button:visible').hide();
        }
      });
    });

    $('#advanced-filter-submit').on("click", function() {
      var vibe = $("input[name=vibe]:checked").val() ? $("input[name=vibe]:checked").val() : 'placeholder';
      var region = $("input[name=region]:checked").val() ? $("input[name=region]:checked").val() : 'placeholder';
      var year = $("input[name=year]:checked").val() ?
      $("input[name=year]:checked").val() : 'placeholder';

      $('.carousel-tile').show();
      $('.owl-page').show();
      $('.artist').show();
      $('.artist').not('.' + vibe + '.' + region + '.' + year).hide();

      if (year && year != 'placeholder') {
        $('.carousel-tile').not('.' + year).hide();
        $('.owl-carousel').trigger('owl.jumpTo', 0);

        $.each($('.artist:visible .carousel-tile:hidden'), function() {
          var carousel_tile_number = $(this).attr('id').split('-')[0];
          var carousel_artist = $(this).attr('artist');

          $('.pagination-marker[id="' + carousel_tile_number + '-pagination"][artist="' + carousel_artist + '"]').hide();
        });

        $.each($('.center-column-body'), function() {
          if($(this).children('button:visible').length == 1) {
            $(this).children('button:visible').hide();
          }
        });
      }

      if(vibe == "placeholder") {
        vibe = '';
      }
      if(region == "placeholder") {
        region = '';
      }
      if(year == "placeholder") {
        year = '';
      }

      $('#filter-title').html(region + vibe + year);

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
