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

function display(productList, products) {
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

const searchQuery = document.getElementById('searchQuery');
const product = document.getElementById('products');

for (let i = 0; i < products.length; i++) {
   searchQuery.addEventListener('keyup', function () {
   const query = searchQuery.value;
   const filteredProducts = searchProducts(query, products);
   display(product, filteredProducts);
})};

display(product, products);



