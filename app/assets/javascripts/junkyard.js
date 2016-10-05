// // Advanced Filter
// $('#advanced-toggle').on("click", function() {
//   $('.filter-radio').toggle();
//   $('#reset-radio').toggle();
//   if ($("#advanced-toggle").text() == 'advanced search') {
//     $('#advanced-toggle').text('simple search');
//   } else {
//     $('#advanced-toggle').text('advanced search');
//   };
// });
//
// $('#reset-radio').on("click", function() {
//   $('.filter-radio').prop('checked', false);
// });

// $('#advanced-filter-submit').on("click", function() {
//   var vibe = $("input[name=vibe]:checked").val() ? $("input[name=vibe]:checked").val() : 'artist';
//   var region = $("input[name=region]:checked").val() ? $("input[name=region]:checked").val() : 'artist';
//   var year = $("input[name=year]:checked").val() ?
//   $("input[name=year]:checked").val() : 'artist';
//
//   $('.carousel-tile').removeClass('hidden');
//   $('.owl-page').removeClass('hidden');
//   $('.artist').removeClass('hidden');
//   $('.artist').not('.' + vibe + '.' + region + '.' + year).addClass('hidden');
//
//   if (year && year != 'artist') {
//     $('.carousel-tile').not('.' + year).addClass('hidden');
//     $('.owl-carousel').trigger('owl.jumpTo', 0);
//
//     $.each($('.artist:visible .carousel-tile:hidden'), function() {
//       var carousel_tile_number = $(this).attr('id').split('-')[0];
//       var carousel_artist = $(this).attr('artist');
//
//       $('.pagination-marker[pagination="' + carousel_tile_number + '"][artist="' + carousel_artist + '"]').addClass('hidden');
//     });
//
//     $.each($('.center-column-body'), function() {
//       if($(this).children('button:visible').length == 1) {
//         $(this).children('button:visible').addClass('hidden');
//       }
//     });
//   }
//
//   if(vibe == "artist") {
//     vibe = '';
//   }
//   if(region == "artist") {
//     region = '';
//   }
//   if(year == "artist") {
//     year = '';
//   }
//
//   $('#filter-title').html(region + vibe + year);
//
// });
