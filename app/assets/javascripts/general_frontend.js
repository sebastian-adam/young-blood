// Build alphabet assets for scrolling
var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var alphabet_positions = [];

alphabet.forEach(function(i) {
  position = $('.' + i + '-position:first').offset();
  if(position) {
    alphabet_positions.push(position.top);
  } else {
    alphabet_positions.push(99999);
  }
});

$(document).ready(function() {
// HOMEPAGE
  if (window.location.pathname == '/') {

    // Hide Pagination if only one exists
    $.each($('.center-column-body'), function() {
      if($(this).children('button:visible').length == 1) {
        $(this).children('button:visible').remove();
      }
    });

    // Build Carousel for each artist
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

    // Pagination controls
    $(".pagination-marker").on("click", function(){
      $(this).addClass('cassette-active');
      $(this).siblings('.cassette-active').removeClass('cassette-active');
      var carousel_id = $(this).siblings('.owl-carousel').attr('id');
      var carousel_number = carousel_id.split('-')[0];
      var pagination_id = $(this).attr('pagination');
      var pagination_position = pagination_id.split('-')[0];

      var adjust_for_hidden = $(this).prevAll('.pagination-marker:hidden').length;
      pagination_position -= adjust_for_hidden;

      $('#' + carousel_number + '-carousel').trigger('owl.goTo', pagination_position)
    });

    // Between playlist transition
    function filterTransition(self, filterGroup) {
      // Set filter and swap artists
      var filter = $(self).attr('filter');
      $('.artist').not('.' + filter).addClass('hidden');
      $('.' + filter).removeClass('hidden');
      $('#filter-title').html(filter);

      // Make all subcomponents visible and swap active states
      $('.tags').find('.gold').removeClass('gold');
      $(self).addClass('gold');
      $('.carousel-tile').removeClass('hidden');
      $('.pagination-marker').removeClass('hidden')

      // Cloak visible city names
      $('#city-title-blocker').show();
      $('.city-title.hidden').removeClass('hidden');

      // Hide additional assets if filtering by year
      if (filterGroup == 'year') {
        $('.carousel-tile').not('.' + filter).addClass('hidden');
        $('.owl-carousel').trigger('owl.jumpTo', 0);

        $.each($('.artist:visible .carousel-tile:hidden'), function() {
          var carousel_tile_number = $(this).attr('id').split('-')[0];
          var carousel_artist = $(this).attr('artist');
          $('.pagination-marker[pagination="' + carousel_tile_number + '"][artist="' + carousel_artist + '"]').addClass('hidden');
        });

        $.each($('.owl-carousel:visible .pagination-marker:visible:first'), function() {
          $(this).addClass('cassette-active');
          $(this).siblings('.cassette-active').removeClass('cassette-active');
        });

        $.each($('.center-column-body'), function() {
          if($(this).children('button:visible').length == 1) {
            $(this).children('button:visible').addClass('hidden');
          }
        });
      }

      // Swap city names and dividers
      var previousCity = 'nil';
      var currentcity = 'nil';
      $.each($('.city-title:visible'), function() {
        var currentCity = $(this).attr('city');
        if (currentCity == previousCity) {
          $(this).addClass('hidden');
          $(this).parents('.side-column-body').children('.city-divider').addClass('hidden');
          $(this).parents('.side-column-body').children('.city-divider2').addClass('hidden');
        } else {
          $(this).removeClass('hidden');
          $(this).parents('.side-column-body').children('.city-divider').removeClass('hidden');
          $(this).parents('.side-column-body').children('.city-divider2').removeClass('hidden');
        }
        previousCity = currentCity;
      });
      // Reset position and reveal city names
      setTimeout(function() {
        $(".city-title").sticky({topSpacing:120});
        $('#city-title-blocker').hide();
      }, 2100);
    };

    // Rebuild index on filter click
    $('.main').on("click", function() {
      filterTransition($(this), 'main');
    });
    $('.vibe').on("click", function() {
      filterTransition($(this), 'vibe');
    });
    $('.region').on("click", function() {
      filterTransition($(this), 'region');
    });
    $('.year').on("click", function() {
      filterTransition($(this), 'year');
    });

    // Alphabet css transitions
    $(window).scroll(function() {
      var scroll_position = $(window).scrollTop();
      for(i = 0; i < 25; i++) {
        if(scroll_position > alphabet_positions[i]) {
          $(".alphabet-marker").css({
            'color': 'white', 'opacity': '0.3'
          });
          $("#" + alphabet[i] + "-marker").css({
            'color': 'gold', 'opacity': '1'
          });
        }
      }
    });

    // Scroll to alphabet marker on click
    $('.alphabet-marker').on('click', function() {
      var alphabet_character = $(this).attr('id').split('-')[0]
      position = $('.' + alphabet_character + '-position:first').offset();
      $('html, body').animate({scrollTop: position.top - 60}, 3000);
    });

    // Fix artist panel and city names to stick on scroll
    $("#artist-panel-wrapper").sticky({topSpacing:160});

    for (i = 0; i < number_of_artists; i++) {
      $("#" + i + "-city-title").sticky({topSpacing:120});
    }
  } else {
    // Ready environment for backend
    $('#alphabet-container').addClass('hidden');
  };
});
