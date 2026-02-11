"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Heart, ShoppingBag, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Product } from "@/lib/data"
import { useCart } from "@/lib/cart-context"
import { cn } from "@/lib/utils"

interface ProductCardProps {
  product: Product
  className?: string
}

export function ProductCard({ product, className }: ProductCardProps) {
  const { addItem } = useCart()
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [addedToCart, setAddedToCart] = useState(false)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.colors?.[0] || "Default")
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsWishlisted(!isWishlisted)
  }

  return (
    <div className={cn("group", className)}>
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden rounded-lg bg-secondary mb-4">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNew && (
              <span className="bg-primary text-primary-foreground text-xs uppercase tracking-wider px-3 py-1 rounded-sm">
                New
              </span>
            )}
            {product.originalPrice && (
              <span className="bg-destructive text-card text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm">
                35% OFF
              </span>
            )}
          </div>

          {/* Wishlist Button */}
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "absolute top-3 right-3 bg-card/90 backdrop-blur-sm hover:bg-card transition-all",
              isWishlisted ? "opacity-100 text-destructive" : "opacity-0 group-hover:opacity-100"
            )}
            onClick={handleWishlist}
          >
            <Heart className={cn("h-4 w-4", isWishlisted && "fill-current")} />
            <span className="sr-only">Add to wishlist</span>
          </Button>

          {/* Add to Cart Button */}
          <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              variant="secondary"
              className={cn(
                "w-full gap-2",
                addedToCart
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-card text-card-foreground hover:bg-card/90"
              )}
              onClick={handleAddToCart}
            >
              {addedToCart ? (
                <>
                  <Check className="h-4 w-4" />
                  Added to Cart
                </>
              ) : (
                <>
                  <ShoppingBag className="h-4 w-4" />
                  Add to Cart
                </>
              )}
            </Button>
          </div>
        </div>

        <div className="space-y-1">
          <p className="text-sm text-muted-foreground uppercase tracking-wider">
            {product.brand}
          </p>
          <h3 className="font-medium group-hover:text-accent transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center gap-2">
            <span className="font-medium">
              PKR {product.price}
            </span>
            {product.originalPrice && (
              <span className="text-red-500 line-through text-sm">
                PKR {product.originalPrice}
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  )
}
