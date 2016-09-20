<?php
/**
 * Created by PhpStorm.
 * User: nikita
 * Date: 19.09.2016
 * Time: 11:09
 */
require 'connect.php';

if ($_POST['action'] == 'getcardnew') {
    //$id = $_POST['id'];
    $id = rand(1, 12);

    $query = "SELECT * FROM card WHERE card_id=" . $id;
    $result = mysqli_query($mysqli, $query) or die("Ошибка вставки" . mysqli_error());
    $result = mysqli_fetch_assoc($result);
    echo json_encode($result);
} elseif ($_POST['action'] == 'getcardbyid') {
    $id = $_POST['card_id'];

    $query = "SELECT * FROM card WHERE card_id=" . $id;
    $result = mysqli_query($mysqli, $query) or die("Ошибка вставки" . mysqli_error());
    $result = mysqli_fetch_assoc($result);
    echo json_encode($result);
}