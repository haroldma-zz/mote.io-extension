exec(function(){
    
    mote.io.remote = {
	api_version: '0.1',
	app_name: 'Google Play Music',
	display_input: true,

	init: function() {
	    window.location = 'https://play.google.com/music/listen#/all';
	    if(jQ('.player-middle').children()[4].getAttribute('value') == "NO_SHUFFLE"){
		jQ('.player-middle').children()[4].setAttribute('value', 'ALL_SHUFFLE');
            }
	    jQ('.player-middle').children()[2].click();
	},
	update: function(force) {

	    var thisArtist = jQ('#player-artist').text(),
	    thisSong = jQ('#playerSongTitle').text(),
	    thisAlbum = jQ('.player-album').text(),
	    thisImage = jQ('#playingAlbumArt').prop('src');
	    mote.io.notify(thisSong, thisArtist + " - " + thisAlbum, thisImage, force);

	    // transfer button states 
	    if(jQ('.player-middle').children().length > 0 && jQ('.player-middle').children()[2].getAttribute('title') == "Play") {
		mote.io.updateButton('play', 'play', null, force);
	    } else {
		mote.io.updateButton('play', 'pause', null, force);
	    }

	    if( jQ('.selected[data-rating]').length > 0 && jQ('.selected[data-rating]')[0].getAttribute('data-rating') == 1){
		mote.io.updateButton('down', null, '#ffa500', force);
	    } else if(jQ('.selected[data-rating]').length > 0 && jQ('.selected[data-rating]')[0].getAttribute('data-rating') == 0){
		mote.io.updateButton('down', null, '#000000', force); 
	    }

	    if( jQ('.selected[data-rating]').length > 0 && jQ('.selected[data-rating]')[0].getAttribute('data-rating') == 5){
		mote.io.updateButton('up', null, '#ffa500', force);
	    } else if(jQ('.selected[data-rating]').length > 0 && jQ('.selected[data-rating]')[0].getAttribute('data-rating') == 0){
		mote.io.updateButton('up', null, '#000000', force);
	    }

	    if(jQ('.player-middle').children().length > 0 && jQ('.player-middle').children()[4].getAttribute('value') == "ALL_SHUFFLE"){
		mote.io.updateButton('shuffle', null, '#ffa500', force);
	    } else {
		mote.io.updateButton('shuffle', null, '#000000', force);
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
		    window.location = "https://play.google.com/music/listen#/sr/" + encodeURIComponent(query);
		    function fireWhenReady() {

			if (jQ('.song-row td[data-col="title"] span.content.tooltip').length) {

			    setTimeout(function(){
				var button = jQ('<div></div>').attr('id', 'b2');
				button.addClass('hover-button');
				button.attr('data-id','play');
				jQ('.song-row td[data-col="title"] span.content.tooltip').eq(0).append(button);
				jQ('#b2').trigger('click');
			    }, 1000);

			} else {

			    setTimeout(fireWhenReady, 100);

			}

		    }
		    fireWhenReady();


		}    
	    },
	    {
		type: 'buttons',
		data: [
		    {
			press: function () {
			    jQ('.player-middle').children()[1].click();
			}, 
			icon: 'fast-backward',
			hash: 'back'
		    },
		    {
			press: function () {
			    jQ('.player-middle').children()[2].click();
			}, 
			icon: 'play',
			hash: 'play'
			
		    },
		    {
			press: function () {
			    jQ('.player-middle').children()[3].click();
			},
			icon: 'fast-forward',
			hash: 'skip'
		    },
		    {
			press: function () {
			    jQ('.player-middle').children()[4].click();
			},
			icon: 'random',
			hash: 'shuffle'
		    },
		    {
			press: function () {
			    jQ('.player-rating-container').children()[0].childNodes[0].click();
			},
			icon: 'thumbs-up',
			hash: 'up'
		    },
		    {
			press: function () {
			    jQ('.player-rating-container').children()[0].childNodes[1].click();
			},
			icon: 'thumbs-down',
			hash: 'down'
		    }
		]
	    },
	    {
		type: 'buttons',
		data: [
		    {
			press: function () {
			    window.location = 'https://play.google.com/music/listen#/all';
			    if(jQ('.player-middle').children()[4].getAttribute('value') == "NO_SHUFFLE"){
				jQ('.player-middle').children()[4].setAttribute('value', 'ALL_SHUFFLE');
			    }
			    setTimeout(function(){
				var button = jQ('<div></div>').attr('id', 'b2');
				button.addClass('hover-button');
				button.attr('data-id','play');
				jQ('.song-row td[data-col="title"] span.content.tooltip').eq(0).append(button);
				jQ('#b2').trigger('click');
				jQ('.player-middle').children()[2].click();
				jQ('.player-middle').children()[3].click();

			    }, 1000);
			    

			}, 
			icon: 'home',
			hash: 'home'
		    }
		]
	    }
	]

    };

});
