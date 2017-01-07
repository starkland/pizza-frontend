(function() {

  'use strict';

  var video, playBtn, pauseBtn, duracaoBtn;

  video = document.getElementsByTagName('video')[0];

  playBtn = document.getElementById('playBtn');
  pauseBtn = document.getElementById('pauseBtn');
  duracaoBtn = document.getElementById('duracaoBtn');

  // ====

  playBtn.addEventListener('click', play, false);
  pauseBtn.addEventListener('click', pause, false);
  duracaoBtn.addEventListener('click', duracao, false);

  // ====

  function play() {
    video.play();
  }

  function pause() {
    video.pause();
  }

  function duracao() {
    console.info(video.duration);
  }

})();