/**
 * Created by DeRibura on 03.09.2016.
 */

function Tower(owner){
    this.health = 30;
    this.owner = owner;
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
