demo.state7 = function(){};
demo.state7.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#333399';
        console.log('state7');
        addChangeStateEventListners();
    },
    update: function(){}
};