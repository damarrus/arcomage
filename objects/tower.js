/**
 * Created by DeRibura on 03.09.2016.
 */

function Tower(owner){
    this.health = 10;
    this.owner = owner;
    this.useCard = function(card){
        this.health -= card.card_cost;
        console.log(this.health);
    };
}
