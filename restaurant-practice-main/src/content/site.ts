/*
 * ============================================================
 *  EDIT YOUR WEBSITE HERE
 *  Change any text, price, phone number or address below.
 *  Save the file and the website updates automatically.
 * ============================================================
 */
import hero from "@/assets/hero.jpg";
import karahi from "@/assets/karahi.jpg";
import bbq from "@/assets/bbq.jpg";
import interior from "@/assets/interior.jpg";

export const site = {
  name: "Spice House",
  tagline: "Authentic Pakistani flavours, served with warmth.",
  intro:
    "From slow-cooked karahi to smoky charcoal kebabs, every dish at Spice House is made fresh with traditional recipes and hand-ground spices.",

  // ⚠️ FICTIONAL CONTACT DETAILS — replace with your real ones
  phone: "+92 300 0000000 (fictional)",
  // ⚠️ WHATSAPP NUMBER (fictional) — replace with your real number to receive orders.
  // Format: digits only, country code first, no +, spaces or dashes. Example: "923001234567"
  whatsapp: "923000000000",
  whatsappMessage: "Hello Spice House! I would like to place an order.",
  email: "hello@spicehouse.example (fictional)",
  address: "123 Example Road, Gulberg, Lahore, Pakistan (fictional address)",
  hours: ["Mon – Thu: 12:00 pm – 11:00 pm", "Fri – Sun: 12:00 pm – 1:00 am"],

  images: { hero, karahi, bbq, interior },
};

export const about = {
  title: "Our Story",
  paragraphs: [
    "Spice House was born from a simple love of home-style Pakistani cooking — the kind of food that brings families together around one table.",
    "Our chefs cook over open flame and in traditional iron karahis, using recipes passed down through generations. We source fresh meat and vegetables daily and grind our own spice blends in-house.",
    "Whether you are joining us for a family dinner or ordering to your doorstep, we want every bite to feel like a celebration.",
  ],
  highlights: [
    { title: "Fresh Daily", text: "Meat and produce sourced every morning." },
    { title: "Hand-Ground Spices", text: "Our own masala blends, made in-house." },
    { title: "Charcoal Grill", text: "Kebabs and tikka cooked over real coals." },
  ],
};

// MENU — add, remove or change dishes and prices (in PKR)
export const menu = [
  {
    category: "Starters",
    items: [
      { name: "Vegetable Samosa (2 pcs)", description: "Crispy pastry with spiced potato filling", price: 250 },
      { name: "Chicken Pakora", description: "Gram-flour battered chicken bites", price: 650 },
      { name: "Dahi Bhallay", description: "Lentil dumplings in sweet yoghurt & chutney", price: 450 },
    ],
  },
  {
    category: "Karahi & Curries",
    items: [
      { name: "Chicken Karahi (Half)", description: "Tomato, ginger and green chilli in an iron wok", price: 1650 },
      { name: "Mutton Karahi (Half)", description: "Tender mutton cooked the Peshawari way", price: 2900 },
      { name: "Chicken Handi", description: "Creamy, slow-cooked boneless chicken", price: 1550 },
      { name: "Daal Makhni", description: "Black lentils simmered overnight with butter", price: 750 },
    ],
  },
  {
    category: "BBQ",
    items: [
      { name: "Seekh Kebab (4 pcs)", description: "Minced beef kebabs off the charcoal grill", price: 1100 },
      { name: "Chicken Tikka (Leg/Chest)", description: "Marinated overnight, grilled on coals", price: 750 },
      { name: "Malai Boti", description: "Creamy, mild boneless chicken cubes", price: 1300 },
    ],
  },
  {
    category: "Rice & Bread",
    items: [
      { name: "Chicken Biryani", description: "Fragrant basmati layered with spiced chicken", price: 850 },
      { name: "Garlic Naan", description: "Fresh from the tandoor", price: 150 },
      { name: "Roghni Naan", description: "Soft naan topped with sesame", price: 120 },
    ],
  },
  {
    category: "Desserts & Drinks",
    items: [
      { name: "Kheer", description: "Slow-cooked rice pudding with cardamom", price: 400 },
      { name: "Gulab Jamun (2 pcs)", description: "Warm milk dumplings in syrup", price: 350 },
      { name: "Mint Margarita", description: "Fresh mint, lemon and soda", price: 450 },
      { name: "Doodh Patti Chai", description: "Strong milky tea", price: 200 },
    ],
  },
];

// GALLERY — add more photos by importing them above and listing them here
export const gallery = [
  { src: hero, alt: "A Spice House feast with biryani, karahi and naan" },
  { src: karahi, alt: "Chicken karahi with green chillies" },
  { src: bbq, alt: "Seekh kebabs and chicken tikka platter" },
  { src: interior, alt: "Warm lantern-lit dining room" },
];

export const whatsappLink = () =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;

export const formatPKR = (n: number) => `Rs. ${n.toLocaleString("en-PK")}`;
