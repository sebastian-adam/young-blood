/* iFrame Lazy Loader inspired by @labnol */
/* Web: http://labnol.org/?p=27941 */


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

// Playlist object methods
function Playlist(filter) {
  this.playlist = [];
  this.playCount = 0;
  this.filter = filter;
}

Playlist.prototype.collectVideos = function() {
  var videos = [];
  var videoCount = 0;
  if (this.filter == "2010" || this.filter == "2011" || this.filter == "2012" || this.filter == "2013" || this.filter == "2014" || this.filter == "2015" || this.filter == "2016") {
    $('.' + this.filter).find('.carousel-tile.' + this.filter).find('.youtube-player div[data-id]').each(function() {
      videos.push($(this).attr('id'));
      videoCount += 1;
    });
  } else {
    $('.' + this.filter).find('.youtube-player div[data-id]').each(function() {
      videos.push($(this).attr('id'));
      videoCount += 1;
    });
  }
  return videos;
}

Playlist.prototype.nextVideo = function() {
  var nextVideoId = this.playlist[this.playCount];
  this.playCount += 1;

  $('html, body').animate({scrollTop: $('#' + nextVideoId).parents('.center-column-body').siblings('.side-column-body').find('.alphabet-marker').offset().top - 140}, 1000);

  setTimeout(function () {
    var carouselNumber = parseInt($('#' + nextVideoId).parents('.owl-carousel').attr('id').split('-')[0]);
    var paginationNumber = parseInt($('#' + nextVideoId).parents('div[artist]').attr('id').split('-')[0]);

    var adjustForHidden = $('#' + nextVideoId).parents('.center-column-body').find('.pagination-marker[pagination=' + paginationNumber.toString() + ']').prevAll('.pagination-marker:hidden').length;
    paginationNumber -= adjustForHidden;

    $('#' + carouselNumber + '-carousel').trigger('owl.goTo', paginationNumber);
    $('#' + nextVideoId).click();

    // Trigger click on artist name to request Genius API
    $('#' + nextVideoId).parents('.owl-carousel').siblings('.artist-title').children('a').click();

  }, 1000);
}

// Create Playlists and ready environment
var playlistType = 'artist';

var artistPlaylist = new Playlist('artist');
var thugPlaylist = new Playlist('thug');
var soulPlaylist = new Playlist('soul');
var wavyPlaylist = new Playlist('wavy');
var chillPlaylist = new Playlist('chill');
var popPlaylist = new Playlist('pop');
var punkPlaylist = new Playlist('punk');
var wordPlaylist = new Playlist('word');
var thumpPlaylist = new Playlist('thump');
var eastPlaylist = new Playlist('east');
var westPlaylist = new Playlist('west');
var southPlaylist = new Playlist('south');
var midwestPlaylist = new Playlist('midwest');
var globalPlaylist = new Playlist('global');
var olderPlaylist = new Playlist('2012');
var thirteenPlaylist = new Playlist('2013');
var fourteenPlaylist = new Playlist('2014');
var fifteenPlaylist = new Playlist('2015');
var sixteenPlaylist = new Playlist('2016');



// Youtube iframe API methods
function onPlayerReady(event) {
  event.target.playVideo();
}

function onPlayerStateChange(event) {
  if (event.target.getPlayerState() == YT.PlayerState.PLAYING) {
    currentVid = event.target.getVideoData()['video_id'];
  } else if (event.target.getPlayerState() == YT.PlayerState.ENDED) {
    if (playlistType == 'artist') {
      artistPlaylist.nextVideo();
    } else if (playlistType == 'thug') {
      thugPlaylist.nextVideo();
    } else if (playlistType == 'soul') {
      soulPlaylist.nextVideo();
    } else if (playlistType == 'wavy') {
      wavyPlaylist.nextVideo();
    } else if (playlistType == 'chill') {
      chillPlaylist.nextVideo();
    } else if (playlistType == 'pop') {
      popPlaylist.nextVideo();
    } else if (playlistType == 'punk') {
      punkPlaylist.nextVideo();
    } else if (playlistType == 'word') {
      wordPlaylist.nextVideo();
    } else if (playlistType == 'thump') {
      thumpPlaylist.nextVideo();
    } else if (playlistType == 'east') {
      eastPlaylist.nextVideo();
    } else if (playlistType == 'west') {
      westPlaylist.nextVideo();
    } else if (playlistType == 'south') {
      southPlaylist.nextVideo();
    } else if (playlistType == 'midwest') {
      midwestPlaylist.nextVideo();
    } else if (playlistType == 'older') {
      olderPlaylist.nextVideo();
    } else if (playlistType == 'thirteen') {
      thirteenPlaylist.nextVideo();
    } else if (playlistType == 'fourteen') {
      fourteenPlaylist.nextVideo();
    } else if (playlistType == 'fifteen') {
      fifteenPlaylist.nextVideo();
    } else if (playlistType == 'sixteen') {
      sixteenPlaylist.nextVideo();
    }
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

  // Build main playlist
  var artistVideos = artistPlaylist.collectVideos();
  artistPlaylist.playlist = shuffle(artistVideos);

  // Main playlist controls
  $('#playlist-start').on('click', function() {
    artistPlaylist.nextVideo();
    playlistType = 'artist';
  });

  // Build playlist for each vibe
  var thugVideos = thugPlaylist.collectVideos();
  thugPlaylist.playlist = shuffle(thugVideos);

  var soulVideos = soulPlaylist.collectVideos();
  soulPlaylist.playlist = shuffle(soulVideos);

  var wavyVideos = wavyPlaylist.collectVideos();
  wavyPlaylist.playlist = shuffle(wavyVideos);

  var chillVideos = chillPlaylist.collectVideos();
  chillPlaylist.playlist = shuffle(chillVideos);

  var popVideos = popPlaylist.collectVideos();
  popPlaylist.playlist = shuffle(popVideos);

  var punkVideos = punkPlaylist.collectVideos();
  punkPlaylist.playlist = shuffle(punkVideos);

  var wordVideos = wordPlaylist.collectVideos();
  wordPlaylist.playlist = shuffle(wordVideos);

  var thumpVideos = thumpPlaylist.collectVideos();
  thumpPlaylist.playlist = shuffle(thumpVideos);

  // Build playlist for each region
  var eastVideos = eastPlaylist.collectVideos();
  eastPlaylist.playlist = shuffle(eastVideos);

  var westVideos = westPlaylist.collectVideos();
  westPlaylist.playlist = shuffle(westVideos);

  var southVideos = southPlaylist.collectVideos();
  southPlaylist.playlist = shuffle(southVideos);

  var midwestVideos = midwestPlaylist.collectVideos();
  midwestPlaylist.playlist = shuffle(midwestVideos);

  var globalVideos = globalPlaylist.collectVideos();
  globalPlaylist.playlist = shuffle(globalVideos);

  // Build playlist for each year
  var olderVideos = olderPlaylist.collectVideos();
  olderPlaylist.playlist = shuffle(olderVideos);

  var thirteenVideos = thirteenPlaylist.collectVideos();
  thirteenPlaylist.playlist = shuffle(thirteenVideos);

  var fourteenVideos = fourteenPlaylist.collectVideos();
  fourteenPlaylist.playlist = shuffle(fourteenVideos);

  var fifteenVideos = fifteenPlaylist.collectVideos();
  fifteenPlaylist.playlist = shuffle(fifteenVideos);

  var sixteenVideos = sixteenPlaylist.collectVideos();
  sixteenPlaylist.playlist = shuffle(sixteenVideos);

  // Vibe playlist controls
  $('#thug-playlist-start').on('click', function() {
    thugPlaylist.nextVideo();
    playlistType = 'thug';
  });
  $('#soul-playlist-start').on('click', function() {
    soulPlaylist.nextVideo();
    playlistType = 'soul';
  });
  $('#wavy-playlist-start').on('click', function() {
    wavyPlaylist.nextVideo();
    playlistType = 'wavy';
  });
  $('#chill-playlist-start').on('click', function() {
    chillPlaylist.nextVideo();
    playlistType = 'chill';
  });
  $('#pop-playlist-start').on('click', function() {
    popPlaylist.nextVideo();
    playlistType = 'pop';
  });
  $('#punk-playlist-start').on('click', function() {
    punkPlaylist.nextVideo();
    playlistType = 'punk';
  });
  $('#word-playlist-start').on('click', function() {
    wordPlaylist.nextVideo();
    playlistType = 'word';
  });
  $('#thump-playlist-start').on('click', function() {
    thumpPlaylist.nextVideo();
    playlistType = 'thump';
  });

  // Region playlist controls
  $('#east-playlist-start').on('click', function() {
    eastPlaylist.nextVideo();
    playlistType = 'east';
  });
  $('#west-playlist-start').on('click', function() {
    westPlaylist.nextVideo();
    playlistType = 'west';
  });
  $('#south-playlist-start').on('click', function() {
    southPlaylist.nextVideo();
    playlistType = 'south';
  });
  $('#midwest-playlist-start').on('click', function() {
    midwestPlaylist.nextVideo();
    playlistType = 'midwest';
  });
  $('#global-playlist-start').on('click', function() {
    globalPlaylist.nextVideo();
    playlistType = 'global';
  });

  // Year playlist controls
  $('#older-playlist-start').on('click', function() {
    olderPlaylist.nextVideo();
    playlistType = 'older';
  });
  $('#thirteen-playlist-start').on('click', function() {
    thirteenPlaylist.nextVideo();
    playlistType = 'thirteen';
  });
  $('#fourteen-playlist-start').on('click', function() {
    fourteenPlaylist.nextVideo();
    playlistType = 'fourteen';
  });
  $('#fifteen-playlist-start').on('click', function() {
    fifteenPlaylist.nextVideo();
    playlistType = 'fifteen';
  });
  $('#sixteen-playlist-start').on('click', function() {
    sixteenPlaylist.nextVideo();
    playlistType = 'sixteen';
  });
});
