if(document.title==="Customer Login Page")
{
    localStorage.removeItem("cart");
}
function validate(){
    
    var id = document.getElementById("id").value;
    var password = document.getElementById("password").value;
    if(id === "admin" && password === "password"){

        window.location.href = "adminHome.html";
    }
    else if(id==="customer" && password==="password")
    {
        window.location.href="customerHome.html";
    }
    else
    {
        document.getElementById("verdict").innerHTML = "Please enter valid user id and password";
    }
}
