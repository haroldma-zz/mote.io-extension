exec(function(){

	mote.io.remote = {
    api_version: '0.1',
    app_name: 'StumbleUpon',
    display_input: true,
    twitter: 'StumbleUpon',
    action: 'Stumbling on',
    update: function(force) {
    },
    blocks: [
      {
        type: 'buttons',
        data: [
          {
            press: function () {
              //$('.prev').click();
            },
            icon: 'backward',
            hash: 'dislike',
          },
          {
            press: function () {
              //$('.play_pause').click();
            },
            icon: 'play',
            hash: 'stumble',
          },
          {
            press: function () {
              //$('.next').click();
            },
            icon: 'forward',
            hash: 'like',
          },
          {
            press: function () {
              //$('.shuffle').click();
            },
            icon: 'random',
            hash: 'random',
          }
        ]
      },
    ]
  };

});