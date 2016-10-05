/* iFrame Lazy Loader inspired by @labnol :Web: http://labnol.org/?p=27941 */


// Build Lazy Loader assets
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function buildThumb(id) {
  var thumb = '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg">',
    play = '<div class="play"></div>';
  return thumb.replace("ID", id) + play;
}

// Initialize video playback
var currentVid;
var initializedVids = [];
function buildIframe() {
  currentVid = this.dataset.id;
  var player = new YT.Player(this.dataset.id, {
    videoId: this.dataset.id,
    playerVars: { 'autoplay': 1, 'showinfo': 0 },
    events: {
      'onStateChange': onPlayerStateChange,
      'onReady': onPlayerReady
    }
  });
  initializedVids.push(player);
}

// Shuffle playlist method
function shuffle(array) {
  var m = array.length, t, i;
  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);
    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

// Playlist constructor
function Playlist(filter) {
  this.main = [];
  this.filter = filter;

  this.thug = [];
  this.soul = [];
  this.wavy = [];
  this.chill = [];
  this.pop = [];
  this.punk = [];
  this.indie = [];
  this.thump = [];

  this.east = [];
  this.west = [];
  this.south = [];
  this.midwest = [];
  this.other = [];

  this.thirteen = [];
  this.fourteen = [];
  this.fifteen = [];
  this.sixteen = [];
}

// Populate playlist arrays
Playlist.prototype.collectVideos = function() {
  var main = this.main
  var thug = this.thug;
  var soul = this.soul;
  var wavy = this.wavy;
  var chill = this.chill;
  var pop = this.pop;
  var punk = this.punk;
  var indie = this.indie;
  var thump = this.thump;
  var east = this.east;
  var west = this.west;
  var south = this.south;
  var midwest = this.midwest;
  var other = this.other;
  var thirteen = this.thirteen;
  var fourteen = this.fourteen;
  var fifteen = this.fifteen;
  var sixteen = this.sixteen;

  $.each($('div[artist]'), function() {
    var vibe = $(this).attr('artist_vibe');
    var region = $(this).attr('artist_region');
    var year = $(this).attr('year');
    var play_btn_id = $(this).find('.youtube-player div[data-id]').attr('id');

    var allVideo = play_btn_id;
    main.push(allVideo)

    if (vibe == 'thug') {
      var thugVideo = play_btn_id;
      thug.push(thugVideo)
    } else if (vibe == 'soul') {
      var soulVideo = play_btn_id;
      soul.push(soulVideo)
    } else if (vibe == 'wavy') {
      var wavyVideo = play_btn_id;
      wavy.push(wavyVideo)
    } else if (vibe == 'chill') {
      var chillVideo = play_btn_id;
      chill.push(chillVideo)
    } else if (vibe == 'pop') {
      var popVideo = play_btn_id;
      pop.push(popVideo)
    } else if (vibe == 'punk') {
      var punkVideo = play_btn_id;
      punk.push(punkVideo)
    } else if (vibe == 'indie') {
      var indieVideo = play_btn_id;
      indie.push(indieVideo)
    } else if (vibe == 'thump') {
      var thumpVideo = play_btn_id;
      thump.push(thumpVideo)
    }

    if (region == 'east') {
      var eastVideo = play_btn_id;
      east.push(eastVideo)
    } else if (region == 'west') {
      var westVideo = play_btn_id;
      west.push(westVideo)
    } else if (region == 'south') {
      var southVideo = play_btn_id;
      south.push(southVideo)
    } else if (region == 'midwest') {
      var midwestVideo = play_btn_id;
      midwest.push(midwestVideo)
    } else if (region == 'other') {
      var otherVideo = play_btn_id;
      other.push(otherVideo)
    }

    if (year == '2013') {
      var thirteenVideo = play_btn_id;
      thirteen.push(thirteenVideo)
    } else if (year == '2014') {
      var fourteenVideo = play_btn_id;
      fourteen.push(fourteenVideo)
    } else if (year == '2015') {
      var fifteenVideo = play_btn_id;
      fifteen.push(fifteenVideo)
    } else if (year == '2016') {
      var sixteenVideo = play_btn_id;
      sixteen.push(sixteenVideo)
    }
  });
  // Shuffle playlists
  this.main = shuffle(this.main);
  this.thug = shuffle(this.thug);
  this.soul = shuffle(this.soul);
  this.wavy = shuffle(this.wavy);
  this.chill = shuffle(this.chill);
  this.pop = shuffle(this.pop);
  this.punk = shuffle(this.punk);
  this.indie = shuffle(this.indie);
  this.thump = shuffle(this.thump);
  this.east = shuffle(this.east);
  this.west = shuffle(this.west);
  this.south = shuffle(this.south);
  this.midwest = shuffle(this.midwest);
  this.other = shuffle(this.other);
  this.thirteen = shuffle(this.thirteen);
  this.fourteen = shuffle(this.fourteen);
  this.fifteen = shuffle(this.fifteen);
  this.sixteen = shuffle(this.sixteen);
}

// Advance playlist
Playlist.prototype.nextVideo = function() {
  if (this.filter == 'artist') {
    var nextVideoId = this.main[0];
  } else if (this.filter == 'thug') {
    var nextVideoId = this.thug[0];
    this.thug.shift();
  } else if (this.filter == 'soul') {
    var nextVideoId = this.soul[0];
    this.soul.shift();
  } else if (this.filter == 'wavy') {
    var nextVideoId = this.wavy[0];
    this.wavy.shift();
  } else if (this.filter == 'chill') {
    var nextVideoId = this.chill[0];
    this.chill.shift();
  } else if (this.filter == 'pop') {
    var nextVideoId = this.pop[0];
    this.pop.shift();
  } else if (this.filter == 'punk') {
    var nextVideoId = this.punk[0];
    this.punk.shift();
  } else if (this.filter == 'indie') {
    var nextVideoId = this.indie[0];
    this.indie.shift();
  } else if (this.filter == 'thump') {
    var nextVideoId = this.thump[0];
    this.thump.shift();
  } else if (this.filter == 'soul') {
    var nextVideoId = this.soul[0];
    this.soul.shift();
  } else if (this.filter == 'east') {
    var nextVideoId = this.east[0];
    this.east.shift();
  } else if (this.filter == 'west') {
    var nextVideoId = this.west[0];
    this.west.shift();
  } else if (this.filter == 'south') {
    var nextVideoId = this.south[0];
    this.south.shift();
  } else if (this.filter == 'midwest') {
    var nextVideoId = this.midwest[0];
    this.midwest.shift();
  } else if (this.filter == 'other') {
    var nextVideoId = this.other[0];
    this.other.shift();
  } else if (this.filter == 'thirteen') {
    var nextVideoId = this.thirteen[0];
    this.thirteen.shift();
  } else if (this.filter == 'fourteen') {
    var nextVideoId = this.fourteen[0];
    this.fourteen.shift();
  } else if (this.filter == 'fifteen') {
    var nextVideoId = this.fifteen[0];
    this.fifteen.shift();
  } else if (this.filter == 'sixteen') {
    var nextVideoId = this.sixteen[0];
    this.sixteen.shift();
  }

  index = this.main.indexOf(nextVideoId);
  this.main.splice(index, 1);

  $('html, body').animate({scrollTop: $('#' + nextVideoId).parents('.center-column-body').siblings('.side-column-body').find('.alphabet-marker').offset().top - 120}, 2000);

  setTimeout(function () {
    var carouselNumber = parseInt($('#' + nextVideoId).parents('.owl-carousel').attr('id').split('-')[0]);
    var paginationNumber = parseInt($('#' + nextVideoId).parents('div[artist]').attr('id').split('-')[0]);

    var adjustForHidden = $('#' + nextVideoId).parents('.center-column-body').find('.pagination-marker[pagination=' + paginationNumber.toString() + ']').prevAll('.pagination-marker:hidden').length;
    paginationNumber -= adjustForHidden;


    $('#' + carouselNumber + '-carousel').trigger('owl.goTo', paginationNumber);

    $('#' + nextVideoId).parents('.center-column-body').find('.pagination-marker[pagination=' + paginationNumber.toString() + ']').addClass('cassette-active')
    $('#' + nextVideoId).parents('.center-column-body').find('.pagination-marker[pagination=' + paginationNumber.toString() + ']').siblings().removeClass('cassette-active')


    $(this).addClass('cassette-active');
    $(this).siblings('.cassette-active').removeClass('cassette-active');
    $('#' + nextVideoId).click();

    // Trigger click on artist name to request Genius API
    $('#' + nextVideoId).parents('.owl-carousel').siblings('.artist-title').children('a').click();

  }, 2000);

}

// Create playlist with subplaylists and set filter type
var youngBloodPlaylist = new Playlist('artist');

// Youtube iframe API methods
function onPlayerReady(event) {
  event.target.playVideo();
}

function onPlayerStateChange(event) {
  if (event.target.getPlayerState() == YT.PlayerState.PLAYING) {
    currentVid = event.target.getVideoData()['video_id'];
  } else if (event.target.getPlayerState() == YT.PlayerState.ENDED) {
    youngBloodPlaylist.nextVideo();
  }

  initializedVids.forEach(function(vid) {
    if(vid.getVideoData()['video_id'] != currentVid && vid.getPlayerState() == YT.PlayerState.PLAYING) {
      vid.pauseVideo()
    }
  });
}


$(function() {
  // Lazy Load each iframe
  var div, n,
    v = document.getElementsByClassName("youtube-player");
  for (n = 0; n < v.length; n++) {
    div = document.createElement("div");
    div.setAttribute("data-id", v[n].dataset.id);
    div.innerHTML = buildThumb(v[n].dataset.id);
    div.onclick = buildIframe;
    v[n].appendChild(div);
  }

  // Assign Lazy Loaders ids
  var allVideos = [];
  var allCounter = 0;
  $('.artist').find('.youtube-player div[data-id]').each(function() {
    $(this).attr('id', allCounter.toString() + '-play-btn');
    allCounter += 1;
  });

  // Build and shuffle playlists
  var youngBloodVideos = youngBloodPlaylist.collectVideos();

  // Main playlist controls
  $('#playlist-start').on('click', function() {
    youngBloodPlaylist.filter = 'artist';
    youngBloodPlaylist.nextVideo();
  });

  // Vibe playlist controls
  $('#thug-playlist-start').on('click', function() {
    youngBloodPlaylist.filter = 'thug';
    youngBloodPlaylist.nextVideo();
  });
  $('#soul-playlist-start').on('click', function() {
    youngBloodPlaylist.filter = 'soul';
    youngBloodPlaylist.nextVideo();
    });
  $('#wavy-playlist-start').on('click', function() {
    youngBloodPlaylist.filter = 'wavy';
    youngBloodPlaylist.nextVideo();
    });
  $('#chill-playlist-start').on('click', function() {
    youngBloodPlaylist.filter = 'chill';
    youngBloodPlaylist.nextVideo();
    });
  $('#pop-playlist-start').on('click', function() {
    youngBloodPlaylist.filter = 'pop';
    youngBloodPlaylist.nextVideo();
    });
  $('#punk-playlist-start').on('click', function() {
    youngBloodPlaylist.filter = 'punk';
    youngBloodPlaylist.nextVideo();
    });
  $('#indie-playlist-start').on('click', function() {
    youngBloodPlaylist.filter = 'indie';
    youngBloodPlaylist.nextVideo();
    });
  $('#thump-playlist-start').on('click', function() {
    youngBloodPlaylist.filter = 'thump';
    youngBloodPlaylist.nextVideo();
    });

  // Region playlist controls
  $('#east-playlist-start').on('click', function() {
    youngBloodPlaylist.filter = 'east';
    youngBloodPlaylist.nextVideo();
    });
  $('#west-playlist-start').on('click', function() {
    youngBloodPlaylist.filter = 'west';
    youngBloodPlaylist.nextVideo();
    });
  $('#south-playlist-start').on('click', function() {
    youngBloodPlaylist.filter = 'south';
    youngBloodPlaylist.nextVideo();
    });
  $('#midwest-playlist-start').on('click', function() {
    youngBloodPlaylist.filter = 'midwest';
    youngBloodPlaylist.nextVideo();
    });
  $('#global-playlist-start').on('click', function() {
    youngBloodPlaylist.filter = 'other';
    youngBloodPlaylist.nextVideo();
    });

  // Year playlist controls
  $('#thirteen-playlist-start').on('click', function() {
    youngBloodPlaylist.filter = 'thirteen';
    youngBloodPlaylist.nextVideo();
    });
  $('#fourteen-playlist-start').on('click', function() {
    youngBloodPlaylist.filter = 'fourteen';
    youngBloodPlaylist.nextVideo();
    });
  $('#fifteen-playlist-start').on('click', function() {
    youngBloodPlaylist.filter = 'fifteen';
    youngBloodPlaylist.nextVideo();
    });
  $('#sixteen-playlist-start').on('click', function() {
    youngBloodPlaylist.filter = 'sixteen';
    youngBloodPlaylist.nextVideo();
    });
});
