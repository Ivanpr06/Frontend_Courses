export const cart = [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2,
},{
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1,
}] 

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
        quantity: quantity
      })
    }
  }