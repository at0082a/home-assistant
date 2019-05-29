<<<<<<< HEAD:src/components/mediaSource.js
export function startlivestream() {
  const videoElement = document.getElementById("my-video");
  const myMediaSource = new MediaSource();
  const url = URL.createObjectURL(myMediaSource);
  videoElement.src = url;
  myMediaSource.addEventListener("sourceopen", sourceOpen);
}
function sourceOpen() {
  // 1. add source buffers

  // const audioSourceBuffer = myMediaSource.addSourceBuffer(
  //   'audio/mp4; codecs="mp4a.40.2"'
  // );
  var mediasource = this;
  const videoSourceBuffer = mediasource.addSourceBuffer(
    'video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
  );

  // 2. download and add our audio/video to the SourceBuffers

  // for the audio SourceBuffer
  // fetch("http://server.com/audio.mp4")
  //   .then(function(response) {
  //     // The data has to be a JavaScript ArrayBuffer
  //     return response.arrayBuffer();
  //   })
  //   .then(function(audioData) {
  //     audioSourceBuffer.appendBuffer(audioData);
  //   });

  // the same for the video SourceBuffer
  fetch("https://s3.amazonaws.com/michaelcain-livestream/toystory.mp4")
=======
var vidElement = document.querySelector("video");

if (window.MediaSource) {
  var mediaSource = new MediaSource();
  vidElement.src = URL.createObjectURL(mediaSource);
  mediaSource.addEventListener("sourceopen", sourceOpen);
} else {
  console.log("The Media Source Extensions API is not supported.");
}

function sourceOpen(e) {
  URL.revokeObjectURL(vidElement.src);
  var mime = 'video/mp4; codecs="opus, vp09.00.10.08"';
  var mediaSource = e.target;
  var sourceBuffer = mediaSource.addSourceBuffer(mime);
  var videoUrl = "https://d1p7vmfdxc45kc.cloudfront.net/Sample+Videos+2.mp4";
  fetch(videoUrl)
>>>>>>> 69a22fdb767fc787104c28e9bc4058de89aef2bb:src/mediaSource.js
    .then(function(response) {
      // The data has to be a JavaScript ArrayBuffer
      return response.arrayBuffer();
    })
    .then(function(videoData) {
      videoSourceBuffer.appendBuffer(videoData);
    });
  // alert("Starting Live Stream");
}
