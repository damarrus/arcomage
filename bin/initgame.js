/**
 * Created by DeRibura on 03.09.2016.
 */



var init = {
    initialize: function(){
    setFirstTurn();

    drawCardsStart();

    if (player1.player_id == 2){
        card_deactivate();
    }

    var own_tower = new Tower(true);
    var enemy_tower = new Tower(false);

    drawTowersStart(own_tower, enemy_tower);

    },
    auth: function(){

        $('body').append('<button id = btn1 class = btn type = button> "Игрок1" </button>');
        $('body').append('<button id = btn2 class = btn type = button> "Игрок2" </button>');

        btn1 = $('#btn1');
        btn2 = $('#btn2');

        btn1.click(function()
        {
            player1.player_id = 1;
            console.log('player1_id =' + player1.player_id);
            btn1.detach();
            btn2.detach();
            init.initialize();
        });

        btn2.click(function()
        {
            player1.player_id = 2;
            console.log('player1_id =' + player1.player_id);
            btn1.detach();
            btn2.detach();
            init.initialize();
            interval = setInterval(listenServer, 1000);
        });
    }

};