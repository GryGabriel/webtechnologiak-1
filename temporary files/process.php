<?php

    $errors = [];
    $data = [];

    if(empty($_POST['productID'])) {
        $errors['productID'] = "Kötelező megadni!";
    }

    if(empty($_POST['productName'])) {
        $errors['productName'] = "Kötelező megadni!";
    }

    if(empty($_POST['productManufacturer'])) {
        $errors['productManufacturer'] = "Kötelező megadni!";
    }

    if(empty($_POST['productType'])) {
        $errors['productType'] = "Kötelező megadni!";
    }

    if(empty($_POST['productExpiryDate'])) {
        $errors['productExpiryDate'] = "Kötelező megadni!";
    }

    if(empty($_POST['productQuantity'])) {
        $errors['productQuantity'] = "Kötelező megadni!";
    }

    if(empty($_POST['productPrice'])) {
        $errors['productPrice'] = "Kötelező megadni!";
    }

    if(empty($_POST['productSalePrice'])) {
        $errors['productSalePrice'] = "Kötelező megadni!";
    }

    if(!empty($errors)) {
        $data['success'] = false;
        $data['errors'] = $errors;
    } else {
        $data['success'] = true;
        $data['message'] = "success";
    }

    echo json_encode($data);
?>