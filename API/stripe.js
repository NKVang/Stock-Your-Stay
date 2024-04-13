// server for Stripe API

require("dotenv").config({ path: "../.env" });

const express = require("express");
const app = express();
const pool = require("./dbConnection.js");
const stripe = require("stripe")(process.env.STRIPE_API_KEY);
const { useBase } = require("../src/assets/hooks/useBase.js");

const base = useBase();
let order = initializeOrder();
let cart = initializeCart();

// need this or else webhook won't execute due to payload not being sent as a string or buffer
app.use(
  "/checkout-session-completed",
  express.raw({ type: "application/json" })
);

app.use(express.static("public"));
app.use(express.json());

// initialize order object
function initializeOrder() {
  return {
    id: null,
    customer: {
      name: null,
      email: null,
      address: {
        city: null,
        country: null,
        line1: null,
        line2: null,
        postalCode: null,
        state: null,
      },
    },
    items: null,
    total: null,
    date: null,
    specialInstructions: null,
    cardBrand: null,
    cardLast4: null,
  };
}

function initializeCart() {
  return [
    {
      id: null,
      name: null,
      image: null,
      quantity: null,
      price: null,
      pricePerQuantity: null,
    },
  ];
}

// stripe webhook
app.post("/checkout-session-completed", express.json(), async (req, res) => {
  const sig = req.headers["stripe-signature"];

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.log(`${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message} `);
  }

  switch (event.type) {
    // may need later due to customer account coming from stripe
    // case "charge.succeeded":
    //   processChargeSucceeded(order, event);
    //   break;
    case "checkout.session.completed":
      processCheckoutSessionCompleted(order, event);
      break;
  }

  res.send();
});

// may need later due to customer account coming from stripe
// async function processChargeSucceeded(order, event) {
//   const charge = event.data.object;
//   const cardBrand = charge.payment_method_details.card.brand;
//   const last4 = charge.payment_method_details.card.last4;

//   order.cardBrand = cardBrand;
//   order.cardLast4 = last4;
// }

// build order with order details, items, card info and send to database
async function processCheckoutSessionCompleted(order, event) {
  const orderDetails = event.data.object;

  // only store last 8 of order id in uppercase
  const orderId = orderDetails.id
    .substring(orderDetails.id.length - 8)
    .toUpperCase();

  // get current date
  const currentDateString = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  // get the text value of the custom field object (special instructions)
  const instructions = orderDetails.custom_fields.map(
    (field) => field.text.value
  );

  // create customer
  const customer = await stripe.customers.create({
    name: orderDetails.customer_details.name,
    email: orderDetails.customer_details.email,
    address: {
      city: orderDetails.customer_details.address.city,
      country: orderDetails.customer_details.address.country,
      line1: orderDetails.customer_details.address.line1,
      line2: orderDetails.customer_details.address.line2,
      postal_code: orderDetails.customer_details.address.postal_code,
      state: orderDetails.customer_details.address.state,
    },
  });

  // get payment intent to get payment method for card type and last four
  // may possibly not work after migrating customer acc from minthouse
  const paymentIntent = await stripe.paymentIntents.retrieve(
    orderDetails.payment_intent
  );
  const paymentMethod = await stripe.paymentMethods.retrieve(
    paymentIntent.payment_method
  );

  // build order object with customer and cart info
  order.id = orderId;
  order.customer.name = customer.name;
  order.customer.email = customer.email;
  order.customer.address.city = customer.address.city;
  order.customer.address.country = customer.address.country;
  order.customer.address.line1 = customer.address.line1;
  order.customer.address.line2 = customer.address.line2;
  order.customer.address.postalCode = customer.address.postal_code;
  order.customer.address.state = customer.address.state;
  order.items = cart;
  order.total = (orderDetails.amount_total / 100).toFixed(2);
  order.date = currentDateString;
  order.specialInstructions = instructions;
  order.cardBrand = paymentMethod.card.brand;
  order.cardLast4 = paymentMethod.card.last4;

  // send order to database
  sendOrderToDatabase(order, cart);
}

// routes to a Stripe hosted url, can change domain if needed via Stripe dashboard
app.post("/create-checkout-session", async (req, res) => {
  try {
    cart = req.body.items;

    const server_url = req.body.SERVER_URL;

    // build line items asynchronously (mainly to grab price from airtable)
    const promise = req.body.items.map(
      (item) =>
        new Promise((resolve, reject) => {
          base("Products").find(item.id, function (err, record) {
            if (err) {
              console.error(err);
              reject(err);
              return;
            }

            item.price = record.fields.price;

            resolve({
              price_data: {
                currency: "usd",
                product_data: {
                  name: item.name,
                  images: [item.image],
                },
                // price is required to be in cents
                unit_amount: Math.round(item.price * 100),
              },
              quantity: item.quantity,
            });
          });
        })
    );

    const lineItems = await Promise.all(promise);

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      billing_address_collection: "required",
      // creates a customer, possibly delete after customer migration from minthouse
      customer_creation: "always",
      // creates invoice, doesn't send to customer due payments being in test mode
      invoice_creation: {
        enabled: true,
      },
      // stock your stay allows promo codes so added this
      allow_promotion_codes: "true",
      // a field for customers to enter in their special instructions for orders (optional)
      custom_fields: [
        {
          key: "special_instructions",
          label: {
            type: "custom",
            custom: "Special Instructions",
          },
          type: "text",
          optional: "true",
        },
      ],
      // custom note for customer
      custom_text: {
        after_submit: {
          message:
            "**Note: Only orders placed within 48 hours of check-in will be fufilled.**",
        },
      },
      // success_url redirects a receipt/invoice form like page
      success_url: `${server_url}/checkout-success?orderId={CHECKOUT_SESSION_ID}`,
      // cancel_url goes back to shopping cart page
      cancel_url: server_url + "/shopping-cart",
    });
    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// to send order to database
// NEED TO FIX AFTER UPDATING CART
async function sendOrderToDatabase(order, items) {
  // get current date
  const currentDate = new Date().toJSON().slice(0, 10);

  // send to db
  try {
    // get db connection
    const conn = await pool.getConnection();

    // insert data into orderdetails table
    await Promise.all(
      order.items.map((item) =>
        conn.query(
          "INSERT INTO stock.orderdetails (OrderNum, ItemID, ItemName, Quantity) VALUES (?,?,?,?)",
          [order.id, item.id, item.name, item.quantity]
        )
      )
    );

    // insert data into orders table
    await conn.query(
      "INSERT INTO stock.orders (OrderNum, AccountID, ConfirmationNum, Date, TotalPrice, Status, Instructions) VALUES (?,?,?,?,?,?,?)",
      [
        order.id,
        12345, // dummy value
        67890, // dummy value
        currentDate,
        order.total,
        "In Progress", // how would we change this once complete?
        order.specialInstructions,
      ]
    );

    console.log("Successfully transmitted to DB");

    // release db connection
    conn.release();
  } catch (error) {
    console.error("Error:", error);
  }
}

// send order object to front end for rendering
app.get("/order", (req, res) => {
  res.json(order);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
