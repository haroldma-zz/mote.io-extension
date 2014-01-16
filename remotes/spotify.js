exec(function(){
	mote.io.remote =  {
	  api_version: '0.1',
	  app_name: 'Spotify',
	  action: 'listening to',
	  twitter: 'spotify',
	  display_input: true,
	  init: function() {
      },
      update: function(force) {
          var player = $('app-player').contentDocument;

          var trackArtist;
          try { trackArtist = player.getElementById('track-artist').innerText; }
          catch(e) { console.log(e); trackArtist = ""; }
            
          var trackName;
          try { trackName = player.getElementById('track-name').innerText; }
          catch(e) { console.log(e); trackName = ""; }

          var trackImageUrl;
          try {
            var trackImageStyle = player.getElementsByClassName('sp-image-img')[0].style.cssText;
            trackImageUrl = trackImageStyle.replace(/.*?url\((.*?)\).*/, "$1");
          }
          catch(e) { console.log(e); trackImageUrl = "" }

          var trackLink;
          try { trackLink = player.getElementById('track-name').children[0].href; }
          catch(e) { console.log(e); trackLink = ""; }
          mote.io.notify(trackArtist, trackName, trackImageUrl, trackLink, force);

          var previous = player.getElementById('previous');
          var playPause = player.getElementById('play-pause');
          var next = player.getElementById('next');

          

          var playPauseIcon = playPause.classList.contains('playing') ? 'pause' : 'play';
          mote.io.updateButton('playPause', playPauseIcon, null, force);

          /* @todo progress bar
          var current = player.getElementById('track-current').innerHTML
          var length = player.getElementById('track-length').innerHTML
          */
         
          /* @todo stars
          player.getElementById('widget-more').click();
          jQ('#sb').mousedown()
          var starAction = $('context-actions').contentDocument
                .getElementById('star-label').innerText;
          console.log("starAction: " + starAction);
          var starColor = starAction == 'Star' ? '#000000' : '#fff500';
          console.log("starColor: " + starColor);
          mote.io.updateButton('star', null, starColor, force);
          */

          function updateButtonColors(buttons) {
            for (var name in buttons) {
                var color = buttons[name].classList.contains('disabled') ? '#dddddd' : '#:000000';
                mote.io.updateButton(name, null, color, force);
            }
          }

          updateButtonColors({ "previous": previous, "playPause": playPause, "next": next });
      },
      blocks: [
        {
          type: 'notify',
          share: true
        },
        {
          type: 'search',
          action: function(query) {
            window.location = "/search/" + encodeURIComponent(query);
          }
        },
        {
          type: 'buttons',
          data: [
            /* @todo stars buttons
            {
                press: function() {
                    $('context-actions').contentDocument.getElementById('starred').click()
                },
                icon: 'star',
                hash: 'star'
            },
            */
            {
                press: function() {
                    $('app-player').contentDocument.getElementById('previous').click()
                },
                icon: 'backward',
                hash: 'previous'
            },
            {
                press: function() {
                    $('app-player').contentDocument.getElementById('play-pause').click()
                },
                icon: 'play',
                hash: 'playPause'
            },
            {
                press: function() {
                    $('app-player').contentDocument.getElementById('next').click()
                },
                icon: 'forward',
                hash: 'next'
            }
          ]
        }
      ]
    };
});
