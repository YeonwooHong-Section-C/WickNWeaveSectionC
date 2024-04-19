// cart array with products
let productsInCart = null;

// tax
const TAXES = 0.13;

let local_storage_name;
let loggedInUsers_name = "";

// retrieve the data from correct localstorage item based on logged in or non logged in user
const pullCartData = () => {
    // sets the local storage item name for logged in user
    if(sessionStorage.getItem('username') || localStorage.getItem('username')){
        local_storage_name = "cart_1";
    }
    else{//sets the local storage item name for non logged in user
        local_storage_name = "cart_2";
    }

    // pulls the data from local storage
    productsInCart = JSON.parse(localStorage.getItem(`${local_storage_name}`));
}


// updates subtotal, tax and total prices
const updateOrderSummary = () => {
    let subTotal = 0;
    productsInCart.forEach((item) => {
        if (item != null) {
            subTotal += item.prod_price * item.prod_quantity;
        }
    });
    subTotal = subTotal.toFixed(2);
    document.getElementById("subTotal").textContent = "$" + subTotal;
    const totalAfterTaxes = (subTotal * TAXES).toFixed(2);
    document.getElementById("taxes").textContent = "$" + totalAfterTaxes;
    document.getElementById("totalAmount").textContent = "$" + (parseFloat(subTotal) + parseFloat(totalAfterTaxes)).toFixed(2);
};

// update price of the product based on quantity and updates quantity in an array
const updatePriceAndQuantity = (id) => {
    const product = productsInCart.find(item => item.id === id)

    product.prod_quantity = parseInt(document.getElementById(`productQuantity${id}`).value);
    document.getElementById(`totalPriceOfProduct${id}`).textContent = (product.prod_price * product.prod_quantity).toFixed(2);

    updateOrderSummary();
};

// toggle the visibility of an element based on if the empty or not
const toggleVisibility = () => {

    // all the elements that will be displayed when cart has products in it
    const nonEmptyCartElements = document.querySelectorAll(".nonEmptyCartSection");

    if (productsInCart != null && productsInCart.length > 0) {
        return false;
    }
    else{
        document.getElementsByClassName("emptyCartSection")[0].style.display = "flex";
        nonEmptyCartElements.forEach((item) => {
            item.style.display = "none";
        });
        return true;
    }
}


// deletes a product from cart
const deleteProductFromCart = (element, id) => {
    const parentElement = element.parentNode.parentNode.parentNode;
    parentElement.classList.add("removeElement");

    setTimeout(() => {
        productsInCart.splice(productsInCart.findIndex(item => item.id === id), 1);
        parentElement.remove();
        updateOrderSummary();
        toggleVisibility();
    }, 300);
};


// loads the cart elements to the page
const loadCartElementsToPage = () => {
    const ulElement = document.getElementById("productCartList");
    ulElement.textContent = "";

    const selectElement = document.createElement("select");

    for (let i = 1; i <= 25; i++) {
        const optionElement = document.createElement("option");
        optionElement.textContent = i;
        optionElement.value = i;
        selectElement.appendChild(optionElement);
    }

    productsInCart.forEach((item) => {
        selectElement.id = `productQuantity${item.id}`;
        selectElement.setAttribute("onchange", `updatePriceAndQuantity(${item.id})`);

        const cartItem = document.createElement("li");
        cartItem.style.borderBottom = "1px solid #d7d5c9";
        const cartItemContent = `<div class="eachProductContainerInCart">
                                    <div>
                                        <img class="productImageInCart"
                                            src="${item.prod_img}"
                                            alt="">
                                    </div>

                                    <div class="cartProductDetails">
                                        <div class="prodNameAndPrice">
                                            <h6>${item.prod_name}</h6>
                                            <p class="mt-2">$${item.prod_price}</p>
                                        </div>
                                        <div class="prodQtyContainer">
                                            <div class=" parentContainerForQty">
                                                    ${selectElement.outerHTML}
                                            </div>

                                            <div class="priceBasedOnQty">
                                                <p>$<span id="totalPriceOfProduct${item.id}">${item.prod_price * item.prod_quantity}</span></p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <button class="deleteProductBtn" onclick="deleteProductFromCart(this, ${item.id})">&#10005;</button>
                                    </div>
                                </div>`;

        cartItem.innerHTML = cartItemContent;
        ulElement.appendChild(cartItem);
        document.getElementById(`productQuantity${item.id}`).value = item.prod_quantity;
        updateOrderSummary();
    });
};

// this runs when document is ready
$(document).ready(function () {
    pullCartData();
    toggleVisibility();

    if(!toggleVisibility()){
        loadCartElementsToPage();
    }
    
    document.querySelector('.checkoutButton').addEventListener("click", orderPlaced);
});

// runs when page unloads
window.addEventListener("beforeunload", () => {
    localStorage.setItem(`${local_storage_name}`, JSON.stringify(productsInCart));
});

// runs when the user checks out and loads the receipt modal 
const orderPlaced = () => {
    document.getElementById("reciept").innerHTML = document.getElementById("productCartList").innerHTML;
    document.getElementById("productCartList").innerHTML = "";

    document.querySelectorAll("select[id*='productQuantity']").forEach(item => {
        const p = document.createElement("p");
        p.textContent = "Qty: " + productsInCart.find(product => product.id == item.id.match(/(\d+)/)[0]).prod_quantity;
        item.replaceWith(p);
    });
    document.querySelectorAll(".deleteProductBtn").forEach(item => {
        item.remove();
    });
    document.getElementById("orderDetail").innerHTML = document.querySelector("aside > div").innerHTML;
    productsInCart = [];
    localStorage.removeItem("cart");


    //gets the users name from local storage
    if(JSON.parse(localStorage.getItem('username'))){
        loggedInUsers_name = ", " + JSON.parse(localStorage.getItem("username"));
    }
    else if(sessionStorage.getItem("username")){
        loggedInUsers_name = ", " +  JSON.parse(sessionStorage.getItem("username"));
    }
    document.getElementById("users_name").textContent = loggedInUsers_name;
}