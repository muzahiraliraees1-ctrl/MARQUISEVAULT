"use client"

import React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ChevronLeft, CreditCard, Truck, Shield, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useCart } from "@/lib/cart-context"

export function CheckoutForm() {
  const router = useRouter()
  const { items, total, clearCart } = useCart()
  const [isProcessing, setIsProcessing] = useState(false)
  const [shippingMethod, setShippingMethod] = useState("standard")

  const shippingCost = shippingMethod === "express" ? 2500 : total >= 5000 ? 0 : 200
  const tax = total * 0.08
  const grandTotal = total + shippingCost + tax

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    clearCart()
    router.push("/checkout/success")
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="font-serif text-3xl mb-4">Your bag is empty</h1>
        <p className="text-muted-foreground mb-8">
          Add some beautiful pieces to your bag before checking out.
        </p>
        <Link href="/collections/all">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <Link
        href="/"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
      >
        <ChevronLeft className="h-4 w-4 mr-1" />
        Continue Shopping
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Form */}
        <div>
          <h1 className="font-serif text-3xl mb-8">Checkout</h1>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Contact */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="font-medium text-lg mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone (optional)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="03xx-xxxxxxx"
                    className="mt-1.5"
                  />
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="font-medium text-lg mb-4">Shipping Address</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" required className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" required className="mt-1.5" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    placeholder="Street address"
                    required
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="apartment">Apartment, suite, etc. (optional)</Label>
                  <Input id="apartment" className="mt-1.5" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" required className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Select required>
                      <SelectTrigger className="mt-1.5">
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Punjab">Punjab</SelectItem>
                        <SelectItem value="Sindh">Sindh</SelectItem>
                        <SelectItem value="KPK">Khyber Pakhtunkhwa (KPK)</SelectItem>
                        <SelectItem value="Balochistan">Balochistan</SelectItem>
                        <SelectItem value="ICT">Islamabad Capital Territory</SelectItem>
                        <SelectItem value="GB">Gilgit-Baltistan</SelectItem>
                        <SelectItem value="AJK">Azad Jammu & Kashmir (AJK)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="zip">Postal Code</Label>
                    <Input id="zip" required className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="country">Country</Label>
                    <Select defaultValue="PK">
                      <SelectTrigger className="mt-1.5">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="PK">Pakistan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>

            {/* Shipping Method */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="font-medium text-lg mb-4">Shipping Method</h2>
              <RadioGroup value={shippingMethod} onValueChange={setShippingMethod}>
                <label className="flex items-center justify-between p-4 border border-border rounded-lg cursor-pointer hover:border-foreground transition-colors [&:has([data-state=checked])]:border-foreground">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="standard" id="standard" />
                    <div>
                      <p className="font-medium">Standard Shipping</p>
                      <p className="text-sm text-muted-foreground">
                        5-7 business days
                      </p>
                    </div>
                  </div>
                  {total >= 5000 ? "Free" : "PKR 200"}
                </label>
                <label className="flex items-center justify-between p-4 border border-border rounded-lg cursor-pointer hover:border-foreground transition-colors [&:has([data-state=checked])]:border-foreground mt-3">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="express" id="express" />
                    <div>
                      <p className="font-medium">Express Shipping</p>
                      <p className="text-sm text-muted-foreground">
                        2-3 business days
                      </p>
                    </div>
                  </div>
                  <span className="font-medium">PKR 2,500</span>
                </label>
              </RadioGroup>
            </div>

            {/* Payment */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="font-medium text-lg mb-4">Payment</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <div className="relative mt-1.5">
                    <Input
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      required
                      className="pr-12"
                    />
                    <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiry">Expiration</Label>
                    <Input
                      id="expiry"
                      placeholder="MM / YY"
                      required
                      className="mt-1.5"
                    />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      placeholder="123"
                      required
                      className="mt-1.5"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="cardName">Name on Card</Label>
                  <Input id="cardName" required className="mt-1.5" />
                </div>
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isProcessing}
            >
              {isProcessing ? (
                "Processing..."
              ) : (
                <>
                  Pay PKR {grandTotal}
                </>
              )}
            </Button>

            <p className="text-sm text-muted-foreground text-center flex items-center justify-center gap-2">
              <Shield className="h-4 w-4" />
              Your payment information is encrypted and secure
            </p>
          </form>
        </div>

        {/* Order Summary */}
        <div>
          <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
            <h2 className="font-medium text-lg mb-4">Order Summary</h2>

            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div
                  key={`${item.product.id}-${item.color}`}
                  className="flex gap-4"
                >
                  <div className="relative w-20 h-20 rounded-md overflow-hidden bg-secondary flex-shrink-0">
                    <Image
                      src={item.product.image || "/placeholder.svg"}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-muted-foreground">
                      {item.product.brand}
                    </p>
                    <p className="font-medium truncate">{item.product.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.color}
                    </p>
                  </div>
                  <p className="font-medium">
                    PKR {item.product.price * item.quantity}
                  </p>
                </div>
              ))}
            </div>

            <Separator className="my-4" />

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>PKR {total}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>
                  {shippingCost === 0
                    ? "Free"
                    : `PKR ${shippingCost.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Estimated Tax</span>
                <span>PKR {tax.toFixed(2)}</span>
              </div>
            </div>

            <Separator className="my-4" />

            <div className="flex justify-between text-lg font-medium">
              <span>Total</span>
              <span>
                PKR {grandTotal}
              </span>
            </div>

            {/* Benefits */}
            <div className="mt-6 pt-6 border-t border-border space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Truck className="h-4 w-4" />
                <span>Free shipping on orders over PKR 5000</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Shield className="h-4 w-4" />
                <span>100% Authenticity Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
