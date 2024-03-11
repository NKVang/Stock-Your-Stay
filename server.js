// server for Stripe API

require("dotenv").config();

const express = require("express");
const app = express();
// const cors = require("cors");

app.use(express.static("public"));
app.use(express.json());
// allows app to talk to server on port 5000
// added proxy to package.json, so no longer needed
// app.use(cors());

const stripe = require("stripe")(process.env.STRIPE_API_KEY);

// routes to a Stripe hosted url, can change domain if needed via Stripe dashboard
app.post("/checkout", async (req, res) => {
  try {
    const server_url = req.body.SERVER_URL;
    const session = await stripe.checkout.sessions.create({
      line_items: req.body.items.map((item) => {
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.name,
              images: [item.image],
            },
            // price is required to be in cents
            unit_amount: Math.round(item.price * 100),
          },
          adjustable_quantity: {
            enabled: true,
            minimum: 0,
            maximum: 100,
          },
          quantity: item.quantity,
        };
      }),
      mode: "payment",
      billing_address_collection: "required",
      allow_promotion_codes: "true",
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
      custom_text: {
        after_submit: {
          message:
            "**Note: Only orders placed within 48 hours of check-in will be fufilled.**",
        },
      },
      // success_url redirects to dummy success page
      success_url: server_url + "/success",
      // cancel_url goes back to shopping cart page
      cancel_url: server_url + "/shopping-cart",
    });
    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
