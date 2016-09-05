/**
 * Created by n.belousov on 10.08.2016.
 */
// Класс "Ход"
function turn() {
    // Статус хода: true - твой ход, false - чужой ход
    var turnStatus = true;

    // Изменить статус хода вне класса
    this.setTurnStatus = function (amount) {
        turnStatus = amount;
    };
    
    // Получить статус хода вне класса
    this.getTurnStatus = function () {
        return turnStatus;
    };

    // Конец хода
    this.turnOff = function() {
        turnStatus = false;
        setTimeout(function () {
            for (var i = 0; i <= 6; ++i) {
                cards[i].className = cards[i].className + ' turnoff';
            }
            console.log('turnStatus false');
            setBtnTurn();
        }, 1000);
    };

    // Начало хода
    this.turnOn = function() {
        turnOn(turnStatus);
    };
    function turnOn() {
        turnStatus = true;
        for (var i = 0; i <= 6; ++i) {
            cards[i].className = 'card';
        }
        console.log('turnStatus true');
        setBtnTurn();
    }

    // Внутренняя функция для включения/отключения кнопки хода
    function setBtnTurn() {
        if (turnStatus == true) {
            turnbtn.style.backgroundColor = 'gray';
        } else {
            turnbtn.style.backgroundColor = 'white';

            turnbtn.onclick = function () {
                turnOn();
            }
        }
    }
}