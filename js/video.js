(function() {

  'use strict';

  var video, playBtn, pauseBtn, duracao;

  video = document.getElementsByTagName('video')[0];

  playBtn = document.getElementById('playBtn');
  pauseBtn = document.getElementById('pauseBtn');
  duracao = document.getElementById('videoDuration');

  // ====

  function play() {
    video.play();

    pauseBtn.classList.remove('js-active');
    this.classList.add('js-active');
  }

  function pause() {
    video.pause();

    playBtn.classList.remove('js-active');
    this.classList.add('js-active');
  }

  function duration() {
    var current, total;

    current = Math.round(video.currentTime);
    total = Math.round(video.duration);

    duracao.innerHTML = total - current / 100;
    window.requestAnimationFrame(duration);
  }

  // ====

  playBtn.addEventListener('click', play, false);
  pauseBtn.addEventListener('click', pause, false);

  duration();

})();