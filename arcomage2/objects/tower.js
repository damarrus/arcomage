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
        $('#container2').append('<div id =' + own + ' class =' + own + '><p>'+ own + '<br>' + self.health + '</p></div>');
        callback();
    }
}
