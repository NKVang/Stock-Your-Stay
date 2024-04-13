// IncrementQuantity.js

const { useBase } = require("../assets/hooks/useBase");

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

// function to increment quantity, + button
const incrementQuantity = async (id, q) => {
  // before updating cart, check if on hand stock qty is enough
  // find product in airtable
  const base = await useBase();
  const record = await base("Products").find(id);

  // if no error, compare quantity with stocked quantity
  if (q !== record.fields.stocked && q < record.fields.stocked) {
    // build updated cart with new quantity
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        // increment quantity by 1
        const updatedQuantity = item.quantity + 1;
        // adjust new price per quantity also
        const updatedPrice = (item.price * updatedQuantity).toFixed(2);

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

  // otherwise return old cart
  else return cartItems;
};

module.exports = incrementQuantity;
