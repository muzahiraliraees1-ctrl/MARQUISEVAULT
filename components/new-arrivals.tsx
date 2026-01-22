import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/data"

export function NewArrivals() {
  const newProducts = products.filter((p) => p.isNew).slice(0, 4)

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
              Just Landed
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">New Arrivals</h2>
          </div>
          <Link href="/collections/new" className="mt-4 md:mt-0">
            <Button variant="link" className="group p-0 h-auto">
              See All New Arrivals
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {newProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

