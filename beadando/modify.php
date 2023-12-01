<?php

    $productsJson = $_POST['products'];
    var_dump($productsJson);

    $result = file_put_contents('products.json', $productsJson);
    var_dump($result);

?>

