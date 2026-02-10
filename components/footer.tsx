import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import { } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/10 pt-24 pb-12">
      <div className="container mx-auto px-4">

        {/* Top Section: Newsletter & Brand */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-end">
          <div>
            <h3 className="font-serif text-3xl md:text-4xl mb-6 leading-tight">
              Join the Private List
            </h3>
            <p className="text-primary-foreground/70 mb-8 max-w-md font-light">
              Subscribe to receive invitation-only access to new collections,
              private sourcing events, and our seasonal atelier notes.
            </p>
            <form className="flex gap-4 max-w-md">
              <Input
                type="email"
                placeholder="Email Address"
                className="bg-transparent border-b border-primary-foreground/30 rounded-none px-0 py-3 focus-visible:ring-0 focus-visible:border-accent text-primary-foreground placeholder:text-primary-foreground/40 h-auto"
              />
              <Button variant="luxury" className="h-auto py-3 px-8 text-sm uppercase tracking-widest hover:bg-accent hover:text-accent-foreground border-primary-foreground/30 hover:border-accent">
                Subscribe
              </Button>
            </form>
          </div>

          <div className="lg:text-right">
            <div className="flex gap-6 lg:justify-end text-primary-foreground/60">
              <Link href="https://wa.me/923243499882" target="_blank" className="hover:opacity-80 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#25D366" className="h-5 w-5">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01C17.18 3.03 14.69 2 12.04 2M12.05 19.81c-1.41 0-2.79-.38-4-1.1l-.29-.17-2.97.78.79-2.89-.19-.3c-.79-1.25-1.21-2.7-1.21-4.22 0-4.38 3.56-7.94 7.94-7.94 2.12 0 4.11.83 5.61 2.33 1.5 1.5 2.33 3.49 2.33 5.61.01 4.38-3.55 7.9-8.01 7.9M16.39 14.24c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.63.78-.77.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.1-.1.24-.26.36-.39.12-.13.16-.22.24-.37.08-.15.04-.28-.02-.39-.06-.11-.54-1.29-.74-1.77-.19-.46-.39-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02s.87 2.34 1 2.67c.12.33 1.71 2.61 4.15 3.66 1.63.7 2.27.75 3.06.63.88-.13 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28" />
                </svg>
              </Link>
              <Link href="https://www.instagram.com/marquisevault?igsh=MXJoN2x6d2J5OTB4Zw==" target="_blank" className="hover:opacity-80 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#E1306C" className="h-5 w-5">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.947.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </Link>
              <Link href="https://www.facebook.com/share/1AfJ5MSZZV/" target="_blank" className="hover:opacity-80 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1877F2" className="h-5 w-5">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1DA1F2" className="h-5 w-5">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.165-2.724 10.051 10.051 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <Separator className="bg-primary-foreground/10 mb-16" />

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-8 mb-20 text-sm">
          {/* Column 1: The Atelier */}
          <div>
            <h4 className="font-medium uppercase tracking-[0.2em] text-xs mb-8 text-accent">
              The Atelier
            </h4>
            <ul className="space-y-4 font-light text-primary-foreground/80">
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">Our Heritage</Link>
              </li>
              <li>
                <Link href="/sustainability" className="hover:text-accent transition-colors">Sustainability</Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Collections */}
          <div>
            <h4 className="font-medium uppercase tracking-[0.2em] text-xs mb-8 text-accent">
              Collections
            </h4>
            <ul className="space-y-4 font-light text-primary-foreground/80">
              <li>
                <Link href="/collections/new" className="hover:text-accent transition-colors">New Arrivals</Link>
              </li>
              <li>
                <Link href="/brands/hermes" className="hover:text-accent transition-colors">Maison Hermès</Link>
              </li>
              <li>
                <Link href="/brands/chanel" className="hover:text-accent transition-colors">House of Chanel</Link>
              </li>
              <li>
                <Link href="/collections/limited" className="hover:text-accent transition-colors">Limited Edition</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Care */}
          <div>
            <h4 className="font-medium uppercase tracking-[0.2em] text-xs mb-8 text-accent">
              Client Services
            </h4>
            <ul className="space-y-4 font-light text-primary-foreground/80">
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">Concierge Services</Link>
              </li>
              <li>
                <span className="text-accent">0345 2618575</span>
              </li>
              <li>
                <Link href="/return-exchange" className="hover:text-accent transition-colors">Return & Exchange</Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-accent transition-colors">Shipping Info</Link>
              </li>
              <li>
                <Link href="/authenticity" className="hover:text-accent transition-colors">Authenticity Guarantee</Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-accent transition-colors">Blogs</Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-accent transition-colors">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal/Contact */}
          <div>
            <h4 className="font-medium uppercase tracking-[0.2em] text-xs mb-8 text-accent">
              Legal
            </h4>
            <ul className="space-y-4 font-light text-primary-foreground/80">
              <li>
                <Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="hover:text-accent transition-colors">Cookie Policy</Link>
              </li>
              <li>
                <span className="opacity-50 cursor-default">Accessibility</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-primary-foreground/30 font-light border-t border-primary-foreground/5 pt-8">
          <p>&copy; 2026 MARQUISE VAULT. All rights reserved.</p>
          <p>Karachi &bull; Milan &bull; Paris &bull; Dubai</p>
        </div>
      </div>
    </footer>
  )
}
