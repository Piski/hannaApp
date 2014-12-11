<?php
// http://www.tutorialspoint.com/php/mysql_insert_php.htm

$servername = "mysql.metropolia.fi";
$username = "m0602227";
$password = "SALASANA";
$dbname = "m0602227";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO record (record)
VALUES (5)";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>