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
    id: "marquise-vault",
    name: "MARQUISE VAULT",
    logo: "/brands/marquise-vault.svg",
    description: "Modern sophistication and timeless luxury since 2024",
    productCount: 4,
  },
]


export const products: Product[] = [
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
      "/products/elara-burgundy-detail-5.jpg",
      "/products/sleek-beige-detail-4.jpg"
    ],
    category: "SLEEK BEIGE",
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
      "/products/sleek-black-detail-5.jpg",
      "/products/elara-black-detail-4.jpg"
    ],
    category: "SLEEK BLACK",
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
    category: "ELARA BURGANDY BROWN",
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
    category: "ELARA BLACK",
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
  { name: "SLEEK BEIGE", slug: "sleek-beige" },
  { name: "SLEEK BLACK", slug: "sleek-black" },
  { name: "ELARA BURGANDY BROWN", slug: "elara-burgandy-brown" },
  { name: "ELARA BLACK", slug: "elara-black" },
]

export const heroSlides = [
  {
    id: 1,
    title: "The SLEEK Collection",
    subtitle: "Modern sophistication and timeless luxury",
    image: "/hero/hero-1.jpg",
    link: "/collections/sleek-black",
  },
  {
    id: 2,
    title: "The ELARA Series",
    subtitle: "Exquisite craftsmanship for the modern professional",
    image: "/hero/hero-2.jpg",
    link: "/collections/elara-black",
  },
]



