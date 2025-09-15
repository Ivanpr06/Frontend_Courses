import { cart, removeFromCart, updateQuantity, updateDeliveryOption } from '../../data/cart.js'
import { products, getProduct } from '../../data/products.js'
import { formatCurrency } from '../utils/money.js';
// Exportamos una libreria para manejar fechas
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js'
import { deliveryOptions, getDeliveryOption } from '../../data/deliveryOptions.js';
import { renderPaymentSummary } from './paymentSummary.js';

export function renderOrderSummary() {

  let cartSummaryHTML = ''

  cart.forEach(function (cartItem) {
    const productId = cartItem.productId

    const matchingProduct = getProduct(productId)

    const deliveryOptionId = cartItem.deliveryOptionId
    
    const deliveryOption = getDeliveryOption(deliveryOptionId)

    const today = dayjs()
    // Añadimos dias a esa fecha
    const deliveryDate = today.add(deliveryOption.deliveryDays, 'days')
    // Le damos un formato leible a la fecha
    const dateString = deliveryDate.format('dddd, MMMM D')


    cartSummaryHTML += `
    <div class="cart-item-container 
    // Con esta clase podemos identificar el id unico de cada objeto
    js-cart-item-container-${matchingProduct.id}">
            <div class="delivery-date">
              Delivery date: ${dateString}
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingProduct.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${matchingProduct.name}
                </div>
                <div class="product-price">
                  $${formatCurrency(matchingProduct.priceCents)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label js-quantity-label-${matchingProduct.id}">${cartItem.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary js-update-link"
                    data-product-id="${matchingProduct.id}">
                    Update
                  </span>
                  <input class="quantity-input js-quantity-input-${matchingProduct.id}">
                  <span class="save-quantity-link link-primary js-save-link"
                  data-product-id="${matchingProduct.id}">Save</span>

                  <span class="delete-quantity-link link-primary js-delete-link" 
                  data-product-id="${matchingProduct.id}">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options js-deliver-option">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                ${deliveryOptionsHTML(matchingProduct, cartItem)}
              </div>
            </div>
          </div>
    `

    function deliveryOptionsHTML(matchingProduct, cartItem) {
      let html = ''

      deliveryOptions.forEach(function (deliveryOption) {
        // Nos dice la fecha actual
        const today = dayjs()
        // Añadimos 7 dias a esa fecha
        const deliveryDate = today.add(deliveryOption.deliveryDays, 'days')
        // Le damos un formato leible a la fecha
        const dateString = deliveryDate.format('dddd, MMMM D')

        const priceString = deliveryOption.priceCents === 0 ? 'FREE' : `$${formatCurrency(deliveryOption.priceCents)}  -`

        const isChecked = deliveryOption.id === cartItem.deliveryOptionId

        html +=
          `<div class="delivery-option js-delivery-option" data-product-id="${matchingProduct.id}" data-delivery-option-id="${deliveryOption.id}">
        <input type="radio" ${isChecked ? 'checked' : ''} class="delivery-option-input" name="delivery-option-${matchingProduct.id}">
        <div>
          <div class="delivery-option-date">${dateString}</div>
          <div class="delivery-option-price">${priceString} Shipping</div>
        </div>
      </div>`
      })
      return html
    }

    document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML
    updateCartSummary()

    // Eliminar objetos
    document.querySelectorAll('.js-delete-link').forEach(function (link) {
      link.addEventListener('click', function () {
        // Obtenemos el id y lo guardamos en una constante
        const productId = link.dataset.productId

        removeFromCart(productId)
        const container = document.querySelector(`.js-cart-item-container-${productId}`)
        container.remove()

        updateCartSummary()
        renderPaymentSummary()
      })
    })

    // Modificar objetos
    document.querySelectorAll('.js-update-link').forEach(function (link) {
      link.addEventListener('click', function () {
        const productId = link.dataset.productId
        const container = document.querySelector(`.js-cart-item-container-${productId}`)
        container.classList.add('is-editing-quantity')
      })
    })
    // Guardar el objeto modificado
    document.querySelectorAll('.js-save-link').forEach(function (link) {
      link.addEventListener('click', function () {
        const productId = link.dataset.productId
        const container = document.querySelector(`.js-cart-item-container-${productId}`)
        container.classList.remove('is-editing-quantity')

        const quantityInput = document.querySelector(`.js-quantity-input-${productId}`)
        const newQuantity = Number(quantityInput.value)
        updateQuantity(productId, newQuantity)

        const quantityLabel = document.querySelector(`.js-quantity-label-${productId}`)
        quantityLabel.innerHTML = newQuantity
        updateCartSummary()
        renderPaymentSummary()
      })
    })

    function updateCartSummary() {
      let totalItems = 0;

      cart.forEach((cartItem) => {
        totalItems += cartItem.quantity;
      });

      document.querySelector('.js-return-to-home-link').innerHTML = totalItems + ' Items';
    }
  })

  document.querySelectorAll('.js-delivery-option').forEach(function (element) {
    element.addEventListener('click', function () {
      const { productId, deliveryOptionId } = element.dataset
      updateDeliveryOption(productId, deliveryOptionId)
      renderOrderSummary()
      renderPaymentSummary()
    })
  })
}
