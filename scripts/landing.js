const shop_by_collection = document.querySelectorAll(".shop_by_collection");

shop_by_collection.forEach(item => {
    item.addEventListener("click", () =>{
        window.location.href = "product_page.html";
    });
})