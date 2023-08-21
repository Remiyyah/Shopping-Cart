
const products = [                   //Product list that contains 3 objects with various attributes.
  {
    Name: 'Cherry',
    price: 4.99,
    quantity: 0,
    productId: 1023,
    image: "../images/cherry.jpg"
  },


  {
    Name: 'Orange',
    price: 3.99,
    quantity: 0,
    productId: 756,
    image: "../images/orange.jpg"
  },


  {
    Name: 'Strawberry',
    price: 2.50,
    quantity: 0,
    productId: 389,
    image: "../images/strawberry.jpg"
  }
];


const cart = []; // Empty array initalized to be used as a shopping cart

/* Helper function that takes two parameters and finds matching product Id within the array 
   used in argument. The products array is iterated through using a for loop. 
*/
function findProductById(products, productId) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].productId === productId) {
      return products[i];
    }
  }
  return null; // Null is returned if productId is not found
}


/* AddProductToCart function uses helper function to find ID.
   If ID matches, then increase quantity.
   If not in cart, push to cart
*/
function addProductToCart(productId) {
  let product = findProductById(products, productId);

  if (product) {
    product.quantity++;
    const cartProduct = findProductById(cart, productId);

    if (!cartProduct) {
      cart.push(product);
    }
  }
};

  

//increaseQuantity function increases product quantity if productId matches
function increaseQuantity(productId) {
      const product = findProductById(products, productId);
      if (product) {
        product.quantity++;
      }
    };


/* decreaseQuantity function uses helper function to find ID.
   If ID matches, then decrease quantity.
   If quantity equals 0, remove from cart using removeProductFromCart function
*/
function decreaseQuantity(productId) {
      const product = findProductById(cart, productId);
      if (product) {
        product.quantity--;
        if (product.quantity === 0) {
          removeProductFromCart(productId);
        }
      }
    };

/* removeProducFromCart iterates through cart to find product
   If ID matches, then update quantity to 0.
   Use splice to delete item from cart
*/

function removeProductFromCart(productId) {
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].productId === productId) {
          cart[i].quantity = 0; 
          cart.splice(i, 1); 
          break; // Exit the loop once the product is found and removed
        }
      }
    };

/* cartTotal function iterates through cart using for loop
   Total variable is used to store total cost of items in cart
   Multiply price and quantity of each item
*/
function cartTotal() {
      let total = 0;
      for (let i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity;
      }
      return total;
    };
    
  
function emptyCart() {
      cart = [];   // Create empty cart by creating an empty list 
    }
    
let totalPaid = 0; // Initalize variable to store total amount paid
    
/* pay function takes one parameter
   Parameter gets added to totalPaid variable
   Difference is calculated using subtraction
   If difference is greater than 0, set totalPaid to 0
   Return difference 
*/
function pay(amount) {
      totalPaid += amount;
      const cartTotalCost = cartTotal();
      const diff = totalPaid - cartTotalCost;
      if (diff >= 0) {
        totalPaid = 0;
      }
      return diff;
    }



module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart,
  // currency
}
