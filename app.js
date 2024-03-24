let addedItems = [];
let cartItems = []

document.getElementById("additem").onclick = function addItem() {
    iname = document.getElementById("itemName").value;
    storeLink = document.getElementById("itemStoreLink").value;
    price = parseFloat(document.getElementById("itemPrice").value);
    description = document.getElementById("itemDescription").value;
    stock = parseInt(document.getElementById("itemStock").value);

    let item = {
        itemName: iname,
        itemStoreLink: storeLink,
        itemPrice: price,
        itemDescription: description,
        itemStock: stock,
    };

    addedItems.push(item);
};

document.getElementById("display").onclick = function display() {
    let displayArea = document.getElementById("here");
    displayArea.innerHTML = '';

    for (let i = 0; i < addedItems.length; i++) {
        let outerDiv = document.createElement("div");
        let nameCard = document.createElement("h2");
        let storeLinkCard = document.createElement("a");
        let priceCard = document.createElement("p");
        let descriptionCard = document.createElement("p");
        let stockCard = document.createElement("p");

        nameCard.textContent = addedItems[i].itemName;
        storeLinkCard.href = addedItems[i].itemStoreLink;
        storeLinkCard.textContent = addedItems[i].itemStoreLink;
        storeLinkCard.target = "_blank";
        priceCard.textContent = "The price of the product is: " + addedItems[i].itemPrice.toFixed(2) + " KSH";
        descriptionCard.textContent = "The description of the product is: " + addedItems[i].itemDescription;
        stockCard.textContent = "The available number of the product is: " +  addedItems[i].itemStock;

        outerDiv.classList.add("outerDiv");

        outerDiv.appendChild(nameCard);
        outerDiv.appendChild(storeLinkCard);
        outerDiv.appendChild(priceCard);
        outerDiv.appendChild(descriptionCard);
        outerDiv.appendChild(stockCard);

        displayArea.appendChild(outerDiv);
    }
};

document.getElementById("removeitem").onclick = function removeitemandremovedisplay() {
    let removeItemByName = document.getElementById("removeByName").value;
    
    for (let i = 0; i < addedItems.length; i++) {
        if (addedItems[i].itemName === removeItemByName) {
            addedItems.splice(i, 1);
            
            break;
        };
    };
};

document.getElementById("addToCartButton").onclick = function additemtocart(){
    let itemToBeAdded = document.getElementById("addToCartByName").value; 

    for(let j = 0; j < addedItems.length; j++){
        if(itemToBeAdded === addedItems[j].itemName){
             
            let displayArea = document.getElementById("cartdisplay");

            let outerDiv = document.createElement("div");
            let nameCard = document.createElement("h2");
            let storeLinkCard = document.createElement("a");
            let priceCard = document.createElement("p");
            let descriptionCard = document.createElement("p");
            let stockCard = document.createElement("p");

            nameCard.textContent = addedItems[j].itemName;
            storeLinkCard.href = addedItems[j].itemStoreLink;
            storeLinkCard.textContent = addedItems[j].itemStoreLink;
            storeLinkCard.target = "_blank";
            priceCard.textContent = "The price of the product is: " + addedItems[j].itemPrice.toFixed(2) + " KSH";
            descriptionCard.textContent = "The description of the product is: " + addedItems[j].itemDescription;
            stockCard.textContent = "The available number of the product is: " +  addedItems[j].itemStock;

            outerDiv.classList.add("outerDiv");

            outerDiv.appendChild(nameCard);
            outerDiv.appendChild(storeLinkCard);
            outerDiv.appendChild(priceCard);
            outerDiv.appendChild(descriptionCard);
            outerDiv.appendChild(stockCard);

            displayArea.appendChild(outerDiv);

            cartItems.push(addedItems[j])

            let totalamount = 0;

            for(let o=0;o<cartItems.length;o++){
                let figure = cartItems[o].itemPrice;
                totalamount += figure;
                document.getElementById("total").textContent = `Total: ${totalamount} KSH`
            }

            break;

        };
    };
};

document.getElementById("removeFromCartButton").onclick = function removeItemFromCart(){
    let itemToBeRemoved = document.getElementById("addToCartByName").value;

    for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].itemName === itemToBeRemoved) {
            cartItems.splice(i, 1);
            break; 
        }
    }

    let cartDisplay = document.getElementById("cartdisplay");
    let cartItemsDivs = cartDisplay.getElementsByClassName("outerDiv");

    for (let i = 0; i < cartItemsDivs.length; i++) {
        let itemName = cartItemsDivs[i].getElementsByTagName("h2")[0].textContent;
        if (itemName === itemToBeRemoved) {
            cartDisplay.removeChild(cartItemsDivs[i]);
            break; 
        }
    }
};

document.getElementById("awayactivator").onclick = function awayshows(){
    let away = document.getElementById("away");
    if (away.style.display === "none") {
        away.style.display = "block"; // Change "block" to whatever display value you want
    } else {
        away.style.display = "none";
    }
}

