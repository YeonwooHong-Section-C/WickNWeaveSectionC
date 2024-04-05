document.querySelectorAll('.filter-button').forEach(function(a) {
    a.addEventListener('click', function() {
        let filter = a.getAttribute('data-filter');
        document.querySelectorAll('.card').forEach(function(card) {
            if (filter === 'all' || card.classList.contains(filter)) {
                card.classList.add('show');
                card.classList.remove('hide');
            }else {
                card.classList.remove('show');
                card.classList.add('hide');
            }
        });
    });
});

function countProducts(){
    let product = document.querySelectorAll('.card');
    let counter = document.getElementById('productCounter');
    counter.innerHTML = `${product.length} products`;
    console.log(product.length);
}

window.onload = countProducts;