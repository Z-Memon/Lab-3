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




