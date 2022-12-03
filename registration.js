function RegistrationForm() {
    var result = true;
    var a = document.forms.registrationform.email.value;
    var b = document.forms.registrationform.username.value;
    var c = document.forms.registrationform.password.value;
    var d = document.forms.registrationform.repassword.value;
    var e = document.forms.registrationform.phone.value;
    var h = document.forms.registrationform.check;

    var email_v = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var username_v = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/;
    var password_v = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    var phone_v = /^[\+]?[7,8]{1}[-\s\.]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    document.getElementById("email_message").innerHTML = "";
    document.getElementById("username_message").innerHTML = "";
    document.getElementById("password_message").innerHTML = "";
    document.getElementById("repassword_message").innerHTML = "";
    document.getElementById("phone_message").innerHTML = "";

    if (a == null || a == "" || email_v.test(a) == false) {
        document.getElementById("email_message").innerHTML = "Email address empty or wrong format";
        result = false;
    }

    if (b==null || b == "" || username_v.test(b) == false) {
        document.getElementById("username_message").innerHTML= "Please enter the correct information";
        result == false;
    }

    if (c==null || c == "" || password_v.test(c) == false) {
        document.getElementById("password_message").innerHTML= "Must contain at least one number, symbol and at least 8 or more characters";
        result == false;
    }

    if (d==null || d == "" || d !== c) {
        document.getElementById("repassword_message").innerHTML= "Repassword is not the same with password";
        result == false;
    }

    if (e==null || e == "" || phone_v.test(e) == false) {
        document.getElementById("phone_message").innerHTML= "Your phone number should start with 8 or with +7, please write valid form of phone number";
        result == false;
    }

    if (h.checked == false) {
        alert("did not confirm that you are not a robot");
        result == false;
    }
    
    if (h.checked == true) {
       while(true) {     
        if (prompt("Please. print the numbers from 1 to 5 in reverse order") == 54321) {
            alert("Yes, we finally made it!");
            break;   
        }
    }
    result == true;
    }
    
    if (result == true) {
        localStorage.setItem("Username", b)
        localStorage.setItem("Email", a)
        localStorage.setItem("Password", c)
        localStorage.setItem("Re-password", d)
        localStorage.setItem("Phone", e)
    }
}
function ResetForm() {
}