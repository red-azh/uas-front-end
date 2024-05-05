<?php
include '../connect.php';

$response = []; // Menginisialisasi respon

// Pastikan parameter id tersedia dan aman untuk digunakan
if (isset($_GET['id']) && !empty($_GET['id'])) {
    $id = $_GET['id'];

    // Pastikan semua parameter POST tersedia
    if (isset($_POST['lokasi'], $_POST['tmpt_duduk'], $_POST['bulan'], $_POST['jam'])) {
        $lokasi = $_POST['lokasi'];
        $tmpt_duduk = $_POST['tmpt_duduk'];
        $bulan = $_POST['bulan'];
        $jam = $_POST['jam'];

        // Persiapkan statement SQL untuk mengupdate data
        $stmt = $conn->prepare("UPDATE reservation SET lokasi = ?, tmpt_duduk = ?, bulan = ?, jam = ? WHERE id = ?");

        // Bind parameter ke statement
        $stmt->bind_param("ssssi", $lokasi, $tmpt_duduk, $bulan, $jam, $id);

        // Lakukan eksekusi statement
        if ($stmt->execute()) {
            $code = 201;
            $message = "Updated successfully";
            $data = [
                'lokasi' => $lokasi,
                'tmpt_duduk' => $tmpt_duduk,
                'bulan' => $bulan,
                'jam' => $jam
            ];
        } else {
            $code = 500;
            $message = "Update failed";
        }

        // Tutup statement
        $stmt->close();
    } else {
        $code = 400; 
        $message = "Missing POST parameters";
    }
} else {
    $code = 400; 
    $message = "Missing or empty 'id' parameter";
}

// Setelah semua proses selesai, kirim respon JSON
echo json_encode([
    'Response' => $code,
    'Message' => $message,
    'Data' => isset($data) ? $data : null 
]);
