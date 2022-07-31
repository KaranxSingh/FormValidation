let uname = document.getElementById("uname");
let email = document.getElementById("email");
let pass = document.getElementById("pass");
let cnfrmPass = document.getElementById("nfrmPass");
let num = document.getElementById("num");
let reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let regex = /^[0-9]/;
let flag = 1;

function validate() {


    // username validation 
    if (uname.value == "") {
        document.getElementById("unameError").innerHTML = "username can't be empty";
        flag = 0;
    } else if (uname.value.length >= 3) {
        document.getElementById("unameError").innerHTML = "";
        flag = 1;
    } else {
        document.getElementById("unameError").innerHTML = "3 char required";
        flag = 0;
    }


        // email validation
    if (email.value.match(reg)) {
        document.getElementById("emailError").innerHTML = "";
        flag = 1;
    } else{
        document.getElementById("emailError").innerHTML = "email is invalids";
        flag = 0;
    }


        // password validation
    if (pass.value == "") {
        document.getElementById("passError").innerHTML = "Password is empty";
        flag = 0;
    }else if (pass.value >= 8) {
        document.getElementById("passError").innerHTML = "";
        flag = 1; 
    } else {
        document.getElementById("passError").innerHTML = "Weak password";
        flag = 0; 
    }


        //confirm password
    // if (pass != cnfrmPass ){
    //     document.getElementById("cnfrmPassError").innerHTML = "please match the password";
    //     flag =0;
    // } else if (pass == cnfrmPass) {
    //     document.getElementById("cnfrmPassError").innerHTML = "";
    //     flag=1;
    // }

    
    //phone number validation

    if (num.value.match(regex)) {
        document.getElementById("numError").innerHTML = "";
    } else {
        document.getElementById("numError").innerHTML = "Please Enter Number";
    }


    if (flag==1) {
        return true;
    } else if (flag==0) {
        return false;
    }
}