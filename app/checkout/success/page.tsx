import Link from "next/link"
import { CheckCircle2, Package, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Order Confirmed | LUXE BAGS",
  description: "Your order has been placed successfully.",
}

export default function CheckoutSuccessPage() {
  const orderNumber = `LX${Date.now().toString(36).toUpperCase()}`

  return (
    <>
      <Header />
      <main className="min-h-screen bg-secondary/30">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>

            <h1 className="font-serif text-3xl md:text-4xl mb-4">
              Thank You for Your Order
            </h1>
            <p className="text-muted-foreground mb-8">
              Your order has been confirmed and will be shipped within 1-2 business days.
            </p>

            <div className="bg-card border border-border rounded-lg p-6 mb-8 text-left">
              <div className="flex justify-between items-center mb-4">
                <span className="text-muted-foreground">Order Number</span>
                <span className="font-mono font-medium">{orderNumber}</span>
              </div>
              
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Confirmation Email</p>
                    <p className="text-muted-foreground">
                      We've sent a confirmation email with your order details.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Package className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Shipping Updates</p>
                    <p className="text-muted-foreground">
                      You'll receive tracking information once your order ships.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/collections/all">
                <Button variant="outline" size="lg">
                  Continue Shopping
                </Button>
              </Link>
              <Link href="/">
                <Button size="lg">Return Home</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
