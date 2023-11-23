
import {cart, addToCart} from '../data/cart.js';
import{products} from '../data/products.js';

let cartSummaryHTML = '';
cart.forEach((cartItem) =>{
    const productId = cartItem.productId;

    let matchingProduct;
    products.forEach((product) =>{
      if(product.id === productId){
        matchingProduct = product;

      }
    });
    cartSummaryHTML += `
    <div class="cart-item-container
    js-cart-item-container-${matchingProduct.id}">
    <div class="delivery-date">
      Delivery date: Tuesday, June 21
    </div>

    <div class="cart-item-details-grid">
      <img class="product-image"
        src="${matchingProduct.image}">

      <div class="cart-item-details">
        <div class="product-name">
          ${matchingProduct.name}
        </div>
        <div class="product-price">
          $${formatCurrency(matchingProduct.priceCents / 100).toFixed(2)}
        </div>
        <div class="product-quantity">
          <span>
            Quantity: <span class="quantity-label">${cartItem.quantity}</span>
          </span>
          <span class="update-quantity-link link-primary">
            Update
          </span>
          <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
            Delete
          </span>
        </div>
      </div>

      
    
    `;


    });