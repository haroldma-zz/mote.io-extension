exec(function(){

	function extractUrl(input) {
	  if (typeof input !== "undefined") {
	   return input.replace(/"/g,"").replace(/url\(|\)$/ig, "");
	  } else {
	   return;
	  }
	}

  function autoplay(){
    if(jQ('.search_section_title').length) {
      jQ('.create_station')[0].click()
    } else {
      setTimeout(function(){
        autoplay();
      }, 500);
    }
  }

	mote.io.remote = {
    api_version: '0.1',
    app_name: 'Pandora',
    display_input: true,
    init: function() {

      autoplay();

    },
    update: function(force) {

      var thisArtist = $('.playerBarSong').text(),
        thisSong = $('.playerBarArtist').text(),
        thisImage = $('.playerBarArt').prop('src');
        mote.io.notify(thisArtist, thisSong, thisImage, force);

      // transfer button states
      if($('.pauseButton').is(':visible')) {
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
        type: 'search',
        action: function(query) {
          window.location = "http://www.pandora.com/search/" + encodeURIComponent(query);
        }
      },
      {
        type: 'buttons',
        data: [
          {
            press: function () {
              $('.thumbDownButton a').click();
            },
            icon: 'thumbs-down',
            hash: 'down',
            leapmotion: 'circle-left'
          },
          {
            press: function () {
              $('.thumbUpButton a').click();
            },
            icon: 'thumbs-up',
            hash: 'up',
            leapmotion: 'circle-right'
          },
          {
            press: function () {
              if($('.pauseButton').is(':visible')){
                $('.pauseButton a').click();
              } else {
                $('.playButton a').click();
              }
            },
            icon: 'play',
            hash: 'play',
            leapmotion: 'key-tap'
          },
          {
            press: function () {
              $('.skipButton a').click();
            },
            icon: 'fast-forward',
            hash: 'skip',
            leapmotion: 'swipe-left'
          },
          {
            press: function () {
              var $current = $('.stationListItem.selected');
              // Get the next station
              var $next = $current.next('.stationListItem');
              // If there wasn't a next one, go back to the first.
              if( $next.length == 0 ) {
                  // Go to the beginning; skip the shuffle button.
                  $next = $current.prevAll('.stationListItem').last().next();
              }
              $next.click();
            },
            icon: 'fast-forward',
            hash: 'skip-station',
            leapmotion: 'swipe-left'
          }
        ]
      },
    ]
  };

});
