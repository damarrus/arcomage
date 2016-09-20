/**
 * Created by nikita on 19.09.2016.
 */
function Card(callback, i, card_id) {
    var self = this;
    // процесс создания карты, либо по ID, либо случайная
    if (card_id) {
        getCardByID(function (data) {
            setParams(data, function () {
                callback();
            }, self);
        }, self);
    } else {
        getCardNew(function (data) {
            setParams(data, function () {
                drawCard(i, function () {
                    callback();
                }, self);
            }, self);
        }, self);
    }

    this.deactivate = function () {
        this.div.addClass('gray');
    };
    this.activate = function () {
        this.div.removeClass('gray');
    };
    this.use = function (callback) {
        console.log('пиу пиу карта '+this.name);
        callback();
    };
    function drawCard(i, callback, context) {
        $('#container').append('<div id = card' + i + ' class = card>' +
            '<p>' + context.name +
            '<br> Cost ' + context.cost +
            '<br> EnHp ' + context.enemyTowerHP +
            '<br> SeHp ' + context.selfTowerHP + '</p></div>');
        context.div = $('#card' + i);
        context.div.click(function () {
            if (game.getTurnStage() == 1) {
                game.setCurrentCard(cards[i], function () {
                    game.changeTurnStage();
                    deleteCard(i, function(){
                        cards[6] = new Card(function () {
                            console.log('новая карта отрисована');
                            cards.forEach(function (item, j, cards) {
                                item.deactivate();
                            });
                        }, 6);
                    });
                }, this);
            } else {
                console.log('nope');
            }
        });
        callback();
    }

    function deleteCard(i, callback) {
        cards[i].div.remove();
        cards.splice(i, 1);
        cards.forEach(function (item, i, cards) {
            cards[i].div.attr('id', 'card'+i);
        });
        callback();
    }
    function getCardNew(callback, context) {
        $.ajax({
            type: "POST",
            url: "server/card.php",
            data: 'action=getcardnew',
            dataType:"json",
            success: function (data) {
                callback.call(context, data);
            }
        });
    }
    function getCardByID(callback, context) {
        $.ajax({
            type: "POST",
            url: "server/card.php",
            data: 'action=getcardbyid&card_id='+card_id,
            dataType:"json",
            success: function (data) {
                callback.call(context, data);
            }
        });
    }
    // Все свойства карты (которые мы получаем с базы)
    function setParams(data, callback, context) {
        context.id = data.card_id;
        context.name = data.card_name;
        context.cost = data.card_cost;
        context.elem = data.card_elem;
        context.enemyTowerHP = data.card_enemy_tower_hp;
        context.selfTowerHP = data.card_self_tower_hp;
        callback();
    }
}