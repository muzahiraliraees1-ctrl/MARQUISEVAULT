import Link from "next/link"
import { brands } from "@/lib/data"

export function BrandShowcase() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
            Prestigious Partners
          </p>
          <h2 className="font-serif text-3xl md:text-4xl">Our Brands</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {brands.map((brand) => (
            <Link
              key={brand.id}
              href={`/brands/${brand.id}`}
              className="group bg-card border border-border rounded-lg p-6 flex flex-col items-center justify-center text-center hover:border-accent hover:shadow-lg transition-all duration-300"
            >
              <span className="font-serif text-lg md:text-xl tracking-wider group-hover:text-accent transition-colors">
                {brand.name}
              </span>
              <span className="text-xs text-muted-foreground mt-2">
                {brand.productCount} Products
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
