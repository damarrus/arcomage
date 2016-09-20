/**
 * Created by DeRibura on 03.09.2016.
 */

function Tower(owner, callback){
    var self = this;
    this.health = 30;
    this.owner = owner;
    drawTower(owner, callback);


    function drawTower(owner, callback) {
        var own = (owner) ? 'own_tower' : 'enemy_tower';
        $('#container2').append('<div id =' + own + ' class =' + own + '><p>'+ own + '<br>' + + self.health + '</p></div>');
        callback();
    }

    this.useCard = function(card){

        if (owner)
        {
            this.health += card.card_self_tower_hp * 1;
        }
        else
        {
            enemy_tower.health += card.card_enemy_tower_hp * 1;
        }
        console.log("селф " + this.health);
    };

    this.useCardEnemy = function(card) {
        if (!owner)
        {
            enemy_tower.health += card.card_self_tower_hp * 1;
        }
        else
        {
            this.health += card.card_enemy_tower_hp * 1;

        }
        console.log("енеми " + this.health);
    };
}
