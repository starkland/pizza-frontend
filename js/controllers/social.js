(function() {
  'use strict';

  function SocialCtrl() {
    var vm, social;

    vm = this;

    social = [
      {
        name: 'Facebook',
        url: 'https://www.facebook.com',
        icon: 'facebook'
      },
      {
        name: 'Twitter',
        url: 'https://www.twitter.com',
        icon: 'twitter'
      },
      {
        name: 'Github',
        url: 'https://www.github.com',
        icon: 'github'
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com',
        icon: 'instagram'
      }
    ];

    vm.social_list = social;
  }

  angular
    .module('Social')
    .controller('SocialCtrl', SocialCtrl);
})();