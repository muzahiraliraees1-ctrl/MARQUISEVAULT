import { notFound } from "next/navigation"
import { products, brands } from "@/lib/data"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartDrawer } from "@/components/cart-drawer"
import { CollectionGrid } from "@/components/collection-grid"

interface BrandPageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return brands.map((brand) => ({
    id: brand.id,
  }))
}

export async function generateMetadata({ params }: BrandPageProps) {
  const { id } = await params
  const brand = brands.find((b) => b.id === id)

  if (!brand) {
    return { title: "Brand | LUXE BAGS" }
  }

  return {
    title: `${brand.name} | LUXE BAGS`,
    description: `Shop authentic ${brand.name} handbags and accessories. ${brand.description}`,
  }
}

export default async function BrandPage({ params }: BrandPageProps) {
  const { id } = await params
  const brand = brands.find((b) => b.id === id)

  if (!brand) {
    notFound()
  }

  const brandProducts = products.filter(
    (p) => p.brand.toLowerCase().replace(" ", "-") === id || 
           p.brand.toLowerCase() === brand.name.toLowerCase()
  )

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <CollectionGrid
          products={brandProducts}
          title={brand.name}
          description={brand.description}
          showBrandHero
        />
      </main>
      <Footer />
      <CartDrawer />
    </>
  )
}
