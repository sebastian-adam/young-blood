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
    div.innerHTML = labnolThumb(v[n].dataset.id);
    div.onclick = labnolIframe;
    v[n].appendChild(div);
  }
});

function labnolThumb(id) {
  var thumb = '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg">',
      play = '<div class="play"></div>';
  return thumb.replace("ID", id) + play;
}

var initialized_vids = [];
var current_vid;
function labnolIframe() {
  player = new YT.Player(this.dataset.id, {
    videoId: this.dataset.id,
    playerVars: { 'autoplay': 1, 'showinfo': 0 },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
  initialized_vids.push(player);
  current_vid = this.dataset.id;
}

function onPlayerReady(event) {
  event.target.playVideo();
}

function onPlayerStateChange(event) {
  initialized_vids.forEach(function(vid) {
    if(vid.getVideoData()['video_id'] != current_vid && vid.getPlayerState() == YT.PlayerState.PLAYING) {
      vid.stopVideo()
    }
  });
}



// var iframe = document.createElement("iframe");
// var embed = "https://www.youtube.com/embed/ID?enablejsapi=1&autoplay=1&autohide=1&showinfo=0";
// iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
// iframe.setAttribute("frameborder", "0");
// iframe.setAttribute("allowfullscreen", "1");
// this.parentNode.replaceChild(iframe, this);
