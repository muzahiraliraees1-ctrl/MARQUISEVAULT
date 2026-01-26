"use client"

import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Search, ShoppingBag, User, Menu, X, LogIn, UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useCart } from "@/lib/cart-context"
import { brands, categories, products } from "@/lib/data"

export function Header() {
  const { itemCount, setIsOpen } = useCart()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const searchRef = useRef<HTMLDivElement>(null)

  // Filter products based on search query
  const searchResults = searchQuery.trim()
    ? products.filter(p =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 5)
    : []

  // Close search when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white">
      {/* Announcement Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm tracking-wide border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 order-2 md:order-1">
            <span className="text-xs text-primary-foreground/50 hidden md:inline">Follow us</span>
          </div>
          <p className="font-medium order-1 md:order-2 text-center flex-1">
            Complimentary shipping on all orders over PKR 50,000
          </p>
          <div className="w-[100px] hidden md:block order-3"></div>
        </div>
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
            <SheetContent side="left" className="w-full sm:w-80 overflow-y-auto">
              <nav className="flex flex-col gap-10 mt-12 pb-32 text-left items-start px-6">
                <Link
                  href="/collections/new"
                  className="text-lg font-medium hover:text-accent transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  New Arrivals
                </Link>
                <Link
                  href="/contact"
                  className="text-lg font-medium hover:text-accent transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
                <Link
                  href="/blogs"
                  className="text-lg font-medium hover:text-accent transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blogs
                </Link>
                <div className="w-full">
                  <p className="text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">Brands</p>
                  <div className="space-y-5 flex flex-col items-start w-full">
                    {brands.map((brand) => (
                      <Link
                        key={brand.id}
                        href={`/brands/${brand.id}`}
                        className="block py-4 hover:text-accent transition-colors text-xl w-full"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {brand.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">Categories</p>
                  <div className="space-y-5 flex flex-col items-start w-full">
                    {categories.slice(1).map((category) => (
                      <Link
                        key={category.slug}
                        href={`/collections/${category.slug}`}
                        className="block py-4 hover:text-accent transition-colors text-xl w-full"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-12 w-12 md:h-16 md:w-16 bg-white">
              <Image
                src="/brand-logo.jpg"
                alt="MARQUISE VAULT"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-serif text-sm md:text-base tracking-[0.2em] font-bold text-primary">
              MARQUISEVAULT
            </span>
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
            <Link
              href="/contact"
              className="text-sm font-medium uppercase tracking-wider hover:text-accent transition-colors"
            >
              Contact Us
            </Link>
            <div className="hidden lg:flex items-center gap-4 border-l border-border pl-8">
              <Link href="https://wa.me/923243499882" target="_blank" className="hover:opacity-80 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#25D366" className="h-4 w-4">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01C17.18 3.03 14.69 2 12.04 2M12.05 19.81c-1.41 0-2.79-.38-4-1.1l-.29-.17-2.97.78.79-2.89-.19-.3c-.79-1.25-1.21-2.7-1.21-4.22 0-4.38 3.56-7.94 7.94-7.94 2.12 0 4.11.83 5.61 2.33 1.5 1.5 2.33 3.49 2.33 5.61.01 4.38-3.55 7.9-8.01 7.9M16.39 14.24c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.63.78-.77.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.1-.1.24-.26.36-.39.12-.13.16-.22.24-.37.08-.15.04-.28-.02-.39-.06-.11-.54-1.29-.74-1.77-.19-.46-.39-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02s.87 2.34 1 2.67c.12.33 1.71 2.61 4.15 3.66 1.63.7 2.27.75 3.06.63.88-.13 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28" />
                </svg>
                <span className="sr-only">WhatsApp</span>
              </Link>
              <Link href="https://www.instagram.com/marquisevault?igsh=MXJoN2x6d2J5OTB4Zw==" target="_blank" className="hover:opacity-80 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#E1306C" className="h-4 w-4">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.947.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://www.facebook.com/share/1AfJ5MSZZV/" target="_blank" className="hover:opacity-80 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1877F2" className="h-4 w-4">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1DA1F2" className="h-4 w-4">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.165-2.724 10.051 10.051 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <div className="relative hidden sm:block" ref={searchRef}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchOpen(!searchOpen)}
              >
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>

              {/* Search Dropdown */}
              {searchOpen && (
                <div className="absolute top-full right-0 mt-2 w-80 bg-card border border-border rounded-lg shadow-lg p-4 z-50">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search bags, brands..."
                      className="w-full pl-10 pr-4 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      autoFocus
                    />
                  </div>

                  {/* Search Results */}
                  {searchResults.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {searchResults.map((product) => (
                        <Link
                          key={product.id}
                          href={`/product/${product.id}`}
                          className="flex items-center gap-3 p-2 hover:bg-secondary rounded-md transition-colors"
                          onClick={() => {
                            setSearchOpen(false)
                            setSearchQuery("")
                          }}
                        >
                          <div className="w-12 h-12 bg-secondary rounded overflow-hidden">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs text-muted-foreground">{product.brand}</p>
                            <p className="text-sm font-medium truncate">{product.name}</p>
                            <p className="text-sm">PKR {product.price.toLocaleString()}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}

                  {searchQuery && searchResults.length === 0 && (
                    <p className="mt-4 text-sm text-muted-foreground text-center">
                      No products found
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Login & Sign Up Buttons */}
            <Link href="/login">
              <Button variant="ghost" size="sm" className="hidden md:flex items-center gap-2">
                <LogIn className="h-4 w-4" />
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button variant="default" size="sm" className="hidden md:flex items-center gap-2">
                <UserPlus className="h-4 w-4" />
                Sign Up
              </Button>
            </Link>

            {/* Mobile Auth Icon */}
            <Link href="/login" className="md:hidden">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Button>
            </Link>

            {/* Cart */}
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
