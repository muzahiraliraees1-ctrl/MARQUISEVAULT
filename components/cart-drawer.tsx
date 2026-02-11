"use client"

import Image from "next/image"
import Link from "next/link"
import { X, Minus, Plus, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { useCart } from "@/lib/cart-context"
import { Separator } from "@/components/ui/separator"

export function CartDrawer() {
  const { items, removeItem, updateQuantity, total, isOpen, setIsOpen } = useCart()

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader className="space-y-2.5 pb-6">
          <SheetTitle className="text-left font-serif text-2xl">
            Shopping Bag
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center">
            <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center">
              <ShoppingBag className="h-10 w-10 text-muted-foreground" />
            </div>
            <div>
              <p className="font-medium mb-1">Your bag is empty</p>
              <p className="text-sm text-muted-foreground">
                Start shopping to fill it with beautiful pieces
              </p>
            </div>
            <Button onClick={() => setIsOpen(false)} className="mt-4">
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-auto -mx-6 px-6">
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={`${item.product.id}-${item.color}`} className="flex gap-4">
                    <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-secondary flex-shrink-0">
                      <Image
                        src={item.product.image || "/placeholder.svg"}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between gap-2">
                        <div className="min-w-0">
                          <p className="text-sm text-muted-foreground">
                            {item.product.brand}
                          </p>
                          <h4 className="font-medium truncate">
                            {item.product.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Color: {item.color}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          aria-label="Remove item"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-border rounded-md">
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity - 1)
                            }
                            className="p-2 hover:bg-secondary transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="px-3 text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity + 1)
                            }
                            className="p-2 hover:bg-secondary transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <span className="font-medium">
                          PKR {item.product.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 space-y-4">
              <Separator />
              <div className="flex justify-between text-lg font-medium">
                <span>Subtotal</span>
                <span>PKR {total}</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Shipping and taxes calculated at checkout
              </p>
              <Link href="/checkout" onClick={() => setIsOpen(false)}>
                <Button className="w-full" size="lg">
                  Proceed to Checkout
                </Button>
              </Link>
              <Button
                variant="outline"
                className="w-full bg-transparent"
                onClick={() => setIsOpen(false)}
              >
                Continue Shopping
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
