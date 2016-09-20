/**
 * Created by DeRibura on 11.09.2016.
 */

function drawCardsStart() {

    $('body').append('<div id = container class = container>');

    for (var i = 0; i <= 6; ++i) {

        card_obj[i] = new Card(card_id);
        $('#container').append('<div id = card' + i + ' class = card>' +
           '<p>' + card_obj[i].card_name +
           '<br> Cost ' + card_obj[i].card_cost +
           '<br> EnHp ' + card_obj[i].card_enemy_tower_hp +
           '<br> SeHp ' + card_obj[i].card_self_tower_hp + '</p></div>');
        card[i] = $('#card' + i);
        $.extend(card[i], card_obj[i]);

        card[i].click(function () {
            if (turn.status_turn == 1) {
                var i = ($(this).attr('id')).substring(4, 5);
                setTurn(player1.player_id);
                setCurrentCard(card[i].card_id);
                card_delete($(this), i);
                var newCard = getNewCard();
                renew(i * 1);
                card_deactivate();
                turndop = 1;

                currentcard = getcard(card[i].card_id);
                own_tower.useCard(currentcard);
                enemy_tower.useCard(currentcard);
                redrawTowers(own_tower, enemy_tower);
            }
        });
    }

}

function drawTowersStart(own_tower, enemy_tower) {

$('body').append('<div id = container2 class = container>');

$('#container2').append('<div id = own_tower' + ' class = own_tower><p>' + own_tower.health + '<br>Свой тавер</p></div>');
$('#container2').append('<div id = enemy_tower' + ' class = enemy_tower><p>' + enemy_tower.health + '<br>Чужой тавер</p></div>');

}

function redrawTowers(own_tower, enemy_tower) {

    $('#own_tower').text(own_tower.health).css('color','white').css('text-align','center');
    $('#enemy_tower').text(enemy_tower.health).css('color','white').css('text-align','center');

}

function drawResourcesStart() {
    //$('body').append('<div id = container2 class = container>');
    for (var i=1; i<=3; i++) {

        own_resource[i] = new Resource(true);
        enemy_resource[i] = new Resource(false);

        own_resource[i].resource_type = i;
        enemy_resource[i].resource_type = i;

        $('#container2').append('<div id = own_res' + i + ' class = own_resource><p>' + own_resource[i].count + '</p></div>');

        $('#container2').append('<div id = enemy_res' + i + ' class = enemy_resource><p>' + enemy_resource[i].count + '</p></div>');
    }
}
