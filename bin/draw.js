/**
 * Created by DeRibura on 11.09.2016.
 */

function drawCardsStart() {

    $('body').append('<div id = container class = container>');

    for (var i = 0; i <= 6; ++i) {

        card_obj[i] = new Card(card_id);
        $('#container').append('<div id = card' + i + ' class = card><p>' + card_obj[i].card_name + '</p></div>');
        card[i] = $('#card' + i);
        $.extend(card[i], card_obj[i]);

        card[i].click(function () {
            if ((turn.status_turn == 0 && player1.player_id == 1) || (turn.status_turn == 1 && player1.player_id == 2)) {
                var i = ($(this).attr('id')).substring(4, 5);
                setTurn(player1.player_id);
                setCurrentCard(card[i].card_id);
                interval = setInterval(listenServer, 1000);
                card_delete($(this), i);
                var newCard = getNewCard();
                renew(i * 1);
                card_deactivate();

            }
        });
    }

}

function drawTowersStart(own_tower, enemy_tower) {

$('body').append('<div id = container2 class = container>');

$('#container2').append('<div id = own_tower' + ' class = own_tower><p>' + own_tower.health + '</p></div>');
$('#container2').append('<div id = enemy_tower' + ' class = enemy_tower><p>' + enemy_tower.health + '</p></div>');

}
