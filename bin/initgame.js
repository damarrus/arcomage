/**
 * Created by DeRibura on 03.09.2016.
 */



var init = {
    initialize: function(){

        setFirstTurn();

        $('body').append('<div id = container class = container>');

        for (var i=0; i<=6; ++i){

            card_obj[i] = new Card(card_id);
            $('#container').append('<div id = card'+i+' class = card><p>'+card_obj[i].card_name+'</p></div>' );
            card[i] = $('#card'+i);
            $.extend(card[i], card_obj[i]);

            card[i].click(function()
            {
                if ((turn.status_turn == 0 && player1.player_id == 1) || (turn.status_turn == 1 && player1.player_id == 2))
                {
                    var i = ($(this).attr('id')).substring(4, 5);
                    setTurn(player1.player_id);
                    setCurrentCard(card[i].card_id);
                    interval = setInterval(listenServer, 1000);
                    card_delete($(this),i);
                    var newCard = getNewCard();
                    renew(i*1);
                    card_deactivate();

                }
            });
        }

        if (player1.player_id == 2){
            card_deactivate();
        }

        player_tower = new Tower(true);
        enemy_tower = new Tower(false);

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