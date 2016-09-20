/**
 * Created by DeRibura on 11.09.2016.
 */

function Resource(owner, type, callback){
    var self = this;
    this.count = 10;
    this.owner = owner;
    this.resource_type = "";
    this.generation = 1;
    this.type = type;

    drawResource(owner, type, callback);

    function drawResource(owner, type, callback) {
        var own = (owner) ? 'own_res' : 'enemy_res';
        $('#container2').append('<div id =' + own + type + ' class ='+ own +'><p>' + self.count + '</p></div>');
        callback();
    }

    this.income = function(resource) {
        this.count += this.generation;
    };
    this.cardAffect = function(Rtype,cost) {
        if (this.resource_type == Rtype) {
            this.count -= cost;
        }
    };
}

