exec(function(){
	mote.io.remote =  {
	  api_version: '0.1',
	  app_name: 'Last.fm',
	  action: 'listening to',
	  twitter: 'lastfm',
	  display_input: true,
	  init: function() {
      },
      blocks: [
        {
          type: 'buttons',
          data: [
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
