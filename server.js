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

  "natural-wood-bed-frame": {
    name: "ナチュラル ウッドベッドフレーム",
    price: 75900,
    image: `${BASE_URL}/images/placeholders/natural-wood-bed-frame-1.jpg`
  },

  "modern-luxury-bed-frame-160": {
    name: "モダン ラグジュアリーベッドフレーム",
    price: 108900,
    image: `${BASE_URL}/images/placeholders/modern-luxury-bed-frame-160-1.jpg`
  },

  "premium-luxury-bed-frame-140": {
    name: "プレミアム ラグジュアリーベッドフレーム 140",
    price: 174900,
    image: `${BASE_URL}/images/placeholders/premium-luxury-bed-frame-140-1.jpg`
  },

  "premium-luxury-bed-frame-160": {
    name: "プレミアム ラグジュアリーベッドフレーム 160",
    price: 174900,
    image: `${BASE_URL}/images/placeholders/premium-luxury-bed-frame-160-1.jpg`
  },

  "modern-luxury-leather-bed-frame": {
    name: "モダン ラグジュアリーレザーベッドフレーム",
    price: 174900,
    image: `${BASE_URL}/images/placeholders/modern-luxury-leather-bed-frame-1.jpg`
  },

  "natural-storage-bed-frame-140": {
    name: "ナチュラル ウッド収納ベッドフレーム 140",
    price: 104500,
    image: `${BASE_URL}/images/placeholders/natural-storage-bed-frame-140-1.jpg`,
    storagePrices: {
      "シングル": {
        "収納なし": 104500,
        "収納付き": 137500
      },
      "セミダブル": {
        "収納なし": 108900,
        "収納付き": 141900
      },
      "ダブル": {
        "収納なし": 115500,
        "収納付き": 148500
      },
      "クイーン": {
        "収納なし": 119900,
        "収納付き": 152900
      },
      "キング": {
        "収納なし": 130900,
        "収納付き": 163900
      }
    }
  },

  "natural-storage-bed-frame-120": {
    name: "ナチュラル ウッド収納ベッドフレーム 120",
    price: 108900,
    image: `${BASE_URL}/images/placeholders/natural-storage-bed-frame-120-1.jpg`
  },

  "premium-luxury-bed-frame-185": {
    name: "プレミアム ラグジュアリーベッドフレーム 185",
    price: 174900,
    image: `${BASE_URL}/images/placeholders/premium-luxury-bed-frame-185-1.jpg`
  },

  "premium-luxury-bed-frame-140-single": {
    name: "プレミアム ラグジュアリーベッドフレーム 140 シングル商品",
    price: 174900,
    image: `${BASE_URL}/images/placeholders/premium-luxury-bed-frame-140-single-1.jpg`
  },

  "modern-luxury-bed-frame-120": {
    name: "モダン ラグジュアリーベッドフレーム 120",
    price: 174900,
    image: `${BASE_URL}/images/placeholders/modern-luxury-bed-frame-120-1.jpg`
  },

  "louve-dining-table-set-140": {
    name: "ルーヴェ ダイニングテーブルセット",
    price: 218900,
    image: `${BASE_URL}/images/placeholders/louve-dining-table-set-140-1.jpg`,
    chairPrices: {
      "140cm": {
        "有": 306900,
        "無": 218900
      },
      "160cm": {
        "有": 328900,
        "無": 240900
      },
      "180cm": {
        "有": 361900,
        "無": 240900
      }
    }
  },

  "wabisabi-solid-wood-dining-set": {
    name: "ワビサビ 無垢材ダイニングセット",
    price: 207900,
    image: `${BASE_URL}/images/placeholders/wabisabi-solid-wood-dining-set-1.jpg`,
    chairPrices: {
      "140cm": {
        "有": 295900,
        "無": 207900
      },
      "160cm": {
        "有": 317900,
        "無": 229900
      },
      "180cm": {
        "有": 339900,
        "無": 240900
      }
    }
  },

  "hokku-solid-wood-dining-set": {
    name: "ホック ソリッドウッドダイニングセット",
    price: 174900,
    image: `${BASE_URL}/images/placeholders/hokku-solid-wood-dining-set-1.jpg`,
    chairPrices: {
      "140cm": {
        "有": 262900,
        "無": 174900
      },
      "160cm": {
        "有": 284900,
        "無": 196900
      },
      "180cm": {
        "有": 317900,
        "無": 218900
      }
    }
  },

  "luna-round-dining-set": {
    name: "ルナ ラウンドダイニングセット",
    price: 196900,
    image: `${BASE_URL}/images/placeholders/luna-round-dining-set-1.jpg`,
    chairPrices: {
      "120cm": {
        "有（４脚）": 328900,
        "無": 196900
      },
      "150cm": {
        "有（６脚）": 372900,
        "無": 218900
      }
    }
  },

  "premium-luxury-bed-frame-140-fixed": {
    name: "プレミアム ラグジュアリーベッドフレーム 140",
    price: 174900,
    image: `${BASE_URL}/images/placeholders/premium-luxury-bed-frame-140-fixed-1.jpg`
  },

  "louve-dining-table-180": {
    name: "ルーヴェ ダイニングテーブル 180",
    price: 185900,
    image: `${BASE_URL}/images/placeholders/louve-dining-table-180-1.jpg`
  },

  "candy-cloud-sofa-l": {
    name: "キャンディ クラウドソファ L",
    price: 482900,
    image: `${BASE_URL}/images/placeholders/candy-cloud-sofa-l-1.jpg`,
    sizePrices: {
      "310cm": 482900,
      "350cm": 526900,
      "380cm": 548900
    }
  },

  "luxury-wide-sofa-392": {
    name: "ラグジュアリー ワイドソファ 392",
    price: 379000,
    image: `${BASE_URL}/images/placeholders/luxury-wide-sofa-392-1.jpg`
  },

  "luxury-leather-sofa-293": {
    name: "ラグジュアリー レザーソファ 293",
    price: 394900,
    image: `${BASE_URL}/images/placeholders/luxury-leather-sofa-293-1.jpg`
  },

  "victoria-l-sofa-275": {
    name: "ヴィクトリア L字ソファ 275",
    price: 394900,
    image: `${BASE_URL}/images/placeholders/victoria-l-sofa-275-1.jpg`,
    sizePrices: {
      "275cm": 394900,
      "350cm": 438900
    }
  },

  "modern-luxury-l-sofa-246": {
    name: "モダン ラグジュアリー L字ソファ 246",
    price: 372900,
    image: `${BASE_URL}/images/placeholders/modern-luxury-l-sofa-246-1.jpg`,
    sizePrices: {
      "246cm": 372900,
      "276cm": 405900,
      "316cm": 438900,
      "356cm": 482900
    }
  },

  "modern-luxury-l-sofa-250": {
    name: "モダン ラグジュアリー L字ソファ 250",
    price: 372900,
    image: `${BASE_URL}/images/placeholders/modern-luxury-l-sofa-250-1.jpg`,
    sizePrices: {
      "250cm": 372900,
      "280cm": 405900,
      "310cm": 438900
    }
  },

  "luxury-candy-sofa-280": {
    name: "ラグジュアリー キャンディソファ 280",
    price: 389000,
    image: `${BASE_URL}/images/placeholders/luxury-candy-sofa-280-1.jpg`,
    sizePrices: {
      "280cm": 389000,
      "300cm": 409000,
      "320cm": 429000,
      "340cm": 449000
    }
  },

  "luxury-sectional-sofa-310-l": {
    name: "ラグジュアリー モダン L字型セクショナルソファ 310",
    price: 449000,
    image: `${BASE_URL}/images/placeholders/luxury-sectional-sofa-310-l-1.jpg`,
    sizePrices: {
      "310cm": 449000,
      "358cm": 479000
    }
  },

  "silas-round-dining-set": {
    name: "シラス ラウンドダイニングセット",
    price: 141900,
    image: `${BASE_URL}/images/placeholders/silas-round-dining-set-1.jpg`,
    chairPrices: {
      "120cm": {
        "有（４脚）": 218900,
        "無": 141900
      },
      "150cm": {
        "有（６脚）": 262900,
        "無": 163900
      }
    }
  },

  "claz-sintered-stone-dining-set": {
    name: "クラズ シンタードストーンダイニングセット",
    price: 130900,
    image: `${BASE_URL}/images/placeholders/claz-sintered-stone-dining-set-1.jpg`,
    chairPrices: {
      "140cm": {
        "有（４脚）": 218900,
        "無": 130900
      },
      "160cm": {
        "有（４脚）": 229900,
        "無": 141900
      },
      "180cm": {
        "有（６脚）": 262900,
        "無": 163900
      }
    }
  },

  "elegant-round-dining-set": {
    name: "エレガント ラウンドダイニングセット",
    price: 141900,
    image: `${BASE_URL}/images/placeholders/elegant-round-dining-set-1.jpg`,
    chairPrices: {
      "120cm": {
        "有（４脚）": 218900,
        "無": 141900
      },
      "150cm": {
        "有（６脚）": 262900,
        "無": 163900
      }
    }
  },

  "double-v-round-dining-set": {
    name: "ダブルV ラウンドダイニングセット",
    price: 163900,
    image: `${BASE_URL}/images/placeholders/double-v-round-dining-set-1.jpg`,
    chairPrices: {
      "120cm": {
        "有（４脚）": 262900,
        "無": 163900
      },
      "150cm": {
        "有（６脚）": 284900,
        "無": 185900
      }
    }
  },

  "curve-pedestal-round-dining-set": {
    name: "カーブペデスタル ラウンドダイニングセット",
    price: 163900,
    image: `${BASE_URL}/images/placeholders/curve-pedestal-round-dining-set-1.jpg`,
    chairPrices: {
      "120cm": {
        "有（４脚）": 240900,
        "無": 163900
      },
      "150cm": {
        "有（６脚）": 273900,
        "無": 174900
      }
    }
  },

  "pandora-round-dining-set": {
    name: "パンドラ ラウンドダイニングセット",
    price: 141900,
    image: `${BASE_URL}/images/placeholders/pandora-round-dining-set-1.jpg`,
    chairPrices: {
      "120cm": {
        "有（４脚）": 229900,
        "無": 141900
      },
      "150cm": {
        "有（６脚）": 273900,
        "無": 163900
      }
    }
  },

  "luxury-round-dining-set-120": {
    name: "ラグジュアリー ラウンドダイニングセット 120",
    price: 218900,
    image: `${BASE_URL}/images/placeholders/luxury-round-dining-set-120-1.jpg`
  },

  "butterfly-ceramic-dining-set-160": {
    name: "バタフライ セラミックダイニングセット 160",
    price: 284900,
    image: `${BASE_URL}/images/placeholders/butterfly-ceramic-dining-set-160-1.jpg`,
    chairPrices: {
      "140cm": {
        "有（４脚）": 405900,
        "無": 284900
      },
      "160cm": {
        "有（４脚）": 427900,
        "無": 306900
      },
      "180cm": {
        "有（６脚）": 460900,
        "無": 328900
      }
    }
  },

  "luxury-modern-curve-sofa-140": {
  name: "ラグジュアリー モダン カーブソファ 140",
  price: 262900,
  image: `${BASE_URL}/images/placeholders/luxury-modern-curve-sofa-140-1.jpg`,
  sizePrices: {
    "140cm": 262900,
    "180cm": 306900,
    "200cm": 328900,
    "220cm": 361900,
    "240cm": 383900,
    "280cm": 416900,
    "300cm": 438900,
    "340cm": 482900
  }
},
"victoria-sofa-200": {
  name: "ヴィクトリア ソファ 200",
  price: 251900,
  image: `${BASE_URL}/images/placeholders/victoria-sofa-200-1.jpg`,
  sizePrices: {
    "200cm": 251900,
    "240cm": 295900,
    "280cm": 328900,
    "300cm": 350900
  }
},

"stylish-sofa-210": {
  name: "スタイリッシュソファ 210",
  price: 196900,
  image: `${BASE_URL}/images/placeholders/stylish-sofa-210-1.jpg`,
  sizePrices: {
    "180cm": 196900,
    "210cm": 240900,
    "240cm": 273900,
    "280cm": 306900,
    "300cm": 328900
  }
},

"stylish-sofa-300": {
  name: "スタイリッシュソファ 300",
  price: 196900,
  image: `${BASE_URL}/images/placeholders/stylish-sofa-300-1.jpg`,
  sizePrices: {
    "180cm": 196900,
    "210cm": 218900,
    "240cm": 262900,
    "280cm": 306900,
    "300cm": 350900
  }
},

"veronda-modern-luxury-sofa": {
  name: "ヴェロンダ モダンラグジュアリーソファ",
  price: 218900,
  image: `${BASE_URL}/images/placeholders/veronda-modern-luxury-sofa-1.jpg`,
  sizePrices: {
    "200cm": 218900,
    "240cm": 262900,
    "300cm": 306900
  }
},

"luxesofa300": {
  name: "バブルソファ クラウドソファ",
  price: 262900,
  image: `${BASE_URL}/images/placeholders/luxesofa300-1.jpg`,
  sizePrices: {
    "180cm": 262900,
    "210cm": 284900,
    "240cm": 339900,
    "280cm": 372900,
    "300cm": 405900
  }
},

"luxesofa200": {
  name: "バブルソファ クラウドソファ 200",
  price: 284900,
  image: `${BASE_URL}/images/placeholders/luxesofa200-cloud-1.jpg`,
  sizePrices: {
    "210cm": 284900,
    "250cm": 339900,
    "280cm": 372900
  }
},

"luxesofa150l": {
  name: "コンパクト 3人掛けソファ 150cm レザー",
  price: 185900,
  image: `${BASE_URL}/images/placeholders/luxesofa150l-1.jpg`,
  sizePrices: {
    "150cm": 185900,
    "180cm": 207900,
    "210cm": 229900,
    "250cm": 262900,
    "280cm": 295900,
    "310cm": 317900
  }
},

"luxesofa210b": {
  name: "ブークレ素材 210cm カーブソファ",
  price: 185900,
  image: `${BASE_URL}/images/placeholders/luxesofa210b-1.jpg`,
  sizePrices: {
    "170cm": 185900,
    "210cm": 218900,
    "240cm": 240900,
    "280cm": 273900,
    "300cm": 295900
  }
},

"luxesofa115": {
  name: "クラウドスタイル セクショナルソファ",
  price: 196900,
  image: `${BASE_URL}/images/placeholders/luxesofa115-1.jpg`,
  sizePrices: {
    "115cm": 196900,
    "130cm": 218900,
    "220cm": 394900,
    "240cm": 438900,
    "280cm": 493900,
    "300cm": 548900
  }
},

"luxesofa300-stylish": {
  name: "スタイリッシュソファ 300",
  price: 339900,
  image: `${BASE_URL}/images/placeholders/luxesofa300-stylish-1.jpg`,
  sizePrices: {
    "220cm": 262900,
    "240cm": 284900,
    "280cm": 306900,
    "300cm": 339900
  }
},

"luxesofa300a": {
  name: "スタイリッシュソファ 300A",
  price: 306900,
  image: `${BASE_URL}/images/placeholders/luxesofa300a-1.jpg`,
  sizePrices: {
    "220cm": 219000,
    "240cm": 239000,
    "280cm": 259000,
    "300cm": 279000
  }
},

"luxesofa240a": {
  name: "スタイリッシュソファ 240A",
  price: 284900,
  image: `${BASE_URL}/images/placeholders/luxesofa240a-1.jpg`,
  sizePrices: {
    "220cm": 239000,
    "240cm": 259000,
    "280cm": 279000,
    "300cm": 299000
  }
},


"luxesofa240b": {
  name: "スタイリッシュソファ 240B",
  price: 251900,
  image: `${BASE_URL}/images/placeholders/luxesofa240b-1.jpg`,
  sizePrices: {
    "220cm": 209000,
    "240cm": 229000,
    "280cm": 249000,
    "300cm": 269000
  }
},

"stylish-sofa-240-105-80": {
  name: "スタイリッシュソファ 240",
  price: 295900,
  image: `${BASE_URL}/images/placeholders/stylish-sofa-240-105-80-1.jpg`,
  sizePrices: {
    "210cm": 295900,
    "240cm": 295900,
    "280cm": 317900,
    "300cm": 339900
  }
},

"stylish-sofa-140-95-63": {
  name: "スタイリッシュソファ 140",
  price: 185900,
  image: `${BASE_URL}/images/placeholders/stylish-sofa-140-95-63-1.jpg`,
  sizePrices: {
    "140cm": 185900,
    "180cm": 218900,
    "220cm": 240900,
    "240cm": 273900,
    "280cm": 306900,
    "300cm": 328900
  }
},

"stylish-curve-luxo-living-sofa-120": {
  name: "スタイリッシュ カーブ ルクソ リビングルームソファ",
  price: 229900,
  image: `${BASE_URL}/images/placeholders/stylish-curve-luxo-living-sofa-120-1.jpg`,
  sizePrices: {
    "120cm": 229900,
    "190cm": 306900,
    "220cm": 328900,
    "250cm": 361900,
    "280cm": 394900,
    "310cm": 416900
  }
},

"pocket-coil-mattress-25cm": {
  name: "25cm厚 ピロートップ ポケットコイルマットレス",
  price: 59000,
  image: `${BASE_URL}/images/placeholders/pocket-coil-mattress-25cm-1.jpg`,
  sizePrices: {
    "Single": 59000,
    "SD": 69000,
    "D": 79000,
    "Q": 89000,
    "King": 99000
  }
},

"latex-mattress-25cm": {
  name: "25cm厚 ピロートップ 天然ラテックスマットレス",
  price: 89000,
  image: `${BASE_URL}/images/placeholders/latex-mattress-25cm-1.jpg`,
  sizePrices: {
    "Single": 89000,
    "SD": 99000,
    "D": 109000,
    "Q": 119000,
    "King": 129000
  }
},
  "gold-cage-round-dining-set": {
    name: "ゴールドケージ ラウンドダイニングセット",
    price: 163900,
    image: `${BASE_URL}/images/placeholders/gold-cage-round-dining-set-1.jpg`,
    chairPrices: {
      "120cm": {
        "有（４脚）": 251900,
        "無": 163900
      },
      "150cm": {
        "有（６脚）": 284900,
        "無": 185900
      }
    }
  },

  "luxo-curve-sofa": {
    name: "ルクソ カーブソファ",
    price: 196900,
    image: `${BASE_URL}/images/placeholders/luxo-curve-sofa-1.jpg`,
    sizePrices: {
      "120cm": 196900,
      "190cm": 229900,
      "220cm": 262900,
      "250cm": 306900,
      "280cm": 328900,
      "310cm": 350900
    }
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

app.use(express.static(path.join(__dirname, "public")));

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
    console.log("商品ID:", session.metadata?.productId || "");
    console.log("カラー:", session.metadata?.selectedColor || "");
    console.log("サイズ:", session.metadata?.selectedSize || "");
    console.log("収納:", session.metadata?.selectedStorage || "なし");
    console.log("椅子:", session.metadata?.selectedChair || "なし");
    console.log("商品本体価格:", session.metadata?.basePrice || "0");
    console.log("マットレス:", session.metadata?.selectedMattress || "なし");
    console.log("マットレス料金:", session.metadata?.mattressPrice || "0");
  }

  res.json({ received: true });
});

app.use(express.json());

function getProductBasePrice(productId, selectedSize, selectedStorage, selectedChair) {
  const product = PRODUCTS[productId];
  if (!product) return null;

  if (
    product.storagePrices &&
    selectedSize &&
    selectedStorage &&
    product.storagePrices[selectedSize] &&
    product.storagePrices[selectedSize][selectedStorage] !== undefined
  ) {
    return product.storagePrices[selectedSize][selectedStorage];
  }

  if (
    product.chairPrices &&
    selectedSize &&
    selectedChair &&
    product.chairPrices[selectedSize] &&
    product.chairPrices[selectedSize][selectedChair] !== undefined
  ) {
    return product.chairPrices[selectedSize][selectedChair];
  }

  if (
    product.sizePrices &&
    selectedSize &&
    product.sizePrices[selectedSize] !== undefined
  ) {
    return product.sizePrices[selectedSize];
  }

  return product.price;
}

function buildProductDisplayName(
  product,
  productId,
  selectedSize,
  selectedStorage,
  selectedChair,
  selectedColor
) {
  const suffixes = [];

  if (selectedSize) {
    suffixes.push(selectedSize);
  }

  if (selectedColor) {
    suffixes.push(selectedColor);
  }

  if (selectedStorage && productId === "natural-storage-bed-frame-140") {
    suffixes.push(selectedStorage);
  }

  if (selectedChair && product.chairPrices) {
    suffixes.push(`椅子${selectedChair}`);
  }

  if (suffixes.length === 0) return product.name;
  return `${product.name} (${suffixes.join(" / ")})`;
}

app.post("/create-checkout-session", async (req, res) => {
  try {
    const {
      productId,
      quantity = 1,
      selectedColor = "",
      selectedSize = "",
      selectedStorage = "",
      selectedChair = "",
      selectedMattress = "",
      mattressPrice = 0
    } = req.body;

    const product = PRODUCTS[productId];

    if (!product) {
      return res.status(400).json({ error: "Invalid productId" });
    }

    const safeQuantity = Math.max(1, Number(quantity) || 1);
    const safeMattressPrice = Math.max(0, Number(mattressPrice) || 0);

    const basePrice = getProductBasePrice(
      productId,
      selectedSize,
      selectedStorage,
      selectedChair
    );

    if (basePrice === null) {
      return res.status(400).json({ error: "Invalid pricing data" });
    }

    const productDisplayName = buildProductDisplayName(
      product,
      productId,
      selectedSize,
      selectedStorage,
      selectedChair,
      selectedColor
    );

    const lineItems = [
      {
        quantity: safeQuantity,
        price_data: {
          currency: "jpy",
          product_data: {
            name: productDisplayName,
            images: [product.image],
            metadata: {
              productId,
              selectedColor,
              selectedSize,
              selectedStorage,
              selectedChair
            }
          },
          unit_amount: basePrice
        }
      }
    ];

    if (selectedMattress && safeMattressPrice > 0) {
      lineItems.push({
        quantity: safeQuantity,
        price_data: {
          currency: "jpy",
          product_data: {
            name: `${productDisplayName}用マットレス`,
            metadata: {
              productId,
              selectedColor,
              selectedSize,
              selectedStorage,
              selectedChair,
              selectedMattress
            }
          },
          unit_amount: safeMattressPrice
        }
      });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      locale: "ja",
      line_items: lineItems,
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
        selectedSize,
        selectedStorage,
        selectedChair,
        basePrice: String(basePrice),
        selectedMattress,
        mattressPrice: String(safeMattressPrice)
      }
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Failed to create checkout session:", error);
    res.status(500).json({ error: "Failed to create checkout session" });
  }
});

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