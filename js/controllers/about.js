(function() {
  'use strict';

  function AboutCtrl() {
    var _video, playBtn, pauseBtn, Video;

    _video = document.getElementsByTagName('video')[0];

    playBtn = document.getElementById('playBtn');
    pauseBtn = document.getElementById('pauseBtn');

    // ====

    Video = {
      play: function() {
        _video.play();

        pauseBtn.classList.remove('js-active');
        this.classList.add('js-active');
      },

      pause: function() {
        _video.pause();

        playBtn.classList.remove('js-active');
        this.classList.add('js-active');
      },

      duration: function() {
        var current, total, duracao;

        current = Math.round(_video.currentTime);
        total = Math.round(_video.duration);

        duracao = document.getElementById('videoDuration');
        duracao.innerHTML = total - current / 100;

        window.requestAnimationFrame(Video.duration);
      }
    };

    Video.duration();

    // ====

    playBtn.addEventListener('click', Video.play, false);
    pauseBtn.addEventListener('click', Video.pause, false);
  }

  angular
    .module('About')
    .controller('AboutCtrl', AboutCtrl);
})();