/**
 * Created by nikita on 19.09.2016.
 *
 * turn (int) - показывает, чей сейчас ход
 *    1 - ваш ход
 *    0 - ход противника
 * turnStage (int) - бывший turnDop. Теперь обозначает стадию хода
 *    0 - начало хода (применяется карта от противника)
 *    1 - ожидание хода игрока
 *    2 - конец хода (применяется сыгранная карта)
 * turnCounter (int) - счётчик ходов
 */

function Game () {
    var self = this;
    var turn = 0;
    var turnStage = 0;
    var turnCounter = 1;
    var playerID = 0;
    var playerName = 0;
    var matchID = 0;

    this.getTurn = function () {
        return turn;
    };
    this.getTurnStage = function () {
        return turnStage;
    };
    this.changeTurnStage = function () {
        turnStage = 2;
    };

    this.auth = function (callback) {
        var body = $('body');
        body.append('<input id ="input" class ="input" type="text">');
        body.append('<button id = "auth" class = btn type = button> Авторизация </button>');
        body.append('<button id = "reg" class = btn type = button> Регистрация </button><br>');

        body.append('<button id = btn1 class = btn type = button> Игрок1 </button>');
        body.append('<button id = btn2 class = btn type = button> Игрок2 </button>');

        var btn1 = $('#btn1');
        var btn2 = $('#btn2');

        var input = $('#input');
        var authBtn = $('#auth');
        var regBtn = $('#reg');

        authBtn.click(function() {});

        regBtn.click(function() {});

        btn1.click(function()
        {
            playerID = 1;
            console.log('player1_id =' + playerID);
            btn1.detach();
            btn2.detach();
            authBtn.detach();
            regBtn.detach();
            input.detach();
            callback(playerID);
        });

        btn2.click(function()
        {
            playerID = 2;
            console.log('player1_id =' + playerID);
            btn1.detach();
            btn2.detach();
            authBtn.detach();
            regBtn.detach();
            input.detach();
            callback(playerID);
        });
    };
    this.drawBoard = function (callback) {
        $('body').append('<div id = container class = container>');
        cards[0] = new Card(function () {
            console.log('card0 отрисована');
            cards[1] = new Card(function () {
                console.log('card1 отрисована');
                cards[2] = new Card(function () {
                    console.log('card2 отрисована');
                    cards[3] = new Card(function () {
                        console.log('card3 отрисована');
                        cards[4] = new Card(function () {
                            console.log('card4 отрисована');
                            cards[5] = new Card(function () {
                                console.log('card5 отрисована');
                                cards[6] = new Card(function () {
                                    console.log('card6 отрисована');
                                    callback();
                                }, 6);
                            }, 5);
                        }, 4);
                    }, 3);
                }, 2);
            }, 1);
        }, 0);


    };
    this.start = function () {
        firstTurn(function (data) {
            turn = data;
            if (turn == 0) {
                cards.forEach(function (item, j, cards) {
                    item.deactivate();
                });
            }
            var interval = setInterval(listener, 1000);
        }, self);
    };

    //
    function listener() {
        updStatus(function (data) {
            turn = data.status_turn;
            console.log('turn '+ turn + ' turnStage '+ turnStage +' turnCounter '+ turnCounter);
            // Конец хода
            // нажали на карту, применили её и передали ход
            if (turn == 1 && turnStage == 2) {
                ++turnCounter;
                console.log('hod');
                turnStage = 0;
                changeTurn(function (data) {
                    turn = data;
                }, self);
            // Начало хода
            // получили по лицу картой противника
            } else if (turn == 1 && turnStage == 0) {
                console.log('Начало хода!');
                if (turnCounter > 1 || playerID == 2) { // защита от применения карты на первом ходу второго игрока
                    console.log('ВЗРЫВ!');
                    cards.forEach(function (item, j, cards) {
                        item.activate();
                    });
                }
                turnStage = 1;
            }
        }, self);
    }
    function updStatus(callback, context) {
        $.ajax({
            type: "POST",
            url: "server/status.php",
            data: 'action=updstatus&player_id='+playerID,
            dataType:"json",
            success: function (data) {
                callback.call(context, data);
            }
        });
    }
    function firstTurn(callback, context) {
        $.ajax({
            type: "POST",
            url: "server/status.php",
            data: 'action=firstturn&player_id='+playerID,
            dataType:"json",
            success: function (data) {
                callback.call(context, data);
            }
        });
    }
    function changeTurn(callback, context) {
        $.ajax({
            type: "POST",
            url: "server/status.php",
            data: 'action=changeturn&player_id='+playerID,
            dataType:"json",
            success: function (data) {
                callback.call(context, data);
            }
        });
    }
}