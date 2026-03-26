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
      material:
        "布・ファブリック、モジュール構造フレーム、クッション材",
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
      material:
        "ファブリック張り、クッション性ヘッドボード、フレーム構造",
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
      material:
        "ファブリック張り、クッション性ヘッドボード、フレーム構造",
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
      material:
        "ファブリック張り、クッション性ヘッドボード、フレーム構造",
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
      material:
        "オーク無垢材、タン仕上げ、バタフライリーフ構造",
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

    "lagos-dining-set-160": {
      category: "ダイニングセット",
      name: "ラゴス ダイニングセット 160",
      price: 361900,
      description:
        "変形楕円の天板と3本の円柱脚が印象的な、ラグジュアリーな5点式ダイニングセット。空間をアートのように引き締めます。",
      infoDescription:
        "ラゴス ダイニングセット 160 は、ハイエンドでコンテンポラリーなイタリアンデザインに着想を得たダイニングセットです。左右非対称のイレギュラーオーバル天板と、サイズの異なる3本の円柱脚が生み出す造形美が特徴です。現在のセットはシンタードストーン天板仕様で、天然大理石天板への変更も可能です。チェア4脚が付属し、モダンで洗練されたダイニング空間を演出します。",
      material:
        "シンタードストーン天板、円柱型メタルレッグ、チェア4脚",
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
        item.size === itemToAdd.size
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
      totalItems += item.quantity;
      subtotal += item.price * item.quantity;

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

          <div class="cart-qty-control">
            <button type="button" class="cart-qty-btn decrease-qty-btn" data-index="${index}">−</button>
            <span class="cart-qty-value">${item.quantity}</span>
            <button type="button" class="cart-qty-btn increase-qty-btn" data-index="${index}">+</button>
          </div>

          <p class="cart-item-price">単価: ${formatPrice(item.price)}</p>
          <p class="cart-item-total">合計: ${formatPrice(item.price * item.quantity)}</p>
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

  function fillSelectOptions(selectElement, values) {
    if (!selectElement) return;
    selectElement.innerHTML = "";

    values.forEach((value) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = value;
      selectElement.appendChild(option);
    });
  }

  function applyVariant(product, selectedSize) {
    if (!product.variants || !product.variants[selectedSize]) {
      return {
        price: product.price,
        sizeText: product.sizeText,
        sku: ""
      };
    }
    return product.variants[selectedSize];
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

  function renderDynamicProductPage() {
    const params = new URLSearchParams(window.location.search);
    const productKey = params.get("product") || "olvia-bed-frame";

    if (!productSummary || !PRODUCT_DATA[productKey]) return;

    const product = PRODUCT_DATA[productKey];

    const categoryEl = document.getElementById("productCategory");
    const titleEl = document.getElementById("productTitle");
    const priceEl = document.getElementById("productPrice");
    const descEl = document.getElementById("productDescription");
    const infoDescEl = document.getElementById("productInfoDescription");
    const materialEl = document.getElementById("productMaterial");
    const sizeMetaEl = document.getElementById("productMetaSize");
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

    fillSelectOptions(colorSelect, product.colors);
    fillSelectOptions(sizeSelect, product.sizes);

    const initialSize =
      sizeSelect && sizeSelect.value ? sizeSelect.value : product.sizes[0];
    const initialVariant = applyVariant(product, initialSize);

    if (priceEl) priceEl.textContent = formatPrice(initialVariant.price);
    if (sizeMetaEl) sizeMetaEl.textContent = initialVariant.sizeText;

    productSummary.dataset.productId = productKey;
    productSummary.dataset.productName = product.name;
    productSummary.dataset.productPrice = String(initialVariant.price);

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

    if (sizeSelect) {
      sizeSelect.addEventListener("change", () => {
        const variant = applyVariant(product, sizeSelect.value);

        if (priceEl) priceEl.textContent = formatPrice(variant.price);
        if (sizeMetaEl) sizeMetaEl.textContent = variant.sizeText;

        productSummary.dataset.productPrice = String(variant.price);
      });
    }

    document.title = `${product.name} | Luxe Living Japan`;
  }

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("active");
      if (searchPanel) {
        searchPanel.classList.remove("active");
      }
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
      if (mobileMenu) {
        mobileMenu.classList.remove("active");
      }
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
      const productPrice = Number(productSummary.dataset.productPrice || 0);

      const colorSelect = document.getElementById("color");
      const sizeSelect = document.getElementById("size");

      const selectedColor = colorSelect ? colorSelect.value : "";
      const selectedSize = sizeSelect ? sizeSelect.value : "";
      const quantity = Number(quantityInput.value);

      if (!quantity || quantity < 1) {
        alert("正しい数量を入力してください。");
        return;
      }

      addItemToCart({
        id: productId,
        name: productName,
        price: productPrice,
        color: selectedColor,
        size: selectedSize,
        quantity
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
      const quantity = Number(quantityInput.value);

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
            selectedSize
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
            selectedSize: firstItem.size || ""
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