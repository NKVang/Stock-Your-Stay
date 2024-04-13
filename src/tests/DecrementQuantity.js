// DecrementQuantity.js

// example cart
const cartItems = [
  {
    id: "recykszNBQ2bItdTJ",
    name: "ZEPHYRHILLS NATURAL SPRING WATER, 12 OZ, 12 COUNT",
    quantity: 31,
    price: 5.72,
    pricePerQuantity: 177.32,
  },
  {
    id: "recdpEOiDDAebK4Eu",
    name: "Banana, 1ct",
    quantity: 1,
    price: 8.77,
    pricePerQuantity: 8.77,
  },
];

// function to decrement quantity, - button
const decrementQuantity = (id, q) => {
  // if quantity is 1, remove item from cart
  if (q === 1) {
    const updatedCart = cartItems.filter((item) => item.id !== id);

    // return updated cart
    return updatedCart;
  }

  // if quantity is other value than 1, decrement normally and update cart
  else {
    // build new cart
    const updatedCart = cartItems.map((item) => {
      // decrement quantity by 1
      const updatedQuantity = item.quantity - 1;
      // adjust new price per quantity also
      const updatedPrice = (item.price * updatedQuantity).toFixed(2);

      if (item.id === id) {
        return {
          ...item,
          quantity: updatedQuantity,
          pricePerQuantity: parseFloat(updatedPrice),
        };
      }
      return item;
    });

    // return updated cart
    return updatedCart;
  }
};

module.exports = decrementQuantity;
