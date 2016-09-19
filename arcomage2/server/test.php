<?php
/**
 * Created by PhpStorm.
 * User: nikita
 * Date: 27.08.16
 * Time: 13:58
 */
require 'connect.php';

if ($_POST['action'] == 'card') {
    //$id = $_POST['id'];
    $id = rand(1, 12);

    $query = "SELECT * FROM card WHERE card_id=".$id;
    $result = mysqli_query($mysqli, $query) or die("Ошибка вставки" . mysqli_error());
    $result = mysqli_fetch_assoc($result);
    echo json_encode($result);
} elseif ($_POST['action'] == 'setturn') {
    if ($_POST['player_id'] == '1') {
        $turn = 0;
    } else {
        $turn = 1;
    }
    $query = "UPDATE status SET status_turn = ".$turn."
        WHERE status_player1_id = 1 AND status_player2_id = 2";
    mysqli_query($mysqli, $query) or die("Ошибка вставки" . mysqli_error());
} elseif ($_POST['action'] == 'setcurrentcard') {
    $card_id = $_POST['card_id'];
    $query = "UPDATE status SET status_card_id = ".$card_id."
        WHERE status_player1_id = 1 AND status_player2_id = 2";
    mysqli_query($mysqli, $query) or die("Ошибка вставки" . mysqli_error());
} elseif ($_POST['action'] == 'getturn') {
    $query = "SELECT status_turn, status_card_id FROM status WHERE status_id=1";
    $result = mysqli_query($mysqli, $query) or die("Ошибка вставки" . mysqli_error());
    $result = mysqli_fetch_assoc($result);
    echo json_encode($result);
} elseif ($_POST['action'] == 'setfirstturn') {
    $query = "UPDATE status SET status_turn = 1
        WHERE status_player1_id = 1 AND status_player2_id = 2";
    mysqli_query($mysqli, $query) or die("Ошибка вставки" . mysqli_error());
} elseif ($_POST['action'] == 'cardbyid') {
    $id = $_POST['card_id'];
    $query = "SELECT * FROM card WHERE card_id=".$id;
    $result = mysqli_query($mysqli, $query) or die("Ошибка вставки" . mysqli_error());
    $result = mysqli_fetch_assoc($result);
    echo json_encode($result);
}