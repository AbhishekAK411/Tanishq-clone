window.onload = function (){
    
    var ls = JSON.parse(localStorage.getItem("product_list"));
    var tanishqData = "";
    var divToInsertProduct = document.getElementById("insert");

    for(var i=0;i<ls.length;i++){
        tanishqData += `<div onclick='tanishq_redirect(${JSON.stringify(ls[i])})' class="multi-products-edit"><div class="product-image"><img src="${ls[i].tanishq_PImg}" alt="" /></div><div class="product-desc"><h4>${ls[i].tanishq_Pname}</h4><h4>₹${ls[i].tanishq_Pprice}</h4><span>Women | Pendant</span></div><div class="product-button"><button>Explore Now</button></div></div>`;
        divToInsertProduct.innerHTML = tanishqData;
    }
    console.log(divToInsertProduct);
}

function tanishq_redirect(tanishq_product){
    var tanishq_singleProduct = JSON.stringify(tanishq_product);
    localStorage.setItem("tanishq_currentProduct", tanishq_singleProduct);
    window.location.href = `./singleproduct.html`;
}

function tanishq_logout(){
    
    localStorage.removeItem("tanishq_current_user");
    window.location.reload();

}