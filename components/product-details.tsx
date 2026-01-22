"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Truck, Shield, RotateCcw, Check } from "lucide-react"
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
import { useCart } from "@/lib/cart-context"
import type { Product } from "@/lib/data"
import { cn } from "@/lib/utils"

interface ProductDetailsProps {
  product: Product
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const { addItem } = useCart()
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    addItem(product, selectedColor)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg bg-secondary">
            <Image
              src={product.images[selectedImage] || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
            {product.isNew && (
              <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs uppercase tracking-wider px-3 py-1 rounded-sm">
                New
              </span>
            )}
          </div>
          <div className="flex gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={cn(
                  "relative w-20 h-20 rounded-md overflow-hidden border-2 transition-colors",
                  selectedImage === index
                    ? "border-foreground"
                    : "border-transparent hover:border-border"
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
        <div className="space-y-6">
          <div>
            <Link
              href={`/brands/${product.brand.toLowerCase().replace(" ", "-")}`}
              className="text-sm uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors"
            >
              {product.brand}
            </Link>
            <h1 className="font-serif text-3xl md:text-4xl mt-2">{product.name}</h1>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="text-2xl font-medium">
              ${product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-muted-foreground line-through">
                ${product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          <p className="text-muted-foreground leading-relaxed">
            {product.description}
          </p>

          <Separator />

          {/* Color Selection */}
          <div>
            <label className="text-sm font-medium mb-3 block">
              Color: <span className="font-normal text-muted-foreground">{selectedColor}</span>
            </label>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={cn(
                    "px-4 py-2 text-sm border rounded-md transition-colors",
                    selectedColor === color
                      ? "border-foreground bg-foreground text-background"
                      : "border-border hover:border-foreground"
                  )}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <div className="space-y-3">
            <Button
              onClick={handleAddToCart}
              className="w-full"
              size="lg"
              disabled={!product.inStock}
            >
              {isAdded ? (
                <>
                  <Check className="mr-2 h-5 w-5" />
                  Added to Bag
                </>
              ) : product.inStock ? (
                "Add to Bag"
              ) : (
                "Out of Stock"
              )}
            </Button>
            <Button variant="outline" className="w-full bg-transparent" size="lg">
              Add to Wishlist
            </Button>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-3 gap-4 py-6">
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mx-auto mb-2">
                <Truck className="h-5 w-5" />
              </div>
              <p className="text-xs text-muted-foreground">Free Shipping</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mx-auto mb-2">
                <Shield className="h-5 w-5" />
              </div>
              <p className="text-xs text-muted-foreground">Authenticity</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mx-auto mb-2">
                <RotateCcw className="h-5 w-5" />
              </div>
              <p className="text-xs text-muted-foreground">14-Day Returns</p>
            </div>
          </div>

          <Separator />

          {/* Details Accordion */}
          <Accordion type="single" collapsible defaultValue="details">
            <AccordionItem value="details">
              <AccordionTrigger className="text-sm font-medium uppercase tracking-wider">
                Product Details
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {product.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="shipping">
              <AccordionTrigger className="text-sm font-medium uppercase tracking-wider">
                Shipping & Returns
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <p>
                    Complimentary ground shipping on all orders over $500. 
                    Express and overnight options available at checkout.
                  </p>
                  <p>
                    Returns accepted within 14 days of delivery. Items must be 
                    unworn with all original tags and packaging.
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
