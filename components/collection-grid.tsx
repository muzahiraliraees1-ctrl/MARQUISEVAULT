"use client"

import { useState, useMemo } from "react"
import { SlidersHorizontal, Grid3X3, Grid2X2, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { ProductCard } from "@/components/product-card"
import type { Product } from "@/lib/data"
import { brands, categories } from "@/lib/data"
import { cn } from "@/lib/utils"

interface CollectionGridProps {
  products: Product[]
  title: string
  description: string
  showBrandHero?: boolean
}

export function CollectionGrid({
  products,
  title,
  description,
  showBrandHero,
}: CollectionGridProps) {
  const [sortBy, setSortBy] = useState("featured")
  const [gridSize, setGridSize] = useState<"large" | "small">("large")
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedOccasions, setSelectedOccasions] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<string>("all")

  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Filter by brand
    if (selectedBrands.length > 0) {
      result = result.filter((p) =>
        selectedBrands.some(
          (brand) => p.brand.toLowerCase() === brand.toLowerCase()
        )
      )
    }

    // Filter by category
    if (selectedCategories.length > 0) {
      result = result.filter((p) =>
        selectedCategories.includes(p.category.toLowerCase().replace(" ", "-"))
      )
    }

    // Filter by occasion
    if (selectedOccasions.length > 0) {
      result = result.filter((p) =>
        p.occasion && selectedOccasions.includes(p.occasion)
      )
    }

    // Filter by price
    if (priceRange !== "all") {
      const [min, max] = priceRange.split("-").map(Number)
      result = result.filter((p) => {
        if (max) {
          return p.price >= min && p.price <= max
        }
        return p.price >= min
      })
    }

    // Sort
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        result.sort((a, b) => b.price - a.price)
        break
      case "newest":
        result = result.filter((p) => p.isNew).concat(result.filter((p) => !p.isNew))
        break
      default:
        // featured - keep original order
        break
    }

    return result
  }, [products, sortBy, selectedBrands, selectedCategories, selectedOccasions, priceRange])

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    )
  }

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    )
  }

  const toggleOccasion = (occasion: string) => {
    setSelectedOccasions((prev) =>
      prev.includes(occasion)
        ? prev.filter((o) => o !== occasion)
        : [...prev, occasion]
    )
  }

  const clearFilters = () => {
    setSelectedBrands([])
    setSelectedCategories([])
    setSelectedOccasions([])
    setPriceRange("all")
  }

  const hasActiveFilters =
    selectedBrands.length > 0 ||
    selectedCategories.length > 0 ||
    selectedOccasions.length > 0 ||
    priceRange !== "all"

  return (
    <div>
      {/* Hero */}
      <div
        className={cn(
          "bg-secondary py-12 md:py-20",
          showBrandHero && "bg-primary text-primary-foreground"
        )}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl mb-4">{title}</h1>
          <p
            className={cn(
              "text-muted-foreground max-w-2xl mx-auto",
              showBrandHero && "text-primary-foreground/70"
            )}
          >
            {description}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            {/* Mobile Filter */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="lg:hidden bg-transparent">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Filters
                  {hasActiveFilters && (
                    <span className="ml-2 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                      {selectedBrands.length +
                        selectedCategories.length +
                        selectedOccasions.length +
                        (priceRange !== "all" ? 1 : 0)}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                </SheetHeader>
                <div className="mt-6 space-y-6">
                  <FilterContent
                    selectedBrands={selectedBrands}
                    selectedCategories={selectedCategories}
                    selectedOccasions={selectedOccasions}
                    priceRange={priceRange}
                    toggleBrand={toggleBrand}
                    toggleCategory={toggleCategory}
                    toggleOccasion={toggleOccasion}
                    setPriceRange={setPriceRange}
                    clearFilters={clearFilters}
                    hasActiveFilters={hasActiveFilters}
                  />
                </div>
              </SheetContent>
            </Sheet>

            <p className="text-sm text-muted-foreground">
              {filteredProducts.length} products
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>

            <div className="hidden sm:flex items-center border border-border rounded-sm overflow-hidden">
              <button
                onClick={() => setGridSize("large")}
                className={cn(
                  "p-2 transition-colors",
                  gridSize === "large" ? "bg-secondary" : "hover:bg-secondary/50"
                )}
                aria-label="Large grid"
              >
                <Grid2X2 className="h-4 w-4" />
              </button>
              <button
                onClick={() => setGridSize("small")}
                className={cn(
                  "p-2 transition-colors",
                  gridSize === "small" ? "bg-secondary" : "hover:bg-secondary/50"
                )}
                aria-label="Small grid"
              >
                <Grid3X3 className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-12">
          {/* Desktop Filters */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <FilterContent
              selectedBrands={selectedBrands}
              selectedCategories={selectedCategories}
              selectedOccasions={selectedOccasions}
              priceRange={priceRange}
              toggleBrand={toggleBrand}
              toggleCategory={toggleCategory}
              toggleOccasion={toggleOccasion}
              setPriceRange={setPriceRange}
              clearFilters={clearFilters}
              hasActiveFilters={hasActiveFilters}
            />
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground mb-4">
                  No products match your filters.
                </p>
                <Button variant="outline" onClick={clearFilters}>
                  Clear All Filters
                </Button>
              </div>
            ) : (
              <div
                className={cn(
                  "grid gap-8",
                  gridSize === "large"
                    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                    : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
                )}
              >
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

interface FilterContentProps {
  selectedBrands: string[]
  selectedCategories: string[]
  selectedOccasions: string[]
  priceRange: string
  toggleBrand: (brand: string) => void
  toggleCategory: (category: string) => void
  toggleOccasion: (occasion: string) => void
  setPriceRange: (range: string) => void
  clearFilters: () => void
  hasActiveFilters: boolean
}

function FilterContent({
  selectedBrands,
  selectedCategories,
  selectedOccasions,
  priceRange,
  toggleBrand,
  toggleCategory,
  toggleOccasion,
  setPriceRange,
  clearFilters,
  hasActiveFilters,
}: FilterContentProps) {
  const occasions = ["Gala", "Business", "Jetset", "Weekend"];

  return (
    <div className="space-y-8">
      {hasActiveFilters && (
        <Button
          variant="ghost"
          size="sm"
          onClick={clearFilters}
          className="text-muted-foreground hover:text-foreground -ml-2"
        >
          Clear all filters
        </Button>
      )}

      {/* Brands */}
      <div>
        <h3 className="font-medium mb-4 uppercase tracking-wider text-sm">Brands</h3>
        <div className="space-y-3">
          {brands.map((brand) => (
            <label
              key={brand.id}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <Checkbox
                checked={selectedBrands.includes(brand.name)}
                onCheckedChange={() => toggleBrand(brand.name)}
              />
              <span className="text-sm group-hover:text-primary transition-colors">{brand.name}</span>
            </label>
          ))}
        </div>
      </div>

      <Separator />

      {/* Categories */}
      <div>
        <h3 className="font-medium mb-4 uppercase tracking-wider text-sm">Categories</h3>
        <div className="space-y-3">
          {categories.slice(1).map((category) => (
            <label
              key={category.slug}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <Checkbox
                checked={selectedCategories.includes(category.slug)}
                onCheckedChange={() => toggleCategory(category.slug)}
              />
              <span className="text-sm group-hover:text-primary transition-colors">{category.name}</span>
            </label>
          ))}
        </div>
      </div>

      <Separator />

      {/* Occasions */}
      <div>
        <h3 className="font-medium mb-4 uppercase tracking-wider text-sm">Shop by Occasion</h3>
        <div className="space-y-3">
          {occasions.map((occasion) => (
            <label
              key={occasion}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <Checkbox
                checked={selectedOccasions.includes(occasion)}
                onCheckedChange={() => toggleOccasion(occasion)}
              />
              <span className="text-sm group-hover:text-primary transition-colors">{occasion}</span>
            </label>
          ))}
        </div>
      </div>

      <Separator />

      {/* Price Range */}
      <div>
        <h3 className="font-medium mb-4 uppercase tracking-wider text-sm">Price Range</h3>
        <div className="space-y-3">
          {[
            { value: "all", label: "All Prices" },
            { value: "0-2000", label: "Under PKR 2000" },
            { value: "2000-5000", label: "PKR 2000 - PKR 5000" },
            { value: "5000-10000", label: "PKR 5000 - PKR 10000" },
            { value: "10000-", label: "Over PKR 10000" },
          ].map((option) => (
            <label
              key={option.value}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <Checkbox
                checked={priceRange === option.value}
                onCheckedChange={() => setPriceRange(option.value)}
              />
              <span className="text-sm group-hover:text-primary transition-colors">{option.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}
