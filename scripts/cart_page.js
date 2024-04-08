// cart array with products
let productsInCart = JSON.parse(localStorage.getItem("cart"));

// tax
const TAXES = 0.13;


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

    if (productsInCart != null) {
        loadCartElementsToPage();
    }
    else{
        document.getElementsByClassName("emptyCartSection")[0].style.display = "block";
        nonEmptyCartElements.forEach((item) => {
            item.style.display = "none";
        });
    }
}


// deletes a product from cart
const deleteProductFromCart = (element, id) => {
    const parentElement = element.parentNode.parentNode.parentNode;
    parentElement.classList.add("removeElement");

    setTimeout(() => {
        productsInCart.splice(productsInCart.indexOf(productsInCart.find(item => item.id === id)), 1);
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

    for (let i = 1; i <= 20; i++) {
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
    toggleVisibility();
});

// runs when page unloads
window.addEventListener("beforeunload", () => {
    localStorage.setItem("productsInCartArray", JSON.stringify(productsInCart));
});