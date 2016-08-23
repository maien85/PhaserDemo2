demo.state5 = function(){};
demo.state5.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#990099';
        console.log('state5');
        addChangeStateEventListners();
    },
    update: function(){}
};