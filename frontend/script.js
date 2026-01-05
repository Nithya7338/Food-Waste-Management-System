function loginUser(){
    var email=document.getElementById("loginEmail").value;
    var password=document.getElementById("loginPassword").value;
    if(email===""||password===""){
        alert("Please fill all the fields before submission");
    }
    else{
        alert("Login successful(frontend validation)");
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
