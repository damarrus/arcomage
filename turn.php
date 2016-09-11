<?php
/**
 * Created by PhpStorm.
 * User: nikita
 * Date: 28.08.16
 * Time: 15:57
 */
require 'connect.php';
$query = "SELECT status_turn FROM status WHERE status_id=1";
$result = mysqli_query($mysqli, $query) or die("Ошибка вставки" . mysqli_error());
$result = mysqli_fetch_assoc($result);
echo json_encode($result);