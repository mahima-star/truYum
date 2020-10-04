
var menuItems = []
if (localStorage.getItem("menuData") === null) {
    menuItems = [
        { id: 1, name: 'Sandwich', price: 99, active: 'Yes', dateOfLaunch: '15/03/2017', category: 'Main Course', freeDelivery: 'Yes' },
        { id: 2, name: 'Burger', price: 129, active: 'Yes', dateOfLaunch: '23/12/2017', category: 'Main Course', freeDelivery: 'No' },
        { id: 3, name: 'Pizza', price: 149, active: 'Yes', dateOfLaunch: '21/08/2017', category: 'Main Course', freeDelivery: 'No' },
        { id: 4, name: 'French Fries', price: 57, active: 'No', dateOfLaunch: '02/07/2017', category: 'Starter', freeDelivery: 'Yes' },
        { id: 5, name: 'Chocolate Brownies', price: 32, active: 'Yes', dateOfLaunch: '02/11/2022', category: 'Dessert', freeDelivery: 'Yes' }
    ];
    localStorage.setItem("menuData", JSON.stringify(menuItems));
} 
else {
     menuItems = JSON.parse(localStorage.getItem("menuData"));
   // console.log(menu);
    // function menuDatas(item, index) {
    //     menuItems.push(item);
    // }
    //menu.forEach(menuDatas);
}
const div = document.getElementById("form-container");
const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const index = urlParams.get('index')
console.log(index);
var menuItem = menuItems[index];
console.log(menuItem);
var h1 = document.createElement('h1');
div.appendChild(h1);
h1.appendChild(document.createTextNode('Edit Menu Item'));
var form = document.createElement('form');
div.appendChild(form);

var label = document.createElement('label');
label.setAttribute('for', 'name');
label.setAttribute('class', 'label info')
form.appendChild(label);
label.appendChild(document.createTextNode('Name:'));

var nameInput = document.createElement('input');
nameInput.setAttribute('type', 'text');
nameInput.setAttribute('id', 'name');
nameInput.setAttribute('value', menuItem['name']);
form.appendChild(nameInput);

var label = document.createElement('label');
label.setAttribute('for', 'price');
label.setAttribute('class', 'label info')
form.appendChild(label);
label.appendChild(document.createTextNode('Price:'));

var priceInput = document.createElement('input');
priceInput.setAttribute('type', 'text');
priceInput.setAttribute('id', 'price');
priceInput.setAttribute('value', menuItem['price']);
form.appendChild(priceInput);
form.appendChild(document.createElement('br'));
form.appendChild(document.createElement('br'));

var label = document.createElement('active');
label.setAttribute('for', 'active');
label.setAttribute('class', 'label info')
form.appendChild(label);
label.appendChild(document.createTextNode('Active:'));

var activeRadioYes = document.createElement('input');
var activeRadioNo = document.createElement('input');
activeRadioYes.setAttribute('type', 'radio');
activeRadioYes.setAttribute('name', 'active');
activeRadioYes.setAttribute('value', 'Yes');
activeRadioNo.setAttribute('type', 'radio');
activeRadioNo.setAttribute('name', 'active');
activeRadioNo.setAttribute('value', 'No');
if (menuItem["active"] === 'Yes') {
    activeRadioYes.setAttribute('checked', 'checked');
} else {
    activeRadioNo.setAttribute('checked', 'checked');
}
form.appendChild(document.createTextNode(' Yes:'));
form.appendChild(activeRadioYes);
form.appendChild(document.createTextNode(' No:'));
form.appendChild(activeRadioNo);
form.appendChild(document.createElement('br'));
form.appendChild(document.createElement('br'));

var label = document.createElement('label');
label.setAttribute('for', 'dolaunch');
label.setAttribute('class', 'label info')
form.appendChild(label);
label.appendChild(document.createTextNode('Date Of Launch:'));

var dolInput = document.createElement('input');
dolInput.setAttribute('type', 'text');
dolInput.setAttribute('id', 'dol');
dolInput.setAttribute('value', menuItem['dateOfLaunch']);
form.appendChild(dolInput);

form.appendChild(document.createElement('br'));
form.appendChild(document.createElement('br'));
var label = document.createElement('label');
label.setAttribute('for', 'category');
label.setAttribute('class', 'label info')
form.appendChild(label);
label.appendChild(document.createTextNode('Category:'));

var select = document.createElement('select');
select.setAttribute('id', 'categories');
form.appendChild(select);
var option1 = document.createElement('option');
option1.setAttribute('value', 'Starter');
select.appendChild(option1);
option1.appendChild(document.createTextNode('Starter'));
var option2 = document.createElement('option');
option2.setAttribute('value', 'Main Course');
select.appendChild(option2);
option2.appendChild(document.createTextNode('Main Course'));
var option3 = document.createElement('option');
option3.setAttribute('value', 'Desert');
select.appendChild(option3);
option3.appendChild(document.createTextNode('Desert'));
var option4 = document.createElement('option');
option4.setAttribute('value', 'Drinks');
select.appendChild(option4);
option4.appendChild(document.createTextNode('Drinks'));
form.appendChild(document.createElement('br'));
form.appendChild(document.createElement('br'));

var label = document.createElement('label');
label.setAttribute('class', 'label info')
label.setAttribute('for', 'freeDelivery');
label.setAttribute('class', 'label info')
form.appendChild(label);
label.appendChild(document.createTextNode('Free Delivery:'));

var checkBox = document.createElement('input');
checkBox.setAttribute('type', 'checkbox');
checkBox.setAttribute('id', 'fd');

if (menuItem["freeDelivery"] === 'Yes') {
    checkBox.setAttribute('checked', 'checked');
}
form.appendChild(checkBox);
form.appendChild(document.createElement('br'));
form.appendChild(document.createElement('br'));

var saveButton = document.createElement('input');
saveButton.setAttribute('type', 'reset');
saveButton.setAttribute('id', 'submit');
saveButton.setAttribute('value', 'Save');
saveButton.setAttribute('onclick', 'submitEdit()');
form.appendChild(saveButton);








function submitEdit() {
    var name = document.getElementById("name").value;
    var price = document.getElementById("price").value;
    var active = document.getElementsByName("active")[0].value;
    var dol = document.getElementById("dol").value;
    var categories = document.getElementById("categories");
    var category = categories.options[categories.selectedIndex].value;
    var fd = document.getElementById("fd").value;
    var freeDelivery = '';
    if (fd === 'on') {
        freeDelivery = 'Yes';
    } else {
        freeDelivery = 'No';
    }

    menuItem['name'] = name;
    menuItem['price'] = price;
    menuItem['active'] = active;
    menuItem['dateOfLaunch'] = dol;
    menuItem['category'] = category;
    menuItem['freeDelivery'] = freeDelivery;

    menuItems[index] = menuItem;
    localStorage.setItem('menuData', JSON.stringify(menuItems));
    form.remove();


    document.getElementById('result').innerHTML = "<h3>Menu item details saved successfully</h3>";


}
