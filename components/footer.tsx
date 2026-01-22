import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="font-serif text-2xl mb-3">Join Our World</h3>
            <p className="text-primary-foreground/70 mb-6">
              Subscribe to receive exclusive access to new arrivals, private sales, and curated content.
            </p>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button variant="secondary" className="shrink-0">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-medium uppercase tracking-wider text-sm mb-4">
              Shop
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>
                <Link href="/collections/new" className="hover:text-primary-foreground transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/collections/shoulder-bags" className="hover:text-primary-foreground transition-colors">
                  Shoulder Bags
                </Link>
              </li>
              <li>
                <Link href="/collections/totes" className="hover:text-primary-foreground transition-colors">
                  Totes
                </Link>
              </li>
              <li>
                <Link href="/collections/top-handle" className="hover:text-primary-foreground transition-colors">
                  Top Handle
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium uppercase tracking-wider text-sm mb-4">
              Brands
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>
                <Link href="/brands/chanel" className="hover:text-primary-foreground transition-colors">
                  CHANEL
                </Link>
              </li>
              <li>
                <Link href="/brands/louis-vuitton" className="hover:text-primary-foreground transition-colors">
                  Louis Vuitton
                </Link>
              </li>
              <li>
                <Link href="/brands/hermes" className="hover:text-primary-foreground transition-colors">
                  Hermes
                </Link>
              </li>
              <li>
                <Link href="/brands/gucci" className="hover:text-primary-foreground transition-colors">
                  GUCCI
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium uppercase tracking-wider text-sm mb-4">
              Customer Care
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>
                <Link href="/contact" className="hover:text-primary-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-primary-foreground transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/authenticity" className="hover:text-primary-foreground transition-colors">
                  Authenticity Guarantee
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium uppercase tracking-wider text-sm mb-4">
              About
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>
                <Link href="/about" className="hover:text-primary-foreground transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="hover:text-primary-foreground transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-primary-foreground transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" className="hover:text-primary-foreground transition-colors">
                  Press
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
          <p>&copy; 2026 LUXE BAGS. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
