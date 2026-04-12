document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const searchToggle = document.getElementById("searchToggle");
  const searchPanel = document.getElementById("searchPanel");
  const newsletterForm = document.querySelector(".newsletter-form");
  const contactForm = document.getElementById("contactForm");

  const cartLinks = document.querySelectorAll(".cart-link");
  const addToCartButton = document.getElementById("addToCartButton");
  const quantityInput = document.getElementById("quantityInput");
  const productSummary = document.querySelector(".product-summary");

  const productMainImage = document.getElementById("productMainImage");
  const productThumbs = document.querySelectorAll(".product-thumb");

  const sortSelect = document.getElementById("sort");
  const sortSofasSelect = document.getElementById("sortSofas");
  const searchInput = document.querySelector(".search-panel input");

  const shopGrid =
    document.querySelector(".shop-page .shop-grid") ||
    document.querySelector(".category-page .shop-grid");

  const shopCountText = document.getElementById("shopCountText");
  const filterLists = document.querySelectorAll(".shop-filter-list");

  const cartItemsContainer = document.getElementById("cartItems");
  const emptyCartMessage = document.getElementById("emptyCartMessage");
  const cartSummaryCount = document.getElementById("cartSummaryCount");
  const cartSummarySubtotal = document.getElementById("cartSummarySubtotal");
  const cartSummaryTotal = document.getElementById("cartSummaryTotal");
  const clearCartButton = document.getElementById("clearCartButton");
  const checkoutButton = document.getElementById("checkoutButton");
  const buyNowButton = document.getElementById("buyNowButton");

  const mattressOptionWrap = document.getElementById("mattressOptionWrap");
  const mattressDetailWrap = document.getElementById("mattressDetailWrap");
  const mattressToggle = document.getElementById("mattressToggle");
  const mattressTypeSelect = document.getElementById("mattressType");
  const mattressPriceText = document.getElementById("mattressPriceText");

  const storageOptionWrap = document.getElementById("storageOptionWrap");
  const storageTypeSelect =
    document.getElementById("storageType") || document.getElementById("storage");

  const chairOptionWrap = document.getElementById("chairOptionWrap");
  const chairTypeSelect = document.getElementById("chairType");

  const CART_STORAGE_KEY = "luxeLivingCart";

  const activeFilters = {
    category: "all",
    space: "all",
    price: "all",
    keyword: ""
  };

  const PRODUCT_DATA = {
    "luna-lounge-sofa-150": {
      category: "ソファ",
      name: "ルーナ ラウンジソファ 150 ホワイト",
      price: 196900,
      description:
        "湾曲した背もたれとやわらかな座り心地が魅力の、コンパクトなモダンラグジュアリーソファ。上質な質感で空間を洗練された印象に整えます。",
      infoDescription:
        "ルーナ ラウンジソファ 150 ホワイトは、丸みを帯びた背もたれと一体感のあるシルエットが特徴のモダンソファです。人間工学に基づいた設計により、さまざまな姿勢をやさしく支え、長時間でも快適に過ごせます。内部には高反発ウレタンスポンジを採用し、体圧を分散しながら安定感のある座り心地を実現。無垢材フレームとスプリング補強により、日常使いにも適した耐久性を備えています。マイクロファイバーレザーの上質な質感が、リビングやラウンジ空間に静かな高級感をもたらします。",
      material:
        "マイクロファイバーレザー、無垢材、高反発ウレタンスポンジ、スプリング",
      sizeText: "W 1500 × D 900 × H 850 mm / SH 420 mm",
      delivery: "お届け目安：25日以内",
      care:
        "柔らかい布で日常のお手入れを行ってください。汚れは部分的に拭き取り、強い摩擦や長時間の直射日光は避けてください。",
      shippingReturns:
        "送料無料です。離島・一部地域は追加送料がかかる場合があります。注文数によりお届け日が変動する場合があります。",
      colors: ["ホワイト", "オレンジ"],
      sizes: ["150cm"],
      images: [
        "images/placeholders/luna-lounge-sofa-150-1.jpg",
        "images/placeholders/luna-lounge-sofa-150-2.jpg",
        "images/placeholders/luna-lounge-sofa-150-3.jpg",
        "images/placeholders/luna-lounge-sofa-150-4.jpg",
        "images/placeholders/luna-lounge-sofa-150-5.jpg",
        "images/placeholders/luna-lounge-sofa-150-6.jpg",
        "images/placeholders/luna-lounge-sofa-150-7.jpg",
        "images/placeholders/luna-lounge-sofa-150-8.jpg",
        "images/placeholders/luna-lounge-sofa-150-9.jpg"
      ]
    },

    "bubble-sofa-270": {
      category: "ソファ",
      name: "バブルソファー 270 ベージュ",
      price: 262900,
      description:
        "雲やバブルを思わせる、ふっくらとした彫刻的シルエットが魅力のモダンソファ。空間の主役になる存在感と、やわらかな印象を兼ね備えた一台です。",
      infoDescription:
        "バブルソファー 270 ベージュは、クラウドソファのような浮遊感と、ボリュームのあるクッションフォルムが特徴のモダンソファです。プラッシュな質感のベルベットまたはブークレ系の張地を思わせる柔らかな表情が、リビングを上質で洗練された空間へと導きます。モジュール構造を感じさせるストレート配置デザインで、ミニマルでありながら印象的な佇まいを実現。奥行きを抑えつつ幅270cmのゆとりを確保し、複数人でも快適に座れるサイズ感です。",
      material: "布・ファブリック、モジュール構造フレーム、クッション材",
      sizeText: "W 2700 × D 800 × H 700 mm / SH 380 mm",
      delivery: "お届け目安：5日以内に発送",
      care:
        "やわらかい布で乾拭きしてください。汚れは部分的にやさしく拭き取り、強い摩擦や長時間の直射日光は避けてください。",
      shippingReturns:
        "送料無料です。離島・一部地域は追加送料がかかる場合があります。注文個数によりお届け日が変わることがあります。",
      colors: ["ベージュ"],
      sizes: ["270cm"],
      images: [
        "images/placeholders/bubble-sofa-270-1.jpg",
        "images/placeholders/bubble-sofa-270-2.jpg",
        "images/placeholders/bubble-sofa-270-3.jpg",
        "images/placeholders/bubble-sofa-270-4.jpg"
      ]
    },

    "luna-curve-sofa-260": {
      category: "ソファ",
      name: "ルーナ カーブソファ 260 ベージュ",
      price: 218900,
      description:
        "ダブルシェーズ付きのゆったりとしたL字型カーブソファ。丸みのあるフォルムと上品なベージュカラーが、空間にモダンラグジュアリーな印象をもたらします。",
      infoDescription:
        "ルーナ カーブソファ 260 ベージュは、260cmのワイド設計とダブルシェーズ仕様が魅力のカーブソファです。人間工学に基づいた背もたれがさまざまな姿勢をやさしく支え、高反発ウレタンスポンジが体圧を分散。長時間の会話や読書、映画鑑賞でも快適な座り心地を保ちます。厳選された無垢材とスプリング補強によって、安定感と耐久性も確保。流れるような一体型シルエットが、リビングやラウンジに洗練された存在感を与えます。",
      material:
        "アイランドクロス、無垢材、高反発ウレタンスポンジ、スプリング",
      sizeText: "W 2600 × D 1100 × H 690 mm / SH 420 mm",
      delivery: "お届け目安：7〜12日以内",
      care:
        "柔らかい布で日常のお手入れを行ってください。汚れは部分的にやさしく拭き取り、強い摩擦や長時間の直射日光は避けてください。",
      shippingReturns:
        "送料無料です。離島・一部地域は追加送料がかかる場合があります。注文個数によりお届け日が変わることがあります。",
      colors: ["ベージュ"],
      sizes: ["260cm"],
      images: [
        "images/placeholders/luna-curve-sofa-260-1.jpg",
        "images/placeholders/luna-curve-sofa-260-2.jpg",
        "images/placeholders/luna-curve-sofa-260-3.jpg",
        "images/placeholders/luna-curve-sofa-260-4.jpg",
        "images/placeholders/luna-curve-sofa-260-5.jpg",
        "images/placeholders/luna-curve-sofa-260-6.jpg",
        "images/placeholders/luna-curve-sofa-260-7.jpg",
        "images/placeholders/luna-curve-sofa-260-8.jpg",
        "images/placeholders/luna-curve-sofa-260-9.jpg"
      ]
    },

    "ceres-quilted-bed-frame": {
      category: "ベッド",
      name: "セレス キルティングベッドフレーム",
      price: 196900,
      description:
        "やさしいホワイトカラーとふっくらとしたキルティングデザインが魅力のナチュラルテイストなラグジュアリーベッドフレーム。寝室に明るくやわらかな印象を与えます。",
      infoDescription:
        "セレス キルティングベッドフレームは、立体感のあるヘッドボードと、全体を包み込むような丸みのあるフォルムが特徴のラグジュアリーベッドフレームです。ヘッドボードはクッション性に優れ、背もたれとしても快適で、ベッド上でのくつろぎ時間にも最適。ロープロファイル設計で圧迫感を抑えつつ、お部屋を広く見せる効果もあり、ナチュラル・北欧風・ホテルライクなインテリアと好相性です。見た目の可愛さだけでなく、安定感のある構造で快適な寝心地を実現。新生活や寝室の模様替えにぴったりのデザイン性と実用性を兼ね備えたプレミアムベッドフレームです。また、当店では5つ星ホテル仕様のラグジュアリーマットレスもご用意しております。",
      material: "ファブリック張り、クッション性ヘッドボード、フレーム構造",
      sizeText: "ダブル（140cmマットレス対応）",
      delivery: "お届け目安：25日以内",
      care:
        "柔らかい布で日常のお手入れを行ってください。汚れは部分的にやさしく拭き取り、強い摩擦や長時間の直射日光は避けてください。",
      shippingReturns:
        "送料無料です。離島・一部地域は追加送料がかかる場合があります。ベッドフレームとマットレスのセット購入をご希望の場合はお気軽にお問い合わせください。",
      colors: ["ホワイト"],
      sizes: ["ダブル（140cmマットレス対応）"],
      images: [
        "images/placeholders/ceres-quilted-bed-frame-1.jpg",
        "images/placeholders/ceres-quilted-bed-frame-2.jpg",
        "images/placeholders/ceres-quilted-bed-frame-3.jpg",
        "images/placeholders/ceres-quilted-bed-frame-4.jpg",
        "images/placeholders/ceres-quilted-bed-frame-5.jpg",
        "images/placeholders/ceres-quilted-bed-frame-6.jpg",
        "images/placeholders/ceres-quilted-bed-frame-7.jpg",
        "images/placeholders/ceres-quilted-bed-frame-8.jpg",
        "images/placeholders/ceres-quilted-bed-frame-9.jpg",
        "images/placeholders/ceres-quilted-bed-frame-10.jpg",
        "images/placeholders/ceres-quilted-bed-frame-11.jpg",
        "images/placeholders/ceres-quilted-bed-frame-12.jpg"
      ],
      variants: {
        "ダブル（140cmマットレス対応）": {
          sku: "luxebed140",
          price: 196900,
          sizeText: "ダブル（140cmマットレス対応）"
        }
      },
      hasMattressOption: true,
      mattressOptions: {
        spring25: { "ダブル（140cmマットレス対応）": 59000 },
        spring30: { "ダブル（140cmマットレス対応）": 69000 },
        latex25: { "ダブル（140cmマットレス対応）": 109000 },
        latex30: { "ダブル（140cmマットレス対応）": 129000 }
      }
    },

    "nova-bed-frame": {
      category: "ベッド",
      name: "ノヴァ ベッドフレーム",
      price: 185900,
      description:
        "やわらかなベージュトーンとふっくらとしたフォルムが魅力の上質感あふれるラグジュアリーベッドフレーム。寝室にやさしく温もりのある雰囲気を与えます。",
      infoDescription:
        "ノヴァ ベッドフレームは、全体を包み込むような立体的デザインと、クッション性の高い張り地ヘッドボードが特徴のラグジュアリーモダンなベッドフレームです。ヘッドボードは背もたれとしても快適で、読書や映画鑑賞など、ベッド上でのリラックスタイムにも最適。ロープロファイル設計により圧迫感を抑えつつ、空間を広く見せる効果もあり、ナチュラル・モダン・ホテルライクなインテリアと美しく調和します。デザイン性と快適性を兼ね備えた、新生活や寝室のグレードアップにふさわしい一台です。また、5つ星ホテル仕様のラグジュアリーマットレスも別途ご用意しております。",
      material: "ファブリック張り、クッション性ヘッドボード、フレーム構造",
      sizeText: "ダブル（140cmマットレス対応）",
      delivery: "お届け目安：25日以内",
      care:
        "柔らかい布で日常のお手入れを行ってください。汚れは部分的にやさしく拭き取り、強い摩擦や長時間の直射日光は避けてください。",
      shippingReturns:
        "送料無料です。離島・一部地域は追加送料がかかる場合があります。ベッドフレームとマットレスのセット購入をご希望の場合はお気軽にお問い合わせください。",
      colors: ["ベージュ"],
      sizes: [
        "ダブル（140cmマットレス対応）",
        "クイーン（150cmマットレス対応）",
        "クイーンワイド（160cmマットレス対応）",
        "キング（180cmマットレス対応）"
      ],
      images: [
        "images/placeholders/nova-bed-frame-1.jpg",
        "images/placeholders/nova-bed-frame-2.jpg",
        "images/placeholders/nova-bed-frame-3.jpg",
        "images/placeholders/nova-bed-frame-4.jpg",
        "images/placeholders/nova-bed-frame-5.jpg",
        "images/placeholders/nova-bed-frame-6.jpg",
        "images/placeholders/nova-bed-frame-7.jpg",
        "images/placeholders/nova-bed-frame-8.jpg",
        "images/placeholders/nova-bed-frame-9.jpg",
        "images/placeholders/nova-bed-frame-10.jpg",
        "images/placeholders/nova-bed-frame-11.jpg",
        "images/placeholders/nova-bed-frame-12.jpg"
      ],
      variants: {
        "ダブル（140cmマットレス対応）": {
          sku: "luxebed140",
          price: 185900,
          sizeText: "ダブル（140cmマットレス対応）"
        },
        "クイーン（150cmマットレス対応）": {
          sku: "luxebed150",
          price: 185900,
          sizeText: "クイーン（150cmマットレス対応）"
        },
        "クイーンワイド（160cmマットレス対応）": {
          sku: "luxebed160",
          price: 196900,
          sizeText: "クイーンワイド（160cmマットレス対応）"
        },
        "キング（180cmマットレス対応）": {
          sku: "luxebed180",
          price: 196900,
          sizeText: "キング（180cmマットレス対応）"
        }
      },
      hasMattressOption: true,
      mattressOptions: {
        spring25: {
          "ダブル（140cmマットレス対応）": 59000,
          "クイーン（150cmマットレス対応）": 69000,
          "クイーンワイド（160cmマットレス対応）": 79000,
          "キング（180cmマットレス対応）": 89000
        },
        spring30: {
          "ダブル（140cmマットレス対応）": 69000,
          "クイーン（150cmマットレス対応）": 79000,
          "クイーンワイド（160cmマットレス対応）": 89000,
          "キング（180cmマットレス対応）": 99000
        },
        latex25: {
          "ダブル（140cmマットレス対応）": 109000,
          "クイーン（150cmマットレス対応）": 129000,
          "クイーンワイド（160cmマットレス対応）": 159000,
          "キング（180cmマットレス対応）": 179000
        },
        latex30: {
          "ダブル（140cmマットレス対応）": 129000,
          "クイーン（150cmマットレス対応）": 159000,
          "クイーンワイド（160cmマットレス対応）": 179000,
          "キング（180cmマットレス対応）": 199000
        }
      }
    },

    "olvia-bed-frame": {
      category: "ベッド",
      name: "オルビア ベッドフレーム",
      price: 185900,
      description:
        "やさしいベージュカラーとふっくらとしたフォルムが魅力のラグジュアリーモダンなベッドフレーム。寝室にやわらかく上質な印象を与えます。",
      infoDescription:
        "オルビア ベッドフレームは、やわらかなベージュトーンと包み込むような立体感のあるデザインが特徴のプレミアムベッドフレームです。クッション性の高いヘッドボードは背もたれとしても快適で、読書や映画鑑賞などのリラックスタイムにも最適。ロープロファイル設計により圧迫感を抑えつつ、空間を広く見せる効果があり、ナチュラル・モダン・ホテルライクなインテリアと美しく調和します。新生活や寝室のグレードアップにふさわしい、デザイン性と快適性を兼ね備えた一台です。",
      material: "ファブリック張り、クッション性ヘッドボード、フレーム構造",
      sizeText: "ダブル（140cmマットレス対応）",
      delivery: "お届け目安：25日以内",
      care:
        "柔らかい布で日常のお手入れを行ってください。汚れは部分的にやさしく拭き取り、強い摩擦や長時間の直射日光は避けてください。",
      shippingReturns:
        "送料無料です。離島・一部地域は追加送料がかかる場合があります。ベッドフレームとマットレスのセット購入をご希望の場合はお気軽にお問い合わせください。",
      colors: ["ベージュ"],
      sizes: [
        "ダブル（140cmマットレス対応）",
        "クイーン（150cmマットレス対応）",
        "クイーンワイド（160cmマットレス対応）",
        "キング（180cmマットレス対応）"
      ],
      images: [
        "images/placeholders/olvia-bed-frame-1.jpg",
        "images/placeholders/olvia-bed-frame-2.jpg",
        "images/placeholders/olvia-bed-frame-3.jpg",
        "images/placeholders/olvia-bed-frame-4.jpg",
        "images/placeholders/olvia-bed-frame-5.jpg",
        "images/placeholders/olvia-bed-frame-6.jpg",
        "images/placeholders/olvia-bed-frame-7.jpg",
        "images/placeholders/olvia-bed-frame-8.jpg",
        "images/placeholders/olvia-bed-frame-9.jpg",
        "images/placeholders/olvia-bed-frame-10.jpg",
        "images/placeholders/olvia-bed-frame-11.jpg",
        "images/placeholders/olvia-bed-frame-12.jpg"
      ],
      variants: {
        "ダブル（140cmマットレス対応）": {
          sku: "luxebed140-x",
          price: 185900,
          sizeText: "ダブル（140cmマットレス対応）"
        },
        "クイーン（150cmマットレス対応）": {
          sku: "luxebed150-p",
          price: 185900,
          sizeText: "クイーン（150cmマットレス対応）"
        },
        "クイーンワイド（160cmマットレス対応）": {
          sku: "luxebed160-q",
          price: 196900,
          sizeText: "クイーンワイド（160cmマットレス対応）"
        },
        "キング（180cmマットレス対応）": {
          sku: "luxebed180-10",
          price: 196900,
          sizeText: "キング（180cmマットレス対応）"
        }
      },
      hasMattressOption: true,
      mattressOptions: {
        spring25: {
          "ダブル（140cmマットレス対応）": 59000,
          "クイーン（150cmマットレス対応）": 69000,
          "クイーンワイド（160cmマットレス対応）": 79000,
          "キング（180cmマットレス対応）": 89000
        },
        spring30: {
          "ダブル（140cmマットレス対応）": 69000,
          "クイーン（150cmマットレス対応）": 79000,
          "クイーンワイド（160cmマットレス対応）": 89000,
          "キング（180cmマットレス対応）": 99000
        },
        latex25: {
          "ダブル（140cmマットレス対応）": 109000,
          "クイーン（150cmマットレス対応）": 129000,
          "クイーンワイド（160cmマットレス対応）": 159000,
          "キング（180cmマットレス対応）": 179000
        },
        latex30: {
          "ダブル（140cmマットレス対応）": 129000,
          "クイーン（150cmマットレス対応）": 159000,
          "クイーンワイド（160cmマットレス対応）": 179000,
          "キング（180cmマットレス対応）": 199000
        }
      }
    },

    "natural-wood-bed-frame": {
      category: "ベッド",
      name: "ナチュラル ウッドベッドフレーム",
      price: 75900,
      description:
        "木のぬくもりをそのまま感じられる、ナチュラルなベッドフレームです。シンプルなデザインだからこそ、木目の美しさや素材感が引き立ち、寝室に落ち着きのある心地よい空間を演出します。",
      infoDescription:
        "シングルからキングまで幅広いサイズをご用意しており、お部屋の広さやライフスタイルに合わせてお選びいただけます。北欧テイストやナチュラルインテリア、モダンな空間にもなじみやすい、長く使いやすいベッドフレームです。当店では、以下のサイズに対応した高級ベッドフレームおよびマットレスをご用意しております：・120cm対応（セミダブル）・140cm対応（ダブル）・142〜150cm対応（クイーン）・152〜160cm対応（クイーン）・180cm対応（キング）。マットレスは、高級スプリングマットレスおよびラテックスマットレスを取り扱っており、厚さは25cm・30cmの2種類です。セット購入の場合、数量に応じて5〜15％割引が適用されます。",
      material: "木製フレーム",
      sizeText: "シングル",
      delivery: "配送予定：商品の種類を選択すると表示されます",
      care:
        "柔らかい布で乾拭きを行い、水分を長時間放置しないでください。",
      shippingReturns:
        "配送情報は商品の種類を選択すると表示されます。大型家具のため配送状況により前後する場合があります。",
      colors: ["ナチュラルウッド"],
      sizes: ["シングル", "セミダブル", "ダブル", "クイーン", "キング"],
      images: [
        "images/placeholders/natural-wood-bed-frame-1.jpg",
        "images/placeholders/natural-wood-bed-frame-2.jpg",
        "images/placeholders/natural-wood-bed-frame-3.jpg",
        "images/placeholders/natural-wood-bed-frame-4.jpg",
        "images/placeholders/natural-wood-bed-frame-5.jpg",
        "images/placeholders/natural-wood-bed-frame-6.jpg",
        "images/placeholders/natural-wood-bed-frame-7.jpg"
      ],
      variants: {
        "シングル": {
          sku: "luxelivingbed08s",
          price: 75900,
          sizeText: "シングル"
        },
        "セミダブル": {
          sku: "luxelivingbed08sd",
          price: 82500,
          sizeText: "セミダブル"
        },
        "ダブル": {
          sku: "luxelivingbed08d",
          price: 86900,
          sizeText: "ダブル"
        },
        "クイーン": {
          sku: "luxelivingbed08q",
          price: 93500,
          sizeText: "クイーン"
        },
        "キング": {
          sku: "luxelivingbed08k",
          price: 97900,
          sizeText: "キング"
        }
      },
      hasMattressOption: true,
      mattressOptions: {
        spring25: {
          "セミダブル": 49000,
          "ダブル": 59000,
          "クイーン": 69000,
          "キング": 89000
        },
        spring30: {
          "セミダブル": 59000,
          "ダブル": 69000,
          "クイーン": 79000,
          "キング": 99000
        },
        latex25: {
          "セミダブル": 89000,
          "ダブル": 109000,
          "クイーン": 129000,
          "キング": 179000
        },
        latex30: {
          "セミダブル": 109000,
          "ダブル": 129000,
          "クイーン": 159000,
          "キング": 199000
        }
      }
    },

    "modern-luxury-bed-frame-160": {
      category: "ベッド",
      name: "モダン ラグジュアリーベッドフレーム",
      price: 108900,
      description:
        "背もたれとしても快適なヘッドボードと、安定感のある静音設計フレームを備えた、上質なベッドフレーム。新居や寝室のアップグレードに適した、デザイン性と実用性を兼ね備えた一台です。",
      infoDescription:
        "プレミアムな無垢材ベッドとマットレスをご紹介します。ヘッドボードは優れたデザインで、背もたれとしても快適なので、ベッドでゆったりとくつろぐのに最適です。フレームは安定性と堅牢性に優れた構造で、きしみ音を抑える静音設計により、毎日の快適な睡眠をサポートします。このプレミアムベッドフレームはデザイン性と実用性を兼ね備え、新居や寝室のアップグレードに最適です。また、5つ星ホテル仕様の高級マットレスもご用意しております。硬さは5～6/10のバランスが良く、適度な弾力性と安定性で快適な睡眠を実現します。在庫状況については、通常は画像に掲載されている色のみとなりますが、他の色のカスタマイズも可能な場合があります（納期：約30日）。カスタマイズには追加料金が発生する場合がありますので、ご購入前にお問い合わせください。在庫のある商品は、配送地域（離島を除く）により5～12日でお届けいたします。当店では、以下のサイズの高品質なベッドフレームとマットレスをご用意しております。・120cm（セミダブル）・140cm（ダブル）・142-150cm（クイーン）・152-160cm（クイーン）・180cm（キング）高品質なスプリングマットレスとラテックスマットレスを取り扱っており、厚さは25cmと30cmの2種類からお選びいただけます。",
      material:
        "無垢材フレーム、クッション性ヘッドボード、静音設計構造",
      sizeText: "シングル",
      delivery: "在庫商品は配送地域により5〜12日でお届け可能です（離島を除く）",
      care:
        "柔らかい布で乾拭きを行ってください。水分を長時間放置せず、強い摩擦や直射日光は避けてください。",
      shippingReturns:
        "送料無料です。離島・一部地域は追加送料がかかる場合があります。カスタマイズ納期は約30日です。",
      colors: ["掲載画像カラー"],
      sizes: ["シングル", "セミダブル", "ダブル", "クイーン", "キング"],
      images: [
        "images/placeholders/modern-luxury-bed-frame-160-1.jpg",
        "images/placeholders/modern-luxury-bed-frame-160-2.jpg",
        "images/placeholders/modern-luxury-bed-frame-160-3.jpg",
        "images/placeholders/modern-luxury-bed-frame-160-4.jpg",
        "images/placeholders/modern-luxury-bed-frame-160-5.jpg",
        "images/placeholders/modern-luxury-bed-frame-160-6.jpg",
        "images/placeholders/modern-luxury-bed-frame-160-7.jpg"
      ],
      variants: {
        "シングル": {
          sku: "luxebed160-s",
          price: 108900,
          sizeText: "シングル"
        },
        "セミダブル": {
          sku: "luxebed160-sd",
          price: 119900,
          sizeText: "セミダブル"
        },
        "ダブル": {
          sku: "luxebed160-d",
          price: 130900,
          sizeText: "ダブル"
        },
        "クイーン": {
          sku: "luxebed160-q",
          price: 141900,
          sizeText: "クイーン"
        },
        "キング": {
          sku: "luxebed160-k",
          price: 152900,
          sizeText: "キング"
        }
      },
      hasMattressOption: true,
      mattressOptions: {
        spring25: {
          "セミダブル": 49000,
          "ダブル": 59000,
          "クイーン": 69000,
          "キング": 89000
        },
        spring30: {
          "セミダブル": 59000,
          "ダブル": 69000,
          "クイーン": 79000,
          "キング": 99000
        },
        latex25: {
          "セミダブル": 89000,
          "ダブル": 109000,
          "クイーン": 129000,
          "キング": 179000
        },
        latex30: {
          "セミダブル": 109000,
          "ダブル": 129000,
          "クイーン": 159000,
          "キング": 199000
        }
      }
    },

    "premium-luxury-bed-frame-140": {
      category: "ベッド",
      name: "プレミアム ラグジュアリーベッドフレーム 140",
      price: 174900,
      description:
        "丸みを帯びたフォルムとふんわりとした張り地ヘッドボードが魅力の、ラグジュアリーなベッドフレーム。上質でホテルライクな寝室を演出します。",
      infoDescription:
        "高級張り地ベッド、レザーベッド、マットレスのご案内。当店の高級張り地ベッドは、上質なベビーベルベット／ベルベット素材を使用しており、レザーベッドは本革を使用しています。洗練された雰囲気を醸し出す、豪華なベッドフレーム。丸みを帯びたフォルムとふんわりとした張り地ヘッドボードが寝室にやさしく上品な印象を与え、まるで高級ホテルのような空間を演出します。ヘッドボードはクッション性に優れ、背もたれとしても快適でベッド上でのリラックスタイムに最適です。フレームには安定感のあるしっかりとした構造を採用し、軋み音を抑えた静音設計で、毎日の睡眠を快適にサポートします。ロープロファイル設計により、空間を広く見せる効果もあり、モダンインテリア・ホテルスタイル・エレガントな空間との相性も抜群です。新生活や寝室のグレードアップにふさわしいデザイン性と実用性を両立したプレミアムベッドフレームです。また、当店では5つ星ホテル仕様のラグジュアリーマットレスもご用意しております。硬さは5～6／10のバランス設計で、適度な弾力と安定感のある寝心地を実現しています。在庫につきましては、基本的に掲載画像のカラーのみご用意しておりますが、生地・レザー・カラーなどのカスタマイズも可能です（納期：約30日）。なお、カスタマイズには追加料金が発生する場合がございますので、ご購入前にお問い合わせください。在庫商品は、配送地域により5～12日でお届け可能です（離島を除く）。当店では、以下のサイズに対応した高級ベッドフレームおよびマットレスをご用意しております：・120cm対応（セミダブル）・140cm対応（ダブル）・142～150cm対応（クイーン）・152～160cm対応（クイーン）・180cm対応（キング）。マットレスは、高級スプリングマットレスおよびラテックスマットレスを取り扱っており、厚さは25cm・30cmの2種類です。",
      material:
        "高級張り地、ベビーベルベット／ベルベット、本革、クッション性ヘッドボード、静音設計フレーム構造",
      sizeText: "シングル",
      delivery: "在庫商品は配送地域により5〜12日でお届け可能です（離島を除く）",
      care:
        "柔らかい布で乾拭きを行ってください。張り地部分は強い摩擦や直射日光を避けてください。",
      shippingReturns:
        "送料無料です。離島・一部地域は追加送料がかかる場合があります。カスタマイズ納期は約30日です。",
      colors: ["掲載画像カラー"],
      sizes: ["シングル", "セミダブル", "ダブル", "クイーン", "キング"],
      images: [
        "images/placeholders/premium-luxury-bed-frame-140-1.jpg",
        "images/placeholders/premium-luxury-bed-frame-140-2.jpg",
        "images/placeholders/premium-luxury-bed-frame-140-3.jpg",
        "images/placeholders/premium-luxury-bed-frame-140-4.jpg",
        "images/placeholders/premium-luxury-bed-frame-140-5.jpg",
        "images/placeholders/premium-luxury-bed-frame-140-6.jpg",
        "images/placeholders/premium-luxury-bed-frame-140-7.jpg"
      ],
      variants: {
        "シングル": {
          sku: "luxebed140-s",
          price: 174900,
          sizeText: "シングル"
        },
        "セミダブル": {
          sku: "luxebed140-sd",
          price: 185900,
          sizeText: "セミダブル"
        },
        "ダブル": {
          sku: "luxebed140-d",
          price: 196900,
          sizeText: "ダブル"
        },
        "クイーン": {
          sku: "luxebed140-q",
          price: 207900,
          sizeText: "クイーン"
        },
        "キング": {
          sku: "luxebed140-k",
          price: 218900,
          sizeText: "キング"
        }
      },
      hasMattressOption: true,
      mattressOptions: {
        spring25: {
          "セミダブル": 49000,
          "ダブル": 59000,
          "クイーン": 69000,
          "キング": 89000
        },
        spring30: {
          "セミダブル": 59000,
          "ダブル": 69000,
          "クイーン": 79000,
          "キング": 99000
        },
        latex25: {
          "セミダブル": 89000,
          "ダブル": 109000,
          "クイーン": 129000,
          "キング": 179000
        },
        latex30: {
          "セミダブル": 109000,
          "ダブル": 129000,
          "クイーン": 159000,
          "キング": 199000
        }
      }
    },

    "premium-luxury-bed-frame-160": {
      category: "ベッド",
      name: "プレミアム ラグジュアリーベッドフレーム 160",
      price: 174900,
      description:
        "丸みを帯びたフォルムとふんわりとした張り地ヘッドボードが魅力の、ラグジュアリーなベッドフレーム。上質でホテルライクな寝室を演出します。",
      infoDescription:
        "高級張り地ベッド、レザーベッド、マットレスのご案内。当店の高級張り地ベッドは、上質なベビーベルベット／ベルベット素材を使用しており、レザーベッドは本革を使用しています。洗練された雰囲気を醸し出す、豪華なベッドフレーム。丸みを帯びたフォルムとふんわりとした張り地ヘッドボードが寝室にやさしく上品な印象を与え、まるで高級ホテルのような空間を演出します。ヘッドボードはクッション性に優れ、背もたれとしても快適でベッド上でのリラックスタイムに最適です。フレームには安定感のあるしっかりとした構造を採用し、軋み音を抑えた静音設計で、毎日の睡眠を快適にサポートします。ロープロファイル設計により、空間を広く見せる効果もあり、モダンインテリア・ホテルスタイル・エレガントな空間との相性も抜群です。新生活や寝室のグレードアップにふさわしいデザイン性と実用性を両立したプレミアムベッドフレームです。また、当店では5つ星ホテル仕様のラグジュアリーマットレスもご用意しております。硬さは5～6／10のバランス設計で、適度な弾力と安定感のある寝心地を実現しています。在庫につきましては、基本的に掲載画像のカラーのみご用意しておりますが、生地・レザー・カラーなどのカスタマイズも可能です（納期：約30日）。なお、カスタマイズには追加料金が発生する場合がございますので、ご購入前にお問い合わせください。在庫商品は、配送地域により5～12日でお届け可能です（離島を除く）。当店では、以下のサイズに対応した高級ベッドフレームおよびマットレスをご用意しております：・120cm対応（セミダブル）・140cm対応（ダブル）・142～150cm対応（クイーン）・152～160cm対応（クイーン）・180cm対応（キング）。マットレスは、高級スプリングマットレスおよびラテックスマットレスを取り扱っており、厚さは25cm・30cmの2種類です。",
      material:
        "高級張り地、ベビーベルベット／ベルベット、本革、クッション性ヘッドボード、静音設計フレーム構造",
      sizeText: "シングル",
      delivery: "在庫商品は配送地域により5〜12日でお届け可能です（離島を除く）",
      care:
        "柔らかい布で乾拭きを行ってください。張り地部分は強い摩擦や直射日光を避けてください。",
      shippingReturns:
        "送料無料です。離島・一部地域は追加送料がかかる場合があります。カスタマイズ納期は約30日です。",
      colors: ["掲載画像カラー"],
      sizes: ["シングル", "セミダブル", "ダブル", "クイーン", "キング"],
      images: [
        "images/placeholders/premium-luxury-bed-frame-160-1.jpg",
        "images/placeholders/premium-luxury-bed-frame-160-2.jpg",
        "images/placeholders/premium-luxury-bed-frame-160-3.jpg",
        "images/placeholders/premium-luxury-bed-frame-160-4.jpg",
        "images/placeholders/premium-luxury-bed-frame-160-5.jpg",
        "images/placeholders/premium-luxury-bed-frame-160-6.jpg",
        "images/placeholders/premium-luxury-bed-frame-160-7.jpg"
      ],
      variants: {
        "シングル": {
          sku: "luxebed160-s",
          price: 174900,
          sizeText: "シングル"
        },
        "セミダブル": {
          sku: "luxebed160-sd",
          price: 185900,
          sizeText: "セミダブル"
        },
        "ダブル": {
          sku: "luxebed160-d",
          price: 196900,
          sizeText: "ダブル"
        },
        "クイーン": {
          sku: "luxebed160-q",
          price: 207900,
          sizeText: "クイーン"
        },
        "キング": {
          sku: "luxebed160-k",
          price: 218900,
          sizeText: "キング"
        }
      },
      hasMattressOption: true,
      mattressOptions: {
        spring25: {
          "セミダブル": 49000,
          "ダブル": 59000,
          "クイーン": 69000,
          "キング": 89000
        },
        spring30: {
          "セミダブル": 59000,
          "ダブル": 69000,
          "クイーン": 79000,
          "キング": 99000
        },
        latex25: {
          "セミダブル": 89000,
          "ダブル": 109000,
          "クイーン": 129000,
          "キング": 179000
        },
        latex30: {
          "セミダブル": 109000,
          "ダブル": 129000,
          "クイーン": 159000,
          "キング": 199000
        }
      }
    },

    "modern-luxury-leather-bed-frame": {
      category: "ベッド",
      name: "モダン ラグジュアリーレザーベッドフレーム",
      price: 174900,
      description:
        "丸みを帯びたフォルムとふんわりとした張り地ヘッドボードが魅力の、モダンラグジュアリーなベッドフレーム。寝室にやさしく上品な印象を与え、ホテルライクな空間を演出します。",
      infoDescription:
        "高級張り地ベッド、レザーベッド、マットレスのご案内。当店の高級張り地ベッドは、上質なベビーベルベット／ベルベット素材を使用しており、レザーベッドは本革を使用しています。洗練された雰囲気を醸し出す、豪華なベッドフレーム。丸みを帯びたフォルムとふんわりとした張り地ヘッドボードが寝室にやさしく上品な印象を与え、まるで高級ホテルのような空間を演出します。ヘッドボードはクッション性に優れ、背もたれとしても快適でベッド上でのリラックスタイムに最適です。フレームには安定感のあるしっかりとした構造を採用し、軋み音を抑えた静音設計で、毎日の睡眠を快適にサポートします。ロープロファイル設計により、空間を広く見せる効果もあり、モダンインテリア・ホテルスタイル・エレガントな空間との相性も抜群です。新生活や寝室のグレードアップにふさわしいデザイン性と実用性を両立したプレミアムベッドフレームです。また、当店では5つ星ホテル仕様のラグジュアリーマットレスもご用意しております。硬さは5～6／10のバランス設計で、適度な弾力と安定感のある寝心地を実現しています。在庫につきましては、基本的に掲載画像のカラーのみご用意しておりますが、生地・レザー・カラーなどのカスタマイズも可能です（納期：約30日）。なお、カスタマイズには追加料金が発生する場合がございますので、ご購入前にお問い合わせください。在庫商品は、配送地域により5～12日でお届け可能です（離島を除く）。当店では、以下のサイズに対応した高級ベッドフレームおよびマットレスをご用意しております：・120cm対応（セミダブル）・140cm対応（ダブル）・142～150cm対応（クイーン）・152～160cm対応（クイーン）・180cm対応（キング）。マットレスは、高級スプリングマットレスおよびラテックスマットレスを取り扱っており、厚さは25cm・30cmの2種類です。",
      material:
        "高級張り地、ベビーベルベット／ベルベット、本革、クッション性ヘッドボード、静音設計フレーム構造",
      sizeText: "シングル",
      delivery: "在庫商品は配送地域により5〜12日でお届け可能です（離島を除く）",
      care:
        "柔らかい布で乾拭きを行ってください。張り地部分は強い摩擦や直射日光を避けてください。",
      shippingReturns:
        "送料無料です。離島・一部地域は追加送料がかかる場合があります。カスタマイズ納期は約30日です。",
      colors: ["ベージュ", "ブラック"],
      sizes: ["シングル", "セミダブル", "ダブル", "クイーン", "キング"],
      images: [
        "images/placeholders/modern-luxury-leather-bed-frame-1.jpg",
        "images/placeholders/modern-luxury-leather-bed-frame-2.jpg",
        "images/placeholders/modern-luxury-leather-bed-frame-3.jpg",
        "images/placeholders/modern-luxury-leather-bed-frame-4.jpg",
        "images/placeholders/modern-luxury-leather-bed-frame-5.jpg",
        "images/placeholders/modern-luxury-leather-bed-frame-6.jpg",
        "images/placeholders/modern-luxury-leather-bed-frame-7.jpg"
      ],
      variants: {
        "シングル": {
          sku: "luxebed160-s",
          price: 174900,
          sizeText: "シングル"
        },
        "セミダブル": {
          sku: "luxebed160-sd",
          price: 185900,
          sizeText: "セミダブル"
        },
        "ダブル": {
          sku: "luxebed160-d",
          price: 196900,
          sizeText: "ダブル"
        },
        "クイーン": {
          sku: "luxebed160-q",
          price: 207900,
          sizeText: "クイーン"
        },
        "キング": {
          sku: "luxebed160-k",
          price: 218900,
          sizeText: "キング"
        }
      },
      hasMattressOption: true,
      mattressOptions: {
        spring25: {
          "セミダブル": 49000,
          "ダブル": 59000,
          "クイーン": 69000,
          "キング": 89000
        },
        spring30: {
          "セミダブル": 59000,
          "ダブル": 69000,
          "クイーン": 79000,
          "キング": 99000
        },
        latex25: {
          "セミダブル": 89000,
          "ダブル": 109000,
          "クイーン": 129000,
          "キング": 179000
        },
        latex30: {
          "セミダブル": 109000,
          "ダブル": 129000,
          "クイーン": 159000,
          "キング": 199000
        }
      }
    },

    "natural-storage-bed-frame-140": {
      category: "ベッド",
      name: "ナチュラル ウッド収納ベッドフレーム 140",
      price: 104500,
      description:
        "大容量の跳ね上げ収納と宮棚付きデザインを備えた、天然木の上質なベッドフレーム。収納もデザインも妥協したくない寝室におすすめです。",
      infoDescription:
        "プレミアムな無垢材ベッドとマットレスをご紹介します。【収納もデザインも。上質な眠りをあなたの寝室に】■ 大容量の跳ね上げ収納でお部屋スッキリ ベッド下全面が収納スペースに。ガス圧式の跳ね上げ機構で力いらずにラクラク開閉。寝具・衣類・季節用品をまとめてスマートに収納できます。■ 頭元に便利な宮棚・本棚付き ヘッドボードには広めの棚板と小物置きスペースを完備。スマホ・リモコン・時計・本など、就寝前によく使うものをすっきりまとめておけます。■ 柔らかなヘッドクッション クッション性のある背もたれパネルで、就寝前の読書やスマホタイムも快適にサポートします。■ 天然木のあたたかみあるデザイン 北欧スタイルにも和モダンにも合う、ナチュラルウッドカラー。どんなインテリアにも自然に溶け込むシンプルで上質な佇まい。■ 豊富なサイズ展開 シングル / セミダブル / ダブル / クイーン / キング 一人暮らしから家族まで、ライフスタイルに合わせてお選びいただけます。※ほとんどのベッドフレームに収納スペースを追加できます（サイズによって30,000円～40,000円）。【 商品仕様 】■ カラー：ナチュラル ■ 素材：天然木（フレーム）／クッション材（ヘッドボード） ■ 収納：ガス圧式跳ね上げ収納（床面下全収納） ■ 機能：宮棚付き・サイドシェルフ付き・クッションヘッドボード ■ 対応マットレス厚：約20～30cm（別売り） ■ サイズ展開：シングル 約97×195cm（内寸） / セミダブル 約117×195cm（内寸） / ダブル 約137×195cm（内寸） / クイーン 約157×195cm（内寸） / キング 約177×195cm（内寸） ■ 組み立て：要組立。ヘッドボードは背もたれとしても快適で、ベッドでゆったりとくつろぐのに最適です。フレームは安定性と堅牢性に優れた構造で、きしみ音を抑える静音設計により、毎日の快適な睡眠をサポートします。また、5つ星ホテル仕様の高級マットレスもご用意しております。",
      material:
        "天然木（フレーム）、クッション材（ヘッドボード）、ガス圧式跳ね上げ収納",
      sizeText: "シングル",
      delivery: "在庫商品は配送地域により5〜12日でお届け可能です（離島を除く）",
      care:
        "柔らかい布で乾拭きを行い、水分を長時間放置しないでください。",
      shippingReturns:
        "送料無料です。離島・一部地域は追加送料がかかる場合があります。収納付き仕様は追加料金対象です。",
      colors: ["ナチュラル"],
      sizes: ["シングル", "セミダブル", "ダブル", "クイーン", "キング"],
      images: [
        "images/placeholders/natural-storage-bed-frame-140-1.jpg",
        "images/placeholders/natural-storage-bed-frame-140-2.jpg",
        "images/placeholders/natural-storage-bed-frame-140-3.jpg",
        "images/placeholders/natural-storage-bed-frame-140-4.jpg",
        "images/placeholders/natural-storage-bed-frame-140-5.jpg",
        "images/placeholders/natural-storage-bed-frame-140-6.jpg",
        "images/placeholders/natural-storage-bed-frame-140-7.jpg"
      ],
      variants: {
        "シングル": {
          sku: "luxebed140-s-no-storage",
          price: 104500,
          sizeText: "シングル"
        },
        "セミダブル": {
          sku: "luxebed140-sd-no-storage",
          price: 108900,
          sizeText: "セミダブル"
        },
        "ダブル": {
          sku: "luxebed140-d-no-storage",
          price: 115500,
          sizeText: "ダブル"
        },
        "クイーン": {
          sku: "luxebed140-q-no-storage",
          price: 119900,
          sizeText: "クイーン"
        },
        "キング": {
          sku: "luxebed140-k-no-storage",
          price: 130900,
          sizeText: "キング"
        }
      },
      storageOptions: {
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
      },
      hasMattressOption: true,
      mattressOptions: {
        spring25: {
          "セミダブル": 59000,
          "ダブル": 69000,
          "クイーン": 79000,
          "キング": 99000
        },
        spring30: {
          "セミダブル": 59000,
          "ダブル": 69000,
          "クイーン": 79000,
          "キング": 99000
        },
        latex25: {
          "セミダブル": 89000,
          "ダブル": 109000,
          "クイーン": 129000,
          "キング": 179000
        },
        latex30: {
          "セミダブル": 109000,
          "ダブル": 129000,
          "クイーン": 159000,
          "キング": 199000
        }
      }
    },

    "louve-dining-table-180": {
      category: "テーブル",
      name: "ルーヴェ ダイニングテーブル 180",
      price: 185900,
      description:
        "ナチュラルウッドの美しさと拡張性を兼ね備えた、ワイドなダイニングテーブル。空間にあたたかさと上質感をもたらします。",
      infoDescription:
        "ルーヴェ ダイニングテーブル 180 は、Hokku Designs に着想を得た、タンカラーの長方形ダイニングテーブルです。素材にはタン仕上げを施したオーク無垢材を使用し、あたたかみのある質感としっかりとした存在感を兼ね備えています。拡張可能なバタフライリーフを備えており、来客時や家族での食事など、シーンに応じてゆとりあるテーブル空間をつくることができます。モダン・ナチュラル・ホテルライクなインテリアにもなじみやすく、毎日の食卓を上質に整える一台です。",
      material: "オーク無垢材、タン仕上げ、バタフライリーフ構造",
      sizeText: "W 1800 × D 900 × H 750 mm",
      delivery: "送料無料",
      care:
        "柔らかい布で乾拭きしてください。水分や熱いものを長時間直接置く場合は保護材のご使用をおすすめします。",
      shippingReturns:
        "送料無料です。離島・一部地域は追加送料がかかる場合があります。カスタムサイズをご希望の場合はお問い合わせください。",
      colors: ["ナチュラルウッド"],
      sizes: ["180cm"],
      images: [
        "images/placeholders/louve-dining-table-180-1.jpg",
        "images/placeholders/louve-dining-table-180-2.jpg",
        "images/placeholders/louve-dining-table-180-3.jpg",
        "images/placeholders/louve-dining-table-180-4.jpg",
        "images/placeholders/louve-dining-table-180-5.jpg",
        "images/placeholders/louve-dining-table-180-6.jpg",
        "images/placeholders/louve-dining-table-180-7.jpg",
        "images/placeholders/louve-dining-table-180-8.jpg"
      ]
    },

    "natural-storage-bed-frame-120": {
      category: "ベッド",
      name: "ナチュラル ウッド収納ベッドフレーム 120",
      price: 108900,
      description:
        "大容量の跳ね上げ収納と宮棚付きデザインを備えた、天然木の上質なベッドフレーム。収納もデザインも妥協したくない寝室におすすめです。",
      infoDescription:
        "プレミアムな無垢材ベッドとマットレスをご紹介します。【収納もデザインも。上質な眠りをあなたの寝室に】■ 大容量の跳ね上げ収納でお部屋スッキリ ベッド下全面が収納スペースに。ガス圧式の跳ね上げ機構で力いらずにラクラク開閉。寝具・衣類・季節用品をまとめてスマートに収納できます。■ 頭元に便利な宮棚・本棚付き ヘッドボードには広めの棚板と小物置きスペースを完備。スマホ・リモコン・時計・本など、就寝前によく使うものをすっきりまとめておけます。■ 柔らかなヘッドクッション クッション性のある背もたれパネルで、就寝前の読書やスマホタイムも快適にサポートします。■ 天然木のあたたかみあるデザイン 北欧スタイルにも和モダンにも合う、ナチュラルウッドカラー。どんなインテリアにも自然に溶け込むシンプルで上質な佇まい。■ 豊富なサイズ展開 シングル / セミダブル / ダブル / クイーン / キング 一人暮らしから家族まで、ライフスタイルに合わせてお選びいただけます。※ほとんどのベッドフレームに収納スペースを追加できます（サイズによって30,000円～40,000円）。【商品仕様】■ カラー：ナチュラル ■ 素材：天然木（フレーム）／クッション材（ヘッドボード） ■ 収納：ガス圧式跳ね上げ収納（床面下全収納） ■ 機能：宮棚付き・サイドシェルフ付き・クッションヘッドボード ■ 対応マットレス厚：約20～30cm（別売り） ■ サイズ展開：シングル 約97×195cm（内寸） / セミダブル 約117×195cm（内寸） / ダブル 約137×195cm（内寸） / クイーン 約157×195cm（内寸） / キング 約177×195cm（内寸） ■ 組み立て：要組立。ヘッドボードは背もたれとしても快適で、ベッドでゆったりとくつろぐのに最適です。フレームは安定性と堅牢性に優れた構造で、きしみ音を抑える静音設計により、毎日の快適な睡眠をサポートします。また、5つ星ホテル仕様の高級マットレスもご用意しております。",
      material:
        "天然木（フレーム）、クッション材（ヘッドボード）、ガス圧式跳ね上げ収納",
      sizeText: "シングル",
      delivery: "在庫商品は配送地域により5〜12日でお届け可能です（離島を除く）",
      care:
        "柔らかい布で乾拭きを行い、水分を長時間放置しないでください。",
      shippingReturns:
        "送料無料です。離島・一部地域は追加送料がかかる場合があります。",
      colors: ["ナチュラル"],
      sizes: ["シングル", "セミダブル", "ダブル", "クイーン", "キング"],
      images: [
        "images/placeholders/natural-storage-bed-frame-120-1.jpg",
        "images/placeholders/natural-storage-bed-frame-120-2.jpg",
        "images/placeholders/natural-storage-bed-frame-120-3.jpg",
        "images/placeholders/natural-storage-bed-frame-120-4.jpg",
        "images/placeholders/natural-storage-bed-frame-120-5.jpg",
        "images/placeholders/natural-storage-bed-frame-120-6.jpg",
        "images/placeholders/natural-storage-bed-frame-120-7.jpg"
      ],
      variants: {
        "シングル": {
          sku: "luxebed120-s",
          price: 108900,
          sizeText: "シングル"
        },
        "セミダブル": {
          sku: "luxebed120-sd",
          price: 115500,
          sizeText: "セミダブル"
        },
        "ダブル": {
          sku: "luxebed120-d",
          price: 119900,
          sizeText: "ダブル"
        },
        "クイーン": {
          sku: "luxebed120-q",
          price: 126500,
          sizeText: "クイーン"
        },
        "キング": {
          sku: "luxebed120-k",
          price: 130900,
          sizeText: "キング"
        }
      },
      hasMattressOption: true,
      mattressOptions: {
        spring25: {
          "セミダブル": 59000,
          "ダブル": 69000,
          "クイーン": 79000,
          "キング": 99000
        },
        spring30: {
          "セミダブル": 59000,
          "ダブル": 69000,
          "クイーン": 79000,
          "キング": 99000
        },
        latex25: {
          "セミダブル": 89000,
          "ダブル": 109000,
          "クイーン": 129000,
          "キング": 179000
        },
        latex30: {
          "セミダブル": 109000,
          "ダブル": 129000,
          "クイーン": 159000,
          "キング": 199000
        }
      }
    },

    "premium-luxury-bed-frame-185": {
      category: "ベッド",
      name: "プレミアム ラグジュアリーベッドフレーム 185",
      price: 174900,
      description:
        "丸みを帯びたフォルムとふんわりとした張り地ヘッドボードが魅力の、ラグジュアリーなベッドフレーム。上質でホテルライクな寝室を演出します。",
      infoDescription:
        "高級張り地ベッド、レザーベッド、マットレスのご案内。当店の高級張り地ベッドは、上質なベビーベルベット／ベルベット素材を使用しており、レザーベッドは本革を使用しています。洗練された雰囲気を醸し出す、豪華なベッドフレーム。丸みを帯びたフォルムとふんわりとした張り地ヘッドボードが寝室にやさしく上品な印象を与え、まるで高級ホテルのような空間を演出します。ヘッドボードはクッション性に優れ、背もたれとしても快適でベッド上でのリラックスタイムに最適です。フレームには安定感のあるしっかりとした構造を採用し、軋み音を抑えた静音設計で、毎日の睡眠を快適にサポートします。ロープロファイル設計により、空間を広く見せる効果もあり、モダンインテリア・ホテルスタイル・エレガントな空間との相性も抜群です。新生活や寝室のグレードアップにふさわしいデザイン性と実用性を両立したプレミアムベッドフレームです。また、当店では5つ星ホテル仕様のラグジュアリーマットレスもご用意しております。硬さは5～6／10のバランス設計で、適度な弾力と安定感のある寝心地を実現しています。在庫につきましては、基本的に掲載画像のカラーのみご用意しておりますが、生地・レザー・カラーなどのカスタマイズも可能です（納期：約30日）。なお、カスタマイズには追加料金が発生する場合がございますので、ご購入前にお問い合わせください。在庫商品は、配送地域により5～12日でお届け可能です（離島を除く）。当店では、以下のサイズに対応した高級ベッドフレームおよびマットレスをご用意しております：・120cm対応（セミダブル）・140cm対応（ダブル）・142～150cm対応（クイーン）・152～160cm対応（クイーン）・180cm対応（キング）。マットレスは、高級スプリングマットレスおよびラテックスマットレスを取り扱っており、厚さは25cm・30cmの2種類です。",
      material:
        "高級張り地、ベビーベルベット／ベルベット、本革、クッション性ヘッドボード、静音設計フレーム構造",
      sizeText: "シングル",
      delivery: "在庫商品は配送地域により5〜12日でお届け可能です（離島を除く）",
      care:
        "柔らかい布で乾拭きを行ってください。張り地部分は強い摩擦や直射日光を避けてください。",
      shippingReturns:
        "送料無料です。離島・一部地域は追加送料がかかる場合があります。カスタマイズ納期は約30日です。",
      colors: ["掲載画像カラー"],
      sizes: ["シングル", "セミダブル", "ダブル", "クイーン", "キング"],
      images: [
        "images/placeholders/premium-luxury-bed-frame-185-1.jpg",
        "images/placeholders/premium-luxury-bed-frame-185-2.jpg",
        "images/placeholders/premium-luxury-bed-frame-185-3.jpg",
        "images/placeholders/premium-luxury-bed-frame-185-4.jpg",
        "images/placeholders/premium-luxury-bed-frame-185-5.jpg",
        "images/placeholders/premium-luxury-bed-frame-185-6.jpg",
        "images/placeholders/premium-luxury-bed-frame-185-7.jpg"
      ],
      variants: {
        "シングル": {
          sku: "luxebed185-s",
          price: 174900,
          sizeText: "シングル"
        },
        "セミダブル": {
          sku: "luxebed185-sd",
          price: 174900,
          sizeText: "セミダブル"
        },
        "ダブル": {
          sku: "luxebed185-d",
          price: 174900,
          sizeText: "ダブル"
        },
        "クイーン": {
          sku: "luxebed185-q",
          price: 185900,
          sizeText: "クイーン"
        },
        "キング": {
          sku: "luxebed185-k",
          price: 185900,
          sizeText: "キング"
        }
      },
      hasMattressOption: true,
      mattressOptions: {
        spring25: {
          "セミダブル": 49000,
          "ダブル": 59000,
          "クイーン": 69000,
          "キング": 89000
        },
        spring30: {
          "セミダブル": 59000,
          "ダブル": 69000,
          "クイーン": 79000,
          "キング": 99000
        },
        latex25: {
          "セミダブル": 89000,
          "ダブル": 109000,
          "クイーン": 129000,
          "キング": 179000
        },
        latex30: {
          "セミダブル": 109000,
          "ダブル": 129000,
          "クイーン": 159000,
          "キング": 199000
        }
      }
    },

    "premium-luxury-bed-frame-140-single": {
      category: "ベッド",
      name: "プレミアム ラグジュアリーベッドフレーム 140 シングル商品",
      price: 174900,
      description:
        "丸みを帯びたフォルムとふんわりとした張り地ヘッドボードが魅力の、ラグジュアリーなベッドフレーム。上質でホテルライクな寝室を演出します。",
      infoDescription:
        "高級張り地ベッド、レザーベッド、マットレスのご案内。当店の高級張り地ベッドは、上質なベビーベルベット／ベルベット素材を使用しており、レザーベッドは本革を使用しています。洗練された雰囲気を醸し出す、豪華なベッドフレーム。丸みを帯びたフォルムとふんわりとした張り地ヘッドボードが寝室にやさしく上品な印象を与え、まるで高級ホテルのような空間を演出します。ヘッドボードはクッション性に優れ、背もたれとしても快適でベッド上でのリラックスタイムに最適です。フレームには安定感のあるしっかりとした構造を採用し、軋み音を抑えた静音設計で、毎日の睡眠を快適にサポートします。ロープロファイル設計により、空間を広く見せる効果もあり、モダンインテリア・ホテルスタイル・エレガントな空間との相性も抜群です。新生活や寝室のグレードアップにふさわしいデザイン性と実用性を両立したプレミアムベッドフレームです。また、当店では5つ星ホテル仕様のラグジュアリーマットレスもご用意しております。硬さは5～6／10のバランス設計で、適度な弾力と安定感のある寝心地を実現しています。在庫につきましては、基本的に掲載画像のカラーのみご用意しておりますが、生地・レザー・カラーなどのカスタマイズも可能です（納期：約30日）。なお、カスタマイズには追加料金が発生する場合がございますので、ご購入前にお問い合わせください。在庫商品は、配送地域により5～12日でお届け可能です（離島を除く）。当店では、以下のサイズに対応した高級ベッドフレームおよびマットレスをご用意しております：・120cm対応（セミダブル）・140cm対応（ダブル）・142～150cm対応（クイーン）・152～160cm対応（クイーン）・180cm対応（キング）。マットレスは、高級スプリングマットレスおよびラテックスマットレスを取り扱っており、厚さは25cm・30cmの2種類です。",
      material:
        "高級張り地、ベビーベルベット／ベルベット、本革、クッション性ヘッドボード、静音設計フレーム構造",
      sizeText: "ダブル（140cmマットレス対応）",
      delivery: "お届け目安：30日以内",
      care:
        "柔らかい布で乾拭きを行ってください。張り地部分は強い摩擦や直射日光を避けてください。",
      shippingReturns:
        "送料無料です。離島・一部地域は追加送料がかかる場合があります。カスタマイズ納期は約30日です。",
      colors: ["掲載画像カラー"],
      sizes: ["ダブル（140cmマットレス対応）"],
      images: [
        "images/placeholders/premium-luxury-bed-frame-140-single-1.jpg",
        "images/placeholders/premium-luxury-bed-frame-140-single-2.jpg",
        "images/placeholders/premium-luxury-bed-frame-140-single-3.jpg",
        "images/placeholders/premium-luxury-bed-frame-140-single-4.jpg",
        "images/placeholders/premium-luxury-bed-frame-140-single-5.jpg",
        "images/placeholders/premium-luxury-bed-frame-140-single-6.jpg",
        "images/placeholders/premium-luxury-bed-frame-140-single-7.jpg"
      ],
      variants: {
        "ダブル（140cmマットレス対応）": {
          sku: "luxebed140-single",
          price: 174900,
          sizeText: "ダブル（140cmマットレス対応）"
        }
      },
      hasMattressOption: true,
      mattressOptions: {
        spring25: { "ダブル（140cmマットレス対応）": 59000 },
        spring30: { "ダブル（140cmマットレス対応）": 69000 },
        latex25: { "ダブル（140cmマットレス対応）": 109000 },
        latex30: { "ダブル（140cmマットレス対応）": 129000 }
      }
    },

    "premium-luxury-bed-frame-140-fixed": {
      category: "ベッド",
      name: "プレミアム ラグジュアリーベッドフレーム 140",
      price: 174900,
      description:
        "丸みを帯びたフォルムとふんわりとした張り地ヘッドボードが魅力の、ラグジュアリーなベッドフレーム。上質でホテルライクな寝室を演出します。",
      infoDescription:
        "高級張り地ベッド、レザーベッド、マットレスのご案内。当店の高級張り地ベッドは、上質なベビーベルベット／ベルベット素材を使用しており、レザーベッドは本革を使用しています。洗練された雰囲気を醸し出す、豪華なベッドフレーム。丸みを帯びたフォルムとふんわりとした張り地ヘッドボードが寝室にやさしく上品な印象を与え、まるで高級ホテルのような空間を演出します。ヘッドボードはクッション性に優れ、背もたれとしても快適でベッド上でのリラックスタイムに最適です。フレームには安定感のあるしっかりとした構造を採用し、軋み音を抑えた静音設計で、毎日の睡眠を快適にサポートします。ロープロファイル設計により、空間を広く見せる効果もあり、モダンインテリア・ホテルスタイル・エレガントな空間との相性も抜群です。新生活や寝室のグレードアップにふさわしいデザイン性と実用性を両立したプレミアムベッドフレームです。また、当店では5つ星ホテル仕様のラグジュアリーマットレスもご用意しております。硬さは5～6／10のバランス設計で、適度な弾力と安定感のある寝心地を実現しています。在庫につきましては、基本的に掲載画像のカラーのみご用意しておりますが、生地・レザー・カラーなどのカスタマイズも可能です（納期：約30日）。なお、カスタマイズには追加料金が発生する場合がございますので、ご購入前にお問い合わせください。在庫商品は、配送地域により5～12日でお届け可能です（離島を除く）。当店では、以下のサイズに対応した高級ベッドフレームおよびマットレスをご用意しております：・120cm対応（セミダブル）・140cm対応（ダブル）・142～150cm対応（クイーン）・152～160cm対応（クイーン）・180cm対応（キング）。マットレスは、高級スプリングマットレスおよびラテックスマットレスを取り扱っており、厚さは25cm・30cmの2種類です。",
      material:
        "高級張り地、ベビーベルベット／ベルベット、本革、クッション性ヘッドボード、静音設計フレーム構造",
      sizeText: "ダブル（140cmマットレス対応）",
      delivery: "お届け目安：30日以内",
      care:
        "柔らかい布で乾拭きを行ってください。張り地部分は強い摩擦や直射日光を避けてください。",
      shippingReturns:
        "送料無料です。離島・一部地域は追加送料がかかる場合があります。カスタマイズ納期は約30日です。",
      colors: ["掲載画像カラー"],
      sizes: ["ダブル（140cmマットレス対応）"],
      images: [
        "images/placeholders/premium-luxury-bed-frame-140-fixed-1.jpg",
        "images/placeholders/premium-luxury-bed-frame-140-fixed-2.jpg",
        "images/placeholders/premium-luxury-bed-frame-140-fixed-3.jpg",
        "images/placeholders/premium-luxury-bed-frame-140-fixed-4.jpg",
        "images/placeholders/premium-luxury-bed-frame-140-fixed-5.jpg",
        "images/placeholders/premium-luxury-bed-frame-140-fixed-6.jpg",
        "images/placeholders/premium-luxury-bed-frame-140-fixed-7.jpg"
      ],
      variants: {
        "ダブル（140cmマットレス対応）": {
          sku: "luxebed140-fixed",
          price: 174900,
          sizeText: "ダブル（140cmマットレス対応）"
        }
      },
      hasMattressOption: true,
      mattressOptions: {
        spring25: { "ダブル（140cmマットレス対応）": 59000 },
        spring30: { "ダブル（140cmマットレス対応）": 69000 },
        latex25: { "ダブル（140cmマットレス対応）": 109000 },
        latex30: { "ダブル（140cmマットレス対応）": 129000 }
      }
    },

    "modern-luxury-bed-frame-120": {
      category: "ベッド",
      name: "モダン ラグジュアリーベッドフレーム 120",
      price: 174900,
      description:
        "丸みを帯びたフォルムとクッション性のあるヘッドボードが魅力の、モダンラグジュアリーなベッドフレーム。上質でホテルライクな寝室を演出します。",
      infoDescription:
        "プレミアムな無垢材ベッドとマットレスをご紹介します。【収納もデザインも。上質な眠りをあなたの寝室に】■ 大容量の跳ね上げ収納でお部屋スッキリ ベッド下全面が収納スペースに。ガス圧式の跳ね上げ機構で力いらずにラクラク開閉。寝具・衣類・季節用品をまとめてスマートに収納できます。■ 頭元に便利な宮棚・本棚付き ヘッドボードには広めの棚板と小物置きスペースを完備。スマホ・リモコン・時計・本など、就寝前によく使うものをすっきりまとめておけます。■ 柔らかなヘッドクッション クッション性のある背もたれパネルで、就寝前の読書やスマホタイムも快適にサポートします。■ 天然木のあたたかみあるデザイン 北欧スタイルにも和モダンにも合う、ナチュラルウッドカラー。どんなインテリアにも自然に溶け込むシンプルで上質な佇まい。■ 豊富なサイズ展開 シングル / セミダブル / ダブル / クイーン / キング 一人暮らしから家族まで、ライフスタイルに合わせてお選びいただけます。【商品仕様】■ 素材：天然木（フレーム）／クッション材（ヘッドボード） ■ 機能：クッションヘッドボード ■ 対応マットレス厚：約20～30cm（別売り） ■ 組み立て：要組立。ヘッドボードは背もたれとしても快適で、ベッドでゆったりとくつろぐのに最適です。フレームは安定性と堅牢性に優れた構造で、きしみ音を抑える静音設計により、毎日の快適な睡眠をサポートします。このプレミアムベッドフレームはデザイン性と実用性を兼ね備え、新居や寝室のアップグレードに最適です。また、5つ星ホテル仕様の高級マットレスもご用意しております。硬さは5～6/10のバランスが良く、適度な弾力性と安定性で快適な睡眠を実現します。在庫状況については、通常は画像に掲載されている色のみとなりますが、他の色のカスタマイズも可能な場合があります（納期：約30日）。カスタマイズには追加料金が発生する場合がありますので、ご購入前にお問い合わせください。在庫のある商品は、配送地域（離島を除く）により5～12日でお届けいたします。当店では、以下のサイズの高品質なベッドフレームとマットレスをご用意しております。・120cm（セミダブル）・140cm（ダブル）・142-150cm（クイーン）・152-160cm（クイーン）・180cm（キング）高品質なスプリングマットレスとラテックスマットレスを取り扱っており、厚さは25cmと30cmの2種類からお選びいただけます。",
      material:
        "天然木フレーム、クッション材ヘッドボード、静音設計構造",
      sizeText: "シングル",
      delivery: "配送予定：30日以内",
      care:
        "柔らかい布で乾拭きを行ってください。強い摩擦や直射日光は避けてください。",
      shippingReturns:
        "送料無料です。離島・一部地域は追加送料がかかる場合があります。",
      colors: ["白", "青"],
      sizes: ["シングル", "セミダブル", "ダブル", "クイーン", "キング"],
      images: [
        "images/placeholders/modern-luxury-bed-frame-120-1.jpg",
        "images/placeholders/modern-luxury-bed-frame-120-2.jpg",
        "images/placeholders/modern-luxury-bed-frame-120-3.jpg",
        "images/placeholders/modern-luxury-bed-frame-120-4.jpg",
        "images/placeholders/modern-luxury-bed-frame-120-5.jpg",
        "images/placeholders/modern-luxury-bed-frame-120-6.jpg",
        "images/placeholders/modern-luxury-bed-frame-120-7.jpg"
      ],
      variants: {
        "シングル": {
          sku: "luxebed120-s",
          price: 174900,
          sizeText: "シングル"
        },
        "セミダブル": {
          sku: "luxebed120-sd",
          price: 174900,
          sizeText: "セミダブル"
        },
        "ダブル": {
          sku: "luxebed120-d",
          price: 174900,
          sizeText: "ダブル"
        },
        "クイーン": {
          sku: "luxebed120-q",
          price: 174900,
          sizeText: "クイーン"
        },
        "キング": {
          sku: "luxebed120-k",
          price: 174900,
          sizeText: "キング"
        }
      },
      hasMattressOption: true,
      mattressOptions: {
        spring25: {
          "セミダブル": 59000,
          "ダブル": 69000,
          "クイーン": 79000,
          "キング": 99000
        },
        spring30: {
          "セミダブル": 59000,
          "ダブル": 69000,
          "クイーン": 79000,
          "キング": 99000
        },
        latex25: {
          "セミダブル": 89000,
          "ダブル": 109000,
          "クイーン": 129000,
          "キング": 179000
        },
        latex30: {
          "セミダブル": 109000,
          "ダブル": 129000,
          "クイーン": 159000,
          "キング": 199000
        }
      }
    },

    "louve-dining-table-set-140": {
      category: "ダイニングセット",
      name: "ルーヴェ ダイニングテーブルセット",
      price: 218900,
      description:
        "無垢材のあたたかみと拡張性を兼ね備えた、上質なダイニングテーブルセット。ナチュラルで洗練された空間を演出します。",
      infoDescription:
        "Hokku Designs に着想を得た、タンカラーの長方形無垢材バタフライリーフ付きダイニングテーブルです。素材には、タン仕上げを施したオーク材の無垢材を使用しています。拡張可能なバタフライリーフを備えており、8〜10人掛けに対応します。サイズは約160cm〜300cmまで展開されており、標準サイズは140cm・160cm・180cmとなります。140cm、160cmのテーブルには椅子が4脚、180cmのテーブルには椅子が6脚付属します。カスタムサイズをご希望の場合はお問い合わせください。",
      material: "オーク無垢材、タン仕上げ、バタフライリーフ構造",
      sizeText: "140cm",
      delivery: "商品の種類を選択すると表示されます",
      care:
        "柔らかい布で乾拭きしてください。水分や熱いものを長時間直接置く場合は保護材のご使用をおすすめします。",
      shippingReturns:
        "送料無料です。離島・一部地域は追加送料がかかる場合があります。サイズや仕様により配送時期が変動する場合があります。",
      colors: ["ナチュラルウッド"],
      sizes: ["140cm", "160cm", "180cm"],
      images: [
        "images/placeholders/louve-dining-table-set-140-1.jpg",
        "images/placeholders/louve-dining-table-set-140-2.jpg",
        "images/placeholders/louve-dining-table-set-140-3.jpg",
        "images/placeholders/louve-dining-table-set-140-4.jpg",
        "images/placeholders/louve-dining-table-set-140-5.jpg"
      ],
      variants: {
        "140cm": {
          sku: "luxeds140",
          price: 218900,
          sizeText: "140cm"
        },
        "160cm": {
          sku: "luxeds160",
          price: 240900,
          sizeText: "160cm"
        },
        "180cm": {
          sku: "luxeds180",
          price: 240900,
          sizeText: "180cm"
        }
      },
      chairOptions: {
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

    "luna-stone-dining-set-160": {
      category: "ダイニングセット",
      name: "ルーナ ストーンダイニングセット 160",
      price: 207900,
      description:
        "シンタードストーン天板と三日月型ベースが印象的な、モダンな5点式ダイニングセット。空間に洗練された存在感をもたらします。",
      infoDescription:
        "ルーナ ストーンダイニングセット 160 は、アート性のある三日月型ベースと高品質な素材使いが魅力のモダンダイニングセットです。中央のダイニングテーブルには、耐熱性・耐キズ性・耐汚れ性に優れたシンタードストーン天板を採用し、ベースには大胆な三日月型のカーボンスチール構造を使用。機能性と造形美を兼ね備えた一台に仕上がっています。セットのチェアは、ライトグレーの張地とダークトーンの外側シェルによるツートーン配色が特徴で、やわらかくカーブしたウィングバックシルエットが上品な印象を与えます。ミニマルでありながらラグジュアリーな雰囲気を持ち、モダンなダイニング空間を美しく整えます。",
      material:
        "シンタードストーン天板、カーボンスチールベース、マイクロファイバーレザーチェア、メタル脚",
      sizeText: "テーブル W 1600 × D 900 × H 750 mm / チェア4脚付き",
      delivery: "送料無料",
      care:
        "天板は柔らかい布で拭き、チェア張地は乾いた布または固く絞った布でお手入れしてください。",
      shippingReturns:
        "送料無料です。離島・一部地域は追加送料がかかる場合があります。注文個数によりお届け日が変わる場合があります。",
      colors: ["グレー"],
      sizes: ["160cm・5点セット"],
      images: [
        "images/placeholders/luna-stone-dining-set-160-1.jpg",
        "images/placeholders/luna-stone-dining-set-160-2.jpg",
        "images/placeholders/luna-stone-dining-set-160-3.jpg",
        "images/placeholders/luna-stone-dining-set-160-4.jpg",
        "images/placeholders/luna-stone-dining-set-160-5.jpg",
        "images/placeholders/luna-stone-dining-set-160-6.jpg",
        "images/placeholders/luna-stone-dining-set-160-7.jpg",
        "images/placeholders/luna-stone-dining-set-160-8.jpg"
      ]
    },

    "wabisabi-solid-wood-dining-set": {
  category: "ダイニングセット",
  name: "ワビサビ 無垢材ダイニングセット",
  price: 207900,
  description:
    "天然木の豊かな表情と、有機的で美しいフォルムが魅力のダイニングセット。北欧の侘び寂びスタイルを取り入れた、上質で洗練された食空間を演出します。",
  infoDescription:
    "北欧の侘び寂びスタイルを取り入れた無垢材ダイニングセットです。オーク無垢材を使用し、木目の自然な表情を引き立てるマット仕上げの保護コーティングを施しています。雲や豆を思わせる不規則で有機的な天板フォルムと、アーチ脚を備えたトレッスルスタイルのベースが特徴で、自然な簡素さと一点もののような存在感を兼ね備えています。8〜10人掛けに対応し、140cm・160cm・180cmの標準サイズをご用意。140cmと160cmにはチェア4脚、180cmにはチェア6脚のセットがお選びいただけます。最大300cmまでのオーダーメイド・セミオーダーにも対応しておりますので、ご希望の場合はお気軽にお問い合わせください。",
  material: "オーク無垢材、マット保護コーティング",
  sizeText: "140cm",
  delivery: "お届け目安：30日以内 / 送料無料 / 組立無料",
  care:
    "柔らかい布で乾拭きしてください。水分や熱いものを長時間直接置く場合は、コースターや保護マットのご使用をおすすめします。",
  shippingReturns:
    "送料無料・組立無料です。離島・一部地域は追加送料がかかる場合があります。サイズや仕様により配送時期が変動する場合があります。オーダーメイドサイズをご希望の場合はお問い合わせください。",
  colors: ["ナチュラルウッド"],
  sizes: ["140cm", "160cm", "180cm"],
  images: [
    "images/placeholders/wabisabi-solid-wood-dining-set-1.jpg",
    "images/placeholders/wabisabi-solid-wood-dining-set-2.jpg",
    "images/placeholders/wabisabi-solid-wood-dining-set-3.jpg",
    "images/placeholders/wabisabi-solid-wood-dining-set-4.jpg",
    "images/placeholders/wabisabi-solid-wood-dining-set-5.jpg",
    "images/placeholders/wabisabi-solid-wood-dining-set-6.jpg",
    "images/placeholders/wabisabi-solid-wood-dining-set-7.jpg"
  ],
  variants: {
    "140cm": {
      sku: "luxeds140-ws",
      price: 207900,
      sizeText: "140cm"
    },
    "160cm": {
      sku: "luxeds160-ws",
      price: 229900,
      sizeText: "160cm"
    },
    "180cm": {
      sku: "luxeds180-ws",
      price: 240900,
      sizeText: "180cm"
    }
  },
  chairOptions: {
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
  category: "ダイニングセット",
  name: "ホック ソリッドウッドダイニングセット",
  price: 174900,
  description:
    "天然木のぬくもりと拡張性を兼ね備えた、上質なダイニングセット。北欧風のやわらかな存在感と、モダンで洗練された空間づくりを両立します。",
  infoDescription:
    "Hokku Designs に着想を得た、タンカラーの長方形無垢材バタフライリーフ付きダイニングテーブルです。素材には、タン仕上げを施したオーク材の無垢材を使用しています。拡張可能なバタフライリーフを備えており、8〜10人掛けに対応します。サイズは約160cm〜300cmまで展開されており、標準サイズは160cmおよび180cmとなりますので、カスタムサイズをご希望の場合はお問い合わせください。140cm、160cmのテーブルには椅子が4脚、180cmのテーブルには椅子が6脚付属します。",
  material: "オーク無垢材、タン仕上げ、バタフライリーフ構造",
  sizeText: "140cm",
  delivery: "商品の種類を選択すると表示されます",
  care:
    "柔らかい布で乾拭きしてください。水分や熱いものを長時間直接置く場合は保護材のご使用をおすすめします。",
  shippingReturns:
    "送料無料です。離島・一部地域は追加送料がかかる場合があります。サイズや仕様により配送時期が変動する場合があります。",
  colors: ["タン"],
  sizes: ["140cm", "160cm", "180cm"],
  images: [
    "images/placeholders/hokku-solid-wood-dining-set-1.jpg",
    "images/placeholders/hokku-solid-wood-dining-set-2.jpg",
    "images/placeholders/hokku-solid-wood-dining-set-3.jpg",
    "images/placeholders/hokku-solid-wood-dining-set-4.jpg",
    "images/placeholders/hokku-solid-wood-dining-set-5.jpg",
    "images/placeholders/hokku-solid-wood-dining-set-6.jpg",
    "images/placeholders/hokku-solid-wood-dining-set-7.jpg"
  ],
  variants: {
    "140cm": {
      sku: "luxeds180-140",
      price: 174900,
      sizeText: "140cm"
    },
    "160cm": {
      sku: "luxeds180-160",
      price: 196900,
      sizeText: "160cm"
    },
    "180cm": {
      sku: "luxeds180-180",
      price: 218900,
      sizeText: "180cm"
    }
  },
  chairOptions: {
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

"candy-cloud-sofa-l": {
  category: "ソファ",
  name: "キャンディ クラウドソファ L",
  price: 482900,
  description:
    "丸みを帯びたフォルムと上質なファブリックが魅力の、ラグジュアリーなL字ソファ。傷や汚れに強く、ペットのいるご家庭にも取り入れやすい一台です。",
  infoDescription:
    "ラグジュアリー タフト仕様「キャンディ」ソファ（クラウドソファ）。Aerisのキャンディ型ブークレソファに着想を得たデザインです。丸みを帯びたフォルムが印象的なモダンなタフトソファで、その柔らかくふんわりとした見た目から「クラウドソファ」や「マシュマロソファ」とも呼ばれます。立体的でパフのような独特のフォルムと、なめらかで丸みのあるラインが身体のカーブにやさしくフィットします。張地はブークレ生地、テディベルベット、またはラムウールを使用。肌触りが良く、通気性があり、やわらかな質感が特徴です。構造はカラマツやパイン材などの無垢材フレームを採用し、高密度ウレタンフォームやダウンを充填。安定感がありながらもクッション性に優れた座り心地を実現しています。",
  material:
    "高級ファブリック、無垢材フレーム、高密度ウレタンフォーム、ダウン",
  sizeText: "310cm",
  delivery: "お届け目安：30日以内",
  care:
    "柔らかい布で日常のお手入れを行ってください。汚れはやさしく拭き取り、強い摩擦や長時間の直射日光は避けてください。",
  shippingReturns:
    "送料無料・組立無料です。離島・一部地域は追加送料がかかる場合があります。",
  colors: ["ベージュ", "ブラウン", "ホワイト", "グレー"],
  sizes: ["310cm", "350cm", "380cm"],
  images: [
    "images/placeholders/candy-cloud-sofa-l-1.jpg",
    "images/placeholders/candy-cloud-sofa-l-2.jpg",
    "images/placeholders/candy-cloud-sofa-l-3.jpg",
    "images/placeholders/candy-cloud-sofa-l-4.jpg",
    "images/placeholders/candy-cloud-sofa-l-5.jpg",
    "images/placeholders/candy-cloud-sofa-l-6.jpg",
    "images/placeholders/candy-cloud-sofa-l-7.jpg"
  ],
  variants: {
    "310cm": {
      sku: "luxesofa360L-310",
      price: 482900,
      sizeText: "310cm"
    },
    "350cm": {
      sku: "luxesofa360L-350",
      price: 526900,
      sizeText: "350cm"
    },
    "380cm": {
      sku: "luxesofa360L-380",
      price: 548900,
      sizeText: "380cm"
    }
  }
},

"luxury-wide-sofa-392": {
  category: "ソファ",
  name: "ラグジュアリー ワイドソファ 392",
  price: 379000,
  description:
    "392cmの圧倒的なワイドサイズが魅力の、モダンラグジュアリーな超大型ソファ。ゆったりとした座り心地で、上質なリビング空間を演出します。",
  infoDescription:
    "モダンラグジュアリー特大ソファ、392cm 布張り 6～7人掛けソファです。人間工学に基づいた湾曲した背もたれが、さまざまな座り姿勢をやさしく支え、長時間の会話、読書、映画鑑賞でも快適に過ごせます。高反発ウレタンスポンジが体圧を分散し、厳選された無垢材とスプリング補強構造が、強度と耐久性を両立。洗練されたオールインワンシルエットが、リビング、ラウンジ、応接室、オフィスなど多様な空間にモダンで上質な印象を与えます。生地は摩耗や汚れ、こぼれにも強く、日常使いしやすい仕様です。",
  material:
    "高級ファブリック、無垢材、高反発ウレタンスポンジ、スプリング",
  sizeText: "W 3920 mm",
  delivery: "30日以内 ※注文個数によりお届け日が変わることがあります。",
  care:
    "柔らかい布で日常のお手入れを行ってください。汚れは部分的にやさしく拭き取り、強い摩擦や長時間の直射日光は避けてください。",
  shippingReturns:
    "送料無料です。離島・一部地域は追加送料がかかる場合があります。",
  colors: ["アイボリー"],
  sizes: ["392cm"],
  images: [
    "images/placeholders/luxury-wide-sofa-392-1.jpg",
    "images/placeholders/luxury-wide-sofa-392-2.jpg",
    "images/placeholders/luxury-wide-sofa-392-3.jpg",
    "images/placeholders/luxury-wide-sofa-392-4.jpg",
    "images/placeholders/luxury-wide-sofa-392-5.jpg",
    "images/placeholders/luxury-wide-sofa-392-6.jpg",
    "images/placeholders/luxury-wide-sofa-392-7.jpg"
  ],
  variants: {
    "392cm": {
      sku: "luxesofa392",
      price: 379000,
      sizeText: "392cm"
    }
  }
},

"luxury-leather-sofa-293": {
  category: "ソファ",
  name: "ラグジュアリー レザーソファ 293",
  price: 394900,
  description:
    "本革・高級マイクロファイバーレザーから選べる、293cmのモダンラグジュアリーなL字ソファ。スタイリッシュな存在感と快適な座り心地を兼ね備えた一台です。",
  infoDescription:
    "モダンラグジュアリー特大ソファ、293cm L字型ソファです。人間工学に基づいた湾曲した背もたれが、さまざまな座り姿勢をやさしく支え、長時間の会話、読書、映画鑑賞でも快適に過ごせます。高反発ウレタンスポンジが体圧を分散し、厳選された無垢材とスプリング補強構造が、強度と耐久性を両立。洗練されたオールインワンシルエットが、リビング、寝室、オフィス、応接室、ラウンジなど多様な空間にモダンで上質な印象を与えます。張地には本革または高級マイクロファイバーレザーを採用し、摩耗や汚れ、こぼれにも強く、日常使いしやすい仕様です。",
  material:
    "本革、高級マイクロファイバーレザー、無垢材、高反発ウレタンスポンジ、スプリング",
  sizeText: "W 2930 mm",
  delivery: "30日以内お届け",
  care:
    "柔らかい布で日常のお手入れを行ってください。汚れは部分的にやさしく拭き取り、強い摩擦や長時間の直射日光は避けてください。",
  shippingReturns:
    "送料無料です。離島・一部地域は追加送料がかかる場合があります。組立無料です。",
  colors: ["ベージュ", "ブラウン", "ホワイト", "オレンジ", "ブラック"],
  sizes: ["293cm"],
  images: [
    "images/placeholders/luxury-leather-sofa-293-1.jpg",
    "images/placeholders/luxury-leather-sofa-293-2.jpg",
    "images/placeholders/luxury-leather-sofa-293-3.jpg",
    "images/placeholders/luxury-leather-sofa-293-4.jpg",
    "images/placeholders/luxury-leather-sofa-293-5.jpg",
    "images/placeholders/luxury-leather-sofa-293-6.jpg",
    "images/placeholders/luxury-leather-sofa-293-7.jpg"
  ],
  variants: {
    "293cm": {
      sku: "luxesofa293l",
      price: 394900,
      sizeText: "293cm"
    }
  }
},

"victoria-l-sofa-275": {
  category: "ソファ",
  name: "ヴィクトリア L字ソファ 275",
  price: 394900,
  description:
    "本革・高級マイクロファイバーレザーから選べる、モダンで洗練されたL字ソファ。ロープロファイルの美しいフォルムと、ゆったりとした座り心地を兼ね備えた一台です。",
  infoDescription:
    "L字型 モダン ミニマル 「ヴィクトリア セレブリティ」ソファ 275×180×80cm。ホワイトやベージュを基調とした、モダンなキャットクロー対応レザーソファ仕様のL字モデルです。ふっくらとしたチャンネルタフテッドの座面クッションと、縦方向のステッチが印象的で、ロープロファイルのすっきりとしたフォルムが空間をより広く洗練された印象に演出します。ワイドで奥行きのあるクッション設計により、ゆったりと体を預けられる快適な座り心地を実現。張地はアイランドクロス、テックファブリック、アンチキャットスクラッチレザーなどから選択可能で、現代的なデザインと機能性を兼ね備えています。モジュール設計のため、リビングスペースに合わせて柔軟なレイアウト変更も可能です。",
  material:
    "本革、高級マイクロファイバーレザー、アイランドクロス、テックファブリック、アンチキャットスクラッチレザー、クッション材",
  sizeText: "275cm",
  delivery: "30日以内お届け",
  care:
    "柔らかい布で日常のお手入れを行ってください。汚れは部分的にやさしく拭き取り、強い摩擦や長時間の直射日光は避けてください。",
  shippingReturns:
    "送料無料です。離島・一部地域は追加送料がかかる場合があります。組立無料です。",
  colors: ["ベージュ", "ホワイト", "ブラウン", "ブラック", "オレンジ"],
  sizes: ["275cm", "350cm"],
  images: [
    "images/placeholders/victoria-l-sofa-275-1.jpg",
    "images/placeholders/victoria-l-sofa-275-2.jpg",
    "images/placeholders/victoria-l-sofa-275-3.jpg",
    "images/placeholders/victoria-l-sofa-275-4.jpg",
    "images/placeholders/victoria-l-sofa-275-5.jpg",
    "images/placeholders/victoria-l-sofa-275-6.jpg",
    "images/placeholders/victoria-l-sofa-275-7.jpg"
  ],
  variants: {
    "275cm": {
      sku: "luxeLsofa275",
      price: 394900,
      sizeText: "275cm"
    },
    "350cm": {
      sku: "luxeLsofa275-350",
      price: 438900,
      sizeText: "350cm"
    }
  }
},

"modern-luxury-l-sofa-246": {
  category: "ソファ",
  name: "モダン ラグジュアリー L字ソファ 246",
  price: 372900,
  description:
    "本革・高級マイクロファイバーレザーから選べる、洗練されたL字型セクショナルソファ。スリムなメタル脚とワイドなシェーズロングを備え、上質でスタイリッシュなリビング空間を演出します。",
  infoDescription:
    "モダンラグジュアリー ブラック L字型セクショナルソファ 246cm。マイクロファイバーレザー、本革トップグレイン牛革、または高品質ナッパレザーを使用し、ラグジュアリーで耐久性の高い仕上がりです。イタリアンテイストや北欧ミニマルデザインに着想を得た洗練されたフォルムで、スリムなメタル脚を採用。ゆったりとくつろげるワイドなシェーズロング（カウチ部分）を備えています。サイズは246cmから356cmまで対応可能で、上質な座り心地と存在感を兼ね備えた一台です。",
  material:
    "本革、トップグレイン牛革、高級マイクロファイバーレザー、高品質ナッパレザー、無垢材フレーム、クッション材、メタル脚",
  sizeText: "246cm",
  delivery: "30日以内お届け",
  care:
    "柔らかい布で乾拭きしてください。汚れは部分的にやさしく拭き取り、強い摩擦や直射日光は避けてください。",
  shippingReturns:
    "送料無料です。離島・一部地域は追加送料がかかる場合があります。組立無料です。",
  colors: ["ブラック", "ベージュ", "ブラウン", "オレンジ"],
  sizes: ["246cm", "276cm", "316cm", "356cm"],
  images: [
    "images/placeholders/modern-luxury-l-sofa-246-1.jpg",
    "images/placeholders/modern-luxury-l-sofa-246-2.jpg",
    "images/placeholders/modern-luxury-l-sofa-246-3.jpg",
    "images/placeholders/modern-luxury-l-sofa-246-4.jpg",
    "images/placeholders/modern-luxury-l-sofa-246-5.jpg",
    "images/placeholders/modern-luxury-l-sofa-246-6.jpg",
    "images/placeholders/modern-luxury-l-sofa-246-7.jpg"
  ],
  variants: {
    "246cm": {
      sku: "luxesofa246",
      price: 372900,
      sizeText: "246cm"
    },
    "276cm": {
      sku: "luxesofa246-276",
      price: 405900,
      sizeText: "276cm"
    },
    "316cm": {
      sku: "luxesofa246-316",
      price: 438900,
      sizeText: "316cm"
    },
    "356cm": {
      sku: "luxesofa246-356",
      price: 482900,
      sizeText: "356cm"
    }
  }
},

"modern-luxury-l-sofa-250": {
  category: "ソファ",
  name: "モダン ラグジュアリー L字ソファ 250",
  price: 372900,
  description:
    "本革・高級マイクロファイバーレザーから選べる、洗練されたL字型ラグジュアリーソファ。湾曲した背もたれとワイドな座面が、快適で上質なリビング空間を演出します。",
  infoDescription:
    "モダンラグジュアリー特大ソファ、250cm L字型布張り 5〜6人掛けソファ。人間工学に基づいた湾曲した背もたれが、さまざまな座り姿勢をやさしく支え、長時間の会話や読書、映画鑑賞でも快適な座り心地を提供します。内部には高反発ウレタンスポンジと厳選された無垢材を採用し、体圧を分散しながら耐久性と安定感を両立。高品質の木材とスプリングで補強されたクッション構造により、日常使いにも適した快適性を備えています。洗練されたオールインワンのシルエットが、リビングルーム、寝室、オフィス、応接室、ラウンジなど、さまざまな空間にモダンで豪華な印象をもたらします。",
  material:
    "本革、高級マイクロファイバーレザー、無垢材、高反発ウレタンスポンジ、スプリング",
  sizeText: "250cm",
  delivery: "30日以内お届け",
  care:
    "柔らかい布で日常のお手入れを行ってください。汚れは部分的にやさしく拭き取り、強い摩擦や長時間の直射日光は避けてください。",
  shippingReturns:
    "送料無料です。離島・一部地域は追加送料がかかる場合があります。組立無料です。",
  colors: ["オレンジ", "ホワイト", "ブラウン", "ブラック", "グレイ"],
  sizes: ["250cm", "280cm", "310cm"],
  images: [
    "images/placeholders/modern-luxury-l-sofa-250-1.jpg",
    "images/placeholders/modern-luxury-l-sofa-250-2.jpg",
    "images/placeholders/modern-luxury-l-sofa-250-3.jpg",
    "images/placeholders/modern-luxury-l-sofa-250-4.jpg",
    "images/placeholders/modern-luxury-l-sofa-250-5.jpg",
    "images/placeholders/modern-luxury-l-sofa-250-6.jpg",
    "images/placeholders/modern-luxury-l-sofa-250-7.jpg"
  ],
  variants: {
    "250cm": {
      sku: "luxesofa250lo",
      price: 372900,
      sizeText: "250cm"
    },
    "280cm": {
      sku: "luxesofa250lo-280",
      price: 405900,
      sizeText: "280cm"
    },
    "310cm": {
      sku: "luxesofa250lo-310",
      price: 438900,
      sizeText: "310cm"
    }
  }
},
"luxury-candy-sofa-280": {
  category: "ソファ",
  name: "ラグジュアリー キャンディソファ 280",
  price: 389000,
  description:
    "高級ファブリックを使用した、丸みのあるフォルムが魅力のラグジュアリーなキャンディソファ。やわらかな存在感で空間を上質に演出します。",
  infoDescription:
    "ラグジュアリー タフト仕様「キャンディ」ソファ（クラウドソファ）。Aerisのキャンディ型ブークレソファに着想を得たデザインです。丸みを帯びたフォルムが印象的なモダンなタフトソファで、その柔らかくふんわりとした見た目から『クラウドソファ』や『マシュマロソファ』とも呼ばれております。立体的でパフのような独特のフォルムと、なめらかで丸みのあるラインが身体のカーブに優しくフィットします。張地はブークレ生地、テディベルベット、またはラムウールを使用。肌触りが良く、通気性があり、やわらかな質感が特徴です。構造は、カラマツやパイン材などの無垢材フレームを採用し、高密度ウレタンフォームやダウンを充填。安定感がありながらもクッション性に優れた座り心地を実現しております。",
  material:
    "高級ファブリック、ブークレ生地、テディベルベット、ラムウール、無垢材フレーム、高密度ウレタンフォーム、ダウン",
  sizeText: "280cm",
  delivery: "30日以内お届け",
  care:
    "柔らかい布でやさしくお手入れしてください。汚れは部分的に拭き取り、強い摩擦や長時間の直射日光は避けてください。",
  shippingReturns:
    "送料無料です。離島・一部地域は追加送料がかかる場合があります。組立無料です。",
  colors: ["掲載画像カラー"],
  sizes: ["280cm", "300cm", "320cm", "340cm"],
  images: [
    "images/placeholders/luxury-candy-sofa-280-1.jpg",
    "images/placeholders/luxury-candy-sofa-280-2.jpg",
    "images/placeholders/luxury-candy-sofa-280-3.jpg",
    "images/placeholders/luxury-candy-sofa-280-4.jpg",
    "images/placeholders/luxury-candy-sofa-280-5.jpg",
  ],
  variants: {
    "280cm": {
      sku: "luxesofa280",
      price: 389000,
      sizeText: "280cm"
    },
    "300cm": {
      sku: "luxesofa300",
      price: 409000,
      sizeText: "300cm"
    },
    "320cm": {
      sku: "luxesofa320",
      price: 429000,
      sizeText: "320cm"
    },
    "340cm": {
      sku: "luxesofa340",
      price: 449000,
      sizeText: "340cm"
    }
  }
},
"luxury-sectional-sofa-310-l": {
  category: "ソファ",
  name: "ラグジュアリー モダン L字型セクショナルソファ 310",
  price: 449000,
  description:
    "高級ファブリックを使用した、モダンで洗練されたL字型セクショナルソファ。傷・汚れ・爪とぎに強く、ペットのいるご家庭にも取り入れやすい上質な一台です。",
  infoDescription:
    "ラグジュアリー モダン L字型セクショナルソファ。高級感あふれるモジュラー式コーナーソファセットです。4人掛け・5人掛け・7人掛けなど複数のレイアウト構成に対応可能で、サイズは310cmと358cmからお選びいただけます。高品質ファブリックを使用し、モダンで上質なリビング空間を演出します。",
  material:
    "高級ファブリック、クッション材、無垢材フレーム、モジュラー構造",
  sizeText: "310cm",
  delivery: "30日以内お届け",
  care:
    "柔らかい布で日常のお手入れを行ってください。汚れは部分的にやさしく拭き取り、強い摩擦や長時間の直射日光は避けてください。",
  shippingReturns:
    "送料無料です。離島・一部地域は追加送料がかかる場合があります。組立無料です。注文個数によりお届け日が変わることがあります。",
  colors: ["掲載画像カラー"],
  sizes: ["310cm", "358cm"],
  images: [
    "images/placeholders/luxury-sectional-sofa-310-l-1.jpg",
    "images/placeholders/luxury-sectional-sofa-310-l-2.jpg",
    "images/placeholders/luxury-sectional-sofa-310-l-3.jpg",
    "images/placeholders/luxury-sectional-sofa-310-l-4.jpg",
    "images/placeholders/luxury-sectional-sofa-310-l-5.jpg",
    "images/placeholders/luxury-sectional-sofa-310-l-6.jpg",
    "images/placeholders/luxury-sectional-sofa-310-l-7.jpg"
  ],
  variants: {
    "310cm": {
      sku: "luxesofa310l",
      price: 449000,
      sizeText: "310cm"
    },
    "358cm": {
      sku: "luxesofa358l",
      price: 479000,
      sizeText: "358cm"
    }
  }
},

"luna-round-dining-set": {
  category: "ダイニングセット",
  name: "ルナ ラウンドダイニングセット",
  price: 196900,
  description:
    "大理石調の天板と彫刻的なベースが魅力の、ラグジュアリーな円形ダイニングセット。上質で洗練された食空間を演出します。",
  infoDescription:
    "ラグジュアリーなLUNA（ルナ）ラウンドダイニングセットは、現代的なデザインが特徴です。天板にはポリッシュ仕上げのシンタードストーンを使用し、リアルな石目模様を再現しています。ベース部分はブラックチタン、木材、ステンレススチールを組み合わせた彫刻的なペデスタルデザインです。セットには、回転式のレイジースーザン（中央回転トレー）が内蔵されています。サイズは直径120cmまたは150cmで、4～6名用です。",
  material:
    "シンタードストーン天板、ブラックチタン、木材、ステンレススチール、回転式レイジースーザン",
  sizeText: "直径120cm",
  delivery: "商品の種類を選択すると表示されます",
  care:
    "柔らかい布で乾拭きしてください。汚れはやさしく拭き取り、研磨剤入り洗剤や硬いブラシは避けてください。",
  shippingReturns:
    "送料無料です。離島・一部地域は追加送料がかかる場合があります。組立無料です。お届けは30日以内です。",
  colors: ["掲載画像カラー"],
  sizes: ["120cm", "150cm"],
  images: [
    "images/placeholders/luna-round-dining-set-1.jpg",
    "images/placeholders/luna-round-dining-set-2.jpg",
    "images/placeholders/luna-round-dining-set-3.jpg",
    "images/placeholders/luna-round-dining-set-4.jpg",
    "images/placeholders/luna-round-dining-set-5.jpg",
    "images/placeholders/luna-round-dining-set-6.jpg",
    "images/placeholders/luna-round-dining-set-7.jpg"
  ],
  variants: {
    "120cm": {
      sku: "luxeds130",
      price: 196900,
      sizeText: "直径120cm"
    },
    "150cm": {
      sku: "luxeds150-round",
      price: 218900,
      sizeText: "直径150cm"
    }
  },
  chairOptions: {
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
"luna-round-dining-set": {
  category: "ダイニングセット",
  name: "ルナ ラウンドダイニングセット",
  price: 196900,
  description:
    "大理石調の天板と彫刻的なペデスタルベースが美しい、ラグジュアリーな丸型ダイニングセット。上質で洗練されたダイニング空間を演出します。",
  infoDescription:
    "ラグジュアリーなLUNA（ルナ）ラウンドダイニングセットは、現代的なデザインが特徴です。天板にはポリッシュ仕上げのシンタードストーンを使用し、リアルな石目模様を再現しています。ベース部分はブラックチタン、木材、ステンレススチールを組み合わせた彫刻的なペデスタルデザインです。セットには、回転式のレイジースーザン（中央回転トレー）が内蔵されています。サイズは直径120cmまたは150cmで、4〜6名用です。",
  material:
    "シンタードストーン天板、ブラックチタン、木材、ステンレススチール",
  sizeText: "直径120cm",
  delivery: "商品の種類を選択すると表示されます",
  care:
    "天板は柔らかい布で拭き、硬いブラシや研磨材入り洗剤は避けてください。",
  shippingReturns:
    "送料無料です。離島・一部地域は追加送料がかかる場合があります。サイズや仕様により配送時期が変動する場合があります。",
  colors: ["大理石調"],
  sizes: ["120cm", "150cm"],
  images: [
    "images/placeholders/luna-round-dining-set-1.jpg",
    "images/placeholders/luna-round-dining-set-2.jpg",
    "images/placeholders/luna-round-dining-set-3.jpg",
    "images/placeholders/luna-round-dining-set-4.jpg",
    "images/placeholders/luna-round-dining-set-5.jpg",
    "images/placeholders/luna-round-dining-set-6.jpg",
    "images/placeholders/luna-round-dining-set-7.jpg"
  ],
  variants: {
    "120cm": {
      sku: "luxeds130-120",
      price: 196900,
      sizeText: "直径120cm"
    },
    "150cm": {
      sku: "luxeds130-150",
      price: 218900,
      sizeText: "直径150cm"
    }
  },
  chairOptions: {
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
"silas-round-dining-set": {
  category: "ダイニングセット",
  name: "シラス ラウンドダイニングセット",
  price: 141900,
  description:
    "大理石調のシンタードストーン天板と洗練されたホワイトチェアを組み合わせた、モダンで上質な丸型ダイニングセット。明るくラグジュアリーな空間を演出します。",
  infoDescription:
    "モダンでミニマルなダイニングセットは、印象的なホワイトカラーのシンタードストーン製ラウンドテーブルに、洗練されたホワイト張りのダイニングチェアを組み合わせたデザインが特徴です。Silas シンタードストーン ダイニングテーブルは、広々としたホワイトカラーのシンタードストーン天板と、特徴的なコーン型のスチール製ベースを備えており、共有しやすい回転式のレイジーサン（回転盤）も付属しています。シンタードストーンは、耐久性に優れ、環境に配慮されたエコ素材であり、食品に直接触れても安心なフードグレード素材のため、キズや熱に強い特長があります。サイズは直径約120cm〜180cmまで展開されており、標準サイズは120cmとなりますので、カスタムサイズをご希望の場合はお問い合わせください。NC-945 ダイニングチェアは、装飾的な波状の横ステッチが施された、丸みのある背もたれデザインが特徴の肘掛けなしサイドチェアです。張地には、耐久性がありお手入れしやすいオフホワイトカラーの合成皮革（PUレザー）を使用し、脚部にはホワイト塗装仕上げのテーパードスチール脚を採用しております。",
  material:
    "シンタードストーン天板、スチールベース、PUレザーチェア、スチール脚",
  sizeText: "直径120cm",
  delivery: "商品の種類を選択すると表示されます",
  care:
    "天板は柔らかい布で拭き、硬いブラシや研磨材入り洗剤は避けてください。チェアは乾いた布または固く絞った布でお手入れしてください。",
  shippingReturns:
    "送料無料です。離島・一部地域は追加送料がかかる場合があります。サイズや仕様により配送時期が変動する場合があります。",
  colors: ["ホワイト"],
  sizes: ["120cm", "150cm"],
  images: [
    "images/placeholders/silas-round-dining-set-1.jpg",
    "images/placeholders/silas-round-dining-set-2.jpg",
    "images/placeholders/silas-round-dining-set-3.jpg",
    "images/placeholders/silas-round-dining-set-4.jpg",
    "images/placeholders/silas-round-dining-set-5.jpg",
    "images/placeholders/silas-round-dining-set-6.jpg",
    "images/placeholders/silas-round-dining-set-7.jpg"
  ],
  variants: {
    "120cm": {
      sku: "luxeds120-120",
      price: 141900,
      sizeText: "直径120cm"
    },
    "150cm": {
      sku: "luxeds120-150",
      price: 163900,
      sizeText: "直径150cm"
    }
  },
  chairOptions: {
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
  category: "ダイニングセット",
  name: "クラズ シンタードストーンダイニングセット",
  price: 130900,
  description:
    "大理石調シンタードストーン天板とフルーテッドデザインのベースが印象的な、モダンラグジュアリーなダイニングセット。上質で洗練された食空間を演出します。",
  infoDescription:
    "エレガントなダイニングセットは、Claz シンタードストーン ダイニングテーブルに同シリーズの Claz ダイニングチェアを組み合わせたもので、洗練されたモダンな美しさを演出します。ダイニングテーブルは、PARE または Claz モデルとして掲載されることが多く、ホワイト、ブラウン、ブラックの大理石調の模様が特徴のシンタードストーン天板を採用しております。ベースはフルーテッドパネル仕様のペデスタルデザインで、足元には高級感を添えるステンレス製ゴールド仕上げが施されております。シンタードストーンは、耐久性に優れ、環境に配慮されたエコ素材であり、食品に直接触れても安心なフードグレード素材のため、キズや熱に強い特長があります。テーブルのエッジは、鋭い角によるケガを防ぐため、オーバルまたはカーブ形状の滑らかに磨き上げられたデザインとなっております。本セットは4人から8人まで対応しており、一般的なテーブルサイズは幅130cm～200cmです。標準サイズは160cmとなりますので、カスタムサイズをご希望の場合はお問い合わせください。ダイニングチェアは、現代的なシルエットと身体にフィットする背もたれを備え、ベージュカラーのマイクロファイバーレザー張りで、スリムでテーパードされた脚部が全体のミニマルなデザインと調和しております。",
  material:
    "シンタードストーン天板、ステンレスゴールド仕上げベース、マイクロファイバーレザーチェア",
  sizeText: "140cm",
  delivery: "商品の種類を選択すると表示されます",
  care:
    "天板は柔らかい布で拭き、硬いブラシや研磨材入り洗剤は避けてください。チェア張地は乾いた布または固く絞った布でお手入れしてください。",
  shippingReturns:
    "送料無料です。離島・一部地域は追加送料がかかる場合があります。サイズや仕様により配送時期が変動する場合があります。",
  colors: ["ホワイト系マーブル", "ブラウン系マーブル", "ブラック系マーブル"],
  sizes: ["140cm", "160cm", "180cm"],
  images: [
    "images/placeholders/claz-sintered-stone-dining-set-1.jpg",
    "images/placeholders/claz-sintered-stone-dining-set-2.jpg",
    "images/placeholders/claz-sintered-stone-dining-set-3.jpg",
    "images/placeholders/claz-sintered-stone-dining-set-4.jpg",
    "images/placeholders/claz-sintered-stone-dining-set-5.jpg",
    "images/placeholders/claz-sintered-stone-dining-set-6.jpg",
    "images/placeholders/claz-sintered-stone-dining-set-7.jpg"
  ],
  variants: {
    "140cm": {
      sku: "luxeds160-140",
      price: 130900,
      sizeText: "140cm"
    },
    "160cm": {
      sku: "luxeds160-160",
      price: 141900,
      sizeText: "160cm"
    },
    "180cm": {
      sku: "luxeds160-180",
      price: 163900,
      sizeText: "180cm"
    }
  },
  chairOptions: {
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
  category: "ダイニングセット",
  name: "エレガント ラウンドダイニングセット",
  price: 141900,
  description:
    "大理石調シンタードストーン天板と彫刻的なメタルベースが印象的な、モダンラグジュアリーな丸ダイニングセット。上質で洗練された食空間を演出します。",
  infoDescription:
    "エレガントラウンドダイニングテーブルは、ホワイトマーブルまたはシンタードストーン天板を採用し、彫刻的で印象的なメタルベースを組み合わせたモダンなセンターピースです。デザインは現代的なラウンドシルエットで、360度回転するレイジーサン（回転式ターンテーブル）を備えており、取り分けをしやすいコミュナルダイニングに最適です。",
  material:
    "シンタードストーン天板、ホワイトマーブル調仕上げ、メタルベース、回転式レイジーサン",
  sizeText: "120cm",
  delivery: "商品の種類を選択すると表示されます",
  care:
    "天板は柔らかい布で拭き、硬いブラシや研磨材入り洗剤は避けてください。チェア張地は乾いた布または固く絞った布でお手入れしてください。",
  shippingReturns:
    "送料無料です。離島・一部地域は追加送料がかかる場合があります。サイズや仕様により配送時期が変動する場合があります。",
  colors: ["ホワイトマーブル"],
  sizes: ["120cm", "150cm"],
  images: [
    "images/placeholders/elegant-round-dining-set-1.jpg",
    "images/placeholders/elegant-round-dining-set-2.jpg",
    "images/placeholders/elegant-round-dining-set-3.jpg",
    "images/placeholders/elegant-round-dining-set-4.jpg",
    "images/placeholders/elegant-round-dining-set-5.jpg",
    "images/placeholders/elegant-round-dining-set-6.jpg",
    "images/placeholders/elegant-round-dining-set-7.jpg"
  ],
  variants: {
    "120cm": {
      sku: "luxeds120-120",
      price: 141900,
      sizeText: "120cm"
    },
    "150cm": {
      sku: "luxeds120-150",
      price: 163900,
      sizeText: "150cm"
    }
  },
  chairOptions: {
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
  category: "ダイニングセット",
  name: "ダブルV ラウンドダイニングセット",
  price: 163900,
  description:
    "ホワイトマーブル調天板と印象的なダブルV字ベースが特徴の、モダンラグジュアリーな丸ダイニングセット。上質で華やかな空間を演出します。",
  infoDescription:
    "モダンでエレガントなホワイトマーブル（またはシンタードストーン）天板に、特徴的なダブルV字ベースのメタルペデスタル脚を組み合わせたデザインです。中央には回転式のレイジースーザン（ターンテーブル）が内蔵されており、料理の取り分けにも便利です。大理石天板へアップグレードの場合は＋50,000円となります。天板は天然大理石、人工大理石、または高硬度シンタードストーンを使用しており、耐久性・耐熱性に優れています。脚部はブラックまたはゴールドのメタルペデスタル仕様で、幾何学的なダブルV字ベース構造により高い安定性と強度を実現しております。6～8名用で、一般的なサイズは直径130cmまたは150cmです。",
  material:
    "ホワイトマーブル調天板、シンタードストーン、大理石対応、メタルペデスタル脚、回転式レイジースーザン",
  sizeText: "120cm",
  delivery: "商品の種類を選択すると表示されます",
  care:
    "天板は柔らかい布で拭き、硬いブラシや研磨材入り洗剤は避けてください。チェア張地は乾いた布または固く絞った布でお手入れしてください。",
  shippingReturns:
    "送料無料です。離島・一部地域は追加送料がかかる場合があります。サイズや仕様により配送時期が変動する場合があります。",
  colors: ["ホワイトマーブル"],
  sizes: ["120cm", "150cm"],
  images: [
    "images/placeholders/double-v-round-dining-set-1.jpg",
    "images/placeholders/double-v-round-dining-set-2.jpg",
    "images/placeholders/double-v-round-dining-set-3.jpg",
    "images/placeholders/double-v-round-dining-set-4.jpg",
    "images/placeholders/double-v-round-dining-set-5.jpg",
    "images/placeholders/double-v-round-dining-set-6.jpg",
    "images/placeholders/double-v-round-dining-set-7.jpg"
  ],
  variants: {
    "120cm": {
      sku: "luxeds130-120",
      price: 163900,
      sizeText: "120cm"
    },
    "150cm": {
      sku: "luxeds130-150",
      price: 185900,
      sizeText: "150cm"
    }
  },
  chairOptions: {
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
  category: "ダイニングセット",
  name: "カーブペデスタル ラウンドダイニングセット",
  price: 163900,
  description:
    "回転式レイジーサン付きのホワイトストーン天板と、彫刻的なカーブ形状ペデスタルベースが魅力のモダンラウンドダイニングセット。洗練された上質空間を演出します。",
  infoDescription:
    "モダンなダイニングセットは、回転式のレイジーサンを備えたラウンド型ホワイトストーン天板のダイニングテーブルが特徴で、彫刻的なスチール製ペデスタルベースを採用しております。セットには、スリムなメタル脚を備えたミニマルデザインの張地付きダイニングチェアが組み合わされています。ダイニングテーブルは、食事の際に取り分けしやすい回転式ターンテーブル（レイジーサン）を備えた、現代的なラウンドデザインとなっております。天板にはシンタードストーンを使用し、ベース部分は耐久性に優れたスチールまたはメタル素材を採用しております。ベースは、脚元のスペースを広く確保しながら安定感を実現する、エレガントなカーブ形状のペデスタルデザインです。サイズは直径約120cm～180cmまで展開されており、標準サイズは120cmとなりますので、カスタムサイズをご希望の場合はお問い合わせください。ダイニングチェアは、肘掛けのないモダンなサイドチェアデザインで、身体を支えるカーブ形状の背もたれを備えております。張地にはグレーカラーのマイクロファイバーレザーを使用し、脚部にはテーブルのペデスタルベースと調和するテーパード仕様のメタル脚を採用しております。",
  material:
    "シンタードストーン天板、回転式レイジーサン、スチール／メタルペデスタルベース、マイクロファイバーレザーチェア、メタル脚",
  sizeText: "120cm",
  delivery: "商品の種類を選択すると表示されます",
  care:
    "天板は柔らかい布で拭いてください。チェア張地は乾いた布または固く絞った布でお手入れしてください。硬いブラシや研磨材入り洗剤は避けてください。",
  shippingReturns:
    "送料無料です。離島・一部地域は追加送料がかかる場合があります。サイズや仕様により配送時期が変動する場合があります。",
  colors: ["ホワイトストーン", "グレー"],
  sizes: ["120cm", "150cm"],
  images: [
    "images/placeholders/curve-pedestal-round-dining-set-1.jpg",
    "images/placeholders/curve-pedestal-round-dining-set-2.jpg",
    "images/placeholders/curve-pedestal-round-dining-set-3.jpg",
    "images/placeholders/curve-pedestal-round-dining-set-4.jpg",
    "images/placeholders/curve-pedestal-round-dining-set-5.jpg",
    "images/placeholders/curve-pedestal-round-dining-set-6.jpg",
    "images/placeholders/curve-pedestal-round-dining-set-7.jpg"
  ],
  variants: {
    "120cm": {
      sku: "luxeds120-curve-120",
      price: 163900,
      sizeText: "120cm"
    },
    "150cm": {
      sku: "luxeds120-curve-150",
      price: 174900,
      sizeText: "150cm"
    }
  },
  chairOptions: {
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
  category: "ダイニングセット",
  name: "パンドラ ラウンドダイニングセット",
  price: 141900,
  description:
    "ビルトインのレイジーサンを備えたラウンド型シンタードストーン天板と、彫刻的なクロス（X）型ペデスタルベースが魅力のラグジュアリーな丸ダイニングセットです。",
  infoDescription:
    "エレガントなダイニングセットは、ビルトインのレイジーサンを備えたラウンド型の Pandora スタイル シンタードストーン ダイニングテーブルが特徴で、特徴的なクロス（X）デザインのペデスタル脚を採用しております。組み合わされる張地付きダイニングチェアは、ツートーン配色のデザインで、カーブを描く人間工学設計の背もたれと、先端にメタルをあしらった脚部が特徴です。ダイニングテーブルは、食事の際に取り分けしやすい回転式ターンテーブル（レイジーサン）を備えた、現代的なラウンドデザインとなっております。天板にはシンタードストーンを使用し、ベース部分は耐久性に優れたスチールまたはメタル素材を採用しております。ベースは、幾何学的で彫刻的なスチール製のクロス（X）デザインを特徴とし、ゴールド、ブロンズ、または「Molan Purple」カラーの塗装メタル仕上げが施されることが多い仕様です。サイズは直径約120cm～180cmまで展開されており、標準サイズは120cmとなりますので、カスタムサイズをご希望の場合はお問い合わせください。ダイニングチェアは、肘掛けのないモダンなサイドチェアデザインで、身体を支えるカーブ形状の背もたれを備えております。張地にはベージュ×ブラウンのツートーンカラーのマイクロファイバーレザーを使用し、脚部にはテーブルのペデスタルベースと調和するテーパード仕様のメタル脚を採用しております。",
  material:
    "シンタードストーン天板、回転式レイジーサン、スチール／メタルX型ペデスタルベース、マイクロファイバーレザーチェア、メタル脚",
  sizeText: "120cm",
  delivery: "商品の種類を選択すると表示されます",
  care:
    "天板は柔らかい布で拭いてください。チェア張地は乾いた布または固く絞った布でお手入れしてください。硬いブラシや研磨材入り洗剤は避けてください。",
  shippingReturns:
    "送料無料です。離島・一部地域は追加送料がかかる場合があります。サイズや仕様により配送時期が変動する場合があります。",
  colors: ["シンタードストーン", "ベージュ×ブラウン"],
  sizes: ["120cm", "150cm"],
  images: [
    "images/placeholders/pandora-round-dining-set-1.jpg",
    "images/placeholders/pandora-round-dining-set-2.jpg",
    "images/placeholders/pandora-round-dining-set-3.jpg",
    "images/placeholders/pandora-round-dining-set-4.jpg",
    "images/placeholders/pandora-round-dining-set-5.jpg",
    "images/placeholders/pandora-round-dining-set-6.jpg",
    "images/placeholders/pandora-round-dining-set-7.jpg"
  ],
  variants: {
    "120cm": {
      sku: "luxeds120-pandora-120",
      price: 141900,
      sizeText: "120cm"
    },
    "150cm": {
      sku: "luxeds120-pandora-150",
      price: 163900,
      sizeText: "150cm"
    }
  },
  chairOptions: {
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
  category: "ダイニングセット",
  name: "ラグジュアリー ラウンドダイニングセット 120",
  price: 218900,
  description:
    "一体型レイジーサン付きのラウンド型マーブル調ダイニングテーブルと、タフテッド加工チェア4脚を組み合わせたラグジュアリーなダイニングセットです。",
  infoDescription:
    "ダイニングセット（ダイニングテーブル120×75cm＋チェア4脚）。ラグジュアリーラウンド型マーブルダイニングテーブルは、一体型のレイジーサン（回転式ターンテーブル）を備えたデザインが特徴です。モダンなブラックまたはホワイトのペデスタルベース仕様で、ゴールド調のアクセントや縁取りは有り・無しからお選びいただけます。高級感あふれるダイニング空間に最適なモデルで、背もたれにタフテッド加工を施した張地付きチェアがセットとなっております。",
  material:
    "マーブル調天板、回転式レイジーサン、ペデスタルベース、張地付きタフテッドチェア",
  sizeText: "テーブル 120 × 75cm / チェア4脚付き",
  delivery: "30日以内",
  care:
    "天板は柔らかい布で拭いてください。チェアは乾いた布または固く絞った布でお手入れしてください。",
  shippingReturns:
    "送料無料です。離島・一部地域は追加送料がかかる場合があります。",
  colors: ["マーブル調"],
  sizes: ["120cm"],
  images: [
    "images/placeholders/luxury-round-dining-set-120-1.jpg",
    "images/placeholders/luxury-round-dining-set-120-2.jpg",
    "images/placeholders/luxury-round-dining-set-120-3.jpg",
    "images/placeholders/luxury-round-dining-set-120-4.jpg",
    "images/placeholders/luxury-round-dining-set-120-5.jpg",
    "images/placeholders/luxury-round-dining-set-120-6.jpg",
    "images/placeholders/luxury-round-dining-set-120-7.jpg"
  ],
  variants: {
    "120cm": {
      sku: "luxeds120-round-luxury",
      price: 218900,
      sizeText: "テーブル 120 × 75cm / チェア4脚付き"
    }
  }
},
"butterfly-ceramic-dining-set-160": {
  category: "ダイニングセット",
  name: "バタフライ セラミックダイニングセット 160",
  price: 284900,
  description:
    "蝶のシルエットを思わせるインフィニティループ状ベースが印象的な、ラグジュアリーなセラミックダイニングセットです。",
  infoDescription:
    "ラグジュアリー ダイニングセット 160cm（チェア4脚付き）。バタフライ・ケラミックダイニングテーブルに着想を得たデザインで、蝶のシルエットを思わせるインフィニティループ（無限ループ）状の彫刻的なベースが特徴的なセンターピースです。テーブルのベースはエンボス加工を施したラッカー仕上げスチール製で、チタン、ブロンズ、ブラッシュドブロンズ、ブラッシュドグレーなどの仕上げからお選びいただけます。サイズは一般的に長さ160〜240cmまで対応可能です。",
  material:
    "セラミック天板、ラッカー仕上げスチールベース、張地付きチェア",
  sizeText: "140cm",
  delivery: "商品の種類を選択すると表示されます",
  care:
    "天板は柔らかい布で拭いてください。チェアは乾いた布または固く絞った布でお手入れしてください。",
  shippingReturns:
    "送料無料です。離島・一部地域は追加送料がかかる場合があります。サイズや仕様により配送時期が変動する場合があります。",
  colors: ["セラミック"],
  sizes: ["140cm", "160cm", "180cm"],
  images: [
    "images/placeholders/butterfly-ceramic-dining-set-160-1.jpg",
    "images/placeholders/butterfly-ceramic-dining-set-160-2.jpg",
    "images/placeholders/butterfly-ceramic-dining-set-160-3.jpg",
    "images/placeholders/butterfly-ceramic-dining-set-160-4.jpg",
    "images/placeholders/butterfly-ceramic-dining-set-160-5.jpg",
    "images/placeholders/butterfly-ceramic-dining-set-160-6.jpg",
    "images/placeholders/butterfly-ceramic-dining-set-160-7.jpg"
  ],
  variants: {
    "140cm": {
      sku: "luxeds160-butterfly-140",
      price: 284900,
      sizeText: "140cm"
    },
    "160cm": {
      sku: "luxeds160-butterfly-160",
      price: 306900,
      sizeText: "160cm"
    },
    "180cm": {
      sku: "luxeds160-butterfly-180",
      price: 328900,
      sizeText: "180cm"
    }
  },
  chairOptions: {
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

"gold-cage-round-dining-set": {
  category: "ダイニングセット",
  name: "ゴールドケージ ラウンドダイニングセット",
  price: 163900,
  description:
    "らせん状に絡み合うゴールドスチールベースが印象的な、ラグジュアリーモダンなラウンドダイニングセットです。",
  infoDescription:
    "ラグジュアリーラウンド型マーブルダイニングテーブルは、一体型のレイジーサン（回転式ターンテーブル）を備えたデザインが特徴です。本商品は、シンタードストーン天板と印象的なゴールドスチール製ベースを組み合わせた、ラグジュアリーモダンなラウンドペデスタルダイニングテーブルです。ベース部分は“ウエスト”を絞ったようなフォルムに、らせん状に絡み合うケージ構造を取り入れたデザインが特徴で、彫刻のような存在感を演出します。",
  material:
    "シンタードストーン天板、ゴールドスチールベース、張地付きチェア",
  sizeText: "120cm",
  delivery: "商品の種類を選択すると表示されます",
  care:
    "天板は柔らかい布で拭いてください。チェアは乾いた布または固く絞った布でお手入れしてください。",
  shippingReturns:
    "送料無料です。離島・一部地域は追加送料がかかる場合があります。サイズや仕様により配送時期が変動する場合があります。",
  colors: ["マーブル"],
  sizes: ["120cm", "150cm"],
  images: [
    "images/placeholders/gold-cage-round-dining-set-1.jpg",
    "images/placeholders/gold-cage-round-dining-set-2.jpg",
    "images/placeholders/gold-cage-round-dining-set-3.jpg",
    "images/placeholders/gold-cage-round-dining-set-4.jpg",
    "images/placeholders/gold-cage-round-dining-set-5.jpg",
    "images/placeholders/gold-cage-round-dining-set-6.jpg",
    "images/placeholders/gold-cage-round-dining-set-7.jpg"
  ],
  variants: {
    "120cm": {
      sku: "luxeds120-goldcage-120",
      price: 163900,
      sizeText: "120cm"
    },
    "150cm": {
      sku: "luxeds120-goldcage-150",
      price: 185900,
      sizeText: "150cm"
    }
  },
  chairOptions: {
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
  category: "ソファ",
  name: "ルクソ カーブソファ",
  price: 196900,
  description:
    "丸みのある“豆腐ブロック”や“クラウド”を思わせる柔らかなフォルムが魅力の、アフォーダブルラグジュアリーなカーブソファです。",
  infoDescription:
    "アフォーダブル ラグジュアリー ルクソ カーブソファ 120×110×83cm。モダンなオフホワイトのセクショナルソファで、丸みのある“豆腐ブロック”や“クラウド”を思わせる柔らかなフォルムが特徴です。やさしい曲線を基調とした有機的なデザインに、モダンとレトロの要素をバランスよく取り入れたスタイル。ナチュラルな雰囲気と上質感を兼ね備えた、空間に溶け込む一台です。サイズは120cm（2人掛け）から310cm（5人掛け）まで展開しており、幅広いレイアウトに対応可能です。カラーはホワイト、ベージュ、グレー、ブラック、ブラウンが基本展開となりますが、その他カラーのご相談も承っております。",
  material:
    "ファブリック張り、無垢材フレーム、高反発ウレタンフォーム、クッション材",
  sizeText: "120cm",
  delivery: "商品の種類を選択すると表示されます",
  care:
    "柔らかい布で乾拭きしてください。汚れは部分的にやさしく拭き取り、強い摩擦や直射日光は避けてください。",
  shippingReturns:
    "送料無料です。離島・一部地域は追加送料がかかる場合があります。サイズや注文数により配送時期が変動する場合があります。",
  colors: ["ベージュ", "ホワイト", "ブラウン", "ブラック", "オレンジ"],
  sizes: ["120cm", "190cm", "220cm", "250cm", "280cm", "310cm"],
  images: [
    "images/placeholders/luxo-curve-sofa-1.jpg",
    "images/placeholders/luxo-curve-sofa-2.jpg",
    "images/placeholders/luxo-curve-sofa-3.jpg",
    "images/placeholders/luxo-curve-sofa-4.jpg",
    "images/placeholders/luxo-curve-sofa-5.jpg",
    "images/placeholders/luxo-curve-sofa-6.jpg",
    "images/placeholders/luxo-curve-sofa-7.jpg"
  ],
  variants: {
    "120cm": {
      sku: "luxesofa120-120",
      price: 196900,
      sizeText: "120cm"
    },
    "190cm": {
      sku: "luxesofa120-190",
      price: 229900,
      sizeText: "190cm"
    },
    "220cm": {
      sku: "luxesofa120-220",
      price: 262900,
      sizeText: "220cm"
    },
    "250cm": {
      sku: "luxesofa120-250",
      price: 306900,
      sizeText: "250cm"
    },
    "280cm": {
      sku: "luxesofa120-280",
      price: 328900,
      sizeText: "280cm"
    },
    "310cm": {
      sku: "luxesofa120-310",
      price: 350900,
      sizeText: "310cm"
    }
  }
},

"luxury-modern-curve-sofa-140": {
  category: "ソファ",
  name: "ラグジュアリー モダン カーブソファ 140",
  price: 262900,
  description:
    "洗練された曲線美とチャンネルデザインが魅力の、モダンラグジュアリーなカーブソファ。空間にやわらかく上質な存在感をもたらします。",
  infoDescription:
    "ラグジュアリー モダン カーブソファ 140 は、ルクソのオーレン・エリス ビーンデザインから着想を得た、洗練された曲線美が魅力のソファです。特徴的なチャンネル（縦溝）デザインが印象的で、ミニマルな美しさとふっくらとした有機的フォルムを融合させた人気モデルです。彫刻のような立体感のあるカーブラインに、縦方向のチャンネルステッチを施すことで、包み込まれるような快適な座り心地を実現。フレームには無垢材を使用し、内部には高密度フォームを採用しているため、長期間使用してもへたりにくく、安定したサポート力を保ちます。張地はアイランドクロス、高品質ブークレ、ベルベット、テクノロジークロスなどから選べる仕様を想定した、ラグジュアリーでモダンな一台です。",
  material:
    "無垢材フレーム、高密度フォーム、ファブリック張り",
  sizeText: "140cm",
  delivery: "配送予定：商品の種類を選択すると表示されます",
  care:
    "柔らかい布で日常のお手入れを行ってください。汚れは部分的にやさしく拭き取り、強い摩擦や直射日光は避けてください。",
  shippingReturns:
    "送料無料です。離島・一部地域は追加送料がかかる場合があります。注文内容により配送時期が変動する場合があります。",
  colors: ["ベージュ", "ホワイト", "ブラウン", "ブラック", "オレンジ"],
  sizes: ["140cm", "180cm", "200cm", "220cm", "240cm", "280cm", "300cm", "340cm"],
  images: [
    "images/placeholders/luxury-modern-curve-sofa-140-1.jpg",
    "images/placeholders/luxury-modern-curve-sofa-140-2.jpg",
    "images/placeholders/luxury-modern-curve-sofa-140-3.jpg"
  ],
  variants: {
    "140cm": {
      sku: "luxesofa140-140",
      price: 262900,
      sizeText: "140cm"
    },
    "180cm": {
      sku: "luxesofa140-180",
      price: 306900,
      sizeText: "180cm"
    },
    "200cm": {
      sku: "luxesofa140-200",
      price: 328900,
      sizeText: "200cm"
    },
    "220cm": {
      sku: "luxesofa140-220",
      price: 361900,
      sizeText: "220cm"
    },
    "240cm": {
      sku: "luxesofa140-240",
      price: 383900,
      sizeText: "240cm"
    },
    "280cm": {
      sku: "luxesofa140-280",
      price: 416900,
      sizeText: "280cm"
    },
    "300cm": {
      sku: "luxesofa140-300",
      price: 438900,
      sizeText: "300cm"
    },
    "340cm": {
      sku: "luxesofa140-340",
      price: 482900,
      sizeText: "340cm"
    }
  }
},


"victoria-sofa-200": {
  category: "ソファ",
  name: "ヴィクトリア ソファ 200",
  price: 251900,
  description:
    "モダンなチャンネルタフテッドデザインとロープロファイルの洗練されたフォルムが魅力の、ラグジュアリーソファ。空間に上質で落ち着いた印象を与えます。",
  infoDescription:
    "モダン ミニマル「ヴィクトリア セレブリティ」ソファ 200×100×80cm。ホワイトやベージュを基調とした、モダンな“キャットクロー対応レザーソファ”仕様の人気モデルです。ふっくらとしたチャンネルタフテッドの座面クッションに、座面へ施された縦方向のステッチが特徴的。ロープロファイルのすっきりとしたフォルムが、洗練された空間を演出します。ワイドで奥行きのあるクッション設計により、ゆったりとくつろげる快適な座り心地を実現。現代的でありながら存在感のあるデザインです。張地は、アイランドクロス、テックファブリック、アンチキャットスクラッチレザー（猫の引っかき傷に強い素材）からお選びいただけます。モジュール設計のため、空間に合わせた柔軟なレイアウト変更が可能です。サイズは200cm（3人掛け）から300cm（5人掛け）まで展開しております。カラーはホワイト、ベージュ、グレー、ブラック、ブラウンが基本展開となりますが、その他カラーのご相談も可能です。",
  material:
    "アイランドクロス、テックファブリック、アンチキャットスクラッチレザー、無垢材フレーム、高密度ウレタン",
  sizeText: "W 2000 × D 1000 × H 800 mm",
  delivery: "配送予定：商品の種類を選択すると表示されます",
  care:
    "柔らかい布で乾拭きし、汚れは中性洗剤を含ませた布でやさしく拭き取ってください。強い摩擦や直射日光は避けてください。",
  shippingReturns:
    "送料無料です。離島・一部地域は追加送料がかかる場合があります。配送予定・配送情報は商品の種類を選択すると表示されます。",
  colors: ["ベージュ", "ホワイト", "ブラウン", "ブラック", "オレンジ"],
  sizes: ["200cm", "240cm", "280cm", "300cm"],
  images: [
    "images/placeholders/victoria-sofa-200-1.jpg",
    "images/placeholders/victoria-sofa-200-2.jpg",
    "images/placeholders/victoria-sofa-200-3.jpg",
    "images/placeholders/victoria-sofa-200-4.jpg",
    "images/placeholders/victoria-sofa-200-5.jpg",
    "images/placeholders/victoria-sofa-200-6.jpg",
    "images/placeholders/victoria-sofa-200-7.jpg"
  ],
  variants: {
    "200cm": {
      sku: "luxesofa200-200",
      price: 251900,
      sizeText: "W 2000 × D 1000 × H 800 mm"
    },
    "240cm": {
      sku: "luxesofa200-240",
      price: 295900,
      sizeText: "W 2400 × D 1000 × H 800 mm"
    },
    "280cm": {
      sku: "luxesofa200-280",
      price: 328900,
      sizeText: "W 2800 × D 1000 × H 800 mm"
    },
    "300cm": {
      sku: "luxesofa200-300",
      price: 350900,
      sizeText: "W 3000 × D 1000 × H 800 mm"
    }
  }
},

"stylish-sofa-210": {
  category: "ソファ",
  name: "スタイリッシュソファ 210",
  price: 196900,
  description:
    "広々とした座面とロープロファイルの美しいシルエットが魅力の、モダンラグジュアリーなソファ。洗練された上品な存在感で空間を整えます。",
  infoDescription:
    "スタイリッシュソファ 210 は、広々とした座面を備えたモダンなイタリアンスタイルのソファです。美しいロープロファイルのシルエットに、深くクッション性の高い座面を組み合わせ、洗練された上品な存在感を演出します。張地はアイランドクロス、ベビーベルベット、レザーテアからお選びいただけます。モダン、ラグジュアリー、北欧スタイルのリビングに調和し、ゆったりとくつろげる快適な座り心地を実現します。",
  material:
    "アイランドクロス、ベビーベルベット、レザーテア、クッション材、フレーム構造",
  sizeText: "180cm",
  delivery: "配送予定：商品の種類を選択すると表示されます",
  care:
    "柔らかい布で日常のお手入れを行ってください。汚れは部分的にやさしく拭き取り、強い摩擦や長時間の直射日光は避けてください。",
  shippingReturns:
    "送料無料です。離島・一部地域は追加送料がかかる場合があります。商品の種類を選択すると配送情報が表示されます。",
  colors: ["ベージュ", "グリーン", "ブラウン", "ホワイト", "グレー", "オレンジ"],
  sizes: ["180cm", "210cm", "240cm", "280cm", "300cm"],
  images: [
    "images/placeholders/stylish-sofa-210-1.jpg",
    "images/placeholders/stylish-sofa-210-2.jpg",
    "images/placeholders/stylish-sofa-210-3.jpg",
    "images/placeholders/stylish-sofa-210-4.jpg",
    "images/placeholders/stylish-sofa-210-5.jpg",
    "images/placeholders/stylish-sofa-210-6.jpg",
    "images/placeholders/stylish-sofa-210-7.jpg"
  ],
  variants: {
    "180cm": {
      sku: "luxesofa210-180",
      price: 196900,
      sizeText: "180cm"
    },
    "210cm": {
      sku: "luxesofa210-210",
      price: 240900,
      sizeText: "210cm"
    },
    "240cm": {
      sku: "luxesofa210-240",
      price: 273900,
      sizeText: "240cm"
    },
    "280cm": {
      sku: "luxesofa210-280",
      price: 306900,
      sizeText: "280cm"
    },
    "300cm": {
      sku: "luxesofa210-300",
      price: 328900,
      sizeText: "300cm"
    }
  }
},

"stylish-sofa-300": {
  category: "ソファ",
  name: "スタイリッシュソファ 300",
  price: 196900,
  description:
    "広々とした座面とロープロファイルの美しいシルエットが魅力の、大型モダンラグジュアリーソファ。洗練された上品な存在感で空間を整えます。",
  infoDescription:
    "スタイリッシュソファ 300 は、広々とした座面を備えたモダンなイタリアンスタイルのソファです。美しいロープロファイルのシルエットに、深くクッション性の高い座面を組み合わせ、洗練された上品な存在感を演出します。張地はアイランドクロス、ベビーベルベット、レザーテアからお選びいただけます。大型のカーブソファ、バブルソファ、ソファセットとしても映えるデザインで、モダン、ラグジュアリー、北欧スタイルのリビングに調和します。",
  material:
    "アイランドクロス、ベビーベルベット、レザーテア、クッション材、フレーム構造",
  sizeText: "180cm",
  delivery: "配送予定：商品の種類を選択すると表示されます",
  care:
    "柔らかい布で日常のお手入れを行ってください。汚れは部分的にやさしく拭き取り、強い摩擦や長時間の直射日光は避けてください。",
  shippingReturns:
    "送料無料です。離島・一部地域は追加送料がかかる場合があります。商品の種類を選択すると配送情報が表示されます。",
  colors: ["ベージュ", "グリーン", "ブラウン", "ホワイト", "グレー", "オレンジ"],
  sizes: ["180cm", "210cm", "240cm", "280cm", "300cm"],
  images: [
    "images/placeholders/stylish-sofa-300-1.jpg",
    "images/placeholders/stylish-sofa-300-2.jpg",
    "images/placeholders/stylish-sofa-300-3.jpg",
    "images/placeholders/stylish-sofa-300-4.jpg",
    "images/placeholders/stylish-sofa-300-5.jpg",
    "images/placeholders/stylish-sofa-300-6.jpg",
    "images/placeholders/stylish-sofa-300-7.jpg"
  ],
  variants: {
    "180cm": {
      sku: "luxesofa300-180",
      price: 196900,
      sizeText: "180cm"
    },
    "210cm": {
      sku: "luxesofa300-210",
      price: 218900,
      sizeText: "210cm"
    },
    "240cm": {
      sku: "luxesofa300-240",
      price: 262900,
      sizeText: "240cm"
    },
    "280cm": {
      sku: "luxesofa300-280",
      price: 306900,
      sizeText: "280cm"
    },
    "300cm": {
      sku: "luxesofa300-300",
      price: 350900,
      sizeText: "300cm"
    }
  }
},

"veronda-modern-luxury-sofa": {
  category: "ソファ",
  name: "ヴェロンダ モダンラグジュアリーソファ",
  price: 218900,
  description:
    "ゆったりとした座面とボリューム感のあるピロートップアームが特徴の、モダンなイタリアンスタイルソファ。ロープロファイルの美しいシルエットが空間に上質感を与えます。",
  infoDescription:
    "ヴェロンダ モダンラグジュアリーソファは、ゆったりとした座面とボリューム感のあるピロートップアームが特徴の、モダンなイタリアンスタイルソファです。ロープロファイルの美しいシルエットに、深くクッション性の高い座面、そして印象的なウィング型アームレストを組み合わせた、存在感のあるデザインに仕上げております。サイズは140cm（2人掛け）から300cm（5人掛け）まで展開しており、当店の主なサイズは200cm・240cm・300cmとなります。張地にはアイランドクロス、スエード、テックファブリックなどの高品質素材を使用。カラーはホワイト・ベージュ・グレー・ブラックからお選びいただけます。モジュール式デザインで、座面および背もたれクッションのカバーは取り外し可能です。",
  material:
    "アイランドクロス、スエード、テックファブリック、クッション材、フレーム構造",
  sizeText: "200cm",
  delivery: "配送予定：商品の種類を選択すると表示されます",
  care:
    "柔らかい布で日常のお手入れを行ってください。汚れは部分的にやさしく拭き取り、強い摩擦や長時間の直射日光は避けてください。",
  shippingReturns:
    "送料無料です。離島・一部地域は追加送料がかかる場合があります。商品の種類を選択すると配送情報が表示されます。",
  colors: ["ベージュ", "ホワイト", "ブラウン", "ブラック", "オレンジ"],
  sizes: ["200cm", "240cm", "300cm"],
  images: [
    "images/placeholders/veronda-modern-luxury-sofa-1.jpg",
    "images/placeholders/veronda-modern-luxury-sofa-2.jpg",
    "images/placeholders/veronda-modern-luxury-sofa-3.jpg",
    "images/placeholders/veronda-modern-luxury-sofa-4.jpg",
    "images/placeholders/veronda-modern-luxury-sofa-5.jpg",
    "images/placeholders/veronda-modern-luxury-sofa-6.jpg"
  ],
  variants: {
    "200cm": {
      sku: "luxesofa200-200",
      price: 218900,
      sizeText: "200cm"
    },
    "240cm": {
      sku: "luxesofa200-240",
      price: 262900,
      sizeText: "240cm"
    },
    "300cm": {
      sku: "luxesofa200-300",
      price: 306900,
      sizeText: "300cm"
    }
  }
},

"luxesofa300": {
  category: "ソファ",
  name: "バブルソファ クラウドソファ",
  price: 262900,
  description:
    "丸みを帯びたフォルムとタフト仕様が印象的な、ラグジュアリーテイストのバブルソファ。ふんわりとした見た目と包み込まれるような座り心地で、リビングにやさしく上質な存在感をもたらします。",
  infoDescription:
    "ラグジュアリー タフト仕様「キャンディ」ソファ（クラウドソファ）。Aerisのキャンディ型ブークレソファに着想を得たデザインです。丸みを帯びたフォルムが印象的なモダンなタフトソファで、その柔らかくふんわりとした見た目から「クラウドソファ」や「マシュマロソファ」とも呼ばれております。立体的でパフのような独特のフォルムと、なめらかで丸みのあるラインが身体のカーブに優しくフィットします。張地はブークレ生地、テディベルベット、またはラムウールを使用。肌触りが良く、通気性があり、やわらかな質感が特徴です。構造は、カラマツやパイン材などの無垢材フレームを採用し、高密度ウレタンフォームやダウンを充填。安定感がありながらもクッション性に優れた座り心地を実現しております。",
  material:
    "ブークレ生地、テディベルベット、ラムウール、無垢材フレーム、高密度ウレタンフォーム、ダウン",
  sizeText: "180cm",
  delivery: "配送予定：商品の種類を選択すると表示されます",
  care:
    "柔らかい布で日常のお手入れを行ってください。汚れは部分的にやさしく拭き取り、強い摩擦や長時間の直射日光は避けてください。",
  shippingReturns:
    "送料無料です。離島・一部地域は追加送料がかかる場合があります。商品の種類を選択すると配送情報が表示されます。",
  colors: ["ホワイト", "ベージュ", "ブラウン", "グレー", "ブラック"],
  sizes: ["180cm", "210cm", "240cm", "280cm", "300cm"],
  images: [
    "images/placeholders/luxesofa300-1.jpg",
    "images/placeholders/luxesofa300-2.jpg",
    "images/placeholders/luxesofa300-3.jpg",
    "images/placeholders/luxesofa300-4.jpg",
    "images/placeholders/luxesofa300-5.jpg",
    "images/placeholders/luxesofa300-6.jpg",
    "images/placeholders/luxesofa300-7.jpg"
  ],
  variants: {
    "180cm": {
      sku: "luxesofa300-180",
      price: 262900,
      sizeText: "180cm"
    },
    "210cm": {
      sku: "luxesofa300-210",
      price: 284900,
      sizeText: "210cm"
    },
    "240cm": {
      sku: "luxesofa300-240",
      price: 339900,
      sizeText: "240cm"
    },
    "280cm": {
      sku: "luxesofa300-280",
      price: 372900,
      sizeText: "280cm"
    },
    "300cm": {
      sku: "luxesofa300-300",
      price: 405900,
      sizeText: "300cm"
    }
  }
},
"luxesofa200": {
  category: "ソファ",
  name: "バブルソファ クラウドソファ 200",
  price: 284900,
  description:
    "丸みを帯びたフォルムとタフト仕様が印象的な、ラグジュアリーテイストのバブルソファ。ふんわりとした見た目と包み込まれるような座り心地で、リビングに上質な存在感をもたらします。",
  infoDescription:
    "ラグジュアリー タフト仕様「キャンディ」ソファ（クラウドソファ）。Aerisのキャンディ型ブークレソファに着想を得たデザインです。丸みを帯びたフォルムが印象的なモダンなタフトソファで、その柔らかくふんわりとした見た目から「クラウドソファ」や「マシュマロソファ」とも呼ばれております。立体的でパフのような独特のフォルムと、なめらかで丸みのあるラインが身体のカーブに優しくフィットします。張地はブークレ生地、テディベルベット、またはラムウールを使用。肌触りが良く、通気性があり、やわらかな質感が特徴です。構造は、カラマツやパイン材などの無垢材フレームを採用し、高密度ウレタンフォームやダウンを充填。安定感がありながらもクッション性に優れた座り心地を実現しております。",
  material:
    "ブークレ生地、テディベルベット、ラムウール、無垢材フレーム、高密度ウレタンフォーム、ダウン",
  sizeText: "210cm",
  delivery: "配送予定：商品の種類を選択すると表示されます",
  care:
    "柔らかい布で日常のお手入れを行ってください。汚れは部分的にやさしく拭き取り、強い摩擦や長時間の直射日光は避けてください。",
  shippingReturns:
    "送料無料です。離島・一部地域は追加送料がかかる場合があります。商品の種類を選択すると配送情報が表示されます。",
  colors: ["ホワイト", "ベージュ", "ブラウン", "グレー", "ブラック"],
  sizes: ["210cm", "250cm", "280cm"],
  images: [
    "images/placeholders/luxesofa200-cloud-1.jpg",
    "images/placeholders/luxesofa200-cloud-2.jpg",
    "images/placeholders/luxesofa200-cloud-3.jpg",
    "images/placeholders/luxesofa200-cloud-4.jpg",
    "images/placeholders/luxesofa200-cloud-5.jpg",
    "images/placeholders/luxesofa200-cloud-6.jpg",
    "images/placeholders/luxesofa200-cloud-7.jpg"
  ],
  variants: {
    "210cm": {
      sku: "luxesofa200-210",
      price: 284900,
      sizeText: "210cm"
    },
    "250cm": {
      sku: "luxesofa200-250",
      price: 339900,
      sizeText: "250cm"
    },
    "280cm": {
      sku: "luxesofa200-280",
      price: 372900,
      sizeText: "280cm"
    }
  }
},
"luxesofa150l": {
  category: "ソファ",
  name: "コンパクト 3人掛けソファ 150cm レザー",
  price: 185900,
  description:
    "コンパクトなサイズ感と洗練されたフォルムを兼ね備えた、モダンラグジュアリーなレザーソファ。1LDKや一人暮らしの空間にも取り入れやすく、上質な存在感を演出します。",
  infoDescription:
    "モダンラグジュアリーソファ、2~2.5Pソファ（アパートやリビングルームに最適、ホワイト）。人間工学に基づいた湾曲した背もたれは、様々な座り姿勢に優れたサポートを提供し、腰を快適に保ちます。柔らかなパッド入りのシートは、長時間の会話、読書、映画鑑賞でも快適な座り心地を実現します。高反発ウレタンスポンジと厳選された無垢材を使用し、強度と耐久性を兼ね備えた構造です。高反発ウレタンスポンジが体圧を分散し、長時間座っても疲れにくい設計となっております。洗練されたオールインワンのシルエットが特徴で、リビングルーム、寝室、オフィス、応接室、ラウンジなど、様々な空間に最適です。高品質の木材とスプリングで補強されたクッションを採用し、優れた座り心地を提供します。生地は摩耗、汚れ、こぼれに強く、日常使いにも適しています。",
  material:
    "高級マイクロファイバーレザー、無垢材フレーム、高反発ウレタンスポンジ、スプリング",
  sizeText: "150cm",
  delivery: "配送予定：商品の種類を選択すると表示されます",
  care:
    "柔らかい布で乾拭きし、汚れはやさしく拭き取ってください。強い摩擦や直射日光は避けてください。",
  shippingReturns:
    "送料無料です。離島・一部地域は追加送料がかかる場合があります。商品の種類を選択すると配送情報が表示されます。",
  colors: ["オレンジ", "ホワイト", "ブラウン", "ブラック", "グレー"],
  sizes: ["150cm", "180cm", "210cm", "250cm", "280cm", "310cm"],
  images: [
    "images/placeholders/luxesofa150l-1.jpg",
    "images/placeholders/luxesofa150l-2.jpg",
    "images/placeholders/luxesofa150l-3.jpg",
    "images/placeholders/luxesofa150l-4.jpg",
    "images/placeholders/luxesofa150l-5.jpg",
    "images/placeholders/luxesofa150l-6.jpg",
    "images/placeholders/luxesofa150l-7.jpg"
  ],
  variants: {
    "150cm": {
      sku: "luxesofa150l-150",
      price: 185900,
      sizeText: "150cm"
    },
    "180cm": {
      sku: "luxesofa150l-180",
      price: 207900,
      sizeText: "180cm"
    },
    "210cm": {
      sku: "luxesofa150l-210",
      price: 229900,
      sizeText: "210cm"
    },
    "250cm": {
      sku: "luxesofa150l-250",
      price: 262900,
      sizeText: "250cm"
    },
    "280cm": {
      sku: "luxesofa150l-280",
      price: 295900,
      sizeText: "280cm"
    },
    "310cm": {
      sku: "luxesofa150l-310",
      price: 317900,
      sizeText: "310cm"
    }
  }
},

"luxesofa210b": {
  category: "ソファ",
  name: "ブークレ素材 210cm カーブソファ",
  price: 185900,
  description:
    "ブークレやベルベット、レザー調素材の上質な質感と、やわらかな曲線フォルムが魅力のモダンラグジュアリーソファ。空間に洗練された存在感を与えます。",
  infoDescription:
    "スタイリッシュソファ（210×100×80cm）。広々とした座面を備えたモダンなイタリアンスタイルのソファです。美しいロープロファイルのシルエットに、深くクッション性の高い座面を組み合わせ、洗練された上品な存在感を演出します。張地はアイランドクロス、ベビーベルベット、レザーテアからお選びいただけます。カーブソファやバブルソファのような有機的なフォルムを持ち、モダン・ラグジュアリー・北欧テイストの空間にも調和します。",
  material:
    "ブークレ調ファブリック、ベルベット、レザー調素材、無垢材フレーム、高反発ウレタン",
  sizeText: "170cm",
  delivery: "配送予定：商品の種類を選択すると表示されます",
  care:
    "柔らかい布で乾拭きしてください。汚れはやさしく拭き取り、強い摩擦や直射日光は避けてください。",
  shippingReturns:
    "送料無料です。離島・一部地域は追加送料がかかる場合があります。商品の種類を選択すると配送情報が表示されます。",
  colors: ["オレンジ", "ホワイト", "ブラウン", "ブラック", "グレー"],
  sizes: ["170cm", "210cm", "240cm", "280cm", "300cm"],
  images: [
    "images/placeholders/luxesofa210b-1.jpg",
    "images/placeholders/luxesofa210b-2.jpg",
    "images/placeholders/luxesofa210b-3.jpg",
    "images/placeholders/luxesofa210b-4.jpg",
    "images/placeholders/luxesofa210b-5.jpg",
    "images/placeholders/luxesofa210b-6.jpg",
    "images/placeholders/luxesofa210b-7.jpg"
  ],
  variants: {
    "170cm": {
      sku: "luxesofa210b-170",
      price: 185900,
      sizeText: "170cm"
    },
    "210cm": {
      sku: "luxesofa210b-210",
      price: 218900,
      sizeText: "210cm"
    },
    "240cm": {
      sku: "luxesofa210b-240",
      price: 240900,
      sizeText: "240cm"
    },
    "280cm": {
      sku: "luxesofa210b-280",
      price: 273900,
      sizeText: "280cm"
    },
    "300cm": {
      sku: "luxesofa210b-300",
      price: 295900,
      sizeText: "300cm"
    }
  }
},
"luxesofa115": {
  category: "ソファ",
  name: "クラウドスタイル セクショナルソファ",
  price: 196900,
  description:
    "ふっくらとしたクッションと自由度の高いレイアウトが魅力の、クラウドスタイルのモダンラグジュアリーソファ。北欧・モダン空間にも美しくなじみます。",
  infoDescription:
    "クラウドスタイルのセクショナルソファ。現代的なデザインで、ボリューム感のあるふっくらとしたクッションと、自由度の高いレイアウトが魅力です。奥行きと幅にゆとりのある座面、ロープロファイルのフレームが特徴の「クラウド」スタイルで、上質なリネンまたはコットン素材を使用。カバーは取り外し・洗濯が可能です。クッションにはダウンフェザー・コットン・高反発フォームをブレンドして充填しており、身体が沈み込むような心地よい座り心地を実現しております。各セクションは独立したモジュール構造になっているため、L字型・U字型・一直線のロングソファなど、お好みに合わせて自由に組み替えることが可能です。",
  material:
    "リネンまたはコットン張地、ダウンフェザー、コットン、高反発フォーム、モジュール構造フレーム",
  sizeText: "115cm",
  delivery: "配送予定：商品の種類を選択すると表示されます",
  care:
    "カバーは取り外してお手入れ可能です。日常のお手入れは柔らかい布で行い、強い摩擦や直射日光は避けてください。",
  shippingReturns:
    "送料無料です。離島・一部地域は追加送料がかかる場合があります。商品の種類を選択すると配送情報が表示されます。",
  colors: ["ベージュ", "ホワイト", "ブラック", "ブラウン", "グレー"],
  sizes: ["115cm", "130cm", "220cm", "240cm", "280cm", "300cm"],
  images: [
    "images/placeholders/luxesofa115-1.jpg",
    "images/placeholders/luxesofa115-2.jpg",
    "images/placeholders/luxesofa115-3.jpg",
    "images/placeholders/luxesofa115-4.jpg",
    "images/placeholders/luxesofa115-5.jpg",
    "images/placeholders/luxesofa115-6.jpg",
    "images/placeholders/luxesofa115-7.jpg"
  ],
  variants: {
    "115cm": {
      sku: "luxesofa115-115",
      price: 196900,
      sizeText: "115cm"
    },
    "130cm": {
      sku: "luxesofa115-130",
      price: 218900,
      sizeText: "130cm"
    },
    "220cm": {
      sku: "luxesofa115-220",
      price: 394900,
      sizeText: "220cm"
    },
    "240cm": {
      sku: "luxesofa115-240",
      price: 438900,
      sizeText: "240cm"
    },
    "280cm": {
      sku: "luxesofa115-280",
      price: 493900,
      sizeText: "280cm"
    },
    "300cm": {
      sku: "luxesofa115-300",
      price: 548900,
      sizeText: "300cm"
    }
  }
},

"luxesofa300-stylish": {
  category: "ソファ",
  name: "スタイリッシュソファ 300",
  price: 339900,
  description:
    "広々とした座面を備えた、モダンなイタリアンスタイルのスタイリッシュソファ。ロープロファイルの美しいシルエットが、空間に上品な存在感を与えます。",
  infoDescription:
    "スタイリッシュソファ（300×105×85cm）。広々とした座面を備えたモダンなイタリアンスタイルのソファです。美しいロープロファイルのシルエットに、深くクッション性の高い座面を組み合わせ、洗練された上品な存在感を演出します。張地は、アイランドクロス、ベビーベルベット、レザーテアからお選びいただけます。",
  material:
    "アイランドクロス、ベビーベルベット、レザーテア、無垢材フレーム、高密度ウレタンフォーム",
  sizeText: "300cm",
  delivery: "お届け目安：30日以内",
  care:
    "柔らかい布で日常のお手入れを行ってください。汚れは部分的にやさしく拭き取り、強い摩擦や長時間の直射日光は避けてください。",
  shippingReturns:
    "送料無料です。離島・一部地域は追加送料がかかる場合があります。注文個数によりお届け日が変わる場合があります。",
  colors: ["ベージュ", "ホワイト", "ブラウン", "ブラック", "オレンジ"],
  sizes: ["220cm", "240cm", "280cm", "300cm"],
  images: [
    "images/placeholders/luxesofa300-stylish-1.jpg",
    "images/placeholders/luxesofa300-stylish-2.jpg",
    "images/placeholders/luxesofa300-stylish-3.jpg",
    "images/placeholders/luxesofa300-stylish-4.jpg",
    "images/placeholders/luxesofa300-stylish-5.jpg",
    "images/placeholders/luxesofa300-stylish-6.jpg",
    "images/placeholders/luxesofa300-stylish-7.jpg"
  ],
  variants: {
    "220cm": {
      sku: "luxesofa300-stylish-220",
      price: 262900,
      sizeText: "220cm"
    },
    "240cm": {
      sku: "luxesofa300-stylish-240",
      price: 284900,
      sizeText: "240cm"
    },
    "280cm": {
      sku: "luxesofa300-stylish-280",
      price: 306900,
      sizeText: "280cm"
    },
    "300cm": {
      sku: "luxesofa300-stylish-300",
      price: 339900,
      sizeText: "300cm"
    }
  }
},

"luxesofa300a": {
  category: "ソファ",
  name: "スタイリッシュソファ 300A",
  price: 306900,
  description:
    "広々とした座面を備えた、モダンなイタリアンスタイルのスタイリッシュソファ。ロープロファイルの美しいシルエットが、空間に上品な存在感を与えます。",
  infoDescription:
    "スタイリッシュソファ（300×100×74cm）。広々とした座面を備えたモダンなイタリアンスタイルのソファです。美しいロープロファイルのシルエットに、深くクッション性の高い座面を組み合わせ、洗練された上品な存在感を演出します。張地は、アイランドクロス、ベビーベルベット、レザーテアからお選びいただけます。",
  material:
    "アイランドクロス、ベビーベルベット、レザーテア、無垢材フレーム、高密度ウレタンフォーム",
  sizeText: "300cm",
  delivery: "お届け目安：30日以内",
  care:
    "柔らかい布で日常のお手入れを行ってください。汚れは部分的にやさしく拭き取り、強い摩擦や長時間の直射日光は避けてください。",
  shippingReturns:
    "送料無料です。離島・一部地域は追加送料がかかる場合があります。注文個数によりお届け日が変わる場合があります。",
  colors: ["ベージュ", "ホワイト", "ブラウン", "ブラック", "オレンジ"],
  sizes: ["220cm", "240cm", "280cm", "300cm"],
  images: [
    "images/placeholders/luxesofa300a-1.jpg",
    "images/placeholders/luxesofa300a-2.jpg",
    "images/placeholders/luxesofa300a-3.jpg",
    "images/placeholders/luxesofa300a-4.jpg",
    "images/placeholders/luxesofa300a-5.jpg",
    "images/placeholders/luxesofa300a-6.jpg",
    "images/placeholders/luxesofa300a-7.jpg"
  ],
  variants: {
    "220cm": {
      sku: "luxesofa300a-220",
      price: 219000,
      sizeText: "220cm"
    },
    "240cm": {
      sku: "luxesofa300a-240",
      price: 239000,
      sizeText: "240cm"
    },
    "280cm": {
      sku: "luxesofa300a-280",
      price: 259000,
      sizeText: "280cm"
    },
    "300cm": {
      sku: "luxesofa300a-300",
      price: 279000,
      sizeText: "300cm"
    }
  }
},
"luxesofa240a": {
  category: "ソファ",
  name: "スタイリッシュソファ 240A",
  price: 284900,
  description:
    "広々とした座面を備えた、モダンなイタリアンスタイルのスタイリッシュソファ。ロープロファイルの美しいシルエットが、空間に上品な存在感を与えます。",
  infoDescription:
    "スタイリッシュソファ（240×100×80cm）。広々とした座面を備えたモダンなイタリアンスタイルのソファです。美しいロープロファイルのシルエットに、深くクッション性の高い座面を組み合わせ、洗練された上品な存在感を演出します。張地は、アイランドクロス、ベビーベルベット、レザーテアからお選びいただけます。",
  material:
    "アイランドクロス、ベビーベルベット、レザーテア、無垢材フレーム、高密度ウレタンフォーム",
  sizeText: "240cm",
  delivery: "お届け目安：30日以内",
  care:
    "柔らかい布で日常のお手入れを行ってください。汚れは部分的にやさしく拭き取り、強い摩擦や長時間の直射日光は避けてください。",
  shippingReturns:
    "送料無料です。離島・一部地域は追加送料がかかる場合があります。注文個数によりお届け日が変わる場合があります。",
  colors: ["ベージュ", "ホワイト", "ブラウン", "ブラック", "オレンジ"],
  sizes: ["220cm", "240cm", "280cm", "300cm"],
  images: [
    "images/placeholders/luxesofa240a-1.jpg",
    "images/placeholders/luxesofa240a-2.jpg",
    "images/placeholders/luxesofa240a-3.jpg",
    "images/placeholders/luxesofa240a-4.jpg",
    "images/placeholders/luxesofa240a-5.jpg"
  ],
  variants: {
    "220cm": {
      sku: "luxesofa240a-220",
      price: 239000,
      sizeText: "220cm"
    },
    "240cm": {
      sku: "luxesofa240a-240",
      price: 259000,
      sizeText: "240cm"
    },
    "280cm": {
      sku: "luxesofa240a-280",
      price: 279000,
      sizeText: "280cm"
    },
    "300cm": {
      sku: "luxesofa240a-300",
      price: 299000,
      sizeText: "300cm"
    }
  }
},

"luxesofa240b": {
  category: "ソファ",
  name: "スタイリッシュソファ 240B",
  price: 251900,
  description:
    "広々とした座面を備えた、モダンなイタリアンスタイルのスタイリッシュソファ。ロープロファイルの美しいシルエットが、空間に上品な存在感を与えます。",
  infoDescription:
    "スタイリッシュソファ（240×98×71cm）。広々とした座面を備えたモダンなイタリアンスタイルのソファです。美しいロープロファイルのシルエットに、深くクッション性の高い座面を組み合わせ、洗練された上品な存在感を演出します。張地は、アイランドクロス、ベビーベルベット、レザーテアからお選びいただけます。",
  material:
    "アイランドクロス、ベビーベルベット、レザーテア、無垢材フレーム、高密度ウレタンフォーム",
  sizeText: "220cm",
  delivery: "お届け目安：30日以内",
  care:
    "柔らかい布で日常のお手入れを行ってください。汚れは部分的にやさしく拭き取り、強い摩擦や長時間の直射日光は避けてください。",
  shippingReturns:
    "送料無料です。離島・一部地域は追加送料がかかる場合があります。注文個数によりお届け日が変わる場合があります。",
  colors: ["ベージュ", "ホワイト", "ブラウン", "ブラック", "オレンジ"],
  sizes: ["220cm", "240cm", "280cm", "300cm"],
  images: [
    "images/placeholders/luxesofa240b-1.jpg",
    "images/placeholders/luxesofa240b-2.jpg",
    "images/placeholders/luxesofa240b-3.jpg",
    "images/placeholders/luxesofa240b-4.jpg",
    "images/placeholders/luxesofa240b-5.jpg",
    "images/placeholders/luxesofa240b-6.jpg"
  ],
  variants: {
    "220cm": {
      sku: "luxesofa240b-220",
      price: 209000,
      sizeText: "220cm"
    },
    "240cm": {
      sku: "luxesofa240b-240",
      price: 229000,
      sizeText: "240cm"
    },
    "280cm": {
      sku: "luxesofa240b-280",
      price: 249000,
      sizeText: "280cm"
    },
    "300cm": {
      sku: "luxesofa240b-300",
      price: 269000,
      sizeText: "300cm"
    }
  }
},

"stylish-sofa-240-105-80": {
  category: "ソファ",
  name: "スタイリッシュソファ 240",
  price: 295900,
  description:
    "広々とした座面とロープロファイルの美しいシルエットが魅力の、モダンなイタリアンスタイルソファ。上品で洗練された存在感がリビング空間を引き立てます。",
  infoDescription:
    "スタイリッシュソファ 240 は、広々とした座面と深くクッション性の高い設計を備えた、モダンラグジュアリーなソファです。ロープロファイルの美しいフォルムにより、圧迫感を抑えながら上質な存在感を演出します。張地にはアイランドクロス、ベビーベルベット、レザーテイスト素材などを使用し、やわらかな肌触りと高級感を両立。日常使いにも適した快適な座り心地で、リビングやラウンジ空間を洗練された印象に整えます。サイズは210cm、240cm、280cm、300cmからお選びいただけます。",
  material:
    "アイランドクロス、ベビーベルベット、レザーテイスト素材、無垢材フレーム、高反発ウレタン",
  sizeText: "W 2400 × D 1050 × H 800 mm / SH 420 mm",
  delivery: "お届け目安：30日以内",
  care:
    "柔らかい布で乾拭きしてください。汚れは部分的にやさしく拭き取り、強い摩擦や直射日光は避けてください。",
  shippingReturns:
    "送料無料です。離島・一部地域は追加送料がかかる場合があります。注文数によりお届け日が変動する場合があります。",
  colors: ["ホワイト", "ベージュ", "ブラック", "グレー", "ブラウン"],
  sizes: ["210cm", "240cm", "280cm", "300cm"],
  images: [
    "images/placeholders/stylish-sofa-240-105-80-1.jpg",
    "images/placeholders/stylish-sofa-240-105-80-2.jpg",
    "images/placeholders/stylish-sofa-240-105-80-3.jpg",
    "images/placeholders/stylish-sofa-240-105-80-4.jpg",
    "images/placeholders/stylish-sofa-240-105-80-5.jpg"
  ],
  variants: {
    "210cm": {
      sku: "LuxeSofa210",
      price: 295900,
      sizeText: "W 2100 × D 1050 × H 800 mm / SH 420 mm"
    },
    "240cm": {
      sku: "LuxeSofa240",
      price: 295900,
      sizeText: "W 2400 × D 1050 × H 800 mm / SH 420 mm"
    },
    "280cm": {
      sku: "LuxeSofa280",
      price: 317900,
      sizeText: "W 2800 × D 1050 × H 800 mm / SH 420 mm"
    },
    "300cm": {
      sku: "LuxeSofa300",
      price: 339900,
      sizeText: "W 3000 × D 1050 × H 800 mm / SH 420 mm"
    }
  }
},

"stylish-sofa-140-95-63": {
  category: "ソファ",
  name: "スタイリッシュソファ 140",
  price: 185900,
  description:
    "広々とした座面とロープロファイルの美しいシルエットが魅力の、モダンなイタリアンスタイルソファ。上品で洗練された存在感がリビング空間を引き立てます。",
  infoDescription:
    "スタイリッシュソファ 140 は、広々とした座面と深くクッション性の高い設計を備えた、モダンラグジュアリーなソファです。ロープロファイルの美しいフォルムにより、圧迫感を抑えながら上質な存在感を演出します。張地にはアイランドクロス、ベビーベルベット、レザーテイスト素材などを使用し、やわらかな肌触りと高級感を両立。日常使いにも適した快適な座り心地で、リビングやラウンジ空間を洗練された印象に整えます。サイズは140cm、180cm、220cm、240cm、280cm、300cmからお選びいただけます。",
  material:
    "アイランドクロス、ベビーベルベット、レザーテイスト素材、無垢材フレーム、高反発ウレタン",
  sizeText: "W 1400 × D 950 × H 630 mm / SH 420 mm",
  delivery: "お届け目安：30日以内",
  care:
    "柔らかい布で乾拭きしてください。汚れは部分的にやさしく拭き取り、強い摩擦や直射日光は避けてください。",
  shippingReturns:
    "送料無料です。離島・一部地域は追加送料がかかる場合があります。注文数によりお届け日が変動する場合があります。",
  colors: ["ホワイト", "ベージュ", "ブラック", "グレー", "ブラウン"],
  sizes: ["140cm", "180cm", "220cm", "240cm", "280cm", "300cm"],
  images: [
    "images/placeholders/stylish-sofa-140-95-63-1.jpg",
    "images/placeholders/stylish-sofa-140-95-63-2.jpg",
    "images/placeholders/stylish-sofa-140-95-63-3.jpg",
    "images/placeholders/stylish-sofa-140-95-63-4.jpg",
    "images/placeholders/stylish-sofa-140-95-63-5.jpg",
    "images/placeholders/stylish-sofa-140-95-63-6.jpg",
    "images/placeholders/stylish-sofa-140-95-63-7.jpg"
  ],
  variants: {
    "140cm": {
      sku: "luxesofa140a-140",
      price: 185900,
      sizeText: "W 1400 × D 950 × H 630 mm / SH 420 mm"
    },
    "180cm": {
      sku: "luxesofa140a-180",
      price: 218900,
      sizeText: "W 1800 × D 950 × H 630 mm / SH 420 mm"
    },
    "220cm": {
      sku: "luxesofa140a-220",
      price: 240900,
      sizeText: "W 2200 × D 950 × H 630 mm / SH 420 mm"
    },
    "240cm": {
      sku: "luxesofa140a-240",
      price: 273900,
      sizeText: "W 2400 × D 950 × H 630 mm / SH 420 mm"
    },
    "280cm": {
      sku: "luxesofa140a-280",
      price: 306900,
      sizeText: "W 2800 × D 950 × H 630 mm / SH 420 mm"
    },
    "300cm": {
      sku: "luxesofa140a-300",
      price: 328900,
      sizeText: "W 3000 × D 950 × H 630 mm / SH 420 mm"
    }
  }
},

"stylish-curve-luxo-living-sofa-120": {
  category: "ソファ",
  name: "スタイリッシュ カーブ ルクソ リビングルームソファ",
  price: 229900,
  description:
    "波のように分かれた立体的なクッションデザインと、なめらかな曲線美が魅力のモダンラグジュアリーソファ。柔らかさと洗練された存在感を兼ね備えた一台です。",
  infoDescription:
    "スタイリッシュ カーブ ルクソ リビングルームソファ 120×110×83cm は、モダンでミニマルな“クリームスタイル”を基調とした、洗練されたカーブソファです。波のように分かれた立体的なクッションデザインと、流れるような曲線を活かしたコンテンポラリーフォルムが特徴です。張地にはアイランドクロス、マイクロファイバーレザー、ベビーベルベット、スクラッチ耐性ファブリックなどを使用し、ペットのいるご家庭でも安心して使いやすい耐久性を備えています。フレームと脚部には無垢材を採用し、内部には高密度フォームを充填。深めの座面とピローバック仕様により、ゆったりと身体を預けられる快適な座り心地を実現しました。サイズは120cmから310cmまで展開し、幅広いレイアウトに対応します。",
  material:
    "アイランドクロス、マイクロファイバーレザー、ベビーベルベット、スクラッチ耐性ファブリック、無垢材フレーム、高密度フォーム",
  sizeText: "W 1200 × D 1100 × H 830 mm",
  delivery: "お届け目安：30日以内",
  care:
    "柔らかい布で乾拭きしてください。汚れは部分的にやさしく拭き取り、強い摩擦や長時間の直射日光は避けてください。",
  shippingReturns:
    "送料無料です。離島・一部地域は追加送料がかかる場合があります。注文数やサイズによりお届け日が変動する場合があります。",
  colors: ["ベージュ", "ホワイト", "ブラウン", "ブラック", "オレンジ"],
  sizes: ["120cm", "190cm", "220cm", "250cm", "280cm", "310cm"],
  images: [
    "images/placeholders/stylish-curve-luxo-living-sofa-120-1.jpg",
    "images/placeholders/stylish-curve-luxo-living-sofa-120-2.jpg",
    "images/placeholders/stylish-curve-luxo-living-sofa-120-3.jpg",
    "images/placeholders/stylish-curve-luxo-living-sofa-120-4.jpg",
    "images/placeholders/stylish-curve-luxo-living-sofa-120-5.jpg",
    "images/placeholders/stylish-curve-luxo-living-sofa-120-6.jpg",
    "images/placeholders/stylish-curve-luxo-living-sofa-120-7.jpg"
  ],
  variants: {
    "120cm": {
      sku: "luxesofa120luxo-120",
      price: 229900,
      sizeText: "W 1200 × D 1100 × H 830 mm"
    },
    "190cm": {
      sku: "luxesofa120luxo-190",
      price: 306900,
      sizeText: "W 1900 × D 1100 × H 830 mm"
    },
    "220cm": {
      sku: "luxesofa120luxo-220",
      price: 328900,
      sizeText: "W 2200 × D 1100 × H 830 mm"
    },
    "250cm": {
      sku: "luxesofa120luxo-250",
      price: 361900,
      sizeText: "W 2500 × D 1100 × H 830 mm"
    },
    "280cm": {
      sku: "luxesofa120luxo-280",
      price: 394900,
      sizeText: "W 2800 × D 1100 × H 830 mm"
    },
    "310cm": {
      sku: "luxesofa120luxo-310",
      price: 416900,
      sizeText: "W 3100 × D 1100 × H 830 mm"
    }
  }
},

"pocket-coil-mattress-25cm": {
  category: "マットレス",
  name: "25cm厚 ピロートップ ポケットコイルマットレス",
  price: 59000,
  description:
    "ホテル品質の眠りを自宅で叶える、25cm厚のピロートップ仕様ポケットコイルマットレス。体圧分散に優れ、ふっくらとした寝心地を実現します。",
  infoDescription:
    "25cm厚 ピロートップ ポケットコイルマットレスは、ホテルライクな上質な眠りを目指して設計されたプレミアムマットレスです。表面には贅沢なピロートップ構造を採用し、包み込まれるような柔らかさと適度な沈み込みで身体の緊張をやさしくほぐします。独立したポケットコイルが体の曲線に沿って点で支え、肩・腰・脚にかかる圧力を分散。25cmの厚みが底づき感を抑え、ふっくらとした快適な寝心地を朝まで支えます。側面には型崩れしにくいタフティング加工、縁にはシャンパンゴールドのパイピングを施し、高級感ある寝室づくりにも適しています。",
  material:
    "ポケットコイル、ピロートップ、キルティングニット生地、タフティング加工",
  sizeText: "シングル 約97×195×25cm",
  delivery: "お届け目安：30日以内",
  care:
    "風通しのよい場所で定期的に陰干ししてください。汚れは中性洗剤を含ませた布で部分的に拭き取ってください。",
  shippingReturns:
    "送料無料です。北海道・沖縄・離島は追加送料がかかる場合があります。圧縮ロール梱包でお届けします。開封後24〜48時間で復元します。",
  colors: ["ホワイト×シャンパンゴールド"],
  sizes: ["Single", "SD", "D", "Q", "King"],
  images: [
    "images/placeholders/pocket-coil-mattress-25cm-1.jpg",
    "images/placeholders/pocket-coil-mattress-25cm-2.jpg",
    "images/placeholders/pocket-coil-mattress-25cm-3.jpg",
    "images/placeholders/pocket-coil-mattress-25cm-4.jpg",
    "images/placeholders/pocket-coil-mattress-25cm-5.jpg",
    "images/placeholders/pocket-coil-mattress-25cm-6.jpg",
    "images/placeholders/pocket-coil-mattress-25cm-7.jpg"
  ],
  variants: {
    "Single": {
      sku: "luxemattress-pocket25-s",
      price: 59000,
      sizeText: "シングル 約97×195×25cm"
    },
    "SD": {
      sku: "luxemattress-pocket25-sd",
      price: 69000,
      sizeText: "セミダブル 約117×195×25cm"
    },
    "D": {
      sku: "luxemattress-pocket25-d",
      price: 79000,
      sizeText: "ダブル 約137×195×25cm"
    },
    "Q": {
      sku: "luxemattress-pocket25-q",
      price: 89000,
      sizeText: "クイーン 約157×195×25cm"
    },
    "King": {
      sku: "luxemattress-pocket25-k",
      price: 99000,
      sizeText: "キング 約177×195×25cm"
    }
  }
},

"latex-mattress-25cm": {
  category: "マットレス",
  name: "25cm厚 ピロートップ 天然ラテックスマットレス",
  price: 89000,
  description:
    "天然ラテックスを使用した25cm厚の高級ピロートップマットレス。体圧分散性と反発力のバランスに優れ、ホテルライクな寝心地を叶えます。",
  infoDescription:
    "25cm厚 ピロートップ 天然ラテックスマットレスは、体圧分散と弾力性を兼ね備えた上質な寝心地を追求したプレミアムマットレスです。表面のピロートップ仕様が身体をやさしく包み込み、内部の天然ラテックス層がしなやかな反発力で自然な寝姿勢をサポートします。厚さ25cmのしっかりとした構造により底づき感を抑え、ホテルのような安定感ある眠りを実現。高級感のある外観と快適性を両立し、寝室全体を上質な空間へと引き上げます。",
  material:
    "天然ラテックス、ピロートップ、キルティングニット生地、高反発サポート構造",
  sizeText: "シングル 約97×195×25cm",
  delivery: "お届け目安：30日以内",
  care:
    "風通しのよい場所で定期的に陰干ししてください。汚れは中性洗剤を含ませた布で部分的に拭き取ってください。",
  shippingReturns:
    "送料無料です。北海道・沖縄・離島は追加送料がかかる場合があります。圧縮ロール梱包でお届けします。開封後24〜48時間で復元します。",
  colors: ["ホワイト"],
  sizes: ["Single", "SD", "D", "Q", "King"],
  images: [
    "images/placeholders/latex-mattress-25cm-1.jpg",
    "images/placeholders/latex-mattress-25cm-2.jpg",
    "images/placeholders/latex-mattress-25cm-3.jpg",
    "images/placeholders/latex-mattress-25cm-4.jpg",
    "images/placeholders/latex-mattress-25cm-5.jpg",
    "images/placeholders/latex-mattress-25cm-6.jpg",
    "images/placeholders/latex-mattress-25cm-7.jpg"
  ],
  variants: {
    "Single": {
      sku: "luxemattress-latex25-s",
      price: 89000,
      sizeText: "シングル 約97×195×25cm"
    },
    "SD": {
      sku: "luxemattress-latex25-sd",
      price: 99000,
      sizeText: "セミダブル 約117×195×25cm"
    },
    "D": {
      sku: "luxemattress-latex25-d",
      price: 109000,
      sizeText: "ダブル 約137×195×25cm"
    },
    "Q": {
      sku: "luxemattress-latex25-q",
      price: 119000,
      sizeText: "クイーン 約157×195×25cm"
    },
    "King": {
      sku: "luxemattress-latex25-k",
      price: 129000,
      sizeText: "キング 約177×195×25cm"
    }
  }
},
    "lagos-dining-set-160": {
      category: "ダイニングセット",
      name: "ラゴス ダイニングセット 160",
      price: 361900,
      description:
        "変形楕円の天板と3本の円柱脚が印象的な、ラグジュアリーな5点式ダイニングセット。空間をアートのように引き締めます。",
      infoDescription:
        "ラゴス ダイニングセット 160 は、ハイエンドでコンテンポラリーなイタリアンデザインに着想を得たダイニングセットです。左右非対称のイレギュラーオーバル天板と、サイズの異なる3本の円柱脚が生み出す造形美が特徴です。現在のセットはシンタードストーン天板仕様で、天然大理石天板への変更も可能です。チェア4脚が付属し、モダンで洗練されたダイニング空間を演出します。",
      material: "シンタードストーン天板、円柱型メタルレッグ、チェア4脚",
      sizeText: "テーブル 160cm クラス / H 750 mm / チェア4脚付き",
      delivery: "お届け目安：25日以内",
      care:
        "天板は柔らかい布で拭いてください。硬いブラシや研磨材入り洗剤は避けてください。",
      shippingReturns:
        "送料無料です。離島・一部地域は追加送料がかかる場合があります。大理石天板へ変更の場合は追加料金が発生します。",
      colors: ["ベージュ", "ブロンズ"],
      sizes: ["160cm・5点セット"],
      images: [
        "images/placeholders/lagos-dining-set-160-1.jpg",
        "images/placeholders/lagos-dining-set-160-2.jpg",
        "images/placeholders/lagos-dining-set-160-3.jpg",
        "images/placeholders/lagos-dining-set-160-4.jpg",
        "images/placeholders/lagos-dining-set-160-5.jpg",
        "images/placeholders/lagos-dining-set-160-6.jpg",
        "images/placeholders/lagos-dining-set-160-7.jpg",
        "images/placeholders/lagos-dining-set-160-8.jpg"
      ]
    }
  };

  function getCart() {
    try {
      const storedCart = localStorage.getItem(CART_STORAGE_KEY);
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error("Failed to read cart:", error);
      return [];
    }
  }

  function saveCart(cart) {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (error) {
      console.error("Failed to save cart:", error);
    }
  }

  function formatPrice(value) {
    return `¥${Number(value).toLocaleString("ja-JP")}`;
  }

  function getCartCount() {
    const cart = getCart();
    return cart.reduce((total, item) => total + (Number(item.quantity) || 0), 0);
  }

  function updateCartCountUI() {
    const count = getCartCount();
    cartLinks.forEach((link) => {
      link.textContent = `カート (${count})`;
    });
  }

  function addItemToCart(itemToAdd) {
    const cart = getCart();

    const existingItem = cart.find((item) => {
      return (
        item.id === itemToAdd.id &&
        item.color === itemToAdd.color &&
        item.size === itemToAdd.size &&
        (item.storageType || "") === (itemToAdd.storageType || "") &&
        (item.chairType || "") === (itemToAdd.chairType || "") &&
        (item.mattressType || "") === (itemToAdd.mattressType || "") &&
        Number(item.mattressPrice || 0) === Number(itemToAdd.mattressPrice || 0)
      );
    });

    if (existingItem) {
      existingItem.quantity += itemToAdd.quantity;
    } else {
      cart.push(itemToAdd);
    }

    saveCart(cart);
    updateCartCountUI();
    renderCartPage();
  }

  function removeCartItem(index) {
    const cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    updateCartCountUI();
    renderCartPage();
  }

  function updateCartItemQuantity(index, change) {
    const cart = getCart();
    if (!cart[index]) return;

    cart[index].quantity += change;

    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
    }

    saveCart(cart);
    updateCartCountUI();
    renderCartPage();
  }

  function clearCart() {
    saveCart([]);
    updateCartCountUI();
    renderCartPage();
  }

  function getProductPrice(card) {
    const priceElement = card.querySelector(".product-price");
    if (!priceElement) return 0;
    const rawText = priceElement.textContent || "";
    return Number(rawText.replace(/[^\d]/g, ""));
  }

  function getProductName(card) {
    const title = card.querySelector("h3");
    return title ? title.textContent.trim().toLowerCase() : "";
  }

  function getProductType(card) {
    const type = card.querySelector(".product-type");
    return type ? type.textContent.trim().toLowerCase() : "";
  }

  function sortProducts(sortValue) {
    if (!shopGrid) return;

    const cards = Array.from(shopGrid.querySelectorAll(".shop-product-card"));
    const sortedCards = [...cards];

    if (sortValue === "価格の低い順") {
      sortedCards.sort((a, b) => getProductPrice(a) - getProductPrice(b));
    } else if (sortValue === "価格の高い順") {
      sortedCards.sort((a, b) => getProductPrice(b) - getProductPrice(a));
    } else if (sortValue === "新着順") {
      sortedCards.reverse();
    } else {
      return;
    }

    sortedCards.forEach((card) => {
      shopGrid.appendChild(card);
    });
  }

  function getCartItemImage(item) {
    const product = PRODUCT_DATA[item.id];
    if (product && product.images && product.images[0]) {
      return product.images[0];
    }
    return "images/placeholders/olvia-bed-frame-1.jpg";
  }

  function renderCartPage() {
    if (!cartItemsContainer) return;

    const cart = getCart();
    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {
      if (emptyCartMessage) emptyCartMessage.style.display = "block";
      if (cartSummaryCount) cartSummaryCount.textContent = "0";
      if (cartSummarySubtotal) cartSummarySubtotal.textContent = "¥0";
      if (cartSummaryTotal) cartSummaryTotal.textContent = "¥0";
      return;
    }

    if (emptyCartMessage) emptyCartMessage.style.display = "none";

    let totalItems = 0;
    let subtotal = 0;

    cart.forEach((item, index) => {
      const mattressTotal = Number(item.mattressPrice || 0);
      const unitTotal = Number(item.price || 0) + mattressTotal;

      totalItems += item.quantity;
      subtotal += unitTotal * item.quantity;

      const card = document.createElement("article");
      card.className = "cart-item-card";

      card.innerHTML = `
        <div
          class="cart-item-image"
          style="background-image: url('${getCartItemImage(item)}');"
        ></div>

        <div class="cart-item-info">
          <h3>${item.name}</h3>
          <p class="cart-item-meta">カラー: ${item.color || "-"}</p>
          <p class="cart-item-meta">サイズ: ${item.size || "-"}</p>
          ${item.storageType ? `<p class="cart-item-meta">収納: ${item.storageType}</p>` : ""}
          ${item.chairType ? `<p class="cart-item-meta">椅子: ${item.chairType}</p>` : ""}
          <p class="cart-item-meta">マットレス: ${
            item.mattressType
              ? `${item.mattressType} (${formatPrice(item.mattressPrice || 0)})`
              : "追加なし"
          }</p>

          <div class="cart-qty-control">
            <button type="button" class="cart-qty-btn decrease-qty-btn" data-index="${index}">−</button>
            <span class="cart-qty-value">${item.quantity}</span>
            <button type="button" class="cart-qty-btn increase-qty-btn" data-index="${index}">+</button>
          </div>

          <p class="cart-item-price">単価: ${formatPrice(unitTotal)}</p>
          <p class="cart-item-total">合計: ${formatPrice(unitTotal * item.quantity)}</p>
        </div>

        <div class="cart-item-actions">
          <button type="button" class="remove-item-btn" data-index="${index}">削除</button>
        </div>
      `;

      cartItemsContainer.appendChild(card);
    });

    if (cartSummaryCount) cartSummaryCount.textContent = String(totalItems);
    if (cartSummarySubtotal) cartSummarySubtotal.textContent = formatPrice(subtotal);
    if (cartSummaryTotal) cartSummaryTotal.textContent = formatPrice(subtotal);

    const removeButtons = cartItemsContainer.querySelectorAll(".remove-item-btn");
    removeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const index = Number(button.dataset.index);
        removeCartItem(index);
      });
    });

    const increaseButtons = cartItemsContainer.querySelectorAll(".increase-qty-btn");
    increaseButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const index = Number(button.dataset.index);
        updateCartItemQuantity(index, 1);
      });
    });

    const decreaseButtons = cartItemsContainer.querySelectorAll(".decrease-qty-btn");
    decreaseButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const index = Number(button.dataset.index);
        updateCartItemQuantity(index, -1);
      });
    });
  }

  function fillSelectOptions(selectElement, values, preferredValue = "") {
    if (!selectElement) return;

    const safeValues = Array.isArray(values) ? values : [];
    const previousValue = preferredValue || selectElement.value || "";

    selectElement.innerHTML = "";

    safeValues.forEach((value) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = value;
      selectElement.appendChild(option);
    });

    if (safeValues.length === 0) return;

    if (safeValues.includes(previousValue)) {
      selectElement.value = previousValue;
    } else {
      selectElement.value = safeValues[0];
    }
  }

  function applyVariant(product, selectedSize) {
    if (!product?.variants || !product.variants[selectedSize]) {
      return {
        price: product?.price || 0,
        sizeText: product?.sizeText || "",
        sku: ""
      };
    }
    return product.variants[selectedSize];
  }

  function getStoragePrice(product, selectedSize, storageType) {
    if (!product?.storageOptions) return null;
    const sizeGroup = product.storageOptions[selectedSize];
    if (!sizeGroup) return null;
    if (!(storageType in sizeGroup)) return null;
    return Number(sizeGroup[storageType] || 0);
  }

  function updateStorageUI(product, selectedSize) {
    if (!storageOptionWrap || !storageTypeSelect || !productSummary) return;

    const hasStorageOption = Boolean(product?.storageOptions);

    if (!hasStorageOption) {
      storageOptionWrap.style.display = "none";
      storageTypeSelect.innerHTML = "";
      productSummary.dataset.storageType = "";
      return;
    }

    storageOptionWrap.style.display = "block";

    const storageChoices = Object.keys(product.storageOptions[selectedSize] || {});
    fillSelectOptions(storageTypeSelect, storageChoices, productSummary.dataset.storageType || "");

    productSummary.dataset.storageType = storageTypeSelect.value || "";
  }

  function getChairPrice(product, selectedSize, chairType) {
    if (!product?.chairOptions) return null;
    const sizeGroup = product.chairOptions[selectedSize];
    if (!sizeGroup) return null;
    if (!(chairType in sizeGroup)) return null;
    return Number(sizeGroup[chairType] || 0);
  }

  function updateChairUI(product, selectedSize) {
    if (!chairOptionWrap || !chairTypeSelect || !productSummary) return;

    const hasChairOption = Boolean(product?.chairOptions);

    if (!hasChairOption) {
      chairOptionWrap.style.display = "none";
      chairTypeSelect.innerHTML = "";
      productSummary.dataset.chairType = "";
      return;
    }

    chairOptionWrap.style.display = "block";

    const chairChoices = Object.keys(product.chairOptions[selectedSize] || {});
    fillSelectOptions(chairTypeSelect, chairChoices, productSummary.dataset.chairType || "");

    productSummary.dataset.chairType = chairTypeSelect.value || "";
  }

  function getMattressTypeLabel(value) {
    const labels = {
      spring25: "スプリング 25cm",
      spring30: "スプリング 30cm",
      latex25: "ラテックス 25cm",
      latex30: "ラテックス 30cm"
    };
    return labels[value] || value;
  }

  function getMattressPrice(product, selectedSize, mattressType) {
    if (!product?.hasMattressOption || !product?.mattressOptions) return 0;
    const mattressGroup = product.mattressOptions[mattressType];
    if (!mattressGroup) return 0;
    return Number(mattressGroup[selectedSize] || 0);
  }

  function updateMattressUI(product, selectedSize) {
    if (!mattressOptionWrap || !mattressDetailWrap || !mattressToggle) return;

    const isBedWithMattress = Boolean(product?.hasMattressOption);

    mattressOptionWrap.style.display = isBedWithMattress ? "block" : "none";

    if (!isBedWithMattress) {
      mattressDetailWrap.style.display = "none";
      if (mattressPriceText) mattressPriceText.textContent = "マットレス価格: ¥0";
      if (productSummary) {
        productSummary.dataset.mattressType = "";
        productSummary.dataset.mattressLabel = "";
        productSummary.dataset.mattressPrice = "0";
      }
      return;
    }

    if (mattressToggle.value === "add") {
      mattressDetailWrap.style.display = "block";
      const mattressType = mattressTypeSelect ? mattressTypeSelect.value : "spring25";
      const mattressPrice = getMattressPrice(product, selectedSize, mattressType);
      const mattressLabel = getMattressTypeLabel(mattressType);

      if (mattressPriceText) {
        mattressPriceText.textContent = `マットレス価格: ${formatPrice(mattressPrice)}`;
      }

      if (productSummary) {
        productSummary.dataset.mattressType = mattressType;
        productSummary.dataset.mattressLabel = mattressLabel;
        productSummary.dataset.mattressPrice = String(mattressPrice);
      }
    } else {
      mattressDetailWrap.style.display = "none";
      if (mattressPriceText) {
        mattressPriceText.textContent = "マットレス価格: ¥0";
      }
      if (productSummary) {
        productSummary.dataset.mattressType = "";
        productSummary.dataset.mattressLabel = "";
        productSummary.dataset.mattressPrice = "0";
      }
    }
  }

  function updateVisibleProductCount() {
    if (!shopGrid || !shopCountText) return;

    const visibleCards = Array.from(
      shopGrid.querySelectorAll(".shop-product-card")
    ).filter((card) => card.style.display !== "none");

    shopCountText.textContent = `${visibleCards.length}件の商品`;
  }

  function matchesPriceFilter(cardPrice, filterValue) {
    if (filterValue === "all") return true;
    if (filterValue === "100000-200000") {
      return cardPrice >= 100000 && cardPrice <= 200000;
    }
    if (filterValue === "200001-300000") {
      return cardPrice >= 200001 && cardPrice <= 300000;
    }
    if (filterValue === "300001-over") {
      return cardPrice >= 300001;
    }
    return true;
  }

  function applyShopFilters() {
    if (!shopGrid) return;

    const cards = shopGrid.querySelectorAll(".shop-product-card");

    cards.forEach((card) => {
      const category = card.dataset.category || "";
      const space = card.dataset.space || "";
      const price = getProductPrice(card);
      const name = getProductName(card);
      const type = getProductType(card);

      const keywordText = `${name} ${type}`.toLowerCase();

      const categoryMatch =
        activeFilters.category === "all" ||
        category === activeFilters.category;

      const spaceMatch =
        activeFilters.space === "all" ||
        space.includes(activeFilters.space);

      const priceMatch = matchesPriceFilter(price, activeFilters.price);

      const keywordMatch =
        activeFilters.keyword === "" ||
        keywordText.includes(activeFilters.keyword);

      const isVisible =
        categoryMatch && spaceMatch && priceMatch && keywordMatch;

      card.style.display = isVisible ? "block" : "none";
    });

    updateVisibleProductCount();
  }

  function updateProductPrice(product, selectedSize) {
    const priceEl = document.getElementById("productPrice");
    const sizeMetaEl = document.getElementById("productMetaSize");

    let finalPrice = product.price;
    const variant = applyVariant(product, selectedSize);

    if (product?.chairOptions && chairTypeSelect) {
      const selectedChair = chairTypeSelect.value || "無";
      const chairPrice = getChairPrice(product, selectedSize, selectedChair);

      finalPrice = chairPrice !== null ? chairPrice : variant.price;

      if (productSummary) {
        productSummary.dataset.chairType = selectedChair;
        productSummary.dataset.storageType = "";
      }
    } else if (product?.storageOptions && storageTypeSelect) {
      const selectedStorage = storageTypeSelect.value || "収納なし";
      const storagePrice = getStoragePrice(product, selectedSize, selectedStorage);

      finalPrice = storagePrice !== null ? storagePrice : variant.price;

      if (productSummary) {
        productSummary.dataset.storageType = selectedStorage;
        productSummary.dataset.chairType = "";
      }
    } else {
      finalPrice = variant.price;

      if (productSummary) {
        productSummary.dataset.storageType = "";
        productSummary.dataset.chairType = "";
      }
    }

    if (priceEl) priceEl.textContent = formatPrice(finalPrice);
    if (sizeMetaEl) sizeMetaEl.textContent = variant.sizeText;

    if (productSummary) {
      productSummary.dataset.productPrice = String(finalPrice);
    }
  }

  function renderDynamicProductPage() {
    const params = new URLSearchParams(window.location.search);
    const productKey = params.get("product") || "olvia-bed-frame";

    if (!productSummary || !PRODUCT_DATA[productKey]) return;

    const product = PRODUCT_DATA[productKey];

    const categoryEl = document.getElementById("productCategory");
    const titleEl = document.getElementById("productTitle");
    const descEl = document.getElementById("productDescription");
    const infoDescEl = document.getElementById("productInfoDescription");
    const materialEl = document.getElementById("productMaterial");
    const deliveryEl = document.getElementById("productDelivery");
    const careEl = document.getElementById("productCare");
    const shippingReturnsEl = document.getElementById("productShippingReturns");
    const breadcrumbTitleEl = document.getElementById("productBreadcrumbTitle");
    const colorSelect = document.getElementById("color");
    const sizeSelect = document.getElementById("size");

    if (categoryEl) categoryEl.textContent = product.category;
    if (titleEl) titleEl.textContent = product.name;
    if (descEl) descEl.textContent = product.description;
    if (infoDescEl) infoDescEl.textContent = product.infoDescription;
    if (materialEl) materialEl.textContent = product.material;
    if (deliveryEl) deliveryEl.textContent = product.delivery;
    if (careEl) careEl.textContent = product.care;
    if (shippingReturnsEl) shippingReturnsEl.textContent = product.shippingReturns;
    if (breadcrumbTitleEl) breadcrumbTitleEl.textContent = product.name;

    fillSelectOptions(colorSelect, product.colors || []);
    fillSelectOptions(sizeSelect, product.sizes || []);

    const initialSize =
      sizeSelect && sizeSelect.value ? sizeSelect.value : (product.sizes?.[0] || "");

    if (productSummary) {
      productSummary.dataset.productId = productKey;
      productSummary.dataset.productName = product.name;
      productSummary.dataset.mattressType = "";
      productSummary.dataset.mattressLabel = "";
      productSummary.dataset.mattressPrice = "0";
      productSummary.dataset.storageType = "";
      productSummary.dataset.chairType = "";
    }

    if (productMainImage && product.images.length > 0) {
      productMainImage.style.backgroundImage = `url('${product.images[0]}')`;
    }

    if (productThumbs.length > 0) {
      productThumbs.forEach((thumb, index) => {
        const image = product.images[index];

        thumb.classList.remove("is-active");

        if (image) {
          thumb.dataset.image = image;
          thumb.style.backgroundImage = `url('${image}')`;
          thumb.style.display = "block";
        } else {
          thumb.dataset.image = "";
          thumb.style.backgroundImage = "none";
          thumb.style.display = "none";
        }

        if (index === 0 && image) {
          thumb.classList.add("is-active");
        }
      });
    }

    updateStorageUI(product, initialSize);
    updateChairUI(product, initialSize);
    updateProductPrice(product, initialSize);
    updateMattressUI(product, initialSize);

    if (sizeSelect) {
      sizeSelect.addEventListener("change", () => {
        const newSize = sizeSelect.value;
        updateStorageUI(product, newSize);
        updateChairUI(product, newSize);
        updateProductPrice(product, newSize);
        updateMattressUI(product, newSize);
      });
    }

    if (storageTypeSelect) {
      storageTypeSelect.addEventListener("change", () => {
        const currentSize = sizeSelect ? sizeSelect.value : initialSize;
        if (productSummary) productSummary.dataset.storageType = storageTypeSelect.value || "";
        updateProductPrice(product, currentSize);
      });
    }

    if (chairTypeSelect) {
      chairTypeSelect.addEventListener("change", () => {
        const currentSize = sizeSelect ? sizeSelect.value : initialSize;
        if (productSummary) productSummary.dataset.chairType = chairTypeSelect.value || "";
        updateProductPrice(product, currentSize);
      });
    }

    if (mattressToggle) {
      mattressToggle.addEventListener("change", () => {
        const currentSize = sizeSelect ? sizeSelect.value : initialSize;
        updateMattressUI(product, currentSize);
      });
    }

    if (mattressTypeSelect) {
      mattressTypeSelect.addEventListener("change", () => {
        const currentSize = sizeSelect ? sizeSelect.value : initialSize;
        updateMattressUI(product, currentSize);
      });
    }

    document.title = `${product.name} | Luxe Living Japan`;
  }

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("active");
      if (searchPanel) searchPanel.classList.remove("active");
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
      });
    });
  }

  if (searchToggle && searchPanel) {
    searchToggle.addEventListener("click", () => {
      searchPanel.classList.toggle("active");
      if (mobileMenu) mobileMenu.classList.remove("active");
    });
  }

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("ご登録ありがとうございます。");
      newsletterForm.reset();
    });
  }

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("お問い合わせありがとうございます。内容を確認のうえ、ご連絡いたします。");
      contactForm.reset();
    });
  }

  renderDynamicProductPage();

  if (addToCartButton && quantityInput && productSummary) {
    addToCartButton.addEventListener("click", () => {
      const productId = productSummary.dataset.productId || "";
      const productName = productSummary.dataset.productName || "商品";
      const baseProductPrice = Number(productSummary.dataset.productPrice || 0);

      const colorSelect = document.getElementById("color");
      const sizeSelect = document.getElementById("size");

      const selectedColor = colorSelect ? colorSelect.value : "";
      const selectedSize = sizeSelect ? sizeSelect.value : "";
      const selectedStorage = productSummary.dataset.storageType || "";
      const selectedChair = productSummary.dataset.chairType || "";
      const quantity = Number(quantityInput.value);

      const mattressLabel = productSummary.dataset.mattressLabel || "";
      const mattressPrice = Number(productSummary.dataset.mattressPrice || 0);

      if (!quantity || quantity < 1) {
        alert("正しい数量を入力してください。");
        return;
      }

      addItemToCart({
        id: productId,
        name: productName,
        price: baseProductPrice,
        color: selectedColor,
        size: selectedSize,
        storageType: selectedStorage,
        chairType: selectedChair,
        quantity,
        mattressType: mattressLabel,
        mattressPrice
      });

      alert(`${productName} をカートに追加しました。`);
    });
  }

  if (buyNowButton && quantityInput && productSummary) {
    buyNowButton.addEventListener("click", async () => {
      const productId = productSummary.dataset.productId || "";
      const colorSelect = document.getElementById("color");
      const sizeSelect = document.getElementById("size");

      const selectedColor = colorSelect ? colorSelect.value : "";
      const selectedSize = sizeSelect ? sizeSelect.value : "";
      const selectedStorage = productSummary.dataset.storageType || "";
      const selectedChair = productSummary.dataset.chairType || "";
      const quantity = Number(quantityInput.value);

      const mattressLabel = productSummary.dataset.mattressLabel || "";
      const mattressPrice = Number(productSummary.dataset.mattressPrice || 0);

      if (!quantity || quantity < 1) {
        alert("正しい数量を入力してください。");
        return;
      }

      try {
        const response = await fetch("/create-checkout-session", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            productId,
            quantity,
            selectedColor,
            selectedSize,
            selectedStorage,
            selectedChair,
            selectedMattress: mattressLabel,
            mattressPrice
          })
        });

        const data = await response.json();

        if (data.url) {
          window.location.href = data.url;
        } else {
          console.error(data);
          alert("決済ページの作成に失敗しました。");
        }
      } catch (error) {
        console.error(error);
        alert("通信エラーが発生しました。");
      }
    });
  }

  if (productMainImage && productThumbs.length > 0) {
    productThumbs.forEach((thumb) => {
      thumb.addEventListener("click", () => {
        const newImage = thumb.dataset.image;
        if (!newImage) return;

        productMainImage.style.backgroundImage = `url('${newImage}')`;

        productThumbs.forEach((item) => item.classList.remove("is-active"));
        thumb.classList.add("is-active");
      });
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      sortProducts(e.target.value);
      applyShopFilters();
    });
  }

  if (sortSofasSelect) {
    sortSofasSelect.addEventListener("change", (e) => {
      sortProducts(e.target.value);
      applyShopFilters();
    });
  }

  if (searchInput && shopGrid) {
    searchInput.addEventListener("input", (e) => {
      activeFilters.keyword = e.target.value.trim().toLowerCase();
      applyShopFilters();
    });
  }

  if (filterLists.length > 0) {
    filterLists.forEach((list) => {
      const group = list.dataset.filterGroup;
      const links = list.querySelectorAll("a");

      links.forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();

          const filterValue = link.dataset.filterValue || "all";

          links.forEach((item) => item.classList.remove("active"));
          link.classList.add("active");

          if (group && activeFilters[group] !== undefined) {
            activeFilters[group] = filterValue;
          }

          applyShopFilters();
        });
      });
    });
  }

  if (clearCartButton) {
    clearCartButton.addEventListener("click", () => {
      clearCart();
    });
  }

  if (checkoutButton) {
    checkoutButton.addEventListener("click", async () => {
      const cart = getCart();

      if (!cart.length) {
        alert("カートが空です。");
        return;
      }

      const firstItem = cart[0];

      try {
        const response = await fetch("/create-checkout-session", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            productId: firstItem.id,
            quantity: firstItem.quantity || 1,
            selectedColor: firstItem.color || "",
            selectedSize: firstItem.size || "",
            selectedStorage: firstItem.storageType || "",
            selectedChair: firstItem.chairType || "",
            selectedMattress: firstItem.mattressType || "",
            mattressPrice: Number(firstItem.mattressPrice || 0)
          })
        });

        const data = await response.json();

        if (data.url) {
          window.location.href = data.url;
        } else {
          console.error(data);
          alert("決済ページの作成に失敗しました。");
        }
      } catch (error) {
        console.error(error);
        alert("通信エラーが発生しました。");
      }
    });
  }

  updateCartCountUI();
  renderCartPage();
  applyShopFilters();
});