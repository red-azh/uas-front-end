<?php
include '../connect.php';
require_once '../cors.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Content-Type: application/json");

// Get the raw POST data
$rawData = file_get_contents('php://input');

// Decode the JSON data
$data = json_decode($rawData, true);

// Check if the data was successfully decoded
if ($data !== null && json_last_error() === JSON_ERROR_NONE) {
    // Extract data
    $nama = isset($data['nama']) ? $data['nama'] : '';
    $harga = isset($data['harga']) ? $data['harga'] : '';
    $deskripsi = isset($data['deskripsi']) ? $data['deskripsi'] : '';
    $img = isset($data['img']) ? $data['img'] : '';

    // Prepare the SQL statement
    $sql = "INSERT INTO tbl_order (nama, harga, deskripsi, img) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);

    if ($stmt) {
        // Bind parameters
        $stmt->bind_param("ssss", $nama, $harga, $deskripsi, $img);

        // Execute the SQL statement
        if ($stmt->execute()) {
            $response = array(
                'status' => 'success',
                'message' => 'Menu item added successfully',
                'data' => array(
                    'id' => $conn->insert_id,
                    'nama' => $nama,
                    'harga' => $harga,
                    'deskripsi' => $deskripsi,
                    'img' => $img,
                ),
            );
        } else {
            $response = array(
                'status' => 'error',
                'message' => 'Error adding menu item: ' . $stmt->error,
            );
        }

        // Close the statement
        $stmt->close();
    } else {
        $response = array(
            'status' => 'error',
            'message' => 'Prepare statement failed: ' . $conn->error,
        );
    }
} else {
    // If the data was not successfully decoded or is not in JSON format, output an error message
    $response = array(
        'status' => 'error',
        'message' => 'Invalid request data',
    );
}

// Output the response as JSON
echo json_encode($response);
