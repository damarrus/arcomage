/**
 * Created by nikita on 11.09.2016.
 */
function checkWin() {
    if (own_tower.health >= 50 || enemy_tower.health <= 0) {
        alert('Вы победили! :)');
    } else if (enemy_tower.health >= 50 || own_tower.health <= 0) {
        alert('Вы проиграли! :(');
    }
}