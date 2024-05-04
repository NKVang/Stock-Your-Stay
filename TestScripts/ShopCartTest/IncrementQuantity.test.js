// IncrementQuantity.test.js

const incrementQuantity = require("./IncrementQuantity");

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

test("Increments quantity if stock in base is enough, otherwise don't increment", async () => {
  // this item is already at max qty, should return same cart (no increment to qty)
  const data1 = await incrementQuantity(cart[0].id, cart[0].quantity);
  expect(data1).toEqual(cart);

  // this item has not reached max qty, should return same cart with +1 qty to banana item
  const data2 = await incrementQuantity(cart[1].id, cart[1].quantity);
  expect(data2).toEqual([
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
      quantity: 2,
      price: 8.77,
      pricePerQuantity: 17.54,
    },
  ]);
});
