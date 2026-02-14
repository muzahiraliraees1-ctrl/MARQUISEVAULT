import { notFound } from "next/navigation"
import { products, categories } from "@/lib/data"
import { CollectionGrid } from "@/components/collection-grid"

interface CollectionPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return [
    { slug: "all" },
    { slug: "new" },
    ...categories.slice(1).map((cat) => ({ slug: cat.slug })),
  ]
}

export async function generateMetadata({ params }: CollectionPageProps) {
  const { slug } = await params

  if (slug === "new") {
    return {
      title: "New Arrivals | LUXE BAGS",
      description: "Discover our latest designer handbags and accessories.",
    }
  }

  if (slug === "all") {
    return {
      title: "All Products | LUXE BAGS",
      description: "Browse our complete collection of luxury handbags.",
    }
  }

  const category = categories.find((c) => c.slug === slug)
  if (!category) {
    return { title: "Collection | LUXE BAGS" }
  }

  return {
    title: `${category.name} | LUXE BAGS`,
    description: `Shop luxury ${category.name.toLowerCase()} from the world's most prestigious brands.`,
  }
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { slug } = await params

  let filteredProducts = products
  let title = "All Products"
  let description = "Browse our complete collection of luxury handbags from the world's most prestigious brands."

  if (slug === "new") {
    filteredProducts = products.filter((p) => p.isNew)
    title = "New Arrivals"
    description = "Discover the latest additions to our curated collection."
  } else if (slug !== "all") {
    const category = categories.find((c) => c.slug === slug)
    if (!category) {
      notFound()
    }
    filteredProducts = products.filter(
      (p) => p.category.toLowerCase().replaceAll(" ", "-") === slug
    )
    title = category.name
    description = `Discover our selection of luxury ${category.name.toLowerCase()}.`
  }

  return (
    <main className="min-h-screen">
      <CollectionGrid
        products={filteredProducts}
        title={title}
        description={description}
      />
    </main>
  )
}
