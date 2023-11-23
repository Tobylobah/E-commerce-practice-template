// Initialize an empty shopping cart array.
export const cart = [];


export function addToCart(productId) {
    let matchingItem;
    cart.forEach((cartItem) => {
      if (productId === cartItem.productId) {// this is making use of the products id , to check if they products/item are already in the cart or not 
        matchingItem = cartItem;
      }
    });
        //this checks for we have two or more kind of the same products , and increases the quantity by 1 as we click the add to cart button.
    if (matchingItem) {
       // increases the quantity by the value we select from  the js-quantity-selector as we click the add to cart button.
      matchingItem.quantity += quantity;
    } 
       //this adds an item or a product to cart
    else {
      cart.push({
        productId: productId,
        quantity:quantity
      });
    }
}