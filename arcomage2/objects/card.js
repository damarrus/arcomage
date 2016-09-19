/**
 * Created by nikita on 19.09.2016.
 */
function Card(callback, i, card_id) {
    var self = this;
    this.test = 321;
    if (card_id) {
        getCardByID(card_id ,function (data) {
            setParams(data, function () {});
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
    function drawCard(i, callback, context) {
        $('#container').append('<div id = card' + i + ' class = card>' +
            '<p>' + context.name +
            '<br> Cost ' + context.cost +
            '<br> EnHp ' + context.enemyTowerHP +
            '<br> SeHp ' + context.selfTowerHP + '</p></div>');
        context.div = $('#card' + i);
        context.div.click(function () {
            if (game.getTurnStage() == 1) {
                cards.forEach(function (item, j, cards) {
                    item.deactivate();
                });
                game.changeTurnStage();
                console.log(i);
            } else {
                console.log('nope');
            }

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
    function setParams(data, callback, context) {
        context.id = data.card_id;
        context.name = data.card_name;
        context.cost = data.card_cost;
        context.elem = data.card_elem;
        context.enemyTowerHP = data.card_enemy_tower_hp;
        context.selfTowerHP = data.card_self_tower_hp;
        callback(context.id);
    }
}