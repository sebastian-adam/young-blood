/* Light YouTube Embeds by @labnol */
/* Web: http://labnol.org/?p=27941 */
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

$(document).ready(function() {
  var div, n,
    v = document.getElementsByClassName("youtube-player");
  for (n = 0; n < v.length; n++) {
    div = document.createElement("div");
    div.setAttribute("data-id", v[n].dataset.id);
    div.innerHTML = buildThumb(v[n].dataset.id);
    div.onclick = buildIframe;
    v[n].appendChild(div);
  }

  var unplayed_videos = [];
  var unplayed_counter = 0;
  $('.youtube-player div[data-id]').each(function() {
    unplayed_videos.push($(this).attr('id', unplayed_counter.toString() + '-play-btn'));
    unplayed_counter += 1;
  });

  var playlist = shuffle(unplayed_videos);
  var video_counter = 0;
  $('#playlist-start').on('click', function() {
    var qued_video_id = playlist[video_counter].attr('id');
    $('html, body').animate({scrollTop: $('#' + qued_video_id).offset().top - 290}, 1000);
    $('#' + qued_video_id).click();
    video_counter += 1;
  });
});

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

function buildThumb(id) {
  var thumb = '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg">',
    play = '<div class="play"></div>';
  return thumb.replace("ID", id) + play;
}

var initialized_vids = [];
var current_vid;
var player;
function buildIframe() {
  player = new YT.Player(this.dataset.id, {
    videoId: this.dataset.id,
    playerVars: { 'autoplay': 1, 'showinfo': 0 },
    events: {
      'onStateChange': onPlayerStateChange,
      'onReady': onPlayerReady
    }
  });
  initialized_vids.push(player);
  current_vid = this.dataset.id;
}

function onPlayerReady(event) {
  event.target.playVideo();
}

function onPlayerStateChange(event) {
  if (event.target.getPlayerState() == YT.PlayerState.PLAYING) {
    current_vid = event.target.getVideoData()['video_id'];
  }

  initialized_vids.forEach(function(vid) {
    if(vid.getVideoData()['video_id'] != current_vid && vid.getPlayerState() == YT.PlayerState.PLAYING) {
      vid.pauseVideo()
    }
  });
}



// var iframe = document.createElement("iframe");
// var embed = "https://www.youtube.com/embed/ID?enablejsapi=1&autoplay=1&autohide=1&showinfo=0";
// iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
// iframe.setAttribute("frameborder", "0");
// iframe.setAttribute("allowfullscreen", "1");
// this.parentNode.replaceChild(iframe, this);
