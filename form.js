
let form = document.getElementById("form");
let fullname = document.getElementById("fullname");
let email = document.getElementById("email");


function validateInput(){

    if(fullname.value.trim()===""){
       onError(fullname,"User Name cannot be empty");
    }else{
        onSuccess(fullname);
    }
    if(email.value.trim()===""){
        onError(email,"Email cannot be empty");
    }else{
        if(!isValidEmail(email.value.trim())){
            onError(email,"Email is not valid");
        }else{
            onSuccess(email);
        }
    }
}

document.getElementById("submit")
submit.addEventListener("click",(event)=>{
    event.preventDefault();
    validateInput();
});



function isValidEmail(email){
   return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

