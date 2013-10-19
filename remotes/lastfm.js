exec(function(){
	mote.io.remote =  {
	  api_version: '0.1',
	  app_name: 'Last.fm',
	  action: 'listening to',
	  twitter: 'lastfm',
	  display_input: true,
	  init: function() {
      },
      update: function(force) {
          if($('webRadio').hasClassName('playing')) {
            mote.io.updateButton('play', 'pause', null, force);
          }
          if($('webRadio').hasClassName('paused')) {
            mote.io.updateButton('play', 'play', null, force);
          }
          if($('radioPlayer').hasClassName('loved')) {
            mote.io.updateButton('love', null, '#ff0000', force);
          } else {
            mote.io.updateButton('love', null, '#000000', force);
          }
      },
      blocks: [
        {
          type: 'buttons',
          data: [
            {
                press: function () {
                  $$('#radioControlLove a')[0].click();
                },
                icon: 'heart',
                hash: 'love'
            },
            {
                press: function () {
                if($('webRadio').hasClassName('playing')) {
                  $$('#radioControlPause a')[0].click();
                }
                else if($('webRadio').hasClassName('paused')) {
                  $$('#radioControlPlay a')[0].click();
                }
                },
                icon: 'play',
                hash: 'play'
            },
            {
                press: function () {
                    $$('#radioControlSkip a')[0].click();
                },
                icon: 'forward',
                hash: 'next'
            }
          ]
        }
      ]
    };
});
