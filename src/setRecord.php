<?php
// http://www.tutorialspoint.com/php/mysql_insert_php.htm

if (isset($_GET["record"])) {
      $newRecord = $_GET["record"];
    }

$servername = "mysql.metropolia.fi";
$username = "m0602227";
$password = "shemtov1";
$dbname = "m0602227";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "UPDATE record_letters SET record=" . $newRecord . " where id=0";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>