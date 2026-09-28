/* SW Lingerie — product catalog (10 products, USD) */
const PRODUCTS = [
  {
    id: 1,
    name: "Everyday Ease Front-Closure Bra",
    category: "Wireless Bras",
    price: 48.00,
    compareAt: 62.00,
    badge: "Bestseller",
    rating: 4.9,
    reviews: 312,
    image: "images/p1.jpg",
    short: "Front-closure wireless bra in soft beige — no reaching, no twisting, no underwire.",
    desc: "Designed for women who value independence and comfort, our Everyday Ease bra closes gently at the front with large, easy-grip clasps. Wide cushioned straps stay put without digging, and the full-coverage cups are lined in breathable cotton that is kind to sensitive skin.",
    features: [
      "Easy-grip front closure — ideal for arthritis or limited shoulder mobility",
      "Wire-free full-coverage cups with soft cotton lining",
      "Wide, cushioned straps that never dig in",
      "Tag-free, flat seams for sensitive skin",
      "Machine washable, tumble dry low"
    ],
    sizes: ["36B", "38B", "40C", "42C", "44D", "46D", "48DD"]
  },
  {
    id: 2,
    name: "Gentle Posture Support Bra",
    category: "Wireless Bras",
    price: 52.00,
    compareAt: null,
    badge: null,
    rating: 4.8,
    reviews: 208,
    image: "images/p2.jpg",
    short: "Crisscross back panels encourage upright posture — all-day support without wires.",
    desc: "Our Gentle Posture Support Bra uses soft crisscross back panels to ease the strain on your shoulders and upper back. The high, full-coverage front keeps you secure through every bend and stretch, while the breathable cotton-blend fabric keeps you cool from morning to night.",
    features: [
      "Supportive crisscross back eases shoulder and back strain",
      "Full-coverage, wire-free cups for a secure fit",
      "Extra-wide padded straps distribute weight evenly",
      "Front hook closure with three adjustable positions",
      "Cotton-rich breathable fabric"
    ],
    sizes: ["38C", "40C", "42D", "44D", "46DD", "48DD"]
  },
  {
    id: 3,
    name: "CloudSoft Cotton Briefs — 3 Pack",
    category: "Panties",
    price: 34.00,
    compareAt: 42.00,
    badge: "Value Pack",
    rating: 4.9,
    reviews: 486,
    image: "images/p3.jpg",
    short: "Three full-coverage cotton briefs in blush, ivory, and sage — soft, breathable, stay-put.",
    desc: "A drawer essential, three ways. Our CloudSoft briefs are cut generously through the seat and rise for true full coverage, with a wide, soft waistband that lies flat — no rolling, no pinching. The breathable cotton knit feels soft against delicate skin and holds its shape wash after wash.",
    features: [
      "Set of three: blush pink, ivory, and sage green",
      "Generous full-coverage cut with higher rise",
      "Wide soft waistband — no rolling or digging",
      "100% breathable combed cotton with a touch of stretch",
      "Tagless comfort, machine washable"
    ],
    sizes: ["M (8-10)", "L (12-14)", "XL (16-18)", "2X (20-22)", "3X (24-26)"]
  },
  {
    id: 4,
    name: "Champagne Silk-Blend Nightgown",
    category: "Sleepwear",
    price: 68.00,
    compareAt: null,
    badge: "New",
    rating: 5.0,
    reviews: 94,
    image: "images/p4.jpg",
    short: "Knee-length silk-blend gown with lace neckline — cool in summer, gentle on skin.",
    desc: "Slip into something that feels as lovely as it looks. This knee-length nightgown is woven from a breathable silk blend that drapes gracefully and never clings. The delicate lace-trimmed neckline and adjustable straps make it as practical as it is elegant.",
    features: [
      "Breathable silk-blend fabric, naturally temperature-regulating",
      "Knee-length with a graceful, non-clinging drape",
      "Adjustable straps and soft lace-trimmed neckline",
      "Modest coverage with elegant movement",
      "Hand wash or delicate cycle"
    ],
    sizes: ["S", "M", "L", "XL", "2X", "3X"]
  },
  {
    id: 5,
    name: "Cozy Cloud Waffle-Knit Robe",
    category: "Robes",
    price: 74.00,
    compareAt: 89.00,
    badge: "Bestseller",
    rating: 4.9,
    reviews: 377,
    image: "images/p5.jpg",
    short: "Plush ivory waffle-knit robe with shawl collar — your morning companion, all year.",
    desc: "Wrap yourself in warmth without weight. Our waffle-knit robe is crafted from plush, absorbent cotton with a generous shawl collar, deep patch pockets, and an easy-tie belt. Knee-length coverage keeps you comfortable from the first cup of tea to the last page of your book.",
    features: [
      "Plush, lightweight waffle-knit cotton",
      "Generous shawl collar and knee-length cut",
      "Deep patch pockets for glasses, phone, and tissues",
      "Easy-tie belt with two belt-loop heights",
      "Machine washable, gets softer with every wash"
    ],
    sizes: ["S/M", "L/XL", "2X/3X"]
  },
  {
    id: 6,
    name: "Second-Skin Seamless Camisole",
    category: "Camisoles",
    price: 38.00,
    compareAt: null,
    badge: null,
    rating: 4.7,
    reviews: 156,
    image: "images/p6.jpg",
    short: "Soft lavender seamless camisole with built-in gentle support — layers beautifully.",
    desc: "The perfect first layer. Knit without a single side seam, this camisole disappears under cardigans and blouses while its soft shelf band offers light, wire-free support. The lavender knit is brushed inside for a feel that customers describe as a gentle hug.",
    features: [
      "Seamless knit — nothing to rub or irritate skin",
      "Built-in soft shelf band for light, wire-free support",
      "Wide straps cover bra straps completely",
      "Brushed interior, extra-soft against skin",
      "Longer length stays tucked"
    ],
    sizes: ["S", "M", "L", "XL", "2X", "3X"]
  },
  {
    id: 7,
    name: "Smooth Confidence High-Waist Brief",
    category: "Panties",
    price: 42.00,
    compareAt: null,
    badge: null,
    rating: 4.8,
    reviews: 231,
    image: "images/p7.jpg",
    short: "Gentle high-waist shaping brief in mocha — smooths softly, never squeezes.",
    desc: "Smoothing should never mean squeezing. Our high-waist brief offers gentle, even support through the tummy with a soft double-layer front panel, while the stretch microfiber moves with you. Leg openings are finished with flat, no-pinch binding.",
    features: [
      "Gentle double-layer tummy panel — support without squeeze",
      "High-rise waistband sits at the natural waist",
      "Soft stretch microfiber moves with your body",
      "Flat, no-pinch leg binding",
      "Invisible under clothing"
    ],
    sizes: ["M (8-10)", "L (12-14)", "XL (16-18)", "2X (20-22)", "3X (24-26)"]
  },
  {
    id: 8,
    name: "Rose Dawn Front-Clasp Leisure Bra",
    category: "Wireless Bras",
    price: 44.00,
    compareAt: 54.00,
    badge: null,
    rating: 4.8,
    reviews: 189,
    image: "images/p8.jpg",
    short: "Soft rose leisure bra with front clasp — comfort for relaxing, sleeping, and slow mornings.",
    desc: "Made for life's quiet hours, the Rose Dawn leisure bra slips on effortlessly and closes at the front with one simple clasp. The brushed cotton-modal blend is whisper-soft, with light support that is comfortable enough to sleep in and polished enough for morning visitors.",
    features: [
      "One-motion front clasp — the easiest bra you'll own",
      "Whisper-soft brushed cotton-modal blend",
      "Light support, comfortable enough for sleeping",
      "No wires, no hardware at the back, no tags",
      "Lovely rose hue under any top"
    ],
    sizes: ["S", "M", "L", "XL", "2X", "3X"]
  },
  {
    id: 9,
    name: "Warmth & Ease Thermal Lounge Set",
    category: "Sleepwear",
    price: 58.00,
    compareAt: null,
    badge: "New",
    rating: 4.9,
    reviews: 122,
    image: "images/p9.jpg",
    short: "Sage-green thermal pajama set with cream piping — cozy warmth without bulk.",
    desc: "For chilly evenings and leisurely weekends. This two-piece set pairs a long-sleeve thermal top with easy-pull-on pants, both in a sage knit that traps warmth without bulk. Cream piping, a soft elastic waist, and roomy pockets finish a set you'll live in all season.",
    features: [
      "Two-piece set: long-sleeve top and pull-on pants",
      "Thermal knit keeps you warm without weight",
      "Soft, wide elastic waist with adjustable drawstring",
      "Roomy side pockets and elegant cream piping",
      "Machine washable, resists pilling"
    ],
    sizes: ["S", "M", "L", "XL", "2X", "3X"]
  },
  {
    id: 10,
    name: "Midnight Lace-Trim Chemise",
    category: "Sleepwear",
    price: 56.00,
    compareAt: 68.00,
    badge: null,
    rating: 4.9,
    reviews: 167,
    image: "images/p10.jpg",
    short: "Navy sleep chemise with soft lace trim — a little luxury for every night.",
    desc: "Proof that comfort and beauty belong together. The Midnight chemise falls softly to mid-thigh in breathable modal jersey, finished with gentle lace at the neckline and hem. Adjustable straps and a relaxed A-line cut flatter every figure.",
    features: [
      "Breathable modal jersey with beautiful drape",
      "Soft, non-scratch lace at neckline and hem",
      "Relaxed A-line cut flatters every figure",
      "Adjustable straps for a perfect fit",
      "Machine washable on delicate"
    ],
    sizes: ["S", "M", "L", "XL", "2X", "3X"]
  }
];

const FREE_SHIPPING_THRESHOLD = 75.00;
const STANDARD_SHIPPING = 6.95;

function formatUSD(n) {
  return "$" + n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function starsHTML(rating) {
  const full = Math.round(rating);
  let s = "";
  for (let i = 0; i < 5; i++) s += i < full ? "★" : "☆";
  return s;
}
function getProduct(id) {
  return PRODUCTS.find(p => p.id === Number(id));
}
