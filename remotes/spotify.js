exec(function() {
  var parts = window.location.pathname.split("/");
  var index = 1;
  var flagPlaylist = 0;
  var selector = null;
  var navigation = [{
    optgroup: 'Spotify',
    text: 'Home',
    action: function() {
      window.location = "/";
    }
  }, {
    optgroup: 'Spotify',
    text: 'Browse',
    action: function() {
      window.location = "/browse";
    }
  }, {
    optgroup: 'Spotify',
    text: 'Discover',
    action: function() {
      window.location = "/discover";
    }
  }, {
    optgroup: 'Spotify',
    text: 'Radio',
    action: function() {
      window.location = "/radio";
    }
  }, {
    optgroup: 'Spotify',
    text: 'Playlists',
    action: function() {
      window.location = "/playlist";
    }
  }, {
    optgroup: 'Spotify',
    text: 'Follow',
    action: function() {
      window.location = "/follow";
    }
  }
  ];

  if(parts[1] == "/" || parts[1] == "/discover") {
    mote.io.remote = {
      api_version: '0.1',
      app_name: 'Spotify Web Player',
      display_input: true,
      action: 'listening to',
      twitter: 'spotify',
      init: function() {
        window.JQ("#app-player").contents().find("#play-pause").click();
        selector = window.JQ("#section-discover > root");
      },
      update: function(force) {
        if($('#play-pause').hasClass('playing')) {
          mote.io.updateButton('play', 'pause', null, force);
        } else {
          mote.io.updateButton('play', 'play', null, force);
        }
        mote.io.notify($("#app-player").contents.find("#track-artist").text(), $("#app-player").contents.find("#track-name").text(), extractUrl($("#app-player").contents.find(".sp-image-img").css('background-image')), $("#app-player").contents.find("#track-name a").attr('href'), force);
      },
      blocks: [{
        type: 'notify',
        share: true
      }, {
        type: 'search',
        action: function(query) {
          window.location = "/search/" + encodeURIComponent(query);
        }
      }, {
        type: 'buttons',
        data: [{
          press: function() {
            $("#app-player").contents().find("#previous").click();
          },
          icon: 'backward',
          hash: 'back',
          leapmotion: 'swipe-right'
        }, {
          press: function() {
            $("#app-player").contents().find("#play-pause").click();
          },
          icon: 'play',
          hash: 'play',
          leapmotion: 'key-tap'
        }, {
          press: function() {
            $("#app-player").contents().find("#next").click();
          },
          icon: 'forward',
          hash: 'next',
          leapmotion: 'swipe-left'
        }],
        //end of first button set
      }, {
        type: 'select',
        title: 'Navigate',
        data: navigation
        }, {
        type: 'buttons',
        data: [{
          press: function() {
            //
          },
          icon: 'chevron-left',
          hash: 'left'
        }, {
          press: function() {
            //
          },
          icon: 'chevron-right',
          hash: 'right'
        }
      ] //end of block
        }]};
    //end of remote
  } else if(parts[1] == "/playlist"){
    mote.io.remote = {
      api_version: '0.1',
      app_name: 'Spotify Web Player',
      display_input: true,
      action: 'listening to',
      twitter: 'spotify',
      init: function() {
        selector = window.JQ(window.JQ("#section-playlist > root").children()[0]).contents().find(".list-group > a")[index];
      },
      update: function(force) {
        if($('#play-pause').hasClass('playing')) {
          mote.io.updateButton('play', 'pause', null, force);
        } else {
          mote.io.updateButton('play', 'play', null, force);
        }
        mote.io.notify($("#app-player").contents.find("#track-artist").text(), $("#app-player").contents.find("#track-name").text(), extractUrl($("#app-player").contents.find(".sp-image-img").css('background-image')), $("#app-player").contents.find("#track-name a").attr('href'), force);
      },
      blocks: [{
        type: 'notify',
        share: true
      }, {
        type: 'search',
        action: function(query) {
          window.location = "/search/" + encodeURIComponent(query);
        }
      }, {
        type: 'buttons',
        data: [{
          press: function() {
            $("#app-player").contents().find("#previous").click();
          },
          icon: 'backward',
          hash: 'back',
          leapmotion: 'swipe-right'
        }, {
          press: function() {
            $("#app-player").contents().find("#play-pause").click();
          },
          icon: 'play',
          hash: 'play',
          leapmotion: 'key-tap'
        }, {
          press: function() {
            $("#app-player").contents().find("#next").click();
          },
          icon: 'forward',
          hash: 'next',
          leapmotion: 'swipe-left'
        }],
        //end of first button set
      }, {
        type: 'select',
        title: 'Navigate',
        data: navigation
      }, {
        type: 'buttons',
        data: [{
          press: function() {
            if(flagPlaylist===0) {
              if(index-1===0){
                index = 2;
              }
              selector.removeClass('selected');
              selector = window.JQ(window.JQ("#section-playlist > root").children()[0]).contents().find(".list-group > a")[index--];
              selector.addClass('selected');
            } else {
              if(index-1 < 0){
                index = 1;
              }
              selector.removeClass('selected');
              selector = window.JQ(window.JQ(window.JQ("#section-playlist > root").children()[0]).contents().find(".sp-list-table-body")).contents[index--];
              selector.addClass('selected');
            }
          },
          icon: 'chevron-up',
          hash: 'up'
        }, {
          press: function() {
            if(flagPlaylist===0) { //check if playlist nav
              selector.click();
              selector.removeClass('selected');
              flagPlaylist = 1;
              index = 0;
              selector = window.JQ(window.JQ("#section-playlist > root").children()[0]).contents().find(".sp-list-table-body")[index];
              selector.addClass('selected');
            } else {
              selector.click();
            }
          },
          icon: 'circle-blank',
          hash: 'go'
        }, {
          press: function() {
            if(flagPlaylist===0) {
              selector.removeClass('selected');
              selector = window.JQ(window.JQ("#section-playlist > root").children()[0]).contents().find(".list-group > a")[index++];
              selector.addClass('selected');
            } else {
              selector.removeClass('selected');
              selector = window.JQ(window.JQ(window.JQ("#section-playlist > root").children()[0]).contents().find(".sp-list-table-body")).contents[index++];
              selector.addClass('selected');
            }
          },
          icon: 'chevron-down',
          hash: 'down'
        }
      ] //end of block
      }]};
  } else {

  }
//end of remotes


//end of exec
});