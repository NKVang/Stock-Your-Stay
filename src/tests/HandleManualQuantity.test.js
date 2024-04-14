// HandleManualQuantity.test.js

const handleManualQuantity = require("./HandleManualQuantity");

const cart = [
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

test("Input value is checked against stock qty, if valid, update", async () => {
  /* when is inputted, cart[0] quantity should be updated to 5 and price per quantity should be updated accordingly */

  // event of 5 being inputted
  const event1 = {
    target: {
      value: 5,
    },
  };

  // calling function with first item, qty of 31, and event of 5
  const data1 = await handleManualQuantity(
    cart[0].id,
    cart[0].quantity,
    event1
  );

  // should receive this as the newly updated cart
  expect(data1).toEqual([
    {
      id: "recykszNBQ2bItdTJ",
      name: "ZEPHYRHILLS NATURAL SPRING WATER, 12 OZ, 12 COUNT",
      quantity: 5,
      price: 5.72,
      pricePerQuantity: 28.6,
    },
    {
      id: "recdpEOiDDAebK4Eu",
      name: "Banana, 1ct",
      quantity: 1,
      price: 8.77,
      pricePerQuantity: 8.77,
    },
  ]);

  /* when is inputted, cart[0] quantity should be the same since 78 is more than the available stock */

  // event of 78 being inputted
  const event2 = {
    target: {
      value: 78,
    },
  };

  // calling function with first item, qty of 31, and event of 78
  const data2 = await handleManualQuantity(
    cart[0].id,
    cart[0].quantity,
    event2
  );

  // should receive cart that is same as original cart
  expect(data2).toEqual(cart);

  /* when is inputted, cart[0] quantity should be the same since "a" is NaN */

  // event of "a" being inputted
  const event3 = {
    target: {
      value: "a",
    },
  };

  // calling function with first item, qty of 31, and event of "a"
  const data3 = await handleManualQuantity(
    cart[0].id,
    cart[0].quantity,
    event3
  );

  // should recieve message saying "Invalid quantity", cart remains unchanged
  expect(data3).toBe("Invalid quantity.");

  /* when is inputted, cart[1] should be removed from cart */

  // event of 0 being inputted
  const event4 = {
    target: {
      value: 0,
    },
  };

  // calling function with second item, qty of 1, and event of 0
  const data4 = await handleManualQuantity(
    cart[1].id,
    cart[1].quantity,
    event4
  );

  // should receive this as the newly updated cart
  expect(data4).toEqual([
    {
      id: "recykszNBQ2bItdTJ",
      name: "ZEPHYRHILLS NATURAL SPRING WATER, 12 OZ, 12 COUNT",
      quantity: 31,
      price: 5.72,
      pricePerQuantity: 177.32,
    },
  ]);

  /* when is inputted, cart[0] should be removed from cart */

  // event of "" being inputted (similar to highlighting quantity and pressing backspace)
  const event5 = {
    target: {
      value: "",
    },
  };

  // calling function with first item, qty of 31, and event of ""
  const data5 = await handleManualQuantity(
    cart[0].id,
    cart[0].quantity,
    event5
  );

  // should receive this as the newly updated cart
  expect(data5).toEqual([
    {
      id: "recdpEOiDDAebK4Eu",
      name: "Banana, 1ct",
      quantity: 1,
      price: 8.77,
      pricePerQuantity: 8.77,
    },
  ]);
});
