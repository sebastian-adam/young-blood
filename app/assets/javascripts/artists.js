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
        var pagination_id = $(this).attr('pagination');
        var pagination_position = pagination_id.split('-')[0];

        var adjust_for_hidden = $(this).prevAll('.pagination-marker:hidden').length;
        pagination_position -= adjust_for_hidden;

        $('#' + carousel_number + '-carousel').trigger('owl.goTo', pagination_position)
    });

    for (i = 0; i < number_of_artists; i++) {
      $("#" + i + "-city-title").sticky({topSpacing:200});
    }

    $("#artist-panel-wrapper").sticky({topSpacing:60});

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
      $('.carousel-tile').removeClass('hidden');
      $('.artist').removeClass('hidden');
      $('.pagination-marker').removeClass('hidden')
      $('#filter-header').addClass('hidden')
      $('#alphabet-container').removeClass('hidden')
      window.scrollTo( 0, 0)
      $('.city-title').removeClass('hidden');
      var previousCity = 'nil';
      var currentcity = 'nil';
      $.each($('.city-title:visible'), function() {
        var currentCity = $(this).attr('city');
        if (currentCity == previousCity) {
          $(this).addClass('hidden');
          $(this).parents('.music-video-tile').siblings('.city-divider').addClass('hidden');
        } else {
          $(this).removeClass('hidden');
          $(this).parents('.music-video-tile').siblings('.city-divider').removeClass('hidden');
        }
        previousCity = currentCity;
      });
    });

    $('.vibe').on("click", function(e) {
      year = false;
      $('.carousel-tile').removeClass('hidden');
      $('.pagination-marker').removeClass('hidden')
      var vibe = $(this).attr('vibe');
      $('.artist').not('.' + vibe).addClass('hidden');
      $('.' + vibe).removeClass('hidden');
      $('#filter-title').html(vibe);
      $('.city-title').removeClass('hidden');
      var previousCity = 'nil';
      var currentcity = 'nil';
      $.each($('.city-title:visible'), function() {
        var currentCity = $(this).attr('city');
        if (currentCity == previousCity) {
          $(this).addClass('hidden');
          $(this).parents('.music-video-tile').siblings('.city-divider').addClass('hidden');
        } else {
          $(this).removeClass('hidden');
          $(this).parents('.music-video-tile').siblings('.city-divider').removeClass('hidden');
        }
        previousCity = currentCity;
      });
    });

    $('.region').on("click", function() {
      year = false;
      $('.carousel-tile').removeClass('hidden');
      $('.pagination-marker').removeClass('hidden')
      var region = $(this).attr('region');
      $('.artist').not('.' + region).addClass('hidden');
      $('.' + region).removeClass('hidden');
      $('#filter-title').html(region);
      $('.city-title').removeClass('hidden');
      var previousCity = 'nil';
      var currentcity = 'nil';
      $.each($('.city-title:visible'), function() {
        var currentCity = $(this).attr('city');
        if (currentCity == previousCity) {
          $(this).addClass('hidden');
          $(this).parents('.music-video-tile').siblings('.city-divider').addClass('hidden');
        } else {
          $(this).removeClass('hidden');
          $(this).parents('.music-video-tile').siblings('.city-divider').removeClass('hidden');
        }
        previousCity = currentCity;
      });
    });

    // $('.city').on("click", function() {
    //   year = false;
    //   $('.carousel-tile').removeClass('hidden');
    //   $('.pagination-marker').removeClass('hidden')
    //   var city = $(this).attr('city');
    //   $('.artist').not('.' + city).addClass('hidden');
    //   $('.' + city).removeClass('hidden');
    //   $('#filter-title').html(city);
    // });

    $('.year').on("click", function() {
      $('.carousel-tile').removeClass('hidden');
      $('.pagination-marker').removeClass('hidden')
      var year = $(this).attr('year');
      $('.artist').not('.' + year).addClass('hidden');
      $('.' + year).removeClass('hidden');
      $('#filter-title').html(year);

      $('.carousel-tile').not('.' + year).addClass('hidden');
      $('.owl-carousel').trigger('owl.jumpTo', 0);

      $.each($('.artist:visible .carousel-tile:hidden'), function() {
        var carousel_tile_number = $(this).attr('id').split('-')[0];
        var carousel_artist = $(this).attr('artist');
        $('.pagination-marker[pagination="' + carousel_tile_number + '"][artist="' + carousel_artist + '"]').addClass('hidden');
      });

      $.each($('.center-column-body'), function() {
        if($(this).children('button:visible').length == 1) {
          $(this).children('button:visible').addClass('hidden');
        }
      });

      $('.city-title').removeClass('hidden');
      var previousCity = 'nil';
      var currentcity = 'nil';
      $.each($('.city-title:visible'), function() {
        var currentCity = $(this).attr('city');
        if (currentCity == previousCity) {
          $(this).addClass('hidden');
          $(this).parents('.music-video-tile').siblings('.city-divider').addClass('hidden');
        } else {
          $(this).removeClass('hidden');
          $(this).parents('.music-video-tile').siblings('.city-divider').removeClass('hidden');
        }
        previousCity = currentCity;
      });
    });

    $('#advanced-filter-submit').on("click", function() {
      var vibe = $("input[name=vibe]:checked").val() ? $("input[name=vibe]:checked").val() : 'artist';
      var region = $("input[name=region]:checked").val() ? $("input[name=region]:checked").val() : 'artist';
      var year = $("input[name=year]:checked").val() ?
      $("input[name=year]:checked").val() : 'artist';

      $('.carousel-tile').removeClass('hidden');
      $('.owl-page').removeClass('hidden');
      $('.artist').removeClass('hidden');
      $('.artist').not('.' + vibe + '.' + region + '.' + year).addClass('hidden');

      if (year && year != 'artist') {
        $('.carousel-tile').not('.' + year).addClass('hidden');
        $('.owl-carousel').trigger('owl.jumpTo', 0);

        $.each($('.artist:visible .carousel-tile:hidden'), function() {
          var carousel_tile_number = $(this).attr('id').split('-')[0];
          var carousel_artist = $(this).attr('artist');

          $('.pagination-marker[pagination="' + carousel_tile_number + '"][artist="' + carousel_artist + '"]').addClass('hidden');
        });

        $.each($('.center-column-body'), function() {
          if($(this).children('button:visible').length == 1) {
            $(this).children('button:visible').addClass('hidden');
          }
        });
      }

      if(vibe == "artist") {
        vibe = '';
      }
      if(region == "artist") {
        region = '';
      }
      if(year == "artist") {
        year = '';
      }

      $('#filter-title').html(region + vibe + year);

    });

    $('.alphabet-marker').on('click', function() {
      var alphabet_character = $(this).attr('id').split('-')[0]
      position = $('.' + alphabet_character + '-position:first').offset();
      $('html, body').animate({scrollTop: position.top - 200}, 1000);
    });

    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    var alphabet_positions = [];
    alphabet.forEach(function(i) {
      position = $('.' + i + '-position:first').offset();
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
    $('.tags').addClass('hidden');
    $('#alphabet-container').addClass('hidden');
    $('#my-nav').removeClass('navbar-fixed-top');
    $('#content-container').css({'margin-top' : '0'});
  };
});
