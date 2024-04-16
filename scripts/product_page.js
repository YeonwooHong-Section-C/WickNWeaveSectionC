// show and hide card

document.querySelectorAll('.filter-button').forEach(function(a) {
    a.addEventListener('click', function() { // click the category event listener to begin
        let filter = a.getAttribute('data-filter');
        document.querySelectorAll('.card').forEach(function(card) { // get all cards
            if (filter === 'all' || card.classList.contains(filter)) { // match data filter to card class
                card.classList.add('show'); // show product if hidden
                card.classList.remove('hide');  // show product if hidden
            }else {
                card.classList.remove('show'); // remove show if toggled
                card.classList.add('hide'); // hide product
            }
        });
    });
});

// show updated product count

function countProducts(){
    let product = document.querySelectorAll('.card'); // get all products
    let counter = document.getElementById('productCounter'); 
    counter.innerHTML = `${product.length} products`; // update the text with how many cards there are
    console.log(product.length); 
}

window.onload = countProducts; // call function when load

let productCard = document.querySelectorAll(".card"); // getting cards

// product Array

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

function directItems(id){
    console.log(id);
    const currentProduct = productsArray.find(item => item.id == id)
    console.log(currentProduct);
    localStorage.setItem('currentProduct', JSON.stringify(currentProduct))
    window.location.href = "../pages/product_description.html";
}


productCard.forEach((product) => {
    product.addEventListener("click", (event) => {
        const parentElement_1 = event.target.parentElement;
        if(parentElement_1.classList.contains("card-body"))
        {
            console.log(parentElement_1.parentElement.id);
            directItems(parentElement_1.parentElement.id);
        }
        else{
            console.log(parentElement_1.id);
            directItems(parentElement_1.id);
        }
       // directItems(event);
    })
});


// click the button save the clicked info to an array and put in local storage    click and link to product_description.html]