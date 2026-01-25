import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react"

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
            <Link href="/" className="inline-block">
              <h2 className="text-2xl font-serif tracking-widest uppercase mb-4">Marquise Vault</h2>
            </Link>
            <div className="flex gap-6 lg:justify-end text-primary-foreground/60">
              <Link href="https://www.instagram.com/marquisevault?igsh=MXJoN2x6d2J5OTB4Zw==" target="_blank" className="hover:text-accent transition-colors"><Instagram className="h-5 w-5" /></Link>
              <Link href="https://www.facebook.com/share/1AfJ5MSZZV/" target="_blank" className="hover:text-accent transition-colors"><Facebook className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-accent transition-colors"><Twitter className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-accent transition-colors"><Linkedin className="h-5 w-5" /></Link>
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
                <Link href="/craftsmanship" className="hover:text-accent transition-colors">Craftsmanship</Link>
              </li>
              <li>
                <Link href="/sustainability" className="hover:text-accent transition-colors">Sustainability</Link>
              </li>
              <li>
                <Link href="/press" className="hover:text-accent transition-colors">Press & News</Link>
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
                <span className="text-accent">0324 3499882</span>
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
          <p>Milan &bull; Paris &bull; Dubai &bull; New York</p>
        </div>
      </div>
    </footer>
  )
}
