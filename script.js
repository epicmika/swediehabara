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
    console.log("function");

    for(var index=0; index <prodData.length; index++) {
        console.log("i loopen");

        var prodCon=createProdCon(prodData[index]);
        console.log("prodCon")
        prodSite.innerHTML(prodCon);

        
        

        //var prodDiv = document.getElementById("produkter")
        //prodDiv.innerHTML += prodCon;
    }
    

   // document.body.appendChild(prodSite);
}

function createProdCon(prodData) {

    console.log("funktion createProdCon");
    console.log(prodData);
   // var prodCon=document.createElement("div");

    var prodDiv = document.createElement("div")
    console.log(prodDiv);
   // var minaProdukter = "";
    //prodDiv.innerHTML += minaProdukter;

    //Image
    // var getProdImg=document.createElement("img");
    // getProdImg.src="bild/"+prodData.prodImage;
    // prodDiv.appendChild(getProdImg);
    // console.log(getProdImg.src)
    
    //Name
    var prodName=document.createElement("p");
    var getProdName=""+prodData.prodName;
    // console.log(getProdName);
    console.log("här");
    //prodName.appendChild(getProdName);
   
    //console.log(prodName);
    //prodDiv.appendChild(getProdName); 
    console.log("inte här");
    console.log(getProdName);

    //Price
    // var getProdPrice=document.createElement("p");
    // getProdPrice.innerText=""+prodData.prodPrice;
    // prodDiv.appendChild(getProdPrice);

    console.log("slutet på funktion");

    console.log(prodCon);
    console.log(prodDiv);

    return prodDiv;
}