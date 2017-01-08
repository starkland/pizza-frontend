(function() {
  'use strict';

  function AboutCtrl() {
    var vm, _video, Video;

    vm = this;


    _video = document.getElementsByTagName('video')[0];

    // ====

    Video = {
      play: function() {
        _video.play();
        vm.play = true;
      },

      pause: function() {
        _video.pause();
        vm.play = false;
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

    vm.video = {
      play: Video.play,
      pause: Video.pause
    };
  }

  angular
    .module('About')
    .controller('AboutCtrl', AboutCtrl);
})();