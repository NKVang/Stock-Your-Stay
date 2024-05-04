// DecrementQuantity.test.js

const decrementQuantity = require("./DecrementQuantity");

const cart = [
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

test("Decrements quantity by 1, if item quantity in cart is 1, remove item from cart", () => {
  // item qty is more than 1 so decrement normally (qty--)
  const data1 = decrementQuantity(cart[0].id, cart[0].quantity);
  expect(data1).toEqual([
    {
      id: "recGVU0W5WVWcgq7p",
      name: "ZEPHYRHILLS NATURAL SPRING WATER, 12 OZ, 12 COUNT",
      quantity: 30,
      price: 5.72,
      pricePerQuantity: 171.6,
    },
    {
      id: "recl06fr7JtZFxhSa",
      name: "Banana, 1ct",
      quantity: 1,
      price: 8.77,
      pricePerQuantity: 8.77,
    },
  ]);

  // item qty is 1 so cart should return with item removed from cart (banana no longer in cart)
  const data2 = decrementQuantity(cart[1].id, cart[1].quantity);
  expect(data2).toEqual([
    {
      id: "recGVU0W5WVWcgq7p",
      name: "ZEPHYRHILLS NATURAL SPRING WATER, 12 OZ, 12 COUNT",
      quantity: 31,
      price: 5.72,
      pricePerQuantity: 177.32,
    },
  ]);
});
