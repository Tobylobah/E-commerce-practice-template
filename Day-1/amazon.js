// Initialize an empty shopping cart array.
const cart = [];

// Generate HTML code for product cards using JavaScript to avoid manual duplication in the HTML file.

// Create a data structure for the content in the product cards using arrays and objects.
const products = [
    {
      id: "product_1",
      image: "images/products/athletic-cotton-socks-6-pairs.jpg",
      name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
      rating:{//creating an object inside another object. the ratings has two parts:stars and count.
        stars: 4.5,
        count: 87
      },
      priceCents: 1090,
    },
    {
      id: "product_2",
      image: "images/products/intermediate-composite-basketball.jpg",
      name: "Intermediate Size Basketball",
      rating: {
        stars: 4,
        count: 127
      },
      priceCents: 2095,
    },
    {
      id: "product_3",
      image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
      name: "Adults Plain Cotton T-Shirt - 2 Pack",
      rating: {
        stars: 4.5,
        count: 56
      },
      priceCents: 799,
    },
    {
      id: "product_4",
      image: "images/products/black-2-slot-toaster.jpg",
      name: "2 Slot Toaster - Black",
      rating: {
        stars: 5,
        count: 2197
      },
      priceCents: 1899,
    },
    {
      id: "product_5",
      image: "images/products/6-piece-white-dinner-plate-set.jpg",
      name: "6 Piece White Dinner Plate Set",
      rating: {
        stars: 4,
        count: 37
      },
      priceCents: 2067,
    },
    {
      id: "product_6",
      image: "images/products/6-piece-non-stick-baking-set.webp",
      name: "6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set",
      rating: {
        stars: 4.5,
        count: 175
      },
      priceCents: 3499,
    },
    {
      id: "product_7",
      image: "images/products/plain-hooded-fleece-sweatshirt-yellow.jpg",
      name: "Plain Hooded Fleece Sweatshirt",
      rating: {
        stars: 4.5,
        count: 317
      },
      priceCents: 2400,
    },
    {
      id: "product_8",
      image: "images/products/luxury-tower-set-6-piece.jpg",
      name: "Luxury Towel Set - Graphite Gray",
      rating: {
        stars: 4.5,
        count: 144
      },
      priceCents: 3599,
    },
    {
      id: "products_9",
      image: "images/products/liquid-laundry-detergent-plain.jpg",
      name: "Liquid Laundry Detergent, 110 Loads, 82.5 Fl Oz",
      rating: {
        stars: 4.5,
        count: 305
      },
      priceCents: 2899,
    },
    {
      id: "products_10",
      image: "images/products/knit-athletic-sneakers-gray.jpg",
      name: "Waterproof Knit Athletic Sneakers - Gray",
      rating: {
        stars: 4,
        count: 89
      },
      priceCents: 3390,
    },
    {
      id: "products_11",
      image: "images/products/women-chiffon-beachwear-coverup-black.jpg",
      name: "Women's Chiffon Beachwear Cover Up - Black",
      rating: {
        stars: 4.5,
        count: 235
      },
      priceCents: 2070,
    },
    {
      id: "products_12",
      image: "images/products/round-sunglasses-black.jpg",
      name: "Round Sunglasses",
      rating: {
        stars: 4.5,
        count: 30
      },
      priceCents: 1560,
    },
    {
      id: "products_13",
      image: "images/products/women-beach-sandals.jpg",
      name: "Women's Two Strap Buckle Sandals - Tan",
      rating: {
        stars: 4.5,
        count: 562
      },
      priceCents: 2499,
    },
    {
      id: "products_14",
      image: "images/products/blackout-curtain-set-beige.webp",
      name: "Blackout Curtains Set 4-Pack - Beige",
      rating: {
        stars: 4.5,
        count: 232
      },
      priceCents: 4599,
    },
    {
      id: "products_15",
      image: "images/products/men-slim-fit-summer-shorts-gray.jpg",
      name: "Men's Slim-Fit Summer Shorts",
      rating: {
        stars: 4,
        count: 160
      },
      priceCents: 1699,
    },
    {
      id: "products_16",
      image: "images/products/electric-glass-and-steel-hot-water-kettle.webp",
      name: "Electric Glass and Steel Hot Tea Water Kettle - 1.7-Liter",
      rating: {
        stars: 5,
        count: 846
      },
      priceCents: 3074,
    },
    {
      id: "products_17",
      image: "images/products/facial-tissue-2-ply-18-boxes.jpg",
      name: "Ultra Soft Tissue 2-Ply - 18 Box",
      rating: {
        stars: 4,
        count: 99
      },
      priceCents: 2374,
    },
    {
      id: "products_18",
      image: "images/products/straw-sunhat.webp",
      name: "Straw Lifeguard Sun Hat",
      rating: {
        stars: 4,
        count: 215
      },
      priceCents: 2200,
    },
    {
      id: "products_19",
      image: "images/products/sky-flower-stud-earrings.webp",
      name: "Sterling Silver Sky Flower Stud Earrings",
      rating: {
        stars: 4.5,
        count: 52
      },
      priceCents: 1799,
    },
    {
      id: "products_20",
      image: "images/products/women-stretch-popover-hoodie-black.jpg",
      name: "Women's Stretch Popover Hoodie",
      rating: {
        stars: 4.5,
        count: 2465
      },
      priceCents: 1374,
    },
    {
      id: "products_21",
      image: "images/products/bathroom-rug.jpg",
      name: "Bathroom Bath Rug Mat 20 x 31 Inch - Grey",
      rating: {
        stars: 4.5,
        count: 119
      },
      priceCents: 1250,
    },
    {
      id: "products_22",
      image: "images/products/women-knit-ballet-flat-black.jpg",
      name: "Women's Knit Ballet Flat",
      rating: {
        stars: 4,
        count: 326
      },
      priceCents: 2640,
    },
    {
      id: "products_23",
      image: "images/products/men-golf-polo-t-shirt-blue.jpg",
      name: "Men's Regular-Fit Quick-Dry Golf Polo Shirt",
      rating: {
        stars: 4.5,
        count: 2556
      },
      priceCents: 1599,
    },
    {
      id: "products_24",
      image: "images/products/trash-can-with-foot-pedal-50-liter.jpg",
      name: "Trash Can with Foot Pedal - Brushed Stainless Steel",
      rating: {
        stars: 4.5,
        count: 2286
      },
      priceCents: 8300,
    },
    {
      id: "products_25",
      image: "images/products/duvet-cover-set-blue-twin.jpg",
      name: "Duvet Cover Set with Zipper Closure",
      rating: {
        stars: 4,
        count: 456
      },
      priceCents: 2399,
    },
    {
      id: "products_26",
      image: "images/products/women-chunky-beanie-gray.webp",
      name: "Women's Chunky Cable Beanie - Gray",
      rating: {
        stars: 5,
        count: 83
      },
      priceCents: 1250,
    },
    {
      id: "products_27",
      image: "images/products/men-chino-pants-beige.jpg",
      name: "Men's Classic-fit Pleated Chino Pants",
      rating: {
        stars: 4.5,
        count: 9017
      },
      priceCents: 2290,
    },
    {
      id: "products_28",
      image: "images/products/men-athletic-shoes-green.jpg",
      name: "Men's Athletic Sneaker",
      rating: {
        stars: 4,
        count: 229
      },
      priceCents: 3890,
    },
    {
      id: "products_29",
      image: "images/products/men-navigator-sunglasses-brown.jpg",
      name: "Men's Navigator Sunglasses Pilot",
      rating: {
        stars: 3.5,
        count: 42
      },
      priceCents: 1690,
    },
    {
      id: "products_30",
      image: "images/products/non-stick-cooking-set-15-pieces.webp",
      name: "Non-Stick Cookware Set, Pots, Pans and Utensils - 15 Pieces",
      rating: {
        stars: 4.5,
        count: 511
      },
      priceCents: 6797,
    },
    {
      id: "products_31",
      image: "images/products/vanity-mirror-silver.jpg",
      name: "Vanity Mirror with Heavy Base - Chrome",
      rating: {
        stars: 4.5,
        count: 130
      },
      priceCents: 1649,
    },
    {
      id: "products_32",
      image: "images/products/women-french-terry-fleece-jogger-camo.jpg",
      name: "Women's Fleece Jogger Sweatpant",
      rating: {
        stars: 4.5,
        count: 248
      },
      priceCents: 2400,
    },
    {
      id: "products_33",
      image: "images/products/double-elongated-twist-french-wire-earrings.webp",
      name: "Double Oval Twist French Wire Earrings - Gold",
      rating: {
        stars: 4.5,
        count: 117
      },
      priceCents: 2400,

    },
    {
      id: "products_34",
      image: "images/products/round-airtight-food-storage-containers.jpg",
      name: "Round Airtight Food Storage Containers - 5 Piece",
      rating: {
        stars: 4,
        count: 126
      },
      priceCents: 2899,
    },
    {
      id: "products_35",
      image: "images/products/coffeemaker-with-glass-carafe-black.jpg",
      name: "Coffeemaker with Glass Carafe and Reusable Filter - 25 Oz, Black",
      rating: {
        stars: 4.5,
        count: 1211
      },
      priceCents: 2250,

    },
    {
      id: "products_36",
      image: "images/products/blackout-curtains-black.jpg",
      name: "Blackout Curtains Set 42 x 84-Inch - Black, 2 Panels",
      rating: {
        stars: 4.5,
        count: 363
      },
      priceCents: 3099,
    },
    {
      id: "products_37",
      image: "images/products/cotton-bath-towels-teal.webp",
      name: "100% Cotton Bath Towels - 2 Pack, Light Teal",
      rating: {
        stars: 4.5,
        count: 93
      },
      priceCents: 2110,
    },
    {
      id: "products_38",
      image: "images/products/knit-athletic-sneakers-pink.webp",
      name: "Waterproof Knit Athletic Sneakers - Pink",
      rating: {
        stars: 4,
        count: 89
      },
      priceCents: 3390,

    },
    {
      id: "products_39",
      image: "images/products/countertop-blender-64-oz.jpg",
      name: "Countertop Blender - 64oz, 1400 Watts",
      rating: {
        stars: 4,
        count: 3
      },
      priceCents: 10747,

    },
    {
      id: "products_40",
      image: "images/products/floral-mixing-bowl-set.jpg",
      name: "10-Piece Mixing Bowl Set with Lids - Floral",
      rating: {
        stars: 5,
        count: 679
      },
      priceCents: 3899,
   
    },
    {
    
      id: "products_41",
      name: "2-Ply Kitchen Paper Towels - 30 Pack",
      rating: {
        stars: 4.5,
        count: 1045
      },
      priceCents: 5799,
    },
    {
      id: "products_42",
      image: "images/products/men-cozy-fleece-zip-up-hoodie-red.jpg",
      name: "Men's Full-Zip Hooded Fleece Sweatshirt",
      rating: {
        stars: 4.5,
        count: 3157
      },
      priceCents: 2400,
    }
  ];

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

document.querySelectorAll('.js-add-to-cart')
  .forEach((button) => {
    // Add click event listeners to each 'Add to Cart' button.
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
      
      if (quantitySelector) {
        const quantity = Number(quantitySelector.value);//converts the numbers in form of strings selected to numbers

      //the code below handles the cart updates
      let matchingItem;
      cart.forEach((item) => {
        if (productId === item.productId) {// this is making use of the products id , to check if they products/item are already in the cart or not 
          matchingItem = item;
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

      let cartQuantity = 0;
      //updates cart quantity
      cart.forEach((item) => {
        cartQuantity += item.quantity;
      });

      document.querySelector('.js-cart-quantity')
        .innerHTML = cartQuantity;//changes the innerHTML of the class name "js-cart-quantity to from 0 to the updated cart quantity"
    }
  });
  });

