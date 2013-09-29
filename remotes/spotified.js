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
    app_name: 'SpOTIfY',
    twitter: 'spotify',
    action: 'listening to',
    display_input: true,
    update: function(force) {

      var nowPlaying = $('#track-current').text().trim(),
        thisStation = $('.line2').text(),
        thisImage = $('.sp-image-img').prop('url');
        mote.io.notify(nowPlaying, thisStation, thisImage, force);

      // transfer button states
      if($('#play-paused').is(':visible')) {
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
          Search(query);
        }
      },
      {
        type: 'buttons',
        data: [
          {
            press: function () {
              if($('#play-pause').is(':visible')){
                $('#play-pause').click();
              } else {
                $('.action').click();
              }
            },
            icon: 'play',
            hash: 'play'
          },
          
        ]
      },
            
    ]
  };

});
