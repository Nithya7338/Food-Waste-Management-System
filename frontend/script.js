function loginUser(){
    var email=document.getElementById("loginEmail").value;
    var password=document.getElementById("loginPassword").value;
    document.getElementById("emailError").innerText="";
    document.getElementById("passwordError").innerText="";

    if(email ===""){
        document.getElementById("emailError").innerText="Email is required";

    }
    if(password ===""){
        document.getElementById("passwordError").innerText="Password is required";
    }
    if(email!=="" && password!==""){
        alert("Login Successful");
    }

}
function registerUser(){
    var name=document.getElementById("regName").value;
    var email=document.getElementById("regEmail").value;
    var password=document.getElementById("regPassword").value;
    if(name===""||email===""||password===""){
        alert("All fields are required");
    }
    else{
        alert("Registration succcessful(frontend validation)");
    }
}
