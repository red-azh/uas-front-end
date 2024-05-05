<?php
include "../connect.php";

$id = $_GET['id'];

$result = $conn->query("DELETE FROM tbl_order WHERE id=$id");

if ($result) {
    $code = 200;
    $message = 'Deleted Successfully';
} else {
    $code = 500;
    $message = 'failed to delete';
}

echo json_encode([
    'Response' => $code,
    'Message' => $message
]);
