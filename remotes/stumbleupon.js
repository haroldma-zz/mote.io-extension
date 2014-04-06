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
              $('#tb-notlike a').click();
            },
            icon: 'thumbs-down',
            hash: 'dislike',
          },
          {
            press: function () {
              $('#tb-stumble a').click();
            },
            icon: 'legal',
            hash: 'stumble',
          },
          {
            press: function () {
              $('#tb-like a, ').click();
            },
            icon: 'thumbs-up',
            hash: 'like',
          }
        ]
      },
      {
      type: 'select',
      data: [
        {
          
          text: 'All Interests',
          action: function() {
          $("[data-contextual='All Interests']").click();
          }
        },
        {
          
          text: 'Activity',
          action: function() {
          //window.location = "/latest/fresh";
          }
        },
        {
          
          text: 'Trending',
          action: function() {
          $("[data-contextual='Trending']").click();
          }
        },
        {
          
          text: 'Photos',
          action: function() {
          $("[data-contextual='Photos']").click();
          }
        },
        {
          
          text: 'Videos',
          action: function() {
          $("[data-contextual='Videos']").click();
          }
        },                        
      ]
      }
    ]
  };

});