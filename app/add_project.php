<?php
$data = array();
$data['mes']= 'OK';
header ("content-Type: application/json");
echo json_encode($data);
exit;
?>