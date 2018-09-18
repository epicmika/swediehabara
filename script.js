fetch("product.json")
.then(function(response) {
    return response.json();
})
.then(function(data) {
    prodData=data;
    createListFromProdData();
})
function createListFromProdData() {
    var prodSite=document.getElementById("produkter")
    prodSite.className="productClass";
    // console.log("function");
    for(var index=0; index <prodData.length; index++) {
       // console.log("i loopen");
        var prodCon=createProdCon(prodData[index]);
        console.log("return: " + prodCon)
        prodSite.appendChild(prodCon);
        
        //var prodDiv = document.getElementById("produkter")
        //prodDiv.innerHTML += prodCon;
    }
    
    //prodSite.innerHTML += prodCon;
}
function createProdCon(prodData) {
    var prodDiv = document.createElement("div")
    prodDiv.className="produkt";

    //Image
    var getProdImg=document.createElement("img");
    getProdImg.src="bild/"+prodData.prodImage;
    prodDiv.appendChild(getProdImg);
    
    //Name
    var prodName=document.createElement("p");
    var getProdName=prodData.prodName;
    prodName.innerHTML += getProdName;
    prodDiv.appendChild(prodName);

    //Price
    var prodPrice=document.createElement("p");
    var getProdPrice=prodData.prodPrice;
    prodPrice.innerHTML += getProdPrice;
    prodDiv.appendChild(prodPrice);
    // prodDiv.appendChild(getProdPrice);

    // console.log("slutet på funktion");
    //console.log(prodCon);
    console.log(prodDiv);
    return prodDiv;
}