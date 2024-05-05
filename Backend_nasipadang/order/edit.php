<?php
include '../connect.php';

// Pastikan untuk menghindari SQL injection dengan menggunakan prepared statement
$id = $_GET['id'];
$nama = $_POST['nama'];
$deskripsi = $_POST['deskripsi'];
$harga = (int) $_POST['harga'];
$img = $_POST['img'];

// Gunakan prepared statement untuk mencegah SQL injection
$stmt = $conn->prepare("UPDATE tbl_order SET nama = ?, deskripsi = ?, harga = ?, img = ? WHERE id = ?");
$stmt->bind_param("ssisi", $nama, $deskripsi, $harga, $img, $id);
$result = $stmt->execute();

$response = [];
if ($result) {
    $code = 201;
    $message = "Updated successfully";
    $data = [
        'nama' => $nama,
        'harga' => $harga,
        'img' => $img,
        'deskripsi' => $deskripsi
    ];
} else {
    $code = 500;
    $message = "Updated failed";
}

// Pastikan untuk menutup statement dan koneksi setelah selesai digunakan
$stmt->close();
$conn->close();

// Pastikan untuk hanya menyertakan 'Data' dalam respons jika data berhasil diupdate
if ($result) {
    echo json_encode([
        'Response' => $code,
        'Message' => $message,
        'Data' => $data
    ]);
} else {
    echo json_encode([
        'Response' => $code,
        'Message' => $message
    ]);
}
