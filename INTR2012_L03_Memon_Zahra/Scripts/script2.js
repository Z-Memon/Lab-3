const products = [
    "Apple", "Backpack", "Chocolate", "Donuts", "Candy", "Table", "Magazine", "Shampoo", "Toothpaste", "Chair", "Almonds", "Basket", "Daisy", "Sandpapper", "Maple Syrup"
]

for (var i = 0; i < products.length; i++){
    var list = document.createElement('li');
    var text = document.createTextNode(products[i]);
    list.appendChild(text);
    document.getElementById('list').appendChild(list);
    console.log(list);
}

function searchProducts(list, searchQuery){
    list = document.getElementById('list');
    searchQuery = document.getElementById('filter').value;
    for (var i = 0; i < products.length; i++){
        if (list[i].innerText.toLowerCase().includes(searchQuery.toLowerCase()) > -1){
            list[i].style.display = "";
        } else {
            list[i].style.display = "none";
        }
    }

}