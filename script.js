function redirect1(){
    location.replace("login.html")
}
function redirect2(){
    location.replace("index.html")
}
function creation(){
    let firstName = document.getElementById("first").value;
    let lastName = document.getElementById("last").value;
    let eMail = document.getElementById("e_mail").value;
    let passWord = document.getElementById("pass").value;
    if(typeof(Storage)!=="undefined"){
        localStorage.setItem("Fname",firstName);
        localStorage.setItem("Lname",lastName);
        localStorage.setItem("Email",eMail);
        localStorage.setItem("Password",passWord);
        alert("SignUp Successfull");
        location.replace("login.html")
    }
    else{
        alert("Your browser does not support local storage");
    }
}
function logging(){
    let eMail = document.getElementById("e_mail").value;
    let passWord = document.getElementById("pass").value;
    let oemail = localStorage.getItem("Email");
    let opass = localStorage.getItem("Password");
    if(typeof(Storage) !== "undefined"){
        if(oemail==null){
            alert("First create account");
        }
        else if(eMail==oemail && passWord==opass){
            alert("Login Succesfull");
            location.replace("welcome.html");
        }
        else{
            alert("Incorrect Email/Password");
        }
    }
    else{
        alert("Your browser does not support local storage");
    }
}