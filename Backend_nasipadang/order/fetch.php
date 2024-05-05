<?php

header("Access-Control-Allow-Origin: *");

// Other headers you might need to set
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include '../connect.php';

$response = [];


try {
    $result = $conn->query("SELECT * FROM tbl_order");
    if ($result->num_rows > 0) {
        http_response_code(200);
        $code = 200;
        $message = 'Get data successfully';

        while ($row = $result->fetch_assoc()) {
            $data['id'] = $row['id'];
            $data['nama'] = $row['nama'];
            $data['deskripsi'] = $row['deskripsi'];
            $data['harga'] = $row['harga'];
            $data['img'] = $row['img'];

            array_push($response, $data);
        }
    } else {
        http_response_code(404);
        $code = 404;
        $message = 'Data not found';
    }
} catch (Exception $e) {
    http_response_code(500);
    $code = 500;
    $message = 'Internal server error: ' . $e->getMessage();
}

echo json_encode([
    'Response' => $code,
    'Message' => $message,
    'data' => $response
]);
