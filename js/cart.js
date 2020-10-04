var cartItems = [];
var totalPrice = 0;
if(localStorage.getItem("cart")===null){
     cartItems = [];
}
else{
    var cart= JSON.parse(localStorage.getItem("cart"));
    function cartDatas(item, index){
        totalPrice = (parseInt(totalPrice) + parseInt(item['price']));
        cartItems.push(item);
    }
     cart.forEach(cartDatas);
    //console.log(cart);
    
}

    var x = document.getElementById("menuTable");
    var heading = document.createElement('TR');
    x.appendChild(heading);
    var head = document.createElement('TH');
    heading.appendChild(head);
    head.appendChild(document.createTextNode('Name'));
    head = document.createElement('TH');
    heading.appendChild(head);
    head.appendChild(document.createTextNode('Price'));
    head = document.createElement('TH');
    heading.appendChild(head);
    head.appendChild(document.createTextNode('Free Delivery'));
    head = document.createElement('TH');
    heading.appendChild(head);
    head.appendChild(document.createTextNode('Action'));
    
   function pop(item, index){
       var tr = document.createElement('TR');
       x.appendChild(tr);
       
       var td = document.createElement('TD');
       tr.appendChild(td);
        td.appendChild(document.createTextNode(item['name']));
        td = document.createElement('TD');
       tr.appendChild(td);
        td.appendChild(document.createTextNode(item['price']));
        td = document.createElement('TD');
       tr.appendChild(td);
        td.appendChild(document.createTextNode(item['freeDelivery']));
        td = document.createElement('TD');
       tr.appendChild(td);
       td.innerHTML = "<button><a href = 'deleteFromCart.html?index="+index+"'>Delete</a></button>";
       
   }
cartItems.forEach(pop);
    if(totalPrice==0)
    {
        document.getElementById('total').innerHTML = "<center><h2 style='color:green'>Cart is empty, click <a href='customerhome.html'> here </a> to add items to cart</h2></center>"
    }
    else 
    document.getElementById('total').innerHTML = "<h3 style='color:green'>Total Price : "+totalPrice+"</h3>"
    
    const queryString = window.location.search;

    const urlParams = new URLSearchParams(queryString);

    const index = urlParams.get('msg');
    if(index!=null){
    document.getElementById('result').innerHTML = "<h3>"+index+"</h3>";
    }