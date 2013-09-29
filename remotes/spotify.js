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
    app_name: 'Spotify',
    display_input: true,
    update: function(force) {

      var thisArtist = $('.track-name').text(),
        thisSong = $('.track-artist').text(),
        thisImage = $('.sp-image-wrapper').prop('url');
        mote.io.notify(thisArtist, thisSong, thisImage, force);

      // transfer button states
      if($('.play-pause').is(':visible')) {
        mote.io.updateButton('play', 'pause', null, force);
      } else {
        mote.io.updateButton('play', 'play', null, force);
      }

      if($('.thumbDownButton').hasClass('indicator')){
        mote.io.updateButton('down', null, '#f28141', force);
      } else {
        mote.io.updateButton('down', null, '#434345', force);
      }

      if($('.thumbUpButton').hasClass('indicator')){
        mote.io.updateButton('up', null, '#f28141', force);
      } else {
        mote.io.updateButton('up', null, '#434345', force);
      }

    },
    blocks: [
      {
        type: 'notify',
        share: false
      },
      {
        type: 'buttons',
        data: [
          {
            press: function () {
              $('.thumbDownButton a').click();
            },
            icon: 'thumbs-down',
            hash: 'down'
          },
          {
            press: function () {
              $('.thumbUpButton a').click();
            },
            icon: 'thumbs-up',
            hash: 'up'
          },
          {
            press: function () {
              if($('.play-pause').is(':visible')){
                $('.play-pause a').click();
              } else {
                $('.play-pause a').click();
              }
            },
            icon: 'play',
            hash: 'play'
          },
          {
            press: function () {
              $('.skipButton a').click();
            },
            icon: 'fast-forward',
            hash: 'skip'
          }
        ]
      },
    ]
  };

});
