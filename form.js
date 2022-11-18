
let form = document.getElementById("form");
let fullname = document.getElementById("fullname");
let email = document.getElementById("email");
let nameErrorEl = document.getElementById("nameError");
let emailErrorEl = document.getElementById("emailError");



form.addEventListener("submit", e =>{
    
    
    validateInputs();
    e.preventDefault();
})


const validateInputs = ()=>{
    const fullName = fullname.value.trim();
    const userEmail = email.value.trim();

    let nameReg = /^[a-zA-Z-'. ]+$/;
    let emailReg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if( nameReg.test(fullName)===false){
        let err = "type a valid name";
        nameErrorEl.innerHTML = err;
    }else{
        let success = "valid"
        nameErrorEl.innerHTML = success;
    }

    if(emailReg.test(userEmail)===false){
        let err = "Type a valid email";
        emailErrorEl.innerHTML = err;
    }else{
        let success = "Valid"
        emailErrorEl.innerHTML = success;
    }
}  
