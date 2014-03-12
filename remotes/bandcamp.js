exec( function() {
	mote.io.remote = {
		api_version: '0.1',
		app_name: 'Bandcamp',
		action: 'listening to',
		twitter: 'Bandcamp',
		display_input: true,
		update: function( force ) {
			var isPlaying = $( 'div.playbutton' ).is( '.playing' ),
				canSkipBackward = ! $( 'div.prevbutton' ).is( '.hiddenelem' ),
				canSkipForward = ! $( 'div.nextbutton' ).is( '.hiddenelem' );

			mote.io.updateButton( 'play', isPlaying ? 'pause' : 'play', null, force );
			mote.io.updateButton( 'skip-backward', null, canSkipBackward ? '#000000' : '#dddddd', force );
			mote.io.updateButton( 'skip-forward', null, canSkipForward ? '#000000' : '#dddddd', force );
		},
		blocks: [
			{
				type: 'buttons',
				data: [
					{
						press: function() {
							$( 'div.prevbutton' ).click();
						},
						icon: 'fast-backward',
						hash: 'skip-backward'
					},
					{
						press: function() {
							$( 'div.playbutton' ).click();
						},
						icon: 'play',
						hash: 'play'
					},
					{
						press: function() {
							$( 'div.nextbutton' ).click();
						},
						icon: 'fast-forward',
						hash: 'skip-forward'
					},
				]
			}
		]
	}
} );
