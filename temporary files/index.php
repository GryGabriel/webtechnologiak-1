<?php
    include 'database.php';
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="index.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    <script src="script.js"></script>
    <title>Termék nyilvántartó rendszer</title>
</head>

<body>

    <header>
        <div class="title">
            <p>Kozmetikai nyilvántartó rendszer</p>
        </div>

        <nav class="nav-menu">
            <ul>
                <li class="descriptionMenuItem">Leírás</li>
                <li class="listProductsMenuItem">Terméklistázás</li>
                <li class="addProductsMenuItem">Termék hozzáadása</li>
            </ul>
        </nav>
    </header>

    <main>
        <div class="listProductsField">
            <div class="arrows">
                <div class="arrow rightArrow"><i class="fa fa-arrow-left"></i></div>
                <div class="arrow leftArrow"><i class="fa fa-arrow-right"></i></div>
            </div>
            <table class="listedTable">
                <tr class="productNameRow">
                    <th>Név</th>
                    <td>N/A</td>
                </tr>
                <tr class="productManufacturerRow">
                    <th>Gyártó</th>
                    <td>N/A</td>
                </tr>
                <tr class="productTypeRow">
                    <th>Típus</th>
                    <td>N/A</td>
                </tr>
                <tr class="productExpiryRow">
                    <th>Szavatosság</th>
                    <td>N/A</td>
                </tr>
                <tr class="productQuantityRow">
                    <th>Mennyiség</th>
                    <td>N/A</td>
                </tr>
                <tr class="productPriceRow">
                    <th>Ár</th>
                    <td>N/A</td>
                </tr>
                <tr class="productSalePriceRow">
                    <th>Kedvezményes ár</th>
                    <td>N/A</td>
                </tr>
            </table>

            <div class="editDeleteButtons">
                <button class="editProduct">Módosítás</button>
                <button class="deleteProduct">Törlés</button>
            </div>
        </div>

        <div class="addProductsForm">
            <form id="form" action="process.php" method="POST">
                <table>
                    <tr>
                        <th>
                            <label for="productName">Termék neve</label>
                        </th>
                        <td>
                            <input type="text" name="productName" id="productName" placeholder="Termék neve">
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label for="productManufacturer">Gyártó</label>
                        </th>
                        <td>
                            <input type="text" name="productManufacturer" id="productManufacturer"
                                placeholder="Gyártó neve">
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label for="productType">Típus</label>
                        </th>
                        <td>
                            <input type="text" name="productType" id="productType" placeholder="Termék típusa">
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label for="productExpiryDate">Szavatosság</label>
                        </th>
                        <td>
                            <input type="date" name="productExpiryDate" id="productExpiryDate"
                                placeholder="Szavatosság">
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label for="productQuantity">Készletmennyiség</label>
                        </th>
                        <td>
                            <input type="number" name="productQuantity" id="productQuantity"
                                placeholder="Készletmennyiség">
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label for="productPrice">Ár</label>
                        </th>
                        <td>
                            <input type="number" name="productPrice" id="productPrice" placeholder="Ár">
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label for="productSalePrice">Akciós ár</label>
                        </th>
                        <td>
                            <input type="number" name="productSalePrice" id="productSalePrice" placeholder="Akciós ár">
                        </td>
                    </tr>
                    <tr>
                        <td colspan="4">
                            <input type="submit" id="submitButton" value="Hozzáadás">
                        </td>
                    </tr>
                </table>

            </form>
        </div>

        <div class="descriptionField">

        </div>
    </main>

    <footer>
        <p>Garay Gábor, Webtechnológiák </p>
    </footer>


</body>

</html>