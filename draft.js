// Generate HTML code for product cards using JavaScript to avoid manual duplication in the HTML file.

// Create a data structure for the content in the product cards using arrays and objects.
const productsCard = [{
    id:"product_1",
    image: 'images/products/atheltic-cotton-socks-6-pairs.jpg',
    name:'Black and Gray Athletic Cotton Socks - 6 Pairs',
    rating:{//creating an object inside another object. the ratings has two parts:stars and count.
        stars:4.5,
        count:87
    },
    priceCents:1090
},
{
    id:"product_2",
    image: 'images/products/intermediate-composite-basketball.jpg',
    name:'Intermediate-Size Basketball',
    rating:{//creating an object inside another object. the ratings has two parts:stars and count.
        stars:4,
        count:127
    },
    priceCents:2095
},
{
    id:"product_3",
    image: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
    name:'Adults Plain Cotton T-Shirt - 2 Pack',
    rating:{//creating an object inside another object. the ratings has two parts:stars and count.
        stars:4.5,
        count:56
    },
    priceCents:799
}];//we are going to create a data structure of the content in the product name using arrays and objects.
let productsCardHTML = '';// Initialize an empty string to store the generated HTML.
productsCard.forEach((productsCard) => {
//how does the forEach work? , it is going to take each object in the productsCard and saves it to the parameter called  product then runs the function.
// productsCardHTML variable is reassigned to be the content in the productsCard in the html which has been replaced by the javascript object
    productsCardHTML += `
   <div class="product-container">  
   <div class="product-image-container">
     <img class="product-image"
       src="${productsCard.image}">
   </div>

   <div class="product-name limit-text-to-2-lines">
     ${productsCard.name}
   </div>

   <div class="product-rating-container">
     <img class="product-rating-stars"
       src="images/ratings/rating-${product.rating.stars * 10}.png">
     <div class="product-rating-count link-primary">
       ${productsCard.rating.count}
     </div>
   </div>

   <div class="product-price">
     $${(productsCard.priceCents / 100).toFixed(2)}
   </div>

   <div class="product-quantity-container">
   <select>
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
 data-product-id="${productsCard.id}">
   Add to Cart
 </button>
</div>
`;
});
//in the above , data-product-id , is a data attribute in html , and a syntax rule for html data attribute is that , the attribute name must start with "data" amd must bem written in kebab-case.
// this is taking the content in the html with class name of .js-products-grid(that is why we used innerHTML) to be equal to the variable productsCardHTML
document.querySelector('.js-products-grid').innerHTML  = productsCardHTML;
// Set the HTML content of the element with the class 'js-products-grid'.

// Initialize an empty shopping cart array.
const cart = [];
document.querySelectorAll('.js-add-to-cart').forEach(() =>{
  
// Add click event listeners to each 'Add to Cart' button.
  button.addEventListener('click', () =>{
    const productsCardId = button.dataset.productsCardId;//this "dataset" is targeting all the data attribute in the add to cart button.

    //the code below handles the cart updates
    let matchingItem;

      cart.forEach((item) => {
        if (productsCardId === item.productsCardId) { // this is making use of the products id , to check if they are in the cart or not 
          matchingItem = item;
        }
      });
      //this checks for we have two or more kind of the same products , and increases the quantity by 1 as we click the add to cart button.
      if (matchingItem) {
        matchingItem.quantity += 1;
      }
      //this adds an item or a product to cart
      else {
        cart.push({
          productsCardId: productsCardId,
          quantity: 1
        });
      }
    
      let cartQuantity = 0;
      //updates cart quantity
      cart.forEach((item) => {
        cartQuantity += item.quantity;
      });

      document.querySelector('.js-cart-quantity')
        .innerHTML = cartQuantity;//changes the innerHTML of the class name "js-cart-quantity to from 0 to the updated cart quantity"
  });
 
});
   console.log(cart);

   

