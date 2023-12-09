<?php

    $errors = [];
    $data = [];

    $productName = $_POST['productName'];
    $productManufacturer = $_POST['productManufacturer'];
    $productType = $_POST['productType'];
    $productExpiryDate = $_POST['productExpiryDate'];
    $productQuantity = $_POST['productQuantity'];
    $productPrice = $_POST['productPrice'];
    $productSalePrice = $_POST['productSalePrice'];

    if(empty($productName)) {
        $errors['productName'] = "Kötelező megadni!";
    }

    if(empty($productManufacturer)) {
        $errors['productManufacturer'] = "Kötelező megadni!";
    }

    if(empty($productType)) {
        $errors['productType'] = "Kötelező megadni!";
    }

    if(empty($productExpiryDate)) {
        $errors['productExpiryDate'] = "Kötelező megadni!";
    }

    if(empty($productQuantity)) {
        $errors['productQuantity'] = "Kötelező megadni!";
    }

    if(empty($productPrice)) {
        $errors['productPrice'] = "Kötelező megadni!";
    }

    if(empty($productSalePrice)) {
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