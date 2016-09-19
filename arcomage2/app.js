/**
 * Created by nikita on 19.09.2016.
 */

var game = new Game();

game.auth(function (playerID) {
    console.log('auth complete, playerID: '+playerID);
    game.drawBoard(function () {
        console.log('board complete');
        game.start();
    });

});
setTimeout(function () {

}, 3000);