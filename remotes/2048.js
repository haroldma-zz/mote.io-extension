
exec(function(){
  
  // toggle options on update for restart and keep playing
  var option = false;
  var once = false;

  function start() {
        this.game = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
  }

  //directional movement
  function up() {
        this.game.inputManager.emit("move", 0)
  }
  function down() {
        this.game.inputManager.emit("move", 2)
  }
  function left() {
        this.game.inputManager.emit("move", 3)
  }
  function right() {
        this.game.inputManager.emit("move", 1)
  }

  
  function restart() {
        this.game.inputManager.emit("restart")
  }
  function keepPlaying() {
        this.game.inputManager.emit("keepPlaying")
  }

  
  function switchOptions(){
        if(option){
            option = false;
        } else {
            option = true;
        }
  }
  function options() {
        if(option && !once) {
            
            mote.io.remote.blocks.push({
            type: 'buttons',
            data: [
                {
                    press: function() {
                        restart();
                    },
                    icon: 'repeat',
                    hash: 'restart'
                },
                {
                    press: function() {
                        keepPlaying();
                    },
                    icon: 'play',
                    hash: 'keepPlaying'
                }
            ]
            });
            once = true;
            mote.io.receiver.sendRemote();
        }
        if(!option && once) {
            mote.io.remote.blocks.pop();
            once = false;
            mote.io.receiver.sendRemote();
        }
        // console.log("message");
  }

  mote.io.remote = {
    api_version: '0.1',
    app_name: '2048',
    action: 'playing',
    twitter: 'gilcz2',
    display_input: false,
    init: function() {
        start();
    },
    update: function(force) {
        options();
    },
    blocks: [
        {
            type: 'buttons',
            data: [
                {
                    press: function(g) {
                        up();
                    },
                    icon: 'chevron-up',
                    hash: 'up'
                },
            ]
        }
        ,{
            type: 'buttons',
            data: [
                {
                    press: function() {
                        left();
                    },
                    icon: 'chevron-left',
                    hash: 'left'
                },
                {
                    press: function() {
                        //Initialize control of game board
                        //this.game = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
                        switchOptions();
                    },
                    icon: 'circle-blank',
                    hash: 'control'
                },
                {
                    press: function() {
                        right();
                    },
                    icon: 'chevron-right',
                    hash: 'right'
                }
            ]
        },
        {
            type: 'buttons',
            data: [
                {
                    press: function() {
                        down();
                    },
                    icon: 'chevron-down',
                    hash: 'down'
                }
            ]
        }
    ]
  };

});