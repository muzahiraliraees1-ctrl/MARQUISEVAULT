"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Truck, Shield, RotateCcw, Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SizeGuide } from "@/components/size-guide"
import { useCart } from "@/lib/cart-context"
import type { Product } from "@/lib/data"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface ProductDetailsProps {
  product: Product
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const { addItem } = useCart()
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [isAdded, setIsAdded] = useState(false)

  // Personalization State
  const [isMonogram, setIsMonogram] = useState(false)
  const [monogramText, setMonogramText] = useState("")

  const handleAddToCart = () => {
    addItem(product, selectedColor) // Note: In a real app, we'd pass monogram data too
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-12">
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link
          href={`/brands/${product.brand.toLowerCase().replace(" ", "-")}`}
          className="hover:text-foreground transition-colors"
        >
          {product.brand}
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Image Gallery with Hover-to-Zoom */}
        <div className="space-y-6">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-secondary/20 group cursor-crosshair">
            <Image
              src={product.images[selectedImage] || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-150"
              style={{ transformOrigin: "center center" }} // Simple center zoom, could be improved with mouse tracking
              priority
            />
            {product.isNew && (
              <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs uppercase tracking-wider px-3 py-1.5 rounded-sm">
                New Arrival
              </span>
            )}

            {/* Monogram Preview Overlay */}
            {isMonogram && monogramText && (
              <div className="absolute bottom-12 right-12 opacity-90">
                <span className="font-serif text-3xl text-gold/80 drop-shadow-md tracking-widest text-accent">
                  {monogramText}
                </span>
              </div>
            )}
          </div>

          <div className="flex gap-4 overflow-x-auto pb-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={cn(
                  "relative w-24 h-24 rounded-sm overflow-hidden border transition-all duration-300 flex-shrink-0",
                  selectedImage === index
                    ? "border-primary opacity-100 ring-1 ring-primary/20"
                    : "border-transparent opacity-70 hover:opacity-100 hover:border-border"
                )}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} view ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-8">
          <div>
            <Link
              href={`/brands/${product.brand.toLowerCase().replace(" ", "-")}`}
              className="text-sm uppercase tracking-[0.2em] text-accent font-medium hover:text-primary transition-colors"
            >
              {product.brand}
            </Link>
            <h1 className="font-serif text-4xl md:text-5xl mt-3 text-primary">{product.name}</h1>
          </div>

          <div className="flex items-baseline gap-4">
            <span className="text-3xl font-light text-primary">
              PKR {product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-xl text-muted-foreground line-through decoration-1 opacity-70">
                PKR {product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          {/* Detailed Craftsmanship Snippet */}
          <div className="bg-secondary/30 p-6 rounded-sm border border-secondary/50">
            <div className="flex items-start gap-3">
              <Sparkles className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-medium text-foreground block mb-1">Expertly Crafted</span>
                Hand-finished by master artisans using premium full-grain leather.
                Features hand-painted edges and our signature champagne gold hardware
                that resists tarnishing over time.
              </p>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed text-lg font-light">
            {product.description}
          </p>

          <Separator className="bg-border/60" />

          {/* Color Selection */}
          <div>
            <label className="text-sm font-medium mb-4 block uppercase tracking-wide">
              Color: <span className="font-normal text-muted-foreground normal-case ml-2">{selectedColor}</span>
            </label>
            <div className="flex gap-3">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={cn(
                    "px-6 py-2.5 text-sm border rounded-sm transition-all duration-300 min-w-[3rem]",
                    selectedColor === color
                      ? "border-primary bg-primary text-primary-foreground shadow-md"
                      : "border-border hover:border-primary/50 text-muted-foreground"
                  )}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Personalization Toggle */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="monogram" className="text-base font-medium">Personalization</Label>
                <p className="text-xs text-muted-foreground">Add your initials (Optional +PKR 5,000)</p>
              </div>
              <Switch
                id="monogram"
                checked={isMonogram}
                onCheckedChange={setIsMonogram}
              />
            </div>

            {isMonogram && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                className="pt-2"
              >
                <Input
                  placeholder="Enter Initials (e.g. A.B.)"
                  maxLength={3}
                  value={monogramText}
                  onChange={(e) => setMonogramText(e.target.value.toUpperCase())}
                  className="uppercase tracking-widest font-serif max-w-[200px]"
                />
              </motion.div>
            )}
          </div>

          {/* Size Guide Trigger */}
          <div className="flex justify-end">
            <SizeGuide />
          </div>

          {/* Add to Cart */}
          <div className="space-y-4">
            <Button
              onClick={handleAddToCart}
              className="w-full h-14 text-base tracking-widest uppercase"
              size="lg"
              disabled={!product.inStock}
              variant="default" // or a new 'luxury-filled' variant if we made one
            >
              {isAdded ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-2"
                >
                  <Check className="h-5 w-5" />
                  Added to Bag
                </motion.div>
              ) : product.inStock ? (
                "Add to Shopping Bag"
              ) : (
                "Out of Stock"
              )}
            </Button>
            <Button variant="luxury" className="w-full h-12" size="lg">
              Add to Wishlist
            </Button>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-3 gap-6 py-8 border-y border-border/60">
            <div className="text-center group cursor-default">
              <div className="w-12 h-12 rounded-full bg-secondary/40 flex items-center justify-center mx-auto mb-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Truck className="h-5 w-5" />
              </div>
              <p className="text-xs font-medium uppercase tracking-wider">Free Shipping</p>
              <p className="text-[10px] text-muted-foreground mt-1">On all orders</p>
            </div>
            <div className="text-center group cursor-default">
              <div className="w-12 h-12 rounded-full bg-secondary/40 flex items-center justify-center mx-auto mb-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Shield className="h-5 w-5" />
              </div>
              <p className="text-xs font-medium uppercase tracking-wider">Authenticity</p>
              <p className="text-[10px] text-muted-foreground mt-1">Guaranteed</p>
            </div>
            <div className="text-center group cursor-default">
              <div className="w-12 h-12 rounded-full bg-secondary/40 flex items-center justify-center mx-auto mb-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <RotateCcw className="h-5 w-5" />
              </div>
              <p className="text-xs font-medium uppercase tracking-wider">Returns</p>
              <p className="text-[10px] text-muted-foreground mt-1">14-Day Policy</p>
            </div>
          </div>

          {/* Details Accordion */}
          <Accordion type="single" collapsible defaultValue="details" className="w-full">
            <AccordionItem value="details" className="border-b-border/60">
              <AccordionTrigger className="text-sm font-medium uppercase tracking-wider hover:text-accent hover:no-underline py-6">
                Product Details
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <ul className="space-y-3 text-sm text-muted-foreground font-light">
                  {product.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="materials" className="border-b-border/60">
              <AccordionTrigger className="text-sm font-medium uppercase tracking-wider hover:text-accent hover:no-underline py-6">
                Materials & Care
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="text-sm text-muted-foreground space-y-4 font-light">
                  <p>
                    <strong>Materials:</strong> 100% Full-grain Italian Calf Leather.
                    Lining: 100% Organic Cotton Canvas.
                    Hardware: Gold-plated Brass.
                  </p>
                  <p>
                    <strong>Care Instructions:</strong> Avoid direct contact with water, oil, and perfume.
                    Store in the provided dust bag when not in use. Clean with a soft, dry cloth.
                    Professional leather cleaning recommended once a year.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="shipping" className="border-b-border/60">
              <AccordionTrigger className="text-sm font-medium uppercase tracking-wider hover:text-accent hover:no-underline py-6">
                Shipping & Returns
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="space-y-4 text-sm text-muted-foreground font-light">
                  <p>
                    Complimentary express shipping on all orders. Your item will arrive in our signature packaging,
                    complete with a dust bag and authenticity card.
                  </p>
                  <p>
                    Returns accepted within 14 days of delivery. Items must be
                    unworn with all original tags and packaging intact.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}
