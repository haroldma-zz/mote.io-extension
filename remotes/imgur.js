exec(function(){

	mote.io.remote = {
    api_version: '0.1',
    app_name: 'imgur',
    display_input: false,
    twitter: 'imgur',
    action: 'Checking out images on',
    update: function(force) {

      if($('#mainDownArrow').hasClass('arrow down  title pushed')) {
    mote.io.updateButton('down', null, '#ff0000', force);
    } else {
    mote.io.updateButton('down', null, '#434345', force);
    }

      if($('#mainUpArrow').hasClass('arrow up title pushed')) {
    mote.io.updateButton('up', null, '#00ff00', force);
    } else {
    mote.io.updateButton('up', null, '#434345', force);
    }

      if($('#favorite-image').hasClass('title favorited')) {
    mote.io.updateButton('fav', null, '#ff0000', force);
    } else {
    mote.io.updateButton('fav', null, '#434345', force);
    }


    },

    blocks: [

      {
        type: 'buttons',
        data: [
          {
            press: function () {
              $('.navPrev:first').click();
            },
            icon: 'arrow-left',
            hash: 'previous',
          },
          {
            press: function () {
              $('.navNext:first').click();
            },
            icon: 'arrow-right',
            hash: 'next',
          }
                   
        ]
      },
{
        type: 'buttons',
        data: [
          {
            press: function () {
              $('#favorite-image').click();
            },
            icon: 'heart',
            hash: 'fav',
          },          
          {
            press: function () {
             $('#mainUpArrow').click();
            },
            icon: 'thumbs-up',
            hash: 'up',
          },
          {
            press: function () {
              $('#mainDownArrow').click();
            },
            icon: 'thumbs-down',
            hash: 'down',
          },                    
        ]
      },
      {
        type: 'buttons',
        data: [

          {
            press: function () {
              window.location = "http://www.imgur.com/";
            },
            icon: 'home',
            hash: 'home',
          },
          {
            press: function () {
              $('.post:first a img').click();
            },
            icon: 'th',
            hash: 'firstPost',
          },
          {
            press: function () {
              $('.random-icon').click();
            },
            icon: 'random',
            hash: 'random',
          },
          {
            press: function () {
              window.location = "http://imgur.com/account/favorites";
            },
            icon: 'heart-empty',
            hash: 'myFavorites',
          }

        ]
      }

    ]
  };

});