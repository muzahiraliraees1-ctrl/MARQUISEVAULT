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
    id: "louis-vuitton",
    name: "Louis Vuitton",
    logo: "/brands/lv.svg",
    description: "The art of travel since 1854",
    productCount: 32,
  },
  {
    id: "hermes",
    name: "Hermès",
    logo: "/brands/hermes.svg",
    description: "Craftmanship since 1837",
    productCount: 18,
  },
  {
    id: "gucci",
    name: "GUCCI",
    logo: "/brands/gucci.svg",
    description: "Italian luxury since 1921",
    productCount: 28,
  },
  {
    id: "prada",
    name: "PRADA",
    logo: "/brands/prada.svg",
    description: "Milanese sophistication since 1913",
    productCount: 22,
  },
  {
    id: "dior",
    name: "DIOR",
    logo: "/brands/dior.svg",
    description: "Parisian couture since 1946",
    productCount: 26,
  },
]

export const products: Product[] = [
  {
    id: "1",
    name: "Classic Flap Bag",
    brand: "CHANEL",
    price: 8950,
    image: "/products/bag-1.jpg",
    images: [
      "/products/bag-1.jpg",
      "/products/bag-9.jpg",
    ],
    category: "Shoulder Bags",
    description: "The iconic CHANEL Classic Flap Bag in caviar leather with gold-tone hardware. A timeless piece that defines luxury.",
    details: [
      "Caviar leather exterior",
      "Gold-tone metal hardware",
      "Interwoven chain strap",
      "Burgundy leather lining",
      "Made in France",
    ],
    colors: ["Black", "Beige", "Red"],
    inStock: true,
    isNew: true,
    isFeatured: true,
    occasion: "Gala",
  },
  {
    id: "2",
    name: "Neverfull MM",
    brand: "Louis Vuitton",
    price: 2030,
    image: "/products/bag-2.jpg",
    images: [
      "/products/bag-2.jpg",
      "/products/bag-7.jpg",
    ],
    category: "Totes",
    description: "The legendary Neverfull tote in Monogram canvas. Spacious, practical, and eternally stylish.",
    details: [
      "Monogram coated canvas",
      "Natural cowhide trim",
      "Removable zippered pouch",
      "Adjustable side laces",
      "Made in France",
    ],
    colors: ["Monogram", "Damier Ebene", "Damier Azur"],
    inStock: true,
    isFeatured: true,
    occasion: "Jetset",
  },
  {
    id: "3",
    name: "Birkin 30",
    brand: "Hermès",
    price: 12500,
    image: "/products/bag-3.jpg",
    images: [
      "/products/bag-3.jpg",
      "/products/bag-8.jpg",
    ],
    category: "Top Handle",
    description: "The ultimate status symbol. Hand-crafted Togo leather Birkin with palladium hardware.",
    details: [
      "Togo calfskin leather",
      "Palladium-plated hardware",
      "Turn-lock closure",
      "Goatskin lining",
      "Made in France",
    ],
    colors: ["Black", "Gold", "Etoupe"],
    inStock: true,
    isNew: true,
    isFeatured: true,
    occasion: "Business",
  },
  {
    id: "4",
    name: "GG Marmont Small",
    brand: "GUCCI",
    price: 2350,
    image: "/products/bag-4.jpg",
    images: [
      "/products/bag-4.jpg",
      "/products/bag-10.jpg",
    ],
    category: "Shoulder Bags",
    description: "Matelassé chevron leather with the iconic Double G hardware. Modern glamour meets heritage.",
    details: [
      "Matelassé leather",
      "Antique gold-tone hardware",
      "Chain shoulder strap",
      "Microfiber lining",
      "Made in Italy",
    ],
    colors: ["Black", "Dusty Pink", "White"],
    inStock: true,
    isFeatured: true,
    occasion: "Weekend",
  },
  {
    id: "5",
    name: "Re-Edition 2005",
    brand: "PRADA",
    price: 1850,
    image: "/products/bag-5.jpg",
    images: [
      "/products/bag-5.jpg",
      "/products/bag-11.jpg",
    ],
    category: "Shoulder Bags",
    description: "The archival Re-Edition in signature Saffiano leather with the triangle logo.",
    details: [
      "Saffiano leather",
      "Silver-tone hardware",
      "Adjustable nylon strap",
      "Nappa leather lining",
      "Made in Italy",
    ],
    colors: ["Black", "Beige", "Blue"],
    inStock: true,
    isNew: true,
    occasion: "Weekend",
  },
  {
    id: "6",
    name: "Lady Dior Medium",
    brand: "DIOR",
    price: 5900,
    image: "/products/bag-6.jpg",
    images: [
      "/products/bag-6.jpg",
      "/products/bag-12.jpg",
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
    isFeatured: true,
    occasion: "Gala",
  },
  {
    id: "7",
    name: "Speedy Bandoulière 25",
    brand: "Louis Vuitton",
    price: 1770,
    image: "/products/bag-7.jpg",
    images: [
      "/products/bag-7.jpg",
      "/products/bag-2.jpg",
    ],
    category: "Top Handle",
    description: "The beloved Speedy in compact size with a removable strap for versatile wear.",
    details: [
      "Monogram coated canvas",
      "Natural cowhide trim",
      "Padlock and keys",
      "Removable shoulder strap",
      "Made in France",
    ],
    colors: ["Monogram", "Damier Ebene"],
    inStock: true,
    occasion: "Jetset",
  },
  {
    id: "8",
    name: "Constance 24",
    brand: "Hermès",
    price: 9800,
    originalPrice: 11500,
    image: "/products/bag-8.jpg",
    images: [
      "/products/bag-8.jpg",
      "/products/bag-3.jpg",
    ],
    category: "Shoulder Bags",
    description: "The sleek Constance with its signature H clasp. Understated luxury at its finest.",
    details: [
      "Epsom calfskin",
      "Palladium H clasp",
      "Adjustable strap",
      "Swift leather lining",
      "Made in France",
    ],
    colors: ["Black", "Gold", "Rouge"],
    inStock: true,
    occasion: "Business",
  },
  {
    id: "9",
    name: "Boy Bag Medium",
    brand: "CHANEL",
    price: 7200,
    image: "/products/bag-9.jpg",
    images: [
      "/products/bag-9.jpg",
      "/products/bag-1.jpg",
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
    isNew: true,
    occasion: "Gala",
  },
  {
    id: "10",
    name: "Dionysus Small",
    brand: "GUCCI",
    price: 2890,
    image: "/products/bag-10.jpg",
    images: [
      "/products/bag-10.jpg",
      "/products/bag-4.jpg",
    ],
    category: "Shoulder Bags",
    description: "Named after the Greek god, featuring the signature tiger head closure.",
    details: [
      "GG Supreme canvas",
      "Tiger head spur closure",
      "Sliding chain strap",
      "Suede lining",
      "Made in Italy",
    ],
    colors: ["Beige/Ebony", "Black"],
    inStock: true,
    occasion: "Weekend",
  },
  {
    id: "11",
    name: "Galleria Saffiano",
    brand: "PRADA",
    price: 3200,
    image: "/products/bag-11.jpg",
    images: [
      "/products/bag-11.jpg",
      "/products/bag-5.jpg",
    ],
    category: "Totes",
    description: "The structured Galleria in scratch-resistant Saffiano leather. Business meets style.",
    details: [
      "Saffiano leather",
      "Silver-tone hardware",
      "Double handles",
      "Removable strap",
      "Made in Italy",
    ],
    colors: ["Black", "Camel", "Cornflower Blue"],
    inStock: true,
    occasion: "Business",
  },
  {
    id: "12",
    name: "Saddle Bag",
    brand: "DIOR",
    price: 3800,
    image: "/products/bag-12.jpg",
    images: [
      "/products/bag-12.jpg",
      "/products/bag-6.jpg",
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
    isNew: true,
    occasion: "Weekend",
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
    cta: "Shop New In",
    link: "/collections/new",
  },
  {
    id: 2,
    title: "Timeless Classics",
    subtitle: "Investment pieces that transcend trends",
    image: "/hero/hero-2.jpg",
    cta: "Explore Classics",
    link: "/collections/classics",
  },
  {
    id: 3,
    title: "The Hermès Edit",
    subtitle: "Exceptional craftsmanship, extraordinary pieces",
    image: "/hero/hero-3.jpg",
    cta: "Shop Hermès",
    link: "/brands/hermes",
  },
]
