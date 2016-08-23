var demo = {};
demo.state0 = function(){};
demo.state0.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#000000'
        console.log('state0');
        
        addChangeStateEventListners();
        
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    },
    update: function(){}
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