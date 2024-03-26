let addedItems = [];
let cartItems = [];
let initialCount = 0;

window.addEventListener('load', function counter() {
    let countDisplay = document.getElementById("countDisplay");
    countDisplay.textContent = `Count: ${initialCount}`;
});

document.getElementById("additem").onclick = function addItem() {
    pic = document.getElementById("itemImage").value;
    iname = document.getElementById("itemName").value;
    storeLink = document.getElementById("itemStoreLink").value;
    price = parseFloat(document.getElementById("itemPrice").value);
    description = document.getElementById("itemDescription").value;
    stock = parseInt(document.getElementById("itemStock").value);

    let item = {
        itemPic: pic,
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
        let picCard = document.createElement("img")
        let nameCard = document.createElement("h2");
        let storeLinkCard = document.createElement("a");
        let priceCard = document.createElement("p");
        let descriptionCard = document.createElement("p");
        let stockCard = document.createElement("p");

        nameCard.textContent = addedItems[i].itemName;
        picCard.src =  addedItems[i].itemPic;
        picCard.alt = addedItems[i].itemPic;
        storeLinkCard.href = addedItems[i].itemStoreLink;
        storeLinkCard.textContent = addedItems[i].itemStoreLink;
        storeLinkCard.target = "_blank";
        priceCard.textContent = "The price of the product is: " + addedItems[i].itemPrice.toFixed(2) + " KSH";
        descriptionCard.textContent = "The description of the product is: " + addedItems[i].itemDescription;
        stockCard.textContent = "The available number of the product is: " +  addedItems[i].itemStock;

        outerDiv.classList.add("outerDiv");
        picCard.classList.add("thisone")

        outerDiv.appendChild(picCard);
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
        }
    }
};

document.getElementById("addToCartButton").onclick = function additemtocart(){
    let itemToBeAdded = document.getElementById("addToCartByName").value; 

    for(let j = 0; j < addedItems.length; j++){
        if(itemToBeAdded === addedItems[j].itemName){
             
            let displayArea = document.getElementById("cartdisplay");

            let outerDiv = document.createElement("div");
            let picCard = document.createElement("img")
            let nameCard = document.createElement("h2");
            let storeLinkCard = document.createElement("a");
            let priceCard = document.createElement("p");
            let descriptionCard = document.createElement("p");
            let stockCard = document.createElement("p");

            nameCard.textContent = addedItems[j].itemName;
            picCard.src =  addedItems[j].itemPic;
            picCard.alt = addedItems[j].itemPic;
            storeLinkCard.href = addedItems[j].itemStoreLink;
            storeLinkCard.textContent = addedItems[j].itemStoreLink;
            storeLinkCard.target = "_blank";
            priceCard.textContent = "The price of the product is: " + addedItems[j].itemPrice.toFixed(2) + " KSH";
            descriptionCard.textContent = "The description of the product is: " + addedItems[j].itemDescription;
            stockCard.textContent = "The available number of the product is: " +  addedItems[j].itemStock;

            outerDiv.classList.add("outerDiv");
            picCard.classList.add("thisone")

            outerDiv.appendChild(picCard);
            outerDiv.appendChild(nameCard);
            outerDiv.appendChild(storeLinkCard);
            outerDiv.appendChild(priceCard);
            outerDiv.appendChild(descriptionCard);
            outerDiv.appendChild(stockCard);

            displayArea.appendChild(outerDiv);

            cartItems.push(addedItems[j])

            initialCount++

            let countDisplay = document.getElementById("countDisplay");
            countDisplay.textContent = `Count: ${initialCount}`

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

document.getElementById("createItemsButton").onclick = function show() {
    let mainArea = document.getElementById("mainArea");
    if (mainArea.style.display === "none") {
        mainArea.style.display = "block";
        mainArea.style.transition = "opacity 1s ease-in-out";
        mainArea.style.opacity = "1";
    } else {
        mainArea.style.display = "none";
    }
};

document.getElementById("cartButton").onclick = function showCart() {
    let cart = document.getElementById("cart");
    if (cart.style.display === "none") {
        cart.style.display = "block";
        cart.style.transition = "opacity 1s ease-in-out";
        cart.style.opacity = "1";
    } else {
        cart.style.display = "none";
    }
};


