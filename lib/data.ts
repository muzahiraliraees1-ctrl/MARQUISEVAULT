export interface Product {
  id: string
  name: string
  brand: string
  price: number
  originalPrice?: number
  image: string
  images: string[]
  category: string
  description: string
  details: string[]
  colors: string[]
  inStock: boolean
  isNew?: boolean
  isFeatured?: boolean
  occasion?: string
  colorImages?: Record<string, string[]>
}

export interface Brand {
  id: string
  name: string
  logo: string
  description: string
  productCount: number
}

export interface CartItem {
  product: Product
  quantity: number
  color: string
}

export const brands: Brand[] = [
  {
    id: "chanel",
    name: "CHANEL",
    logo: "/brands/chanel.svg",
    description: "Timeless elegance since 1910",
    productCount: 24,
  },
  {
    id: "sleek-tote",
    name: "SLEEK TOTE",
    logo: "/brands/gucci.svg",
    description: "Modern sophistication since 2024",
    productCount: 1,
  },
  {
    id: "elara-tote",
    name: "ELARA BURGUNDY BROWN BAG",
    logo: "/brands/dior.svg",
    description: "Timeless luxury since 2024",
    productCount: 1,
  },
]


export const products: Product[] = [
  {
    id: "mv-7",
    name: "Marquise Elite Tote",
    brand: "MARQUISE VAULT",
    price: 4500,
    image: "/products/marquise-elite-tote.png",
    images: [
      "/products/sleek-tote-gallery-1.jpg",
      "/products/sleek-tote-gallery-2.jpg",
      "/products/sleek-tote-gallery-3.jpg",
      "/products/sleek-tote-gallery-4.jpg"
    ],
    category: "Totes",
    description: "A sleek and functional tote bag designed for the modern professional. Features a secure zip closure, two compartments with magnetic closures, and premium stainless-steel hardware. Crafted from high-quality PU leather for a sophisticated look.",
    details: [
      "Dimensions: 11\" L x 17.5\" W x 5.5\" D",
      "Secure zip closure",
      "Two compartments with magnetic closures",
      "Two dedicated accessory holders",
      "One zippered pocket for added organization",
      "Premium stainless-steel accessories (fade-resistant)",
      "Material: High-quality PU leather",
    ],
    colors: ["Tan", "Black"],
    inStock: true,
    isFeatured: false,
    occasion: "Business",
  },
  {
    id: "mv-1",
    name: "Marquise Signature Tote",
    brand: "MARQUISE VAULT",
    price: 3500,
    image: "/products/marquise-signature-transparent.png",
    images: [
      "/products/sleek-tote-gallery-1.jpg",
      "/products/sleek-tote-gallery-2.jpg",
      "/products/sleek-tote-gallery-3.jpg",
      "/products/sleek-tote-gallery-4.jpg"
    ],
    category: "Totes",
    description: "A sleek and functional tote bag designed for the modern professional. Features a secure zip closure, two compartments with magnetic closures, and premium stainless-steel hardware. Crafted from high-quality PU leather for a sophisticated look.",
    details: [
      "Dimensions: 11\" L x 17.5\" W x 5.5\" D",
      "Secure zip closure",
      "Two compartments with magnetic closures",
      "Two dedicated accessory holders",
      "One zippered pocket for added organization",
      "Premium stainless-steel accessories (fade-resistant)",
      "Material: High-quality PU leather",
    ],
    colors: ["Black"],
    inStock: true,
    isFeatured: false,
    occasion: "Business",
  },
  {
    id: "mv-2",
    name: "Marquise Hobo Bag",
    brand: "MARQUISE VAULT",
    price: 3200,
    image: "/products/local-1.png",
    images: [
      "/products/sleek-tote-gallery-1.jpg",
      "/products/sleek-tote-gallery-2.jpg",
      "/products/sleek-tote-gallery-3.jpg",
      "/products/sleek-tote-gallery-4.jpg"
    ],
    category: "Shoulder Bags",
    description: "A sleek and functional tote bag designed for the modern professional. Features a secure zip closure, two compartments with magnetic closures, and premium stainless-steel hardware. Crafted from high-quality PU leather for a sophisticated look.",
    details: [
      "Dimensions: 11\" L x 17.5\" W x 5.5\" D",
      "Secure zip closure",
      "Two compartments with magnetic closures",
      "Two dedicated accessory holders",
      "One zippered pocket for added organization",
      "Premium stainless-steel accessories (fade-resistant)",
      "Material: High-quality PU leather",
    ],
    colors: ["Black"],
    inStock: true,
    isFeatured: false,
    occasion: "Weekend",
  },
  {
    id: "mv-3",
    name: "Marquise Minimal Tote",
    brand: "MARQUISE VAULT",
    price: 3800,
    image: "/products/local-2.png",
    images: [
      "/products/sleek-tote-gallery-1.jpg",
      "/products/sleek-tote-gallery-2.jpg",
      "/products/sleek-tote-gallery-3.jpg",
      "/products/sleek-tote-gallery-4.jpg"
    ],
    category: "Totes",
    description: "A sleek and functional tote bag designed for the modern professional. Features a secure zip closure, two compartments with magnetic closures, and premium stainless-steel hardware. Crafted from high-quality PU leather for a sophisticated look.",
    details: [
      "Dimensions: 11\" L x 17.5\" W x 5.5\" D",
      "Secure zip closure",
      "Two compartments with magnetic closures",
      "Two dedicated accessory holders",
      "One zippered pocket for added organization",
      "Premium stainless-steel accessories (fade-resistant)",
      "Material: High-quality PU leather",
    ],
    colors: ["Black"],
    inStock: true,
    isFeatured: false,
    occasion: "Work",
  },
  {
    id: "mv-4",
    name: "Marquise Evening Clutch",
    brand: "MARQUISE VAULT",
    price: 2500,
    image: "/products/local-3.png",
    images: [
      "/products/sleek-tote-gallery-1.jpg",
      "/products/sleek-tote-gallery-2.jpg",
      "/products/sleek-tote-gallery-3.jpg",
      "/products/sleek-tote-gallery-4.jpg"
    ],
    category: "Clutches",
    description: "Elegant and compact, perfect for evening essentials.",
    details: [
      "Compact design",
      "Detachable chain strap",
      "Luxurious lining",
      "Card slots",
    ],
    colors: ["Black"],
    inStock: true,
    isFeatured: false,
    occasion: "Gala",
  },
  {
    id: "mv-5",
    name: "ELARA TOTE BAG",
    brand: "MARQUISE VAULT",
    price: 3900,
    originalPrice: 6000,
    image: "/products/elara-tote-removebg-1.png",
    images: [
      "/products/sleek-tote-gallery-1.jpg",
      "/products/sleek-tote-gallery-2.jpg",
      "/products/sleek-tote-gallery-3.jpg",
      "/products/sleek-tote-gallery-4.jpg"
    ],
    colorImages: {
      "Brown": [
        "/products/elara-tote-removebg-1.png",
        "/products/elara-tote-removebg-6.png",
        "/products/elara-tote-removebg-7.png"
      ],
      "Black": [
        "/products/elara-black-gallery-4.jpg",
        "/products/elara-black-gallery-1.jpg",
        "/products/elara-black-gallery-2.jpg",
        "/products/elara-black-gallery-3.jpg"
      ]
    },
    category: "Totes",
    description: "Sophisticated and versatile tote bag designed for the modern professional. Features secure magnetic closure, adjustable handle for comfortable carry, premium stainless-steel hardware, and multiple organizational compartments. Crafted from high-quality PU leather.",
    details: [
      "Dimensions: 12.5\" L x 14\" W x 5\" D",
      "High-quality PU leather",
      "Adjustable handle for comfortable carry",
      "Secure magnetic closure",
      "One attached zippered compartment",
      "Two dedicated accessory holders",
      "One additional zippered pocket",
      "Premium stainless-steel accessories (fade-resistant)",
    ],
    colors: ["Brown", "Black"],
    inStock: true,
    isFeatured: false,
    occasion: "Business",
  },
  {
    id: "mv-6",
    name: "SLEEK TOTE BAG",
    brand: "MARQUISE VAULT",
    price: 4225,
    originalPrice: 6500,
    image: "/products/sleek-tote-removebg-5.png",
    images: [
      "/products/sleek-tote-gallery-1.jpg",
      "/products/sleek-tote-gallery-2.jpg",
      "/products/sleek-tote-gallery-3.jpg",
      "/products/sleek-tote-gallery-4.jpg"
    ],
    category: "Totes",
    description: "A sleek and functional tote bag designed for the modern professional. Features a secure zip closure, two compartments with magnetic closures, and premium stainless-steel hardware. Crafted from high-quality PU leather for a sophisticated look.",
    details: [
      "Dimensions: 11\" L x 17.5\" W x 5.5\" D",
      "Secure zip closure",
      "Two compartments with magnetic closures",
      "Two dedicated accessory holders",
      "One zippered pocket for added organization",
      "Premium stainless-steel accessories (fade-resistant)",
      "Material: High-quality PU leather",
    ],
    colors: ["Black"],
    inStock: true,
    isFeatured: false,
    occasion: "Business",
  },
  {
    id: "mv-new-6",
    name: "Marquise Chic Carryall",
    brand: "MARQUISE VAULT",
    price: 3250,
    image: "/products/marquise-chic-carryall.png",
    images: [
      "/products/universal-1.jpg",
      "/products/universal-2.jpg",
      "/products/universal-3.jpg",
      "/products/universal-4.jpg",
      "/products/universal-5.jpg",
      "/products/universal-6.jpg",
      "/products/universal-7.jpg",
      "/products/universal-8.jpg",
      "/products/universal-9.jpg",
      "/products/universal-10.jpg",
      "/products/universal-11.jpg",
      "/products/universal-12.jpg",
      "/products/universal-13.jpg",
      "/products/universal-14.jpg",
      "/products/universal-15.jpg",
      "/products/universal-16.jpg",
      "/products/universal-17.jpg",
      "/products/universal-18.jpg",
      "/products/universal-19.jpg"
    ],
    category: "Totes",
    description: "Sophisticated and versatile tote bag designed for the modern professional. Features secure magnetic closure, adjustable handle for comfortable carry, premium stainless-steel hardware, and multiple organizational compartments. Crafted from high-quality PU leather.",
    details: [
      "Dimensions: 12.5\" L x 14\" W x 5\" D",
      "High-quality PU leather",
      "Adjustable handle for comfortable carry",
      "Secure magnetic closure",
      "One attached zippered compartment",
      "Two dedicated accessory holders",
      "One additional zippered pocket",
      "Premium stainless-steel accessories (fade-resistant)",
    ],
    colors: ["Black", "Grey"],
    inStock: true,
    isNew: false,
    occasion: "Weekend",
  },
  {
    id: "mv-new-7",
    name: "Marquise Regal Tote",
    brand: "MARQUISE VAULT",
    price: 4800,
    image: "/products/marquise-regal-tote.png",
    images: [
      "/products/sleek-tote-gallery-1.jpg",
      "/products/sleek-tote-gallery-2.jpg",
      "/products/sleek-tote-gallery-3.jpg",
      "/products/sleek-tote-gallery-4.jpg"
    ],
    category: "Totes",
    description: "Sophisticated and versatile tote bag designed for the modern professional. Features secure magnetic closure, adjustable handle for comfortable carry, premium stainless-steel hardware, and multiple organizational compartments. Crafted from high-quality PU leather.",
    details: [
      "Dimensions: 12.5\" L x 14\" W x 5\" D",
      "High-quality PU leather",
      "Adjustable handle for comfortable carry",
      "Secure magnetic closure",
      "One attached zippered compartment",
      "Two dedicated accessory holders",
      "One additional zippered pocket",
      "Premium stainless-steel accessories (fade-resistant)",
    ],
    colors: ["Tan", "Burgundy"],
    inStock: true,
    isNew: false,
    occasion: "Gala",
  },
  {
    id: "mv-new-1",
    name: "Marquise Contemporary Hobo",
    brand: "MARQUISE VAULT",
    price: 3400,
    image: "/products/marquise-signature-transparent.png",
    images: [
      "/products/sleek-tote-gallery-1.jpg",
      "/products/sleek-tote-gallery-2.jpg",
      "/products/sleek-tote-gallery-3.jpg",
      "/products/sleek-tote-gallery-4.jpg"
    ],
    category: "Shoulder Bags",
    description: "Modern sophistication with a relaxed silhouette, perfect for any occasion.",
    details: [
      "Supple premium leather",
      "Adjustable shoulder strap",
      "Interior organizational pockets",
      "Magnetic snap closure",
    ],
    colors: ["Black"],
    inStock: true,
    isNew: false,
    occasion: "Weekend",
  },
  {
    id: "mv-new-2",
    name: "Marquise Urban Carryall",
    brand: "MARQUISE VAULT",
    price: 3100,
    image: "/products/local-7.png",
    images: [
      "/products/sleek-tote-gallery-1.jpg",
      "/products/sleek-tote-gallery-2.jpg",
      "/products/sleek-tote-gallery-3.jpg",
      "/products/sleek-tote-gallery-4.jpg"
    ],
    category: "Totes",
    description: "Sophisticated and versatile tote bag designed for the modern professional. Features secure magnetic closure, adjustable handle for comfortable carry, premium stainless-steel hardware, and multiple organizational compartments. Crafted from high-quality PU leather.",
    details: [
      "Dimensions: 12.5\" L x 14\" W x 5\" D",
      "High-quality PU leather",
      "Adjustable handle for comfortable carry",
      "Secure magnetic closure",
      "One attached zippered compartment",
      "Two dedicated accessory holders",
      "One additional zippered pocket",
      "Premium stainless-steel accessories (fade-resistant)",
    ],
    colors: ["Black"],
    inStock: true,
    isNew: false,
    occasion: "Business",
  },
  {
    id: "mv-new-3",
    name: "Marquise Luxe Shoulder Bag",
    brand: "MARQUISE VAULT",
    price: 3600,
    image: "/products/local-8.png",
    images: [
      "/products/sleek-tote-gallery-1.jpg",
      "/products/sleek-tote-gallery-2.jpg",
      "/products/sleek-tote-gallery-3.jpg",
      "/products/sleek-tote-gallery-4.jpg"
    ],
    category: "Shoulder Bags",
    description: "Timeless elegance with contemporary styling for the discerning fashionista.",
    details: [
      "Buttery soft leather",
      "Gold-tone accents",
      "Detachable crossbody strap",
      "Multiple interior compartments",
    ],
    colors: ["Black"],
    inStock: true,
    isNew: false,
    occasion: "Gala",
  },
  {
    id: "mv-new-4",
    name: "Marquise Essential Tote",
    brand: "MARQUISE VAULT",
    price: 2950,
    image: "/products/local-9.png",
    images: [
      "/products/sleek-tote-gallery-1.jpg",
      "/products/sleek-tote-gallery-2.jpg",
      "/products/sleek-tote-gallery-3.jpg",
      "/products/sleek-tote-gallery-4.jpg"
    ],
    category: "Totes",
    description: "Sophisticated and versatile tote bag designed for the modern professional. Features secure magnetic closure, adjustable handle for comfortable carry, premium stainless-steel hardware, and multiple organizational compartments. Crafted from high-quality PU leather.",
    details: [
      "Dimensions: 12.5\" L x 14\" W x 5\" D",
      "High-quality PU leather",
      "Adjustable handle for comfortable carry",
      "Secure magnetic closure",
      "One attached zippered compartment",
      "Two dedicated accessory holders",
      "One additional zippered pocket",
      "Premium stainless-steel accessories (fade-resistant)",
    ],
    colors: ["Black"],
    inStock: true,
    isNew: false,
    occasion: "Work",
  },
  {
    id: "mv-new-5",
    name: "ELARA TOTE BAG",
    brand: "MARQUISE VAULT",
    price: 3900,
    originalPrice: 6000,
    image: "/products/elara-tote-removebg-1.png",
    images: [
      "/products/sleek-tote-gallery-1.jpg",
      "/products/sleek-tote-gallery-2.jpg",
      "/products/sleek-tote-gallery-3.jpg",
      "/products/sleek-tote-gallery-4.jpg"
    ],
    colorImages: {
      "Brown": [
        "/products/elara-tote-removebg-1.png",
        "/products/elara-tote-removebg-6.png",
        "/products/elara-tote-removebg-7.png"
      ],
      "Black": [
        "/products/elara-black-gallery-4.jpg",
        "/products/elara-black-gallery-1.jpg",
        "/products/elara-black-gallery-2.jpg",
        "/products/elara-black-gallery-3.jpg"
      ]
    },
    category: "Totes",
    description: "Sophisticated and versatile tote bag designed for the modern professional. Features secure magnetic closure, adjustable handle for comfortable carry, premium stainless-steel hardware, and multiple organizational compartments. Crafted from high-quality PU leather.",
    details: [
      "Dimensions: 12.5\" L x 14\" W x 5\" D",
      "High-quality PU leather",
      "Adjustable handle for comfortable carry",
      "Secure magnetic closure",
      "One attached zippered compartment",
      "Two dedicated accessory holders",
      "One additional zippered pocket",
      "Premium stainless-steel accessories (fade-resistant)",
    ],
    colors: ["Brown", "Black"],
    inStock: true,
    isNew: false,
    occasion: "Business",
  },

  {
    id: "6",
    name: "Lady Dior Medium",
    brand: "DIOR",
    price: 5900,
    image: "/products/local-6.png",
    images: [
      "/products/sleek-tote-gallery-1.jpg",
      "/products/sleek-tote-gallery-2.jpg",
      "/products/sleek-tote-gallery-3.jpg",
      "/products/sleek-tote-gallery-4.jpg"
    ],
    category: "Top Handle",
    description: "The Lady Dior in cannage lambskin. An homage to Princess Diana's timeless style.",
    details: [
      "Cannage lambskin",
      "Gold-tone DIOR charms",
      "Top handle and strap",
      "Lambskin lining",
      "Made in Italy",
    ],
    colors: ["Black", "Blush", "Navy"],
    inStock: true,
    isFeatured: false,
    occasion: "Gala",
  },
  {
    id: "9",
    name: "Boy Bag Medium",
    brand: "CHANEL",
    price: 7200,
    image: "/products/local-11.png",
    images: [
      "/products/sleek-tote-gallery-1.jpg",
      "/products/sleek-tote-gallery-2.jpg",
      "/products/sleek-tote-gallery-3.jpg",
      "/products/sleek-tote-gallery-4.jpg"
    ],
    category: "Shoulder Bags",
    description: "Edgy and modern, the Boy Bag features a bold clasp and chain strap.",
    details: [
      "Calfskin leather",
      "Ruthenium hardware",
      "Boy clasp closure",
      "Grosgrain lining",
      "Made in France",
    ],
    colors: ["Black", "Navy", "Grey"],
    inStock: true,
    isNew: false,
    occasion: "Gala",
  },
  {
    id: "12",
    name: "Saddle Bag",
    brand: "DIOR",
    price: 3800,
    image: "/products/local-12.png",
    images: [
      "/products/sleek-tote-gallery-1.jpg",
      "/products/sleek-tote-gallery-2.jpg",
      "/products/sleek-tote-gallery-3.jpg",
      "/products/sleek-tote-gallery-4.jpg"
    ],
    category: "Shoulder Bags",
    description: "The iconic curved silhouette with bold Dior Oblique canvas.",
    details: [
      "Dior Oblique canvas",
      "Antique gold-tone hardware",
      "Magnetic flap closure",
      "Suede lining",
      "Made in Italy",
    ],
    colors: ["Blue Oblique", "Black"],
    inStock: true,
    isNew: false,
    occasion: "Weekend",
  },
  {
    id: "mv-featured-1",
    name: "SLEEK BEIGE",
    brand: "MARQUISE VAULT",
    price: 4299,
    originalPrice: 6500,
    image: "/products/marquise-featured-1.jpg",
    images: [
      "/products/marquise-featured-1.jpg",
      "/products/elara-burgundy-detail-1.jpg",
      "/products/elara-burgundy-detail-5.jpg"
    ],
    category: "Totes",
    description: "An exquisite statement piece crafted for those who define elegance. This grand tote combines spacious functionality with unparalleled style.",
    details: [
      "Dimensions: 11\" L x 17.5\" W x 5.5\" D",
      "Secure zip closure",
      "Two compartments with magnetic closures",
      "Two dedicated accessory holders",
      "One zippered pocket for added organization",
      "Hardware: Premium stainless-steel (fade-resistant)",
      "Material: High-quality PU leather",
    ],
    colors: ["Beige"],
    inStock: true,
    isFeatured: true,
    occasion: "Business",
  },
  {
    id: "mv-featured-2",
    name: "SLEEK BLACK",
    brand: "MARQUISE VAULT",
    price: 4299,
    originalPrice: 6500,
    image: "/products/marquise-featured-2.jpg",
    images: [
      "/products/marquise-featured-2.jpg",
      "/products/elara-black-detail-1.jpg",
      "/products/elara-black-detail-2.jpg",
      "/products/elara-black-detail-4.jpg"
    ],
    category: "Totes",
    description: "The epitome of modern luxury. A versatile carryall that transitions seamlessly from day to night with its sophisticated silhouette.",
    details: [
      "Dimensions: 11\" L x 17.5\" W x 5.5\" D",
      "Secure zip closure",
      "Two compartments with magnetic closures",
      "Two dedicated accessory holders",
      "One zippered pocket for added organization",
      "Hardware: Premium stainless-steel (fade-resistant)",
      "Material: High-quality PU leather",
    ],
    colors: ["Black"],
    inStock: true,
    isFeatured: true,
    occasion: "Daily",
  },
  {
    id: "mv-featured-3",
    name: "ELARA BURGANDY BROWN",
    brand: "MARQUISE VAULT",
    price: 3899,
    originalPrice: 6000,
    image: "/products/marquise-featured-3.jpg",
    images: [
      "/products/marquise-featured-3.jpg",
      "/products/sleek-black-detail-2.jpg",
      "/products/sleek-black-detail-3.jpg",
      "/products/sleek-black-detail-4.jpg"
    ],
    category: "Totes",
    description: "A timeless classic redefined. The Premiere Tote offers a sleek look with practical design elements for the contemporary woman.",
    details: [
      "Dimensions: 12.5\" L x 14\" W x 5\" D",
      "Adjustable handle for comfortable carry",
      "Secure magnetic closure",
      "One attached zippered compartment",
      "Two dedicated accessory holders",
      "One additional zippered pocket",
      "Hardware: Premium stainless-steel (fade-resistant)",
      "Material: High-quality PU leather",
    ],
    colors: ["Brown"],
    inStock: true,
    isFeatured: true,
    occasion: "Work",
  },
  {
    id: "mv-featured-4",
    name: "ELARA BLACK",
    brand: "MARQUISE VAULT",
    price: 3899,
    originalPrice: 6000,
    image: "/products/elara-black-detail-5.jpg",
    images: [
      "/products/elara-black-detail-5.jpg",
      "/products/sleek-tote-gallery-1.jpg",
      "/products/sleek-tote-gallery-2.jpg",
      "/products/sleek-tote-gallery-3.jpg",
      "/products/sleek-tote-gallery-4.jpg",
    ],
    category: "Totes",
    description: "Experience the ultimate in luxury and functionality. The Elite Carryall is designed for the modern lifestyle, offering both space and style.",
    details: [
      "Dimensions: 12.5\" L x 14\" W x 5\" D",
      "Adjustable handle for comfortable carry",
      "Secure magnetic closure",
      "One attached zippered compartment",
      "Two dedicated accessory holders",
      "One additional zippered pocket",
      "Hardware: Premium stainless-steel (fade-resistant)",
      "Material: High-quality PU leather",
    ],
    colors: ["Black"],
    inStock: true,
    isFeatured: true,
    occasion: "Business",
  },
]

export const categories = [
  { name: "All", slug: "all" },
  { name: "Shoulder Bags", slug: "shoulder-bags" },
  { name: "Totes", slug: "totes" },
  { name: "Top Handle", slug: "top-handle" },
  { name: "Crossbody", slug: "crossbody" },
  { name: "Clutches", slug: "clutches" },
]

export const heroSlides = [
  {
    id: 1,
    title: "New Season Arrivals",
    subtitle: "Discover the latest collections from the world's most prestigious houses",
    image: "/hero/hero-1.jpg",

    link: "/collections/new",
  },
  {
    id: 2,
    title: "Timeless Classics",
    subtitle: "Investment pieces that transcend trends",
    image: "/hero/hero-2.jpg",

    link: "/collections/all",
  },
]



