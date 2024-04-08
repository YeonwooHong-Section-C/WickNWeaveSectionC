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