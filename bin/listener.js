/**
 * Created by DeRibura on 03.09.2016.
 */

function listenServer() {
    turn = getTurn();
    //console.log(turn.status_turn);
    if (turn.status_turn == 1 && turndop == 1) {
        ++turn_counter;
    }
     console.log('turn counter ' + turn_counter);
    if (turn.status_turn == 1 && turndop == 1 && turn_counter > 0) {
        console.log('hod');
        turndop = 0;
        card_activate();
        currentcard = getcard(turn.status_card_id);
        own_tower.useCardEnemy(currentcard);
        enemy_tower.useCardEnemy(currentcard);
        redrawTowers(own_tower, enemy_tower);
    }

}
