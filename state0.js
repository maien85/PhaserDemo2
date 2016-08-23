var demo = {}, centerX=1500/2, centerY=1000/2,face,speed=5;
demo.state0 = function(){};
demo.state0.prototype = {
    preload: function(){
        game.load.image('face','assets/sprites/sprite2.png')
    },
    create: function(){
        game.stage.backgroundColor = '#ffffff'
        console.log('state0');
        
        addChangeStateEventListners();
        
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        
        face = game.add.sprite(centerX,centerY,'face');
        face.anchor.setTo(0.5,0.5);
    },
    update: function(){
        if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
            {
            face.x -= speed;

        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
            {
            face.x += speed;
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
            {
            face.y += speed;

        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.UP))
            {
            face.y -= speed;
        }        
        
    }
};

function changeState(i,stateNum){
    console.log(i);
    game.state.start('state'+stateNum);
}

function addCallBack(key, fn, args){
    game.input.keyboard.addKey(key).onDown.add(fn,null,null,args);
}

function addChangeStateEventListners(){
     addCallBack(Phaser.Keyboard.ZERO,changeState,0);
     addCallBack(Phaser.Keyboard.ONE,changeState,1);
     addCallBack(Phaser.Keyboard.TWO,changeState,2);
     addCallBack(Phaser.Keyboard.THREE,changeState,3);
     addCallBack(Phaser.Keyboard.FOUR,changeState,4);
     addCallBack(Phaser.Keyboard.FIVE,changeState,5);
     addCallBack(Phaser.Keyboard.SIX,changeState,6);
     addCallBack(Phaser.Keyboard.SEVEN,changeState,7);
     addCallBack(Phaser.Keyboard.EIGHT,changeState,8);
     addCallBack(Phaser.Keyboard.NINE,changeState,9); 
    
}