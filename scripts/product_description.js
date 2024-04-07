let images = document.querySelectorAll('.image');
let main = document.querySelector('.main-img');
let productName = document.querySelector('.product-name');
let price = document.querySelector('.price');
let info = document.querySelector('.info');
let addCart = document.querySelector('.add');

let userCart = JSON.parse(localStorage.getItem('cart'));
console.log(userCart);

let cart = [];

const productsArray = [
    {
        prod_name: "Product 1",
        prod_price: 150,
        prod_img: 'https://placedog.net/574/584?id=57',
        description: 'product description for 1',
        prod_quantity: null,
        id: 1
    },
    {
        prod_name: "Product 2",
        prod_price: 20,
        prod_img: 'https://placedog.net/496/476?id=122',
        description: 'product description for 2',
        prod_quantity: null,
        id: 2
    },
    {
        prod_name: "Product 3",
        prod_price: 30,
        prod_img: 'https://placedog.net/541/553?id=119',
        description: 'product description for 3',
        prod_quantity: null,
        id: 3
    },
    {
        prod_name: "Product 4",
        prod_price: 10,
        prod_img: 'https://placedog.net/807/669?id=142',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet consectetur adipiscing elit ut aliquam purus sit amet. Urna id volutpat lacus laoreet non curabitur gravida. Id diam vel quam elementum. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Curabitur vitae nunc sed velit dignissim sodales ut eu. Egestas pretium aenean pharetra magna ac placerat vestibulum. Mi proin sed libero enim sed faucibus turpis. Arcu non sodales neque sodales ut etiam sit. bortis feugiat. Nisl condimentum id venenatis a. Vel pretium lectus quam id leo in vitae turpis massa.',
        prod_quantity: null,
        id: 4
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
                price.textContent = product.prod_price;
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
    console.log(quantity);
    productsArray.forEach(product => {
        if (addCart.id == product.id) {
            product.prod_quantity = quantity;
            checkCopy(cart, product);
            localStorage.setItem('cart', JSON.stringify(cart));
            // cart.push([product.name, product.price, product.id]);
        }
    })
    console.log(cart);

});

//function to overwrite value in array if duplicate is present
function checkCopy(array, item, key = 'name') {
    const index = array.findIndex(e => e[key] === item[key]);
    if (index >= 0) {
        array[index] = item;
    }
    else {
        array.push(item);
    }
};




