function tanishq_productData(event){
    event.preventDefault();
    
    var tanishq_Pname = document.getElementById("tanishq_prodName").value;
    var tanishq_Pprice = document.getElementById("tanishq_prodPrice").value;
    var tanishq_PImg = document.getElementById("tanishq_prodImg").value;


    if(tanishq_Pname && tanishq_Pprice && tanishq_PImg){
        var product_desc = {tanishq_Pname, tanishq_Pprice, tanishq_PImg};
        var tanishq_product = JSON.parse(localStorage.getItem("product_list")) || [];
        tanishq_product.push(product_desc);
        localStorage.setItem("product_list", JSON.stringify(tanishq_product));
        alert("Product added successfully");
        document.getElementById("tanishq_prodName").value = "";
        document.getElementById("tanishq_prodPrice").value = "";
        document.getElementById("tanishq_prodImg").value = "";
    } else {
        alert("All fields are mandatory");
    }
}