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
if (is_array($data)) {
    // Get the value of the 'paket' field
    $paket = $data['paket'];
    // Get the value of the 'id' field
    $id = $data['id'];

    // Prepare the SQL statement
    $sql = "UPDATE tbl_paket SET paket = '$paket' where id =$id";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $paket);

    // Execute the SQL statement
    $result = $stmt->execute();

    if ($result) {
        $response = array(
            'status' => 'success',
            'message' => 'Menu item added successfully',
            'data' => array(
                'id' => $conn->insert_id,
                'paket' => $paket,
            ),
        );
    } else {
        $response = array(
            'status' => 'error',
            'message' => 'Error adding menu item: ' . $conn->error,
        );
    }

    // Close the database connection
    $stmt->close();
    $conn->close();

    // Output the response as JSON
    echo json_encode($response);
} else {
    // If the data was not successfully decoded, output an error message
    $response = array(
        'status' => 'error',
        'message' => 'Invalid request data',
    );
    echo json_encode($response);
}
