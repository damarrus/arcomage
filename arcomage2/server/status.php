<?php
/**
 * Created by PhpStorm.
 * User: nikita
 * Date: 28.08.16
 * Time: 15:57
 */
require 'connect.php';
if ($_POST['action'] == 'updstatus') {

    $query = "SELECT status_turn, status_card_id FROM status WHERE status_id=1";
    $result = mysqli_query($mysqli, $query) or die("Ошибка вставки" . mysqli_error());
    $result = mysqli_fetch_assoc($result);
    if ($_POST['player_id'] != 1 &&  $result['status_turn'] == 0) {
        $result['status_turn'] = 1;
    } elseif ($_POST['player_id'] != 1 &&  $result['status_turn'] == 1) {
        $result['status_turn'] = 0;
    }
    echo json_encode($result);

} elseif ($_POST['action'] == 'firstturn') {
    $query = "UPDATE status SET status_turn = 1
        WHERE status_player1_id = 1 AND status_player2_id = 2";
    mysqli_query($mysqli, $query) or die("Ошибка вставки" . mysqli_error());
    if ($_POST['player_id'] == 1) {
        echo 1;
    } else {
        echo 0;
    }
} elseif ($_POST['action'] == 'changeturn') {
    $status_turn = ($_POST['player_id'] == 1) ? 0 : 1;

    $query = "UPDATE status SET status_turn = ".$status_turn."
        WHERE status_player1_id = 1 AND status_player2_id = 2";
    mysqli_query($mysqli, $query) or die("Ошибка вставки" . mysqli_error());
    echo 0;
}