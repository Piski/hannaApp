<?php
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

$sql = "SELECT * FROM record_letters WHERE id=0";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo $row["record"];
    }
} else {
    echo "Error fetching the record";
}

$conn->close();
?>