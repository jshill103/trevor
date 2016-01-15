<?php
include 'vehicle.php';
$vehicle = new vehicle();
$vehicle.getValues($_POST['data']['id']);
echo json_encode($vehicle);
?>