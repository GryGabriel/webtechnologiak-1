<?php
    $servername = "mysql.omega:3306";
    $username = "garanyet";
    $password = "Pavhoh-pyxcom-1demfu";
    $dbname = "garanyet";

    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    }
?> 