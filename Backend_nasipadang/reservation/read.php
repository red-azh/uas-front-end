<?php

include "../connect.php";

$id = $_GET['id'];

$result = $conn->query("SELECT * FROM reservation WHERE id = $id");

$isi = [];

while ($row = $result->fetch_assoc()) {
    # code...
    $isi[] = $row;
}
if ($data != null) {
    http_response_code(404);
    $code = 404;
    $message = "Detail not found!";
} else {
    http_response_code(200);
    $code = 200;
    $message = "Detail found!!";
}

echo json_encode([
    'Response' => $code,
    'Message' => $message,
    'content' => $isi
]);
