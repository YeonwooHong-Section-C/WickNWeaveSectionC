import { cartNum } from "../scripts/login.js";

let images = document.querySelectorAll('.image');
let main = document.querySelector('.main-img');
let productName = document.querySelector('.product-name');
let price = document.querySelector('.price');
let info = document.querySelector('.info');
let addCart = document.querySelector('.add');

let loggedIn = JSON.parse(sessionStorage.getItem('username')), remember = JSON.parse(localStorage.getItem('username'));
let currentProduct = JSON.parse(localStorage.getItem('currentProduct'));

let cart = [];

if (loggedIn || remember) {
    let memberCart = JSON.parse(localStorage.getItem('cart_1'));
    if (JSON.parse(localStorage.getItem('cart_1'))) {
        cart = memberCart;
    }
} else {
    let notMemberCart = JSON.parse(localStorage.getItem('cart_2'));
    cart = notMemberCart;
}

const productsArray = [
    {
        prod_name: "Dark Green Socks",
        prod_price: 5,
        prod_img: 'https://images.unsplash.com/photo-1640026199235-c24aa417b552?q=80&w=3730&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: '',
        prod_quantity: null,
        id: 1
    },
    {
        prod_name: "Aroma Therapy",
        prod_price: 12,
        prod_img: 'https://images.unsplash.com/photo-1572726729207-a78d6feb18d7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
        description: 'product description for 2',
        prod_quantity: null,
        id: 2
    },
    {
        prod_name: "Grey Socks",
        prod_price: 6,
        prod_img: 'https://images.unsplash.com/photo-1613151848917-80e67f421fff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8',
        description: 'product description for 3',
        prod_quantity: null,
        id: 3
    },
    {
        prod_name: "Pine Forest",
        prod_price: 10,
        prod_img: 'https://images.unsplash.com/photo-1595055258834-8290e4181590?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8',
        description: '',
        prod_quantity: null,
        id: 4
    }, {
        prod_name: "Forest",
        prod_price: 13,
        prod_img: 'https://images.unsplash.com/photo-1599591590264-22dbba64111c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D',
        description: '',
        prod_quantity: null,
        id: 5
    },
    {
        prod_name: "Lychee",
        prod_price: 11,
        prod_img: 'https://images.unsplash.com/photo-1602952706017-f3cc19eb98af?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
        description: 'product description for 2',
        prod_quantity: null,
        id: 6
    },
    {
        prod_name: "Ambre",
        prod_price: 9,
        prod_img: 'https://images.unsplash.com/photo-1617213146999-f33c20d2a534?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D',
        description: 'product description for 3',
        prod_quantity: null,
        id: 7
    },
    {
        prod_name: "New York City",
        prod_price: 8,
        prod_img: 'https://images.unsplash.com/photo-1573744364765-f9eedccc45fe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8',
        description: '',
        prod_quantity: null,
        id: 8
    },
    {
        prod_name: "Yellow Socks",
        prod_price: 7,
        prod_img: 'https://images.unsplash.com/photo-1640025867572-f6b3a8410c81?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: '',
        prod_quantity: null,
        id: 9
    },
    {
        prod_name: "Knit Socks",
        prod_price: 9,
        prod_img: 'https://images.unsplash.com/photo-1610134142835-e1724e0ed53d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: '',
        prod_quantity: null,
        id: 10
    }
]

// selecting different items
images.forEach(image => {
    image.addEventListener('click', function () {
        // storing url of image here before overwriting
        let mainsrc = main.src;
        main.src = image.src;
        // changing after overwriting makes both urls the same
        image.src = mainsrc;

        // update data on page based on selected product
        productsArray.forEach(product => {
            if (main.src == product.prod_img) {
                productName.textContent = product.prod_name;
                price.textContent = `$${product.prod_price}.00`;
                main.id = product.id;
                info.textContent = product.description;
                addCart.id = product.id;
            }
        });
    });
});

// adding items to cart
addCart.addEventListener('click', function () {
    let quantity = document.querySelector('.quantity').value;
    productsArray.forEach(product => {
        if (addCart.id == product.id) {
            if (quantity > 25) {
                product.prod_quantity = "25";
            } else {
                product.prod_quantity = quantity;
            }

            if (loggedIn || remember) {
                checkCopy(cart, product);
                localStorage.setItem('cart_1', JSON.stringify(cart));
            } else {
                if (cart == null) {
                    cart = [];
                    checkCopy(cart, product);
                    localStorage.setItem('cart_2', JSON.stringify(cart));
                } else {
                    checkCopy(cart, product);
                    localStorage.setItem('cart_2', JSON.stringify(cart));
                }
            }
        }
    });
    cartNum();
});

// loading image from product page
function currentSwap(product, main) {
    images.forEach(image => {
        if (product.prod_img == image.src) {
            let mainsrc = main.src;
            main.src = product.prod_img;
            productName.textContent = product.prod_name;
            price.textContent = `$${product.prod_price}.00`;
            console.log(price.textContent);
            main.id = product.id;
            info.textContent = product.description;
            addCart.id = product.id;
            image.src = mainsrc;
        }
    });
}

currentSwap(currentProduct, main);

// function to overwrite value in array if duplicate is present
function checkCopy(array, item, key = 'id') {
    const index = array.findIndex(e => e[key] == item[key]);
    if (index >= 0) {
        array[index] = item;
    }
    else {
        array.push(item);
    }
};