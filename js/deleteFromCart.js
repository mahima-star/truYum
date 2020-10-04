if(localStorage.getItem('customerLogin')===null){
    window.location.href = "error.html";
}
var cartItems = [];
if(localStorage.getItem("cart")===null){
     cartItems = [];
}else{
    var cart = JSON.parse(localStorage.getItem("cart"));
    function cartDatas(item, index){
        cartItems.push(item);
    }
    cart.forEach(cartDatas);
}

const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const index = urlParams.get('index')

cartItems.splice(index,1);

localStorage.setItem('cart',JSON.stringify(cartItems));
window.location.href = 'cart.html?msg=Deleted From Cart Successfully';
