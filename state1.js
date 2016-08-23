demo.state1 = function(){};
demo.state1.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#ff6699';
        console.log('state1');
        addChangeStateEventListners();

    },
    update: function(){}
};
