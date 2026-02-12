"use client"

import React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ChevronLeft, CreditCard, Truck, Shield, Lock, CheckCircle2 } from "lucide-react"
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
  const [showSuccess, setShowSuccess] = useState(false)
  const [placedOrderDetails, setPlacedOrderDetails] = useState<any>(null)
  // const [shippingMethod, setShippingMethod] = useState("standard")
  const shippingCost = total >= 5000 ? 0 : 200
  const tax = 0
  const grandTotal = total + shippingCost

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    const formData = new FormData(e.target as HTMLFormElement)
    const firstName = formData.get('firstName')
    const lastName = formData.get('lastName')
    const email = formData.get('email') || 'Not provided'
    const phone = formData.get('phone')
    const address = formData.get('address')
    const apartment = formData.get('apartment') ? ` (${formData.get('apartment')})` : ''
    const city = formData.get('city')
    const state = formData.get('state')
    const zip = formData.get('zip')

    const orderDetails = items.map(item => `- ${item.product.name} (${item.color}) x${item.quantity}`).join('\n')

    const message = `*NEW ORDER INQUIRY - MARQUISE VAULT*\n\n` +
      `*CUSTOMER DETAILS*\n` +
      `Name: ${firstName} ${lastName}\n` +
      `Phone: ${phone}\n` +
      `Email: ${email}\n\n` +
      `*SHIPPING ADDRESS*\n` +
      `${address}${apartment}\n` +
      `${city}, ${state} ${zip}\n` +
      `Pakistan\n\n` +
      `*ORDER SUMMARY*\n` +
      `${orderDetails}\n\n` +
      `*Subtotal:* PKR ${total.toLocaleString()}\n` +
      `*Shipping:* ${shippingCost === 0 ? 'FREE' : 'PKR ' + shippingCost.toLocaleString()}\n` +
      `*GRAND TOTAL:* PKR ${grandTotal.toLocaleString()}\n\n` +
      `*Payment Method:* Cash on Delivery\n\n` +
      `Please confirm my order.`

    const whatsappUrl = `https://wa.me/923452618575?text=${encodeURIComponent(message)}`

    // Store order info for the success page before clearing cart
    setPlacedOrderDetails({
      summary: message,
      url: whatsappUrl
    })

    // Show success message first
    setShowSuccess(true)

    // Clear cart immediately
    clearCart()

    // Redirect to WhatsApp after a short delay so user can see the success message
    setTimeout(() => {
      window.open(whatsappUrl, '_blank')
    }, 2000)

    setIsProcessing(false)
  }

  if (showSuccess) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <div className="flex justify-center mb-6">
          <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle2 className="h-10 w-10 text-green-600" />
          </div>
        </div>
        <h1 className="font-serif text-4xl mb-4">Order Placed!</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
          Your order has been placed successfully in CHECK OUT. You are being redirected to WhatsApp to confirm your details.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button size="lg" variant="outline">Back to Home</Button>
          </Link>
          <Button
            size="lg"
            onClick={() => {
              if (placedOrderDetails?.url) {
                window.open(placedOrderDetails.url, '_blank')
              }
            }}
          >
            Re-open WhatsApp
          </Button>
        </div>
      </div>
    )
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
                  <Label htmlFor="email">Email (optional)</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="03xx-xxxxxxx"
                    required
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
                    <Input id="firstName" name="firstName" required className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" name="lastName" required className="mt-1.5" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    name="address"
                    placeholder="Street address"
                    required
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="apartment">Apartment, suite, etc. (optional)</Label>
                  <Input id="apartment" name="apartment" className="mt-1.5" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" name="city" required className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Select name="state" required>
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
                    <Input id="zip" name="zip" required className="mt-1.5" />
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
              <h2 className="font-medium text-lg mb-4">Shipping & Payment</h2>
              <div className="p-4 border border-border rounded-lg bg-secondary/30">
                <div className="flex flex-col gap-2">
                  <p className="font-medium flex items-center gap-2">
                    <Truck className="h-4 w-4" />
                    Cash on Delivery
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Standard Shipping: 5-7 business days
                  </p>
                  <p className="text-sm font-medium">
                    {total >= 5000 ? "Shipping: FREE" : "Shipping Cost: PKR 200"}
                  </p>
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
                "Redirecting to WhatsApp..."
              ) : (
                <>
                  Confirm your order on WhatsApp
                </>
              )}
            </Button>

            <p className="text-sm text-muted-foreground text-center flex items-center justify-center gap-2">
              <Shield className="h-4 w-4" />
              100% Quality Assurance & Secure Packaging
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
                  <div className="text-right flex flex-col items-end">
                    <p className="font-medium">
                      PKR {(item.product.price * item.quantity).toLocaleString()}
                    </p>
                    {item.product.originalPrice && (
                      <p className="text-xs text-red-500 line-through">
                        PKR {(item.product.originalPrice * item.quantity).toLocaleString()}
                      </p>
                    )}
                  </div>
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
                    : `PKR ${shippingCost}`}
                </span>
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
