"use client"

import Link from "next/link"
import { useState } from "react"
import { Search, ShoppingBag, User, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useCart } from "@/lib/cart-context"
import { brands, categories } from "@/lib/data"

export function Header() {
  const { itemCount, setIsOpen } = useCart()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Announcement Bar */}
      <div className="bg-primary text-primary-foreground text-center py-2 text-sm tracking-wide">
        Complimentary shipping on all orders over $500
      </div>

      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <nav className="flex flex-col gap-6 mt-8">
                <Link
                  href="/collections/new"
                  className="text-lg font-medium hover:text-accent transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  New Arrivals
                </Link>
                <div>
                  <p className="text-sm text-muted-foreground mb-3">Brands</p>
                  {brands.map((brand) => (
                    <Link
                      key={brand.id}
                      href={`/brands/${brand.id}`}
                      className="block py-2 hover:text-accent transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {brand.name}
                    </Link>
                  ))}
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-3">Categories</p>
                  {categories.slice(1).map((category) => (
                    <Link
                      key={category.slug}
                      href={`/collections/${category.slug}`}
                      className="block py-2 hover:text-accent transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="font-serif text-2xl tracking-wider">LUXE BAGS</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/collections/new"
              className="text-sm font-medium uppercase tracking-wider hover:text-accent transition-colors"
            >
              New Arrivals
            </Link>
            <div className="relative group">
              <button className="text-sm font-medium uppercase tracking-wider hover:text-accent transition-colors">
                Brands
              </button>
              <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-card border border-border rounded-lg shadow-lg p-4 min-w-[200px]">
                  {brands.map((brand) => (
                    <Link
                      key={brand.id}
                      href={`/brands/${brand.id}`}
                      className="block py-2 px-3 text-sm hover:bg-secondary rounded-md transition-colors"
                    >
                      {brand.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="text-sm font-medium uppercase tracking-wider hover:text-accent transition-colors">
                Collections
              </button>
              <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-card border border-border rounded-lg shadow-lg p-4 min-w-[200px]">
                  {categories.slice(1).map((category) => (
                    <Link
                      key={category.slug}
                      href={`/collections/${category.slug}`}
                      className="block py-2 px-3 text-sm hover:bg-secondary rounded-md transition-colors"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Link href="/admin">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() => setIsOpen(true)}
            >
              <ShoppingBag className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                  {itemCount}
                </span>
              )}
              <span className="sr-only">Cart</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
