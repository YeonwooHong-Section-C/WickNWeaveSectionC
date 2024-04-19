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

window.onload = productList   // call function when load



// product Array

const productsArray = [
    {
        prod_name: "Dark Green Socks",
        prod_price: 5,
        prod_img: 'https://images.unsplash.com/photo-1640026199235-c24aa417b552?q=80&w=3730&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: '',
        prod_quantity: null,
        prod_type: 'sock',
        id: 1
    },
    {
        prod_name: "Aroma Therapy",
        prod_price: 12,
        prod_img: 'https://images.unsplash.com/photo-1572726729207-a78d6feb18d7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
        description: 'product description for 2',
        prod_quantity: null,
        prod_type: 'candle',
        id: 2
    },
    {
        prod_name: "Grey Socks",
        prod_price: 6,
        prod_img: 'https://images.unsplash.com/photo-1613151848917-80e67f421fff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8',
        description: 'product description for 3',
        prod_quantity: null,
        prod_type: 'sock',
        id: 3
    },
    {
        prod_name: "Pine Forest",
        prod_price: 10,
        prod_img: 'https://images.unsplash.com/photo-1595055258834-8290e4181590?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8',
        description: '',
        prod_quantity: null,
        prod_type: 'candle',
        id: 4
    },{
        prod_name: "Forest",
        prod_price: 13,
        prod_img: 'https://images.unsplash.com/photo-1599591590264-22dbba64111c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D',
        description: '',
        prod_quantity: null,
        prod_type: 'candle',
        id: 5
    },
    {
        prod_name: "Lychee",
        prod_price: 11,
        prod_img: 'https://images.unsplash.com/photo-1602952706017-f3cc19eb98af?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
        description: 'product description for 2',
        prod_quantity: null,
        prod_type: 'candle',
        id: 6
    },
    {
        prod_name: "Ambre",
        prod_price: 9,
        prod_img: 'https://images.unsplash.com/photo-1617213146999-f33c20d2a534?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D',
        description: 'product description for 3',
        prod_quantity: null,
        prod_type: 'candle',
        id: 7
    },
    {
        prod_name: "New York City",
        prod_price: 8,
        prod_img: 'https://images.unsplash.com/photo-1573744364765-f9eedccc45fe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8',
        description: '',
        prod_quantity: null,
        prod_type: 'candle',
        id: 8
    },
    {
        prod_name: "Knit Socks",
        prod_price: 9,
        prod_img: 'https://images.unsplash.com/photo-1610134142835-e1724e0ed53d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: '',
        prod_quantity: null,
        prod_type: 'sock',
        id: 10
    }
]

function productList(){
    productsArray.forEach((product) => {
        let prodList = document.getElementById('prodsList');
        let newList = document.createElement('div');
        newList.className = 'col';
        newList.innerHTML=`
        <div class="card h-100 ${product.prod_type} product-info" id=${product.id}>
          <img src="${product.prod_img}" class="card-img-top product-image"
            alt="Ooooops! There seems to be a problem." max-height=>
          <div class="card-body">
            <h5 class="card-title product-name">${product.prod_name}</h5>
            <p class="card-text product-price">$${product.prod_price}</p>
          </div>
        </div>
      </div>
      `;
        prodList.appendChild(newList);
        countProducts()
        clickOnProduct()
    })
}

function directItems(id){
    console.log(id);
    const currentProduct = productsArray.find(product => product.id == id)
    console.log(currentProduct);
    localStorage.setItem('currentProduct', JSON.stringify(currentProduct))
    window.location.href = "../pages/product_description.html";
}

function clickOnProduct(){
    let productCard = document.querySelectorAll(".product-info"); // getting cards
    console.log(productCard)
    productCard.forEach((product) => {      // event listener to direct to product detail page
    product.addEventListener("click", (event) => {
        const parentElement_1 = event.target.parentElement;
        if(parentElement_1.classList.contains("card-body"))
        {
            console.log(parentElement_1.parentElement.id);    //make sure clicking on child directs to parent
            directItems(parentElement_1.parentElement.id);
        }
        else{
            console.log(parentElement_1.id);
            directItems(parentElement_1.id);
        }
       // directItems(event);
    })
});}