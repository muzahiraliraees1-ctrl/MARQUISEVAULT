import { notFound } from "next/navigation"
import { products } from "@/lib/data"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartDrawer } from "@/components/cart-drawer"
import { ProductDetails } from "@/components/product-details"
import { RelatedProducts } from "@/components/related-products"

interface ProductPageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { id } = await params
  const product = products.find((p) => p.id === id)

  if (!product) {
    return {
      title: "Product Not Found | LUXE BAGS",
    }
  }

  return {
    title: `${product.name} by ${product.brand} | LUXE BAGS`,
    description: product.description,
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = products.find((p) => p.id === id)

  if (!product) {
    notFound()
  }

  const relatedProducts = products
    .filter((p) => p.brand === product.brand && p.id !== product.id)
    .slice(0, 4)

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <ProductDetails product={product} />
        {relatedProducts.length > 0 && (
          <RelatedProducts products={relatedProducts} />
        )}
      </main>
      <Footer />
      <CartDrawer />
    </>
  )
}
