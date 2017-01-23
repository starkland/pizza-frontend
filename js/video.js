(function(root) {

  'use strict';

  // ====

  class Video {
    constructor(video, play, pause, duration) {
      this.video = video;
      this.play = play;
      this.pause = pause;
      this.duration = duration;
    }

    Play() {
      return this.video.play();
    }

    Pause() {
      return this.video.pause();
    }

    Time() {
      let video = this.video;

      const total = Math.round(video.duration);
      const current = Math.round(video.currentTime);

      this.duration.innerHTML = total - current / 100;
    }
  };

  let video = document.getElementsByTagName('video')[0];
  let playBtn = document.getElementById('playBtn');
  let pauseBtn = document.getElementById('pauseBtn');
  let duration = document.getElementById('videoDuration');

  let VideoElement = new Video(video, playBtn, pauseBtn, duration);

  function handlePlay() {
    VideoElement.Play();

    pauseBtn.classList.remove('js-active');
    this.classList.add('js-active');
  }

  function handlePause() {
    VideoElement.Pause();

    playBtn.classList.remove('js-active');
    this.classList.add('js-active');
  }

  // ====

  playBtn.addEventListener('click', handlePlay, false);
  pauseBtn.addEventListener('click', handlePause, false);

  // root.requestAnimationFrame(VideoElement.Time);

})(this);