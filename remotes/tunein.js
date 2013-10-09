exec(function(){

	function extractUrl(input) {
	  if (typeof input !== "undefined") {
	   return input.replace(/"/g,"").replace(/url\(|\)$/ig, "");
	  } else {
	   return;
	  }
	}

	mote.io.remote = {
    api_version: '0.1',
    app_name: 'tunein',
    twitter: 'tunein',
    action: 'listening to',
    display_input: true,
    init: function() {
      $($('.chrome._playTarget')[0]).click();
    },
    update: function(force) {

      var nowPlaying = $('.line1').text(),
        thisStation = $('.line2').text(),
        thisImage = $('.logo.loaded').prop('src');
        mote.io.notify(nowPlaying, thisStation, thisImage, force);

      // transfer button states
      if($('.playing').is(':visible')) {
        mote.io.updateButton('play', 'pause', null, force);
      } else {
        mote.io.updateButton('play', 'play', null, force);
      }

    },
    blocks: [
      {
        type: 'notify',
        share: true
      },
      {
        type: 'search',
        action: function(query) {
          window.location = "/search/?query=" + encodeURIComponent(query);
        }
      },
      {
        type: 'buttons',
        data: [
          {
            press: function () {
              if($('.play-button').is(':visible')){
                $('.play-button').click();
              } else {
                $('.action').click();
              }
            },
            icon: 'play',
            hash: 'play'
          },

        ]
      }
    ]
  };

});
