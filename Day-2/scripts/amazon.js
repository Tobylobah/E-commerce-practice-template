import {cart, addToCart} from '../data/cart.js';
import {products} from '../data/products.js';

  //Initialize an empty string to store the generated HTML.
  let productsHTML = '';

  // Loop through the array to generate HTML for each product card.
  //how does the forEach work? , it is going to take each object in the products and save it to the parameter called  product.
products.forEach((product) => {

  //productsHTML ... (HTML template string)
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
          src="images/ratings/rating-${product.rating.stars * 10}.png">
        <div class="product-rating-count link-primary">
          ${product.rating.count}
        </div>
      </div>

      <div class="product-price">
        $${(product.priceCents / 100).toFixed(2)}
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

      <div class="added-to-cart">
        <img src="images/icons/checkmark.png">
        Added
      </div>

      <button class="add-to-cart-button button-primary js-add-to-cart"
      data-product-id="${product.id}">
        Add to Cart
      </button>
    </div>
  `;
});


// Set the HTML content of the element with the class 'js-products-grid'.
document.querySelector('.js-products-grid').innerHTML = productsHTML;


    function updateCartQuantity(){
        
      let cartQuantity = 0;
      //updates cart quantity
      cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
      });

      document.querySelector('.js-cart-quantity')
        .innerHTML = cartQuantity;//changes the innerHTML of the class name "js-cart-quantity to from 0 to the updated cart quantity"

    }
    document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {
      // Add click event listeners to each 'Add to Cart' button.
      button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
        
        if (quantitySelector) {
          const quantity = Number(quantitySelector.value);
  
          addToCart(productId, quantity);  // Pass quantity to addToCart function
          updateCartQuantity();
        }
      });
    });
  

