fetch("product.json")
.then(function(response) {
    return response.json();
})

.then(function(data) {
    prodData=data;
    createListFromProdData();
})

function createListFromProdData() {
    var prodSite=document.createElement("div")
    prodSite.className="productClass";
    console.log("function");

    for(var index=0; index <prodData.length; index++) {
        var prodCon =createProdCon(prodData[index]);
        prodSite.appendChild(prodCon);
        console.log("for");
    }
    document.body.appendChild(prodSite);
}

function createProdCon(prodData) {
    var prodCon=document.createElement("div");
    prodCon.className="prodSiteClass";
    console.log(prodData)

    //Image
    var getProdImg=document.createElement("img");
    getProdImg.src="bild/"+prodData.prodImage;
    prodCon.appendChild(getProdImg);
    console.log(getProdImg.src)

    //Name
    var getProdName=document.createElement("p");
    getProdName.innerText=""+prodData.prodName;
    prodCon.appendChild(getProdName);

    //Price
    var getProdPrice=document.createElement("p");
    getProdPrice.innerText=""+prodData.prodPrice;
    prodCon.appendChild(getProdPrice);

    return prodCon;
}