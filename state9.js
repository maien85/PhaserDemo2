demo.state9 = function(){};
demo.state9.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#dd3434';
        console.log('state9');
        addChangeStateEventListners();
    },
    update: function(){}
};