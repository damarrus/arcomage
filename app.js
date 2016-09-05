/**
 * Created by n.belousov on 10.08.2016.
 */

var cards = document.getElementsByClassName('card');
var turnbtn = document.getElementById('turn');
var turn = new turn();
turn.turnOn();

for (var i = 0; i <= 6; ++i) {

        cards[i].onclick = function (event) {

            if (turn.getTurnStatus() == true) {

                console.log('click on ' + event.target.id);
                event.currentTarget.className = event.currentTarget.className + ' green';
                turn.turnOff();
        }
    }
}

console.log(card.card1['cost']);
3222