/**
 * Created by DeRibura on 03.09.2016.
 */

function listenServer() {
    turn = getTurn();
    console.log(turn.status_turn);
<<<<<<< HEAD
    if (((turn.status_turn == 1 && player1.player_id == 2) || (turn.status_turn == 0 && player1.player_id == 1)) &&
        turndop != turn.status_turn) {
        turndop = turn.status_turn;
=======
    console.log(turndop);

    /*if (turn.status_turn == 1 && turndop == turn.status_turn) {
        ++turn_counter;
    }
    console.log('turn counter ' + turn_counter);*/
    if (turn.status_turn == 1 && turndop == 1) {
        console.log('hod');
        turndop = 0;
>>>>>>> origin/master
        card_activate();
        currentcard = getcard(turn.status_card_id);
        own_tower.useCard(currentcard);
    }
}
