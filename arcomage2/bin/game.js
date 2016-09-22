/**
 * Created by nikita on 19.09.2016.
 *
 * turn (int) - показывает, чей сейчас ход
 *    1 - ваш ход
 *    0 - ход противника
 * turnStage (int) - бывший turnDop. Теперь обозначает стадию хода
 *    0 - начало хода (применяется карта от противника)
 *    1 - ожидание хода игрока
 *    2 - конец хода (применяется выбранная карта)
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
    this.setCurrentCard = function (card, callback) {
        currentCard = card;
        $('#currentcard').detach();
        $('#container2').append('<div id = currentcard class = "card current_card" >' +
            '<p>' + currentCard.name +
            '<br> Cost ' + currentCard.cost +
            '<br> EnHp ' + currentCard.enemyTowerHP +
            '<br> SeHp ' + currentCard.selfTowerHP + '</p></div>');
        setCurrentCard(function () {
            callback();
        }, this);
    };

    this.auth = function (callback) {
        var body = $('body');
        body.css('background', 'url(img/papers.jpg) no-repeat');
        body.append('<h3 style="color: white">Дальше вы не пройдете, пока не получите бумаги</h3>');
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
        var loader = 0;
        (function (callbackload) {
            var body = $('body');
            body.append('<div id = container class = container>');
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
                                        callbackload();
                                    }, 6);
                                }, 5);
                            }, 4);
                        }, 3);
                    }, 2);
                }, 1);
            }, 0);
            body.append('<div id = container2 class = container>');
            ownTower = new Tower(true, function () {
                console.log('ownTower отрисована');
                enemyTower = new Tower(false, function () {
                    console.log('enemyTower отрисована');
                    callbackload();
                });
            });
            ownRes[0] = new Resource(true, 0, function () {
                console.log('ownRes 0 отрисован');
                enemyRes[0] = new Resource(false, 0, function () {
                    console.log('enemyRes 0 отрисован');
                    ownRes[1] = new Resource(true, 1, function () {
                        console.log('ownRes 1 отрисован');
                        enemyRes[1] = new Resource(false, 1, function () {
                            console.log('enemyRes 1 отрисован');
                            ownRes[2] = new Resource(true, 2, function () {
                                console.log('ownRes 2 отрисован');
                                enemyRes[2] = new Resource(false, 2, function () {
                                    console.log('enemyRes 2 отрисован');
                                    callbackload();
                                });
                            });
                        });
                    });
                });
            });
            }(function () {
            loader++;
            if (loader == 3) {
                callback();
            }
        }));
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

    function checkWin() {
        if (enemyTower.getHealth() <= 0 || ownTower.getHealth() >= 50) {
            alert('Like a boss!');
        } else if (ownTower.getHealth() <= 0 || enemyTower.getHealth() >= 50) {
            alert('You are looser!');
        }
    }
    function listener() {
        getStatus(function (data) {
            turn = data.status_turn;
            //console.log('turn '+ turn + ' turnStage '+ turnStage +' turnCounter '+ turnCounter);

            // Конец хода
            // нажали на карту, применили её и передали ход
            if (turn == 1 && turnStage == 2) {
                currentCard.use(true, function () {});
                ++turnCounter;
                console.log('Конец хода!');
                turnStage = 0;
                changeTurn(function (data) {
                    turn = data;
                }, self);
                enemyRes.forEach(function (item, i, ownRes) {
                    item.addRes();
                });
                checkWin();
            // Начало хода
            // получили по лицу картой противника
            } else if (turn == 1 && turnStage == 0) {
                console.log('Начало хода!');
                ownRes.forEach(function (item, i, ownRes) {
                    item.addRes();
                });
                // временная хрень, чтобы у второго игрока на первом ходу обновлялись ресурсы противника
                if (turnCounter == 1 && playerID == 2) {
                    enemyRes.forEach(function (item, i, ownRes) {
                        item.addRes();
                    });
                }
                // временная защита от применения карты на первом ходу первого игрока
                if (turnCounter > 1 || playerID == 2) {
                    currentCard = new Card(function () {
                        $('#currentcard').detach();
                        $('#container2').append('<div id = currentcard class = "card current_card" >' +
                            '<p>' + currentCard.name +
                            '<br> Cost ' + currentCard.cost +
                            '<br> EnHp ' + currentCard.enemyTowerHP +
                            '<br> SeHp ' + currentCard.selfTowerHP + '</p></div>');
                        currentCard.use(false, function () {
                            checkWin();
                            cards.forEach(function (item, j, cards) {
                                item.activate();
                            });
                        });
                    }, 0, data.status_card_id);
                }
                turnStage = 1;
            }
        }, self);
    }
    function setCurrentCard(callback, context) {
        $.ajax({
            type: "POST",
            url: "server/status.php",
            data: 'action=setcurrentcard&player_id='+playerID+'&card_id='+currentCard.id,
            dataType:"json",
            success: function (data) {
                callback.call(context, data);
            }
        });
    }
    function getStatus(callback, context) {
        $.ajax({
            type: "POST",
            url: "server/status.php",
            data: 'action=getstatus&player_id='+playerID,
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