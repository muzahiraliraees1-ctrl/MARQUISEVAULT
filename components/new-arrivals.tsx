import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/data"

export function NewArrivals() {
  const newProducts = products.filter((p) => p.isNew).slice(0, 3)

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newProducts.map((product, index) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className={`group relative overflow-hidden rounded-lg ${
                index === 0 ? "md:row-span-2" : ""
              }`}
            >
              <div
                className={`relative ${
                  index === 0 ? "aspect-[3/4] md:aspect-auto md:h-full" : "aspect-square"
                }`}
              >
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-card">
                  <span className="text-sm uppercase tracking-wider opacity-80">
                    {product.brand}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl mt-1">
                    {product.name}
                  </h3>
                  <p className="mt-2 font-medium">
                    ${product.price.toLocaleString()}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
