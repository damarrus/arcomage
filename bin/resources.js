/**
 * Created by DeRibura on 11.09.2016.
 */

function Resource(owner){
    this.count = 10;
    this.owner = owner;
    this.resource_type = "";
    this.generation = 1;

    this.income = function(resource) {
        this.count += this.generation;
    };
    this.cardAffect = function(Rtype,cost) {
        if (this.resource_type == Rtype) {
            this.count -= cost;
        }
    }
}

