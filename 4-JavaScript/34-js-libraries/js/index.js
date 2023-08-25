window.onload = function () {
    // my data that should be shown in the table
    // tutorial link is https://www.cssscript.com/dynamic-data-table-vanilla-javascript/
    let myData = {
        "headings": ['productname', 'productprice', 'quantity', 'total'],
        "data": [
            ["keyboard", "5", "10", "50 Eur"],
            ["mouse", "5", "10", "50 Eur"],
            ["screen", "50", "10", "500 Eur"]
            
        ]
    };

    let myTable = document.querySelector('#blaTable') ;
    let mydataTable = new DataTable(myTable, {
        data: myData,
        nextPrev: false,
        searchable: false
    });

        let productNameInput = document.querySelector('#productNameInput')
        let productpriceInput = document.querySelector('#productpriceInput')
        let qunatityInput = document.querySelector('#qunatityInput')
    document.querySelector('#addRowbtn').addEventListener('click', function (e) {
        // add new row
        // mydataTable.rows().add(["headset", "10", "15", "150 Eur"]);


        
        let totalPrice = parseFloat(productpriceInput.value) * parseFloat(qunatityInput.value) + ' Eur' 
        mydataTable.rows().add([productNameInput.value, productpriceInput.value, qunatityInput.value, totalPrice]);
        productNameInput.value = ''
        productpriceInput.value =''
        qunatityInput.value = ''
        // end add click event function scop
      })

// end onload scop
}