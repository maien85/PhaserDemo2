demo.state4 = function(){};
demo.state4.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#669900';
        console.log('state4');
        addChangeStateEventListners();
    },
    update: function(){}
};