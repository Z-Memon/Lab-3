//Part A

function validateForm(){
    var username = document.getElementById('username').value;
    var usernameRegex = /^[A-Za-z0-9]*$/;
    var email = document.getElementById('email').value;
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var password = document.getElementById('password').value;

    if (username == ""){
        console.log('Form submission failed');
     }
     if (!username.match(usernameRegex)){
        console.log('Form submission failed');
     }
     if (email == ""){
        console.log('Form submission failed');
     }
     if (!email.match(emailRegex)){
        console.log('Form submission failed');
     }
     if (password == "", password.length <8){
        console.log('Form submission failed');
     }
     else{
        console.log('Form submitted successfully');
     }
};

//Part B

const products = [
   "Apple", 
   "Backpack", 
   "Chocolate", 
   "Donuts", 
   "Candy", 
   "Table", 
   "Magazine", 
   "Shampoo", 
   "Toothpaste", 
   "Chair", 
   "Almonds", 
   "Basket", 
   "Daisy", 
   "Sandpapper", 
   "Maple Syrup"
];

function displayProducts(productList, products) {
   productList.innerHTML = '';

   for (let i = 0; i < products.length; i++) {
       const li = document.createElement('li');
       li.textContent = products[i];
       productList.appendChild(li);
   }
}

function searchProducts(query, products) {
   return products.filter(product =>
       product.toLowerCase().includes(query.toLowerCase())
   );
}

const searchInput = document.getElementById('searchQuery');
const productList = document.getElementById('products');
searchInput.addEventListener('input', function () {
   const query = searchInput.value;
   const filteredProducts = searchProducts(query, products);
   displayProducts(productList, filteredProducts);
});

displayProducts(productList, products);


function searchProducts(){
   let list = document.querySelectorAll('.list');
   let searchQuery = document.getElementById("filter-search").value;
   for (var i = 0; i < products.length; i++){
       if (list[i].innerText.toLowerCase()
       .includes(searchQuery.toLowerCase())){
           list[i].classList.remove("is-hidden");
       } else {
           list[i].classList.add("is-hidden");
       }
   }}


