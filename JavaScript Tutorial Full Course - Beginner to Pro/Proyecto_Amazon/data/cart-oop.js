const cart = {
    cartItems: undefined,

    cart = JSON.parse(localStorage.getItem('cart')),

    if(!cart) {
        cart = [{
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 2,
            deliveryOptionId: '1',
        }, {
            productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
            quantity: 1,
            deliveryOptionId: '2',
        }];
    }
}

// Almacena en ek localStorage y para que sea un array se necesita el JSON.parse


// Funcion para almacenar el array en el localStorage (se pasa a string)
function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart))
}

//Va añadiendo productos a nuestra lista
export function addToCart(productId) {
    let matchingItem = undefined
    // Encuentra productos al que pertenezca su id
    cart.forEach(function (cartItem) {
        if (productId === cartItem.productId) {
            matchingItem = cartItem
        }
    })

    const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`)
    // Pasa a numero la cantidad de producto que hemos elegido
    const quantity = Number(quantitySelector.value)
    // Si ya esta este producto en la lista su cantidad aumenta en 1
    if (matchingItem) {
        matchingItem.quantity += quantity
        // Si no se añade a la lista, dandole un id y una cantidad
    } else {
        cart.push({
            productId: productId,
            quantity: quantity,
            deliveryOptionId: '1',
        })
    }
    saveToStorage()
}

// Funcion para eliminar productos de nuestra compra
export function removeFromCart(productId) {
    // Creamos una nueva lista
    const newCart = []

    cart.forEach(function (cartItem) {
        // Si el id del producto no esta en nuestra lista original añadelo a la cart nueva
        if (cartItem.productId !== productId) {
            newCart.push(cartItem)
        }
    })
    cart = newCart

    saveToStorage()
}

export function updateQuantity(productId, newQuantity) {
    let matchingItem;

    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });

    matchingItem.quantity = newQuantity;
    saveToStorage();
}

export function updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem = undefined

    cart.forEach(function (cartItem) {
        if (productId === cartItem.productId) {
            matchingItem = cartItem
        }
    })

    matchingItem.deliveryOptionId = deliveryOptionId

    saveToStorage()
}