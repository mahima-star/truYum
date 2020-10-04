
var cartItems = [];
var menuItems = [];
window.onload = function(e){
    //console.log("Hi");
    if(localStorage.getItem("cart")===null){
        cartItems = [];
        //console.log('inside if' + cartItems);
   }else{
       cartItems= JSON.parse(localStorage.getItem("cart"));
       // function cartDatas(item, index){
       //     cartItems.push(item);
       // }
       // cart.forEach(cartDatas);
       console.log(localStorage.getItem('cart'));
       //console.log('inside else' + cartItems);
   }

   if(localStorage.getItem("menuData")===null){
    menuItems = [
   { id: 1, name: 'Sandwich', price: 99, active: 'Yes', dateOfLaunch: '15/03/2017', category: 'Main Course', freeDelivery: 'Yes' },
    { id: 2, name: 'Burger', price: 129, active: 'Yes', dateOfLaunch: '23/12/2017', category: 'Main Course', freeDelivery: 'No' },
    { id: 3, name: 'Pizza', price: 149, active: 'Yes', dateOfLaunch: '21/08/2017', category: 'Main Course', freeDelivery: 'No' },
    { id: 4, name: 'French Fries', price: 57, active: 'No', dateOfLaunch: '02/07/2017', category: 'Starter', freeDelivery: 'Yes' },
    { id: 5, name: 'Chocolate Brownies', price: 32, active: 'Yes', dateOfLaunch: '02/11/2022', category: 'Dessert', freeDelivery: 'Yes' }
];
    localStorage.setItem("menuData",JSON.stringify(menuItems));
}else{
    var menu = JSON.parse(localStorage.getItem("menuData"));
    function menuDatas(item, index){
        menuItems.push(item);
    }
    menu.forEach(menuDatas);
    console.log(menu);
}
const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const index = urlParams.get('index')

var menuItem = menuItems[index];

var cartItem = {name : menuItem['name'], freeDelivery : menuItem['freeDelivery'], price : menuItem['price']};
console.log(cartItem);
console.log(cartItems);
cartItems.push(cartItem);
console.log(cartItems);
localStorage.setItem('cart',JSON.stringify(cartItems));
window.location.href = 'customerHome.html?msg=Added To Cart Successfully';


}




