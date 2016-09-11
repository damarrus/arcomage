/**
 * Created by DeRibura on 03.09.2016.
 */

function listenServer() {
    turn = getTurn();
    console.log(turn.status_turn);
    if ((turn.status_turn == 1 && player1.player_id == 2) || (turn.status_turn == 0 && player1.player_id == 1)) {
        //console.log(turn.status_card_id);
        clearInterval(interval);
        card_activate();
        currentcard = getcard(turn.status_card_id);
        console.log(own_tower);
        own_tower.useCard(currentcard);
    }

}
