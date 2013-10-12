exec(function(){
  var topPos = 0, selector=null;

  var isDirectory = function(){
    var res = window.location.href.search('game');

    return (res===-1);
  }

  $(document).ready(function(){
    console.log(topPos);
    if (isDirectory()) {
      selector = $('.boxart')[topPos];
    } else {
      selector = $('.meta')[topPos];
    }
    selector.addClass('selected');
  });

  mote.io.remote = {
    api_version: '0.1',
    app_name: 'TwitchTV',
    action: 'watching',
    twitter: 'twitchtv',
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
                selector.removeClass('selected');
                selector.addClass('transparent');
                topPos--;
                if(isDirectory()){
                  selector = $('.boxart')[topPos];
                }
                else{
                  selector = $('.meta')[topPos];
                }
                console.log(topPos);
              }
              selector.removeClass('transparent');
              selector.addClass('selected');
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
                selector.removeClass('selected');
                selector.addClass('transparent');
                if(isDirectory()){
                  if(topPos+1 !== $('.boxart').length) {topPos++}
                  selector = $('.boxart')[topPos];
                }
                else{
                  if(topPos+1 !== $('.meta').length) {topPos++}
                  selector = $('.meta')[topPos];
                }
                selector.removeClass('transparent');
                selector.addClass('selected');
                console.log(topPos);
              };

            },
            icon: 'chevron-right',
            hash: 'right'
          }
        ]
      },
    ]
  };

});
