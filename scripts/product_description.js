let images = document.querySelectorAll('.image');
let main = document.querySelector('.main-img');
let productName = document.querySelector('.product-name');
let price = document.querySelector('.price');
let info = document.querySelector('.info');
let addCart = document.querySelector('.add')

let cart = [];

const productsArray = [
    {
        name: "Product 1",
        price: 150,
        imageUrl: 'https://placedog.net/574/584?id=57',
        description: 'product description for 1',
        id: 1
    },
    {
        name: "Product 2",
        price: 20,
        imageUrl: 'https://placedog.net/496/476?id=122',
        description: 'product description for 2',
        id: 2
    },
    {
        name: "Product 3",
        price: 30,
        imageUrl: 'https://placedog.net/541/553?id=119',
        description: 'product description for 3',
        id: 3
    },
    {
        name: "Product 4",
        price: 10,
        imageUrl: 'https://placedog.net/807/669?id=142',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet consectetur adipiscing elit ut aliquam purus sit amet. Urna id volutpat lacus laoreet non curabitur gravida. Id diam vel quam elementum. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Curabitur vitae nunc sed velit dignissim sodales ut eu. Egestas pretium aenean pharetra magna ac placerat vestibulum. Mi proin sed libero enim sed faucibus turpis. Arcu non sodales neque sodales ut etiam sit. bortis feugiat. Nisl condimentum id venenatis a. Vel pretium lectus quam id leo in vitae turpis massa.',
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
            if (main.src == product.imageUrl) {
                productName.textContent = product.name;
                price.textContent = product.price;
                main.id = product.id;
                info.textContent = product.description;
                addCart.id = product.id;
            }           
        });    
    });   
});

// adding items to cart

addCart.addEventListener('click', function() {
    productsArray.forEach(product => {
        if (addCart.id == product.id){
            cart.push([product.name, product.price, product.id]);
        }
    })
    console.log(cart);
});

// function to make cart array
// function to remove item from cart
// function to accomodate quantity
// add image 
// add quantity


