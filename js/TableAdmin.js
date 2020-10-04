
var menuItems = []
var cartItems = []
if(localStorage.getItem("cart")===null){
     cartItems = [];
}else{
    var cart = JSON.parse(localStorage.getItem("cart"));
    function cartDatas(item, index){
        cartItems.push(item);
    }
    //cart.forEach(cartDatas);
    console.log(cartItems);
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
}


var x = document.getElementById("menuTable");
    var heading = document.createElement('tr');
    x.appendChild(heading);
    var head = document.createElement('th');
    heading.appendChild(head);
    head.appendChild(document.createTextNode('Name'));
    head = document.createElement('th');
    heading.appendChild(head);
    head.appendChild(document.createTextNode('Price'));
    head = document.createElement('th');
    heading.appendChild(head);
    head.appendChild(document.createTextNode('Active'));
    head = document.createElement('th');
    heading.appendChild(head);
    head.appendChild(document.createTextNode('Date Of Launch'));
    head = document.createElement('th');
    heading.appendChild(head);
    head.appendChild(document.createTextNode('Category'));
    head = document.createElement('th');
    heading.appendChild(head);
    head.appendChild(document.createTextNode('Free Delivery'));
    head = document.createElement('th');
    heading.appendChild(head);
    head.appendChild(document.createTextNode('Action'));
    
   function pop(item, index){
       var tr = document.createElement('tr');
       x.appendChild(tr);
       
       var td = document.createElement('td');
       tr.appendChild(td);
        td.appendChild(document.createTextNode(item['name']));
        td = document.createElement('td');
       tr.appendChild(td);
        td.appendChild(document.createTextNode(item['price']));
        td = document.createElement('td');
       tr.appendChild(td);
        td.appendChild(document.createTextNode(item['active']));
        td = document.createElement('td');
       tr.appendChild(td);
        td.appendChild(document.createTextNode(item['dateOfLaunch']));
        td = document.createElement('td');
       tr.appendChild(td);
        td.appendChild(document.createTextNode(item['category']));
        td = document.createElement('td');
       tr.appendChild(td);
        td.appendChild(document.createTextNode(item['freeDelivery']));
        td = document.createElement('td');
       tr.appendChild(td);
       var button = document.createElement('button');
       td.appendChild(button);
       var a = document.createElement('a');
       a.setAttribute('href',"edit-menu.html?index="+index+"");
       a.appendChild(document.createTextNode('Edit'));
       button.appendChild(a);
       
   }
    menuItems.forEach(pop);