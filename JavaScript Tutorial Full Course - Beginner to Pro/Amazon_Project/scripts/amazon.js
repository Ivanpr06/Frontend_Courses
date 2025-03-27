import {cart, addToCart} from '../data/cart.js'
import {products} from '../data/products.js'
import {formatCurrency} from './utils/money.js'

let productsHTML = ''
// Codigo html para cada producto
products.forEach(function (product) {
  productsHTML += `
    <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${formatCurrency(product.priceCents)}
          </div>

          <div class="product-quantity-container">
            <select class="js-quantity-selector-${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart js-added-to-cart-${product.id}">
          <img src="images/icons/checkmark.png"> 
          Added
          </div>
          
          <button class="add-to-cart-button button-primary 
          js-add-to-cart" data-product-id="${product.id}">
          Add to Cart
          </button>
        </div>
    `
})
// Introducira el html en nuestra página web
document.querySelector('.js-products-grid').innerHTML = productsHTML

// Va actualizando los productos que añadimos a nuestra lista
function updateCartQuantity() {
  let cartQuantity = 0
  cart.forEach(function (cartItem) {
    cartQuantity += cartItem.quantity
  })
  document.querySelector('.js-cart-quantity').innerHTML = cartQuantity
}

// Agrega un mensaje tras añadir un producto a la lista
function addMessage(addedMessage) {
  // Cumple la funcion de la clase de Css donde se da visibilidad al mensaje
  addedMessage.classList.add('added-to-cart-visible');
  // Elimina la clase del Css
  setTimeout(() => {
    addedMessage.classList.remove('added-to-cart-visible');
  }, 2000);
}

// Agrega funcion al boton para añadir nuestro producto a una lista 
document.querySelectorAll('.js-add-to-cart').forEach(function (button) {
  // Funcion cuando se clickea el boton
  button.addEventListener('click', function () {
    const productId = button.dataset.productId
    addToCart(productId)
    
    
    updateCartQuantity()

    const addedMessage = document.querySelector(`.js-added-to-cart-${productId}`)
    addMessage(addedMessage)
  })
})




