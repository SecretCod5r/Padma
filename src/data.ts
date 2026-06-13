/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Flavor, Benefit, Persona, Testimonial, PricingTier } from "./types";

export const FLAVORS: Flavor[] = [
  {
    id: "himalayan-salt",
    name: "Himalayan Pink Salt",
    tagline: "The Crisp of Ancient Peaks",
    description: "Pristine pink salt hand-mined from the ancient Himalayan foothills, ground onto air-toasted makhana. Elegantly simple, perfectly salted.",
    price: 199,
    rating: 4.9,
    color: "bg-[#F2EFE6]",
    textColor: "text-[#173F7A]",
    gradient: "from-[#F2EFE6] to-[#E7D7C9]",
    imageBg: "#F7F5EE",
    nutrition: {
      calories: "55 kcal",
      protein: "3.2g",
      fat: "0.4g",
      carbs: "11.2g"
    },
    highlights: ["Mined Himalayan Salt", "100% Organic Cold-Pressed Oil", "Crisp Texture"]
  },
  {
    id: "classic-ghee",
    name: "Ancestral A2 Ghee & Pepper",
    tagline: "The Golden Standard of Snacking",
    description: "Toasted in single-source A2 Vedic cow ghee and seasoned gently with fine hand-crushed black peppercorns. Rich, comforting, and deeply nourishing.",
    price: 199,
    rating: 5.0,
    color: "bg-[#E7D7C9]",
    textColor: "text-[#173F7A]",
    gradient: "from-[#E7D7C9] to-[#D8B06A]",
    imageBg: "#ECE2D5",
    nutrition: {
      calories: "58 kcal",
      protein: "3.1g",
      fat: "1.1g",
      carbs: "11.0g"
    },
    highlights: ["A2 Vedic Cow Ghee", "Tellicherry Black Pepper", "Keto-Friendly"]
  },
  {
    id: "peri-peri",
    name: "Smoked African Peri Peri",
    tagline: "Refined Heat for the Bold",
    description: "An exotic, slow-burning blend of African Bird's Eye chilli, sweet paprika, and zesty lemon rind. A sophisticated clash of fire and citrus.",
    price: 199,
    rating: 4.8,
    color: "bg-[#173F7A]",
    textColor: "text-[#FFFFFF]",
    gradient: "from-[#173F7A] to-[#1d509b]",
    imageBg: "#173F7A",
    nutrition: {
      calories: "54 kcal",
      protein: "3.2g",
      fat: "0.5g",
      carbs: "11.1g"
    },
    highlights: ["African Bird's Eye Chilli", "Naturally Smoked Herbs", "Fiery & Tangy"]
  },
  {
    id: "mango-chilli",
    name: "Alphonso Mango & Chilli",
    tagline: "Sensory Paradox of Indulgence",
    description: "Sun-ripened, organic Alphonso mango pulp dehydrated and powder-seasoned with a delicate, warming touch of organic dried Kashmiri red chilli.",
    price: 199,
    rating: 4.7,
    color: "bg-[#D8B06A]",
    textColor: "text-[#173F7A]",
    gradient: "from-[#D8B06A] to-[#F2EFE6]",
    imageBg: "#DFBE82",
    nutrition: {
      calories: "56 kcal",
      protein: "3.0g",
      fat: "0.3g",
      carbs: "12.2g"
    },
    highlights: ["Debydrated Alphonso Mango", "Mild Kashmiri Chilli", "Sweet & Spicy"]
  },
  {
    id: "dark-chocolate",
    name: "70% Cocoa Salted Noir",
    tagline: "Decadently Mindful",
    description: "Rich, single-origin 70% dark cocoa glaze kissed with high-grade hand-harvested sea salt flakes. An elegant dessert transformed into guilt-free snacking.",
    price: 249,
    rating: 4.9,
    color: "bg-[#2A1D15]",
    textColor: "text-[#FFFFFF]",
    gradient: "from-[#2A1D15] to-[#735A45]",
    imageBg: "#2A1D15",
    nutrition: {
      calories: "62 kcal",
      protein: "3.3g",
      fat: "1.2g",
      carbs: "11.8g"
    },
    highlights: ["Single-Origin 70% Dark Cocoa", "Maldon Sea Salt Flakes", "Antioxidant Rich"]
  }
];

export const BENEFITS: Benefit[] = [
  {
    id: "low-cal",
    title: "Low Calorie",
    description: "Only 55 calories per cup. Eat the entire packaging guilt-free, anytime of the day.",
    iconName: "Flame"
  },
  {
    id: "protein-rich",
    title: "Protein Rich",
    description: "Naturally packed with plant-based proteins, perfect to fuel post-workout or work focus.",
    iconName: "ShieldAlert" // We can render standard lucide icons safely
  },
  {
    id: "gluten-free",
    title: "Gluten Free",
    description: "100% gluten-free and coeliac safe, processed in a dedicated gluten-free sanitary facility.",
    iconName: "Sparkles"
  },
  {
    id: "high-fibre",
    title: "High Fibre",
    description: "Promotes superb gut health and keeps you satisfyingly full longer to crush cravings.",
    iconName: "Leaf"
  },
  {
    id: "natural",
    title: "Natural Ingredients",
    description: "Strictly clean labels. Real fruits, hand-mined salts, cold-pressed artisanal oils.",
    iconName: "TrendingUp"
  },
  {
    id: "no-preservatives",
    title: "Zero Preservatives",
    description: "Never chemically treated, free from highly processed additives, trans-fats or refined sugars.",
    iconName: "Heart"
  }
];

export const PERSONAS: Persona[] = [
  {
    id: "aanya",
    name: "Aanya",
    age: 21,
    role: "Undergraduate & Creator",
    quote: "Snacks are essential for my late-night edits, but I refuse to compromise on my physical routine. PADMA fits my aesthetic and my calorie goals beautifully.",
    habits: ["Tracks daily Macros", "Sells vintage fashion", "Pilates 4x a week"],
    seeking: "A clean-label premium snack that looks beautiful on her social layout.",
    avatarSeed: "Aneka"
  },
  {
    id: "rohan",
    name: "Rohan",
    age: 27,
    role: "Venture Associate",
    quote: "In high-stress investing, mindlessly devouring potato chips was killing my energy levels. Swapping to PADMA Ghee & Pepper was the ultimate upgrade for my body.",
    habits: ["Fast-paced VC meetings", "Functional gym training", "Speaks fluent Sanskrit"],
    seeking: "Artisanal quality, no seed oils, and a brand that feels sophisticated to stock on his desk.",
    avatarSeed: "Rohan"
  }
];

export const REVIEWS: Testimonial[] = [
  {
    id: "rev-1",
    name: "Meera Sen",
    handle: "meera.snackslux",
    rating: 5,
    text: "PADMA's Ghee & Black Pepper tastes like memories of home, but styled with incredible modern precision. I can't look at typical chips the same way again.",
    source: "Instagram Verified",
    highlight: true
  },
  {
    id: "rev-2",
    name: "Kabir Mehta",
    handle: "kabir_wellness",
    rating: 5,
    text: "No seed oils, no weird chemical aftertaste, and actually holds its superb rich crunch. Dark Chocolate salted makhana is a triumph of health food science.",
    source: "Verified Purchase",
    highlight: false
  },
  {
    id: "rev-3",
    name: "Shreya Ghoshal",
    handle: "shreyas_fitdesk",
    rating: 5,
    text: "The delivery came in an ivory minimalist textured courier box. It literally felt like opening a luxury perfume. PADMA is the Aesop of snacking.",
    source: "Premium Club Member",
    highlight: true
  },
  {
    id: "rev-4",
    name: "Dr. Vikram K.",
    handle: "vikram_nutrition",
    rating: 5,
    text: "As a health consultant, I strictly audit labels. PADMA uses genuine A2 Ghee and cold-pressed oil, avoiding cheap palm oil substitutes. Strongly recommended.",
    source: "Registered Nutritionist",
    highlight: false
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "single",
    title: "Athenaeum Single Pack",
    subtitle: "50g Single Serve",
    price: 199,
    description: "Select one pristine 50g luxury air-toasted bag to test our standard and discover your favourite flavour profile.",
    features: [
      "Select any 1 premium flavour",
      "Packaged in custom light-shielding pouch",
      "Stays crisp up to 6 months",
      "Calculated carbon-neutral shipping"
    ]
  },
  {
    id: "value",
    title: "The Triad Value Pack",
    subtitle: "150g Premium Value Pack",
    price: 499,
    originalPrice: 597,
    badge: "Recommended",
    description: "Curate a set of three signature flavours of your choice (150g total). Elegantly bundled together for daily focus and office snacking.",
    features: [
      "Choose any 3 signature packs of 50g",
      "Complimentary golden snack clip",
      "Save 16% over individual purchase",
      "Free priority delivery across India",
      "Invitations to secret launch drops"
    ]
  },
  {
    id: "luxury-box",
    title: "Lotus Sanctum Collector Box",
    subtitle: "Complete Mixed Flavour Box (5 Packs)",
    price: 999,
    originalPrice: 1045,
    badge: "Elite Wellness",
    banner: "Exclusive Wooden Inlay Gift Pouch",
    description: "The ultimate luxury statement. Contains all 5 launch flavours (250g total) curated inside our handcrafted linen-textured gift drawer trunk.",
    features: [
      "All 5 sensory flavours included",
      "Presented in a textured slide-out keepsake box",
      "Comes with printed Sanskrit brand booklet",
      "Scented botanical ambient card",
      "Complimentary lifetime Crunch Club access"
    ]
  }
];

export const INSTAGRAM_POSTS = [
  {
    id: "insta-1",
    tag: "@padma.snackbar",
    likes: "1,248",
    imageText: "Minimalist setup of A2 Ghee pouch sitting beside a leather notebook and concrete tray.",
    category: "AESTHETIC"
  },
  {
    id: "insta-2",
    tag: "@padma.snackbar",
    likes: "3,592",
    imageText: "Close-up of golden roasted makhana detail showing delicate pink salt crystalline dust.",
    category: "DETAIL"
  },
  {
    id: "insta-3",
    tag: "@padma.snackbar",
    likes: "2,110",
    imageText: "Rohan carrying the minimal Navy Blue PADMA tote bag outside a sleek glass architecture.",
    category: "LIFESTYLE"
  },
  {
    id: "insta-4",
    tag: "@padma.snackbar",
    likes: "4,037",
    imageText: "Flat lay of elegant dark chocolate coating dripping exquisitely on a pristine white lotus seed.",
    category: "ARTISANAL"
  }
];
