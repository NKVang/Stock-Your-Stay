// HandleManualQuantity.js

const { useBase } = require("../assets/hooks/useBase");

// example cart
const cartItems = [
  {
    id: "recGVU0W5WVWcgq7p",
    name: "ZEPHYRHILLS NATURAL SPRING WATER, 12 OZ, 12 COUNT",
    quantity: 31,
    price: 5.72,
    pricePerQuantity: 177.32,
  },
  {
    id: "recl06fr7JtZFxhSa",
    name: "Banana, 1ct",
    quantity: 1,
    price: 8.77,
    pricePerQuantity: 8.77,
  },
];

// function to change quantity manually, going into input box and typing a quantity
const handleManualQuantity = async (id, q, event) => {
  // get the value inside input
  const newQuantity = event.target.value;

  // check the new quantity against the airtable records
  const base = await useBase();
  const record = await base("Products").find(id);

  // if item found in airtable, compare quantity with stocked quantity
  if (newQuantity > 0 && newQuantity <= record.fields.stocked) {
    // build updated cart
    const updatedCart = cartItems.map((item) => {
      // item found
      if (item.id === id) {
        // set updated quantity to new quantity if it is a number,
        // otherwise set it to original quantity (the value that was passed)
        const updatedQuantity = !isNaN(newQuantity) ? parseInt(newQuantity) : q;

        // update price per quantity
        const updatedPrice = (item.price * updatedQuantity).toFixed(2);

        return {
          ...item,
          quantity: updatedQuantity,
          pricePerQuantity: parseFloat(updatedPrice),
        };
      }
      return item;
    });

    // update cart to new cart
    return updatedCart;
  }
  // if new quantity is a number and greater than the stocked quantity don't update cart
  else if (newQuantity > 0 && newQuantity > record.fields.stocked)
    return cartItems;
  // if new quantity is a string, show toast for invalid quantity
  // this is to handle letters in the quantity box
  // if new quantity is 0 or an empty string (clearing the quantity with backspace)
  // remove the item from the cart
  else if (newQuantity === 0 || newQuantity === "") {
    const updatedCart = cartItems.filter((item) => item.id !== id);

    return updatedCart;
  } else if (newQuantity !== "") return "Invalid quantity.";
};

module.exports = handleManualQuantity;
