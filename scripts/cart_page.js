// cart array with products
let productsInCart = [
    {
        id: 1,
        prod_name: "Stainless Steel Bottle",
        prod_price: 25.00,
        prod_img: "https://static.wixstatic.com/media/c837a6_e838ceeef1cc477ba4825b21f9f962ba~mv2.jpg/v1/fill/w_1000,h_1334,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_e838ceeef1cc477ba4825b21f9f962ba~mv2.jpg",
        prod_quantity: 20
    },
    {
        id: 2,
        prod_name: "Eco Glass",
        prod_price: 5.50,
        prod_img: "https://static.wixstatic.com/media/c837a6_5de8806975bb49d980a0aeb2df4eb9cd~mv2.jpg/v1/fill/w_1000,h_1334,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_5de8806975bb49d980a0aeb2df4eb9cd~mv2.jpg",
        prod_quantity: 2
    },
    {
        id: 3,
        prod_name: "Bamboo Toothbrush",
        prod_price: 25.00,
        prod_img: "https://static.wixstatic.com/media/c837a6_c4b10cbdda5049acb53cb7597aa2bd14~mv2.jpg/v1/fill/w_1000,h_1334,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_c4b10cbdda5049acb53cb7597aa2bd14~mv2.jpg",
        prod_quantity: 4
    },
    {
        id: 4,
        prod_name: "Seaweed Natural Soap",
        prod_price: 6.50,
        prod_img: "https://static.wixstatic.com/media/c837a6_caf6a6c62e80459ba63c9eb984d6a6bb~mv2.jpg/v1/fill/w_1000,h_1334,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_caf6a6c62e80459ba63c9eb984d6a6bb~mv2.jpg",
        prod_quantity: 3
    }
];

// tax
const TAXES = 0.13;

// all the elements that will be displayed when cart has products in it
const nonEmptyCartElements = document.getElementsByClassName("nonEmptyCartSection");

// updates subtotal, tax and total prices
const updateOrderSummary = () => {
    let subTotal = 0;
    productsInCart.forEach((item, i) => {
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
const updatePriceAndQuantity = (id, index) => {
    const product = productsInCart.find(item => item.id === id)

    product.prod_quantity = document.getElementById(`productQuantity${index}`).value;
    document.getElementById(`totalPriceOfProduct${index}`).textContent = (product.prod_price * product.prod_quantity).toFixed(2);

    updateOrderSummary();
};

// toggle the visibility of an element based on if the empty or not
const toggleVisibility = () => {
    if (productsInCart.length > 0) {
        document.getElementsByClassName("emptyCartSection")[0].style.display = "none";
        Array.from(nonEmptyCartElements).forEach((item) => {
            item = "block";
        });
    }
    else {
        document.getElementsByClassName("emptyCartSection")[0].style.display = "block";
        Array.from(nonEmptyCartElements).forEach((item) => {
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

    productsInCart.forEach((item, i) => {
        if (item != null) {
            selectElement.id = `productQuantity${i}`;
            selectElement.setAttribute("onchange", `updatePriceAndQuantity(${item.id}, ${i})`);

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
                                                <p>$<span id="totalPriceOfProduct${i}">${item.prod_price * item.prod_quantity}</span></p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <button class="deleteProductBtn" onclick="deleteProductFromCart(this, ${item.id})">&#10005;</button>
                                    </div>
                                </div>`;

            cartItem.innerHTML = cartItemContent;
            ulElement.appendChild(cartItem);
            document.getElementById(`productQuantity${i}`).value = item.prod_quantity;
            updateOrderSummary();
        }
    });
    toggleVisibility();
};

$(document).ready(function () {
    loadCartElementsToPage();
});