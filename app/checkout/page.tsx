import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartDrawer } from "@/components/cart-drawer"
import { CheckoutForm } from "@/components/checkout-form"

export const metadata = {
  title: "Checkout | LUXE BAGS",
  description: "Complete your purchase securely.",
}

export default function CheckoutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-secondary/30">
        <CheckoutForm />
      </main>
      <Footer />
      <CartDrawer />
    </>
  )
}
