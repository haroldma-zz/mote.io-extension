exec(function(){
  var astate = 1, vstate=1, topPos = 0, selector=null;

  var parts = window.location.pathname.split("/");

  var isDirectory = function(){
    var res = window.location.href.search('game');
    return (res===-1);
  }

  var navigation = [{
    optgroup: 'Popular',
    text: 'League of Legends',
    action: function(){
      window.location = "/directory/game/League%20of%20Legends";
    }
  }, {
    optgroup: 'Popular',
    text: 'DOTA 2',
    action: function(){
      window.location = "/directory/game/Dota%202";
    }
  }, {
    optgroup: 'Popular',
    text: 'Hearthstone: Heroes of Warcraft',
    action: function(){
      window.location = "/directory/game/Hearthstone%3A%20Heroes%20of%20Warcraft";
    }
  }, {
    optgroup: 'Popular',
    text: 'Starcraft II: Heart of the Swarm',
    action: function(){
      window.location = "/directory/game/StarCraft%20II%3A%20Heart%20of%20the%20Swarm";
    }
  }, {
    optgroup: 'Popular',
    text: 'M.U.G.E.N',
    action: function(){
      window.location = "/directory/game/M.U.G.E.N";
    }
  }, {
    optgroup: 'Popular',
    text: 'More Games',
    action: function(){
      window.location = "/directory";
    }
  }]; 

/*
  $(document).ready(function(){
    console.log(topPos);
    if (isDirectory()) {
      selector = $('.boxart')[topPos];
    } else {
      selector = $('.meta')[topPos];
    }
    selector.addClass('selected');
  });
*/

  if(parts[1] === "directory") {

    mote.io.remote = {
      api_version: '0.1',
      app_name: 'Twitch.TV',
      action: 'watching',
      twitter: 'twitchtv',
      facebook: 'twitchtv',
      display_input: 'true',

      blocks: [
        {
          type: 'notify',
          share: 'true'
        },
        {
          type: 'buttons',
          data: [
            {
              press: function() {
                //debugger;
                if(topPos-1<0 || selector===null){
                  if(isDirectory()){
                    selector = $('.boxart')[topPos];
                  }
                  else{
                    selector = $('.meta')[topPos];
                  }
                  console.log(topPos);
                }
                else{
                  $(selector).removeClass('selected');
                  $(selector).addClass('transparent');
                  topPos--;
                  if(isDirectory()){
                    selector = $('.boxart')[topPos];
                  }
                  else{
                    selector = $('.meta')[topPos];
                  }
                  console.log(topPos);
                }
                $(selector).removeClass('transparent');
                $(selector).addClass('selected');
              },
              icon: 'chevron-left',
              hash: 'left'
            },
            {
              press: function () {
                if(selector===null){
                  if(isDirectory()){
                    selector = $('.boxart')[topPos];
                  }
                  else{
                    selector = $('.meta')[topPos];
                  }
                  console.log(topPos);
                }
                
                if(isDirectory()){
                  selector.parentNode.click();
                  topPos = 0;
                }
                else{
                  $($('.meta')[topPos]).find('a')[0].click();
                  topPos = 0;
                }
              },
              icon: 'circle-blank',
              hash: 'go'
            },
            {
              press: function() {
                if(selector===null){
                  topPos=0;
                  if(isDirectory()){
                    selector = $('.boxart')[topPos];
                  }
                  else{
                    selector = $('.meta')[topPos];
                  }
                }
                else{
                  $(selector).removeClass('selected');
                  $(selector).addClass('transparent');
                  if(isDirectory()){
                    if(topPos+1 !== $('.boxart').length) {topPos++}
                    selector = $('.boxart')[topPos];
                  }
                  else{
                    if(topPos+1 !== $('.meta').length) {topPos++}
                    selector = $('.meta')[topPos];
                  }
                  $(selector).removeClass('transparent');
                  $(selector).addClass('selected');
                  console.log(topPos);
                };

              },
              icon: 'chevron-right',
              hash: 'right'
            },
            {
              press: function() {
                window.location = "/directory";  
              },
              icon: 'home',
              hash: 'menu'
            }
          ]
        },
      ]
    };
  }
  else {
    mote.io.remote = {
      api_version: '0.1',
      app_name: 'Twitch.TV',
      action: 'watching',
      twitter: 'twitchtv',
      facebook: 'twitchtv',
      display_input: 'true',

      blocks: [
        {
          type: 'notify',
          share: 'true'
        },
        {
          type: 'buttons',
          data: [
            {
              press: function() {
                if(vstate===1){
                  $('object[data$=TwitchPlayer\\.swf]')[0].pauseVideo();
                  vstate=0;
                  mote.io.updateButton('play', 'pause', null, false);
                }
                else{
                  $('object[data$=TwitchPlayer\\.swf]')[0].playVideo();
                  vstate=1;
                  mote.io.updateButton('play', 'play', null, false);
                }
              },
              icon: 'pause',
              hash: 'play'
            },
            {
              press: function() {
                if(astate===1){
                  $('object[data$=TwitchPlayer\\.swf]')[0].mute();
                  astate=0;
                  mote.io.updateButton('sound', 'volume-off', null, false);
                }
                else{
                  $('object[data$=TwitchPlayer\\.swf]')[0].unmute();
                  astate=1;
                  mote.io.updateButton('sound', 'volume-up', null, false);
                }
              },
              icon: 'volume-up',
              hash: 'sound'
            },
            {
              press: function() {
                window.location = "/directory";
              },
              icon: 'home',
              hash: 'menu'
            }]
        },
        {
          type: 'select',
          title: 'Change Page',
          data: navigation
        }]

    }
  }

});
