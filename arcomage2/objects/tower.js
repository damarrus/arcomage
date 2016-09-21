/**
 * Created by DeRibura on 03.09.2016.
 */

function Tower(owner, callback){
    var self = this;
    this.health = 30;
    var health = 30;
    this.owner = owner;
    var own = (owner) ? 'own_tower' : 'enemy_tower';

    this.getHealth = function () {
        return health;
    };

    this.getDmg = function (ownerCard, dmgSelf, dmgEnemy, callback) {
        dmgSelf = dmgSelf*1;
        dmgEnemy = dmgEnemy*1;
        if (owner) { // если свой тавер
            if (ownerCard) { // я сыграл
                health += dmgSelf;
                callback();
            } else { // противник сыграл
                health += dmgEnemy;
                callback();
            }
        } else { // если вражеский тавер
            if (ownerCard) { // я сыграл
                health += dmgEnemy;
                callback();
            } else { // противник сыграл
                health += dmgSelf;
                callback();
            }
        }
        $('#'+own+'_health').text(health);
    };

    drawTower(owner, callback);

    function drawTower(owner, callback) {
        $('#container2').append('<div id =' + own + ' class =' + own + '><p>'+ own + '</p><p id='+ own +'_health>' + health + '</p></div>');
        callback();
    }
}
