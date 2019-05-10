export function validateEmail(value) {
    var email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email.test(String(value).toLowerCase())) return true;
    if(!email.test(String(value).toLowerCase())) return false;
}

export function passwordUnique(value) {
    var password = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{10,}$/
    if(password.test(String(value).toLowerCase())) return true;
    if(!password.test(String(value).toLowerCase())) return false;
}