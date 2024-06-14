let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('.body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=> {
    body.classList.remove('active');
})
closeShopping.addEventListener('click', ()=> {
    body.classList.remove('active');
})
let products = [
    {
        id: 1,
        name: 'PRODUCT NAME 1',
        image: 'Birthday Cake Frappe Starbucks Cake Made Jeanette Labella Jlabella Cakes Cake - birijus_com.jpeg',
        price: 12000
    },
    {
        id: 2,
        name: 'PRODUCT NAME 2',
        image: 'snack2.jpeg',
        price: 13000
    },
    {
        id: 3,
        name: 'PRODUCT NAME 3',
        image: '',
        price: 22000
    },
    {
        id: 4,
        name: 'PRODUCT NAME 4',
        image: '',
        price: 125000
    },
    {
        id: 5,
        name: 'PRODUCT NAME 5',
        image: '',
        price: 150000
    },
    {
        id: 6,
        name: 'PRODUCT NAME 6',
        image: '',
        price: 160000
    },   
];
let listCards = [];
function initApp(){
    products.forEach((value, key)=> {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <img src"image/${value.image}"/>
        <div class="title">${value.name}</div>
        <div class="price">${value.price.toLocaleString()}</div>
        <button onclic="addToCard(${key})">Add To Card</button>
        `;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = products[key];
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
            <div><img src="image/${value.image}"/></div>
            <div>${value.name}</div>
            <div>${value.price.toLocaleString()}</div>
            <div>${value.quantity}</div>
            <div>
                <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                <div class="count">${value.quantity}</div>
                <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
            </div>
            `;
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity) {
    if (quantity == 0){
        delete listCards[key];
    }else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantitys[key].price;
    }
    reloadCard();
}
