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
        document.getElementById("unameError").innerHTML = "Username can't be empty";
        document.getElementById("unameError").style.color = "cyan";
        flag = 0;
    } else if (uname.value.length >= 3) {
        document.getElementById("unameError").innerHTML = "";
        flag = 1;
    } else {
        document.getElementById("unameError").innerHTML = "Minimum 3 characters required";
        document.getElementById("unameError").style.color = "green";
        flag = 0;
    }


        // email validation
    if (email.value.match(reg)) {
        document.getElementById("emailError").innerHTML = "";
        flag = 1;
    } else{
        document.getElementById("emailError").innerHTML = "Email is not valid";
        flag = 0;
        document.getElementById("emailError").style.color = "cyan";
    }


        // password validation
    if (pass.value == "") {
        document.getElementById("passError").innerHTML = "Password can't empty";
        document.getElementById("passError").style.color = "cyan";
        flag = 0;
    }else if (pass.value.length >= 8) {
        document.getElementById("passError").innerHTML = "";
        flag = 1; 
    } else {
        document.getElementById("passError").innerHTML = "Your password is weak";
        document.getElementById("passError").style.color = "cyan";
        flag = 0; 
    }
    
        //confirm password
     if (document.getElementById('pass').value == document.getElementById("cnfrmPass").value)
     {
         document.getElementById("cnfrmPassError").innerHTML="";
          }
    else{
        document.getElementById("cnfrmPassError").innerHTML=" Not matching";
        document.getElementById("cnfrmPassError").style.color = "cyan";
    }





    //phone number validation
    if (num.value.match(regex)) {
        document.getElementById("numError").innerHTML = "";
    } else {
        document.getElementById("numError").innerHTML = "Please Enter Number";
        document.getElementById("numError").style.color = "cyan";
    }


    if (flag==1) {
        return true;
    } else if (flag==0) {
        return false;
    }
}
