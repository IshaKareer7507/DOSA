function clearErrors(){
    errors = document.getElementsByClassName("formerror");
    for (let e of errors){
        e.indexHTML = "error";
    }
}

function setError(id,error){
    let element = document.getElementById(id);
     element.innerHTML = error;
}

function validateForm(){
    let returnvalue = true;
    clearErrors();
            
    let name = document.forms["valform"]["name"].value;
    if (name.length < 5){
        setError("name_error" , "Error : Length of name is too short !!");
        returnvalue = false;
    }

    let email = document.forms["valform"]["email"].value;
    if (email.length > 10){
        setError("email_error" , "Error : Length of email is too long !!");
        returnvalue = false;
    }
    let phone = document.forms["valform"]["phone"].value;
    if (phone.length != 10){
    setError("phone_error" , "Error : Phone number must be of 10 digits !!");
    returnvalue = false;
}
return returnvalue;
}
