import express from "express";
import dotenv from "dotenv";
import Stripe from "stripe";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config({ path: ".env", debug: true });
console.log("SECRET EXISTS:", !!process.env.STRIPE_SECRET_KEY);

const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = process.env.BASE_URL || "http://localhost:3000";
const PORT = process.env.PORT || 3000;

const PRODUCTS = {
  "luna-lounge-sofa-150": {
    name: "ルーナ ラウンジソファ 150 ホワイト",
    price: 196900,
    image: `${BASE_URL}/images/placeholders/luna-lounge-sofa-150-1.jpg`
  },
  "bubble-sofa-270": {
    name: "バブルソファー 270 ベージュ",
    price: 262900,
    image: `${BASE_URL}/images/placeholders/bubble-sofa-270-1.jpg`
  },
  "luna-curve-sofa-260": {
    name: "ルーナ カーブソファ 260 ベージュ",
    price: 218900,
    image: `${BASE_URL}/images/placeholders/luna-curve-sofa-260-1.jpg`
  },
  "ceres-quilted-bed-frame": {
    name: "セレス キルティングベッドフレーム",
    price: 196900,
    image: `${BASE_URL}/images/placeholders/ceres-quilted-bed-frame-1.jpg`
  },
  "nova-bed-frame": {
    name: "ノヴァ ベッドフレーム",
    price: 185900,
    image: `${BASE_URL}/images/placeholders/nova-bed-frame-1.jpg`
  },
  "olvia-bed-frame": {
    name: "オルビア ベッドフレーム",
    price: 185900,
    image: `${BASE_URL}/images/placeholders/olvia-bed-frame-1.jpg`
  },
  "louve-dining-table-180": {
    name: "ルーヴェ ダイニングテーブル 180",
    price: 185900,
    image: `${BASE_URL}/images/placeholders/louve-dining-table-180-1.jpg`
  },
  "luna-stone-dining-set-160": {
    name: "ルーナ ストーンダイニングセット 160",
    price: 207900,
    image: `${BASE_URL}/images/placeholders/luna-stone-dining-set-160-1.jpg`
  },
  "lagos-dining-set-160": {
    name: "ラゴス ダイニングセット 160",
    price: 361900,
    image: `${BASE_URL}/images/placeholders/lagos-dining-set-160-1.jpg`
  }
};

// public フォルダ配信
app.use(express.static(path.join(__dirname, "public")));

// Webhook
app.post("/webhook", express.raw({ type: "application/json" }), (req, res) => {
  const sig = req.headers["stripe-signature"];

  if (!process.env.STRIPE_WEBHOOK_SECRET) {
    console.warn("STRIPE_WEBHOOK_SECRET is not set");
    return res.json({ received: true, skipped: true });
  }

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    console.log("支払い完了:", session.id);
    console.log("購入者メール:", session.customer_details?.email || "no email");
  }

  res.json({ received: true });
});

app.use(express.json());

// Checkout Session 作成
app.post("/create-checkout-session", async (req, res) => {
  try {
    const {
      productId,
      quantity = 1,
      selectedColor = "",
      selectedSize = ""
    } = req.body;

    const product = PRODUCTS[productId];

    if (!product) {
      return res.status(400).json({ error: "Invalid productId" });
    }

    const safeQuantity = Math.max(1, Number(quantity) || 1);

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      locale: "ja",

      line_items: [
        {
          quantity: safeQuantity,
          price_data: {
            currency: "jpy",
            product_data: {
              name: product.name,
              images: [product.image],
              metadata: {
                productId,
                selectedColor,
                selectedSize
              }
            },
            unit_amount: product.price
          }
        }
      ],

      billing_address_collection: "required",

      shipping_address_collection: {
        allowed_countries: ["JP"]
      },

      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: 0,
              currency: "jpy"
            },
            display_name: "送料無料",
            delivery_estimate: {
              minimum: {
                unit: "business_day",
                value: 5
              },
              maximum: {
                unit: "business_day",
                value: 25
              }
            }
          }
        }
      ],

      phone_number_collection: {
        enabled: true
      },

      success_url: `${BASE_URL}/success.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${BASE_URL}/cancel.html`,

      metadata: {
        productId,
        selectedColor,
        selectedSize
      }
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Failed to create checkout session:", error);
    res.status(500).json({ error: "Failed to create checkout session" });
  }
});

// success.html 用
app.get("/checkout-session", async (req, res) => {
  try {
    const { session_id } = req.query;

    if (!session_id) {
      return res.status(400).json({ error: "session_id is required" });
    }

    const session = await stripe.checkout.sessions.retrieve(session_id, {
      expand: ["line_items", "customer_details"]
    });

    res.json(session);
  } catch (error) {
    console.error("Failed to retrieve session:", error);
    res.status(500).json({ error: "Failed to retrieve session" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on ${BASE_URL}`);
});