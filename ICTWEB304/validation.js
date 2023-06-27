
function validateFirstName(){
    // collect the value from the input with id 'Firstname' 
    let input = document.getElementById('Firstname').value;
    //get the elmenet from where the error message will be shown.
    let output = document.getElementById('Firstname-error');
    //check input, if empty,
    if(input.length == 0){
    //if empty display error message 'Firstname is required'
        output.innerHTML = "Firstname is required";
        return;
    // if not dispaly 'approved'.
    }
    output.innerHTML = 'approved';
}
function validateLastName(){
    let input = document.getElementById('Lastname').value;
    let output = document.getElementById('Lastname-error');

    if(input.length == 0){
        output.innerHTML = "Lastname is required";
        return;
    }
    output.innerHTML = 'approved';
}
function validateUserName(){
    let input = document.getElementById('Username').value;
    let output = document.getElementById('Username-error');

    if(input.length == 0){
        output.innerHTML = "Username is required";
        return;
    }
    output.innerHTML = 'approved';
}
function validateEmail(){
    let input = document.getElementById('Email').value;
    let output = document.getElementById('Email-error');

    if(input.length == 0){
        output.innerHTML = "Email is required";
        return;
    }
    output.innerHTML = 'approved';
}
function validatePassword(){
    let input = document.getElementById('Password').value;
    let output = document.getElementById('Password-error');

    if(input.length == 0){
        output.innerHTML = "Password is required";
        return;
    }
    output.innerHTML = 'approved';
}
function validateConfirmPassword(){
    let input = document.getElementById('ConfirmPassword').value;
    let output = document.getElementById('ConfirmPassword-error');

    if(input.length == 0){
        output.innerHTML = "password not valid";
        return;
    }
    output.innerHTML = 'approved';
}
function validateGender(){
    let input = document.getElementById('Gender').value;
    let output = document.getElementById('Gender-error');

    if(input.length == 0){
        output.innerHTML = "Gender not valid";
        return;
    }
    output.innerHTML = 'approved';
}
function validateStreet(){
    let input = document.getElementById('Street').value;
    let output = document.getElementById('Street-error');

    if(input.length == 0){
        output.innerHTML = "Street not valid";
        return;
    }
    output.innerHTML = 'approved';
}
function validateSuburb(){
    let input = document.getElementById('Suburb').value;
    let output = document.getElementById('Suburb-error');

    if(input.length == 0){
        output.innerHTML = "Suburb not valid";
        return;
    }
    output.innerHTML = 'approved';
}
function validatePostcode(){
    let input = document.getElementById('Postcode').value;
    let output = document.getElementById('Postcode-error');

    if(input.length == 0){
        output.innerHTML = "Postcode not valid";
        return;
    }
    output.innerHTML = 'approved';
}
function validateState(){
    let input = document.getElementById('State').value;
    let output = document.getElementById('State-error');

    if(input.length == 0){
        output.innerHTML = "State not valid";
        return;
    }
    output.innerHTML = 'approved';
}
function validatePhonenumber(){
    let input = document.getElementById('Phonenumber').value;
    let output = document.getElementById('Phonenumber-error');

    if(input.length == 0){
        output.innerHTML = "Phonenumber not valid";
        return;
    }
    output.innerHTML = 'approved';
}
function Register(){
    validatePhonenumber();
    validateState();
    validatePostcode();
    validateSuburb();
    validateStreet();
    validateGender();
    validateConfirmPassword();
    validatePassword();
    validateEmail();
    validateUserName();
    validateLastName();
    validateFirstName();
}
function Refresh(){
    document.getElementById("Phonenumber-error").innerHTML = "";
    document.getElementById("State-error").innerHTML = "";
    document.getElementById("Postcode-error").innerHTML = "";
    document.getElementById("Suburb-error").innerHTML = "";
    document.getElementById("Street-error").innerHTML = "";
    document.getElementById("Gender-error").innerHTML = "";
    document.getElementById("ConfirmPassword-error").innerHTML = "";
    document.getElementById("Password-error").innerHTML = "";
    document.getElementById("Email-error").innerHTML = "";
    document.getElementById("Username-error").innerHTML = "";
    document.getElementById("Lastname-error").innerHTML = "";
    document.getElementById("Firstname-error").innerHTML = "";
}
