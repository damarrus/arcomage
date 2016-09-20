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

    this.addRes = function () {
        this.count += this.generation;
        this.div.children('p').text(this.count);
    };

    drawResource(owner, type, callback, self);

    function drawResource(owner, type, callback, context) {
        var own = (owner) ? 'own_res' : 'enemy_res';
        $('#container2').append('<div id =' + own + type + ' class ='+ own +'><p>' + self.count + '</p></div>');
        context.div = $('#'+own + type);
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

