$(document).ready(() => {

     /**
     * Set default settings
     */
     $(".arrow").css("pointer-events", "none");
     $(".arrow").css("background-color", "grey");
 
     $(".editProduct, .deleteProduct").css("pointer-events", "none");
     $(".editProduct, .deleteProduct").css("background-color", "grey");
     $(".editProduct, .deleteProduct").css("border-color", "none");


    /**
     * Declare global variables
     */
    let products = [];
    let currentProduct;


    /**
     * Open the products.json file
     */

    $.ajax({
        url: "/json/products.json?t=" + Date.now(),
        type: "GET",
        success: function(result){
            products = result;

            $(".listProductsField").show()

            if(products.length >= 1) {
                fillTable(0);
                if(products.length > 1) {
                    $(".rightArrow").css("pointer-events","auto");
                    $(".rightArrow").css("background-color", "rgb(35, 61, 77)");
                    $(".rightArrow").css("border", "1px solid #faf4e1");
                }
            }else {
                $(".listedTable td, .tableHeader").text("N/A");
            }
        },
        error: function(error){
            console.log(`Error: ${error}`)
        }
    })



    /**
     * Add product to the list
     */
    $("#form").submit((e) => {
        e.preventDefault();

        let formData = {
            productID: products.length + 1,
            productName: $("#productName").val(),
            productManufacturer: $("#productManufacturer").val(),
            productType: $("#productType").val(),
            productExpiryDate: $("#productExpiryDate").val(),
            productQuantity: $("#productQuantity").val(),
            productPrice: $("#productPrice").val(),
            productSalePrice: $("#productSalePrice").val(),
        };


        $.ajax({
            type: "POST",
            url: "/php/process.php",
            dataType: "json",
            data: formData
        }).done((data) => {
            if (data['success']) {
                $("#form td input:not(#submitButton)").css("border-color", "rgb(35, 61, 77)")
                $("#form td input:not(#submitButton)").attr("placeholder", "")
                $("form")[0].reset()

                products.push(formData);
                if (products.length === 1) {
                    fillTable(0);
                } else if (products.length > 1) {
                    $(".rightArrow").css("pointer-events", "auto");
                    $(".rightArrow").css("background-color", "rgb(35, 61, 77)");
                    $(".rightArrow").css("border", "1px solid #faf4e1");
                }

                $.post('/php/modify.php',
                    { products: JSON.stringify(products) },
                    (result) => {
                        console.log(result);
                    },
                    'json');
            }else{
                $("#form td input:not(#submitButton)").css("border-color", "rgb(35, 61, 77)")
                handleAddErrors(formData, data['errors'])
            }
        });


        function handleAddErrors(formData, data){
            Object.keys(formData).forEach(key => {
                Object.keys(data).forEach(dataKey => {
                    if(dataKey == key){
                        console.log(data[dataKey])
                        $(`#${key}`).attr("placeholder", data[dataKey])
                        $(`#${key}`).css("border-color", "red")
                    }
                })
            })
        }

    });


    /**
     * Fill table with the first product
     */
    function fillTable(index) {
        currentProduct = index;

        if(products.length > 0){
            $(".productNameRow td").text(products[currentProduct]['productName']);
            $(".productManufacturerRow td").text(products[currentProduct]['productManufacturer']);
            $(".productTypeRow td").text(products[currentProduct]['productType']);
            $(".productExpiryRow td").text(products[currentProduct]['productExpiryDate']);
            $(".productQuantityRow td").text(products[currentProduct]['productQuantity']);
            $(".productPriceRow td").text(products[currentProduct]['productPrice']);
            $(".productSalePriceRow td").text(products[currentProduct]['productSalePrice']);
            $(".tableHeader").text(`${currentProduct+1}. termék`);

            if(currentProduct === products.length-1) {
                $(".rightArrow").css("pointer-events","none");
                $(".rightArrow").css("background-color", "grey");
                $(".rightArrow").css("border", "1px solid transparent");
            }
            if(currentProduct === 0) {
                $(".leftArrow").css("pointer-events", "none");
                $(".leftArrow").css("background-color", "grey");
                $(".leftArrow").css("border", "1px solid transparent");
            }

            if(products.length === 0) {
                $(".editProduct, .deleteProduct").css("pointer-events", "none");
                $(".editProduct, .deleteProduct").css("background-color", "grey");
                $(".editProduct, .deleteProduct").css("border-color", "none");

                $(".listedTable tr td").attr("contenteditable", "false");
            }else {
                $(".editProduct, .deleteProduct").css("pointer-events", "auto");
                $(".editProduct, .deleteProduct").css("background-color", "rgb(35, 61, 77)");
                $(".editProduct, .deleteProduct").css("border-color", "#faf4e1");
            }
        }
    }



    /**
     * If left arrow is clicked
     */
    $(".leftArrow").click(() => {
        if(currentProduct > 0 ){
            currentProduct -= 1;
            fillTable(currentProduct);

            if(currentProduct < products.length-1) {
                $(".rightArrow").css("pointer-events", "auto");
                $(".rightArrow").css("background-color", "rgb(35, 61, 77)");
                $(".rightArrow").css("border", "1px solid #faf4e1");
            } else if(currentProduct === 0){
                $(".leftArrow").css("pointer-events", "none");
                $(".leftArrow").css("background-color", "grey");
                $(".leftArrow").css("border", "1px solid transparent");
            }
        }
    });


    /**
     * If right arrow is clicked
     */
    $(".rightArrow").click(() => {
        if(products.length > currentProduct+1 ){
            currentProduct += 1;
            $(".productNameRow td").text(products[currentProduct]['productName']);
            $(".productManufacturerRow td").text(products[currentProduct]['productManufacturer']);
            $(".productTypeRow td").text(products[currentProduct]['productType']);
            $(".productExpiryRow td").text(products[currentProduct]['productExpiryDate']);
            $(".productQuantityRow td").text(products[currentProduct]['productQuantity']);
            $(".productPriceRow td").text(products[currentProduct]['productPrice']);
            $(".productSalePriceRow td").text(products[currentProduct]['productSalePrice']);

            if(currentProduct > 0) {
                $(".leftArrow").css("pointer-events","auto");
                $(".leftArrow").css("background-color", "rgb(35, 61, 77)");
                $(".leftArrow").css("border", "1px solid #faf4e1");
                if(currentProduct+1 === products.length) {
                    $(".rightArrow").css("pointer-events","none");
                    $(".rightArrow").css("background-color", "grey");
                    $(".rightArrow").css("border", "1px solid transparent");
                }
            }
        }
    });

    /*

     * If edit is clicked
     */

    $(".editProduct").click((editButton) => {

        const tdElements = $(".listedTable tr td");

        if($(editButton.target).text() === "Módosítás"){

            $(editButton.target).text("Mentés");

            tdElements.attr("contenteditable", "true");
            

        }else {

            if(checkCorrectEdit()){
                tdElements.attr("contenteditable", "false");
                $(editButton.target).text("Módosítás");

                products[currentProduct]['productName'] = $(".productNameRow td").text();
                products[currentProduct]['productManufacturer'] = $(".productManufacturerRow td").text();
                products[currentProduct]['productTypeRow'] = $(".productTypeRow td").text();
                products[currentProduct]['productExpiryDate'] = $(".productExpiryRow td").text();
                products[currentProduct]['productQuantity'] = $(".productQuantityRow td").text();
                products[currentProduct]['productPrice'] = $(".productPriceRow td").text();
                products[currentProduct]['productSalePrice'] = $(".productSalePriceRow td").text();

                $.post('/php/modify.php',
                { products: JSON.stringify(products) },
                (result) => {
                    console.log(result);
                },
                'json');

            }

        }

        function checkCorrectEdit(){
            const name = $(".productNameRow td").text()
            const manufacturer = $(".productManufacturerRow td").text()
            const type = $(".productTypeRow td").text()
            const date = $(".productExpiryRow td").text()
            const quantity = $(".productQuantityRow td").text()
            const price = $(".productPriceRow td").text()
            const salePrice = $(".productSalePriceRow td").text()

            const datePattern = /^\d{4}-\d{2}-\d{2}$/

            let invalidCounter = 0
            console.log(name + " ")
            if(name.trim() === "" || name == "Nem lehet üres!"){
                $(".productNameRow td").text("Nem lehet üres!")
                $(".productNameRow td").css("color", "red")
                invalidCounter++
            }else{
                $(".productNameRow td").css("color", "#faf4e1")
            }
            if(manufacturer.trim() === "" || manufacturer == "Nem lehet üres!"){
                $(".productManufacturerRow td").text("Nem lehet üres!")
                $(".productManufacturerRow td").css("color", "red")
                invalidCounter++
            }else{
                $(".productManufacturerRow td").css("color", "#faf4e1")
            }
            if(type.trim() === "" || type == "Nem lehet üres!"){
                $(".productTypeRow td").text("Nem lehet üres!")
                $(".productTypeRow td").css("color", "red")
                invalidCounter++
            }else{
                $(".productTypeRow td").css("color", "#faf4e1")
            }
            if(!datePattern.test(date) || date.trim() === ""){
                $(".productExpiryRow td").text("Hibás formátum!")
                $(".productExpiryRow td").css("color", "red")
                invalidCounter++
            }else{
                $(".productExpiryRow td").css("color", "#faf4e1")
            }
            if(isNaN(quantity) || quantity.trim() === ""){
                console.log("Not a number: " + quantity)
                $(".productQuantityRow td").text("Hibás formátum!")
                $(".productQuantityRow td").css("color", "red")
                invalidCounter++
            }else{
                $(".productQuantityRow td").css("color", "#faf4e1")
            }
            if(isNaN(price) || price.trim() === ""){
                console.log("Not a number: " + price)
                $(".productPriceRow td").text("Hibás formátum!")
                $(".productPriceRow td").css("color", "red")
                invalidCounter++
            }else{
                $(".productPriceRow td").css("color", "#faf4e1")
            }
            if(isNaN(salePrice) || salePrice.trim() === ""){
                console.log("Not a number: " + salePrice)
                $(".productSalePriceRow td").text("Hibás formátum!")
                $(".productSalePriceRow td").css("color", "red")
                invalidCounter++
            }else{
                $(".productSalePriceRow td").css("color", "#faf4e1")
            }

            if(invalidCounter==0) return true
            return false
        }

    });


    /**
     * If delete is clicked
     */

    $(".deleteProduct").click(() => {

        products.splice(currentProduct, 1);

        for (let i = currentProduct; i < products.length; i++) {
            products[i]['productID'] = products[i]['productID'] - 1;
        }

        if(products.length === 0){
            $(".listedTable td").text("N/A");

            $(".editProduct, .deleteProduct").css("pointer-events", "none");
            $(".editProduct, .deleteProduct").css("background-color", "grey");
            $(".editProduct, .deleteProduct").css("border-color", "transparent");

            $(".listedTable tr td").attr("contenteditable", "false");

            $(".listedTable tr").find("i").remove();
        }else if(currentProduct === products.length){
            fillTable(currentProduct-1);
        }else if(currentProduct < products.length){
            fillTable(currentProduct);
        }

        $.post('/php/modify.php',
            { products: JSON.stringify(products) },
            (result) => {
                console.log(result);
            },
            'json');
        
            
        const tdElements = $(".listedTable tr td")

        $(".editProduct").text("Módosítás")
        tdElements.attr("contenteditable", "false")


    });

});