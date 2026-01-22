import { Header } from "@/components/header"
import { HeroCarousel } from "@/components/hero-carousel"
import { FeaturedProducts } from "@/components/featured-products"
import { BrandShowcase } from "@/components/brand-showcase"
import { NewArrivals } from "@/components/new-arrivals"
import { CartDrawer } from "@/components/cart-drawer"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroCarousel />
        <FeaturedProducts />
        <BrandShowcase />
        <NewArrivals />
        
        {/* Promotional Banner */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm uppercase tracking-wider opacity-70 mb-3">
              Experience Luxury
            </p>
            <h2 className="font-serif text-3xl md:text-5xl mb-6 max-w-3xl mx-auto text-balance">
              Every Piece Tells a Story of Exceptional Craftsmanship
            </h2>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto">
              Our curated collection features only the finest designer bags, each authenticated 
              and carefully selected for discerning collectors who appreciate timeless elegance.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <CartDrawer />
    </>
  )
}
