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
    {
        id: 10,
        name: 'Macchiato',
        image: 'Macchiato.png',
        price: 13500
    },
    {
        id: 11,
        name: 'Americano',
        image: 'Americano.jpeg',
        price: 9000
    },
    {
        id: 12,
        name: 'Doppio',
        image: 'Doppio.jpeg',
        price: 13500
    },
    {
        id: 13,
        name: 'Yellow Tea',
        image: 'yellowtea_700x.jpg',
        price: 13500
    },
    {
        id: 14,
        name: 'Oolong Tea',
        image: 'Oolong tea.webp',
        price: 9000
    },
    {
        id: 15,
        name: 'Black Tea',
        image: 'Black tea.jpeg',
        price: 15000
    },
    {
        id: 16,
        name: 'Cheese burger',
        image: 'cheese-burger-ricetta.jpg.webp',
        price: 13500
    },
    {
        id: 17,
        name: 'Chickpea burger',
        image: 'chickpea_burger.avif',
        price: 9000
    },
    {
        id: 18,
        name: 'burger.avif',
        image: 'burger.avif',
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

document.addEventListener("DOMContentLoaded", () => {
    const orderButton = document.querySelector('.closeShopping');
    const orderFormModal = document.getElementById('orderFormModal');
    const orderForm = document.getElementById('orderForm');
    const closeOrderFormButton = document.getElementById('closeOrderForm');
    const shoppingCart = document.querySelector('.listCard');
    const cartQuantity = document.querySelector('.shopping .quantity');
    const totalAmount = document.querySelector('.total');
    const cancelButton = document.querySelector('.cancle');
    const formCancelButton = document.getElementById('formCancelButton');

    // Open order form modal
    orderButton.addEventListener('click', () => {
        orderFormModal.style.display = 'block';
    });

    // Close order form modal
    closeOrderFormButton.addEventListener('click', () => {
        clearCart();
        orderFormModal.style.display = 'none';
    });

    // Submit order form
    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(orderForm);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        localStorage.setItem('order', JSON.stringify(formObject));
        alert('Order placed successfully!');
        
        // Clear shopping cart
        clearCart();
        
        // Close the order form modal
        orderFormModal.style.display = 'none';
    });

    // Clear cart on cancel button click
    cancelButton.addEventListener('click', () => {
        clearCart();
    });

    // Clear cart on form cancel button click
    formCancelButton.addEventListener('click', () => {
        clearCart();
        orderFormModal.style.display = 'none';
    });

    // Function to clear the shopping cart
    function clearCart() {
        shoppingCart.innerHTML = '';
        cartQuantity.textContent = '0';
        totalAmount.textContent = '0';
    }

    // Close modal when clicking outside of the form
    window.onclick = function(event) {
        if (event.target == orderFormModal) {
            orderFormModal.style.display = 'none';
        }
    };
});
