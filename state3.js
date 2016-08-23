demo.state3 = function(){};
demo.state3.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#cc3300';
        console.log('state3');
        addChangeStateEventListners();
    },
    update: function(){}
};