let openShopping = document.querySelector('.shopping');
let cancleShopping = document.querySelector('.cancle');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
cancleShopping.addEventListener('click', ()=>{
     
    body.classList.remove('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    
    {
        id: 1,
        name: 'Caramel Frappuccino',
        image: 'caramel-frappuccino.png',
        price: 15000
    },
    {
        id: 2,
        name: 'Chai Crean Frappccino',
        image: 'chai-crean-frappccino.png',
        price: 13500
    },
    {
        id: 3,
        name: 'Chocolate Chip Cream',
        image: 'chocolate-chip-cream.png',
        price: 14000
    },
    {
        id: 4,
        name: 'Coffee Frappuccino',
        image: 'coffee-frappuccino.png',
        price: 11000
    },
    {
        id: 5,
        name: 'Cookies & Cream Frappuccino',
        image: 'cookies&cream-frappuccino.png',
        price: 14000
    },
    {
        id: 6,
        name: 'Espresso',
        image: 'espresso.png',
        price: 13000
    },
    {
        id: 7,
        name: 'Matcha Green Tea',
        image: 'matcha-green-tea.png',
        price: 13500
    },
    {
        id: 8,
        name: 'Mocha Frappuccino',
        image: 'mocha-frappuccino.png',
        price: 9000
    },
    {
        id: 9,
        name: 'Strawberries Cream Frappuccino',
        image: 'strawberries-cream-frappuccino.png',
        price: 15000
    },
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="assets/Image1/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="assets/Image1/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}