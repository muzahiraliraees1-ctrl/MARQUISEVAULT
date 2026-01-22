import React from "react"
import Link from "next/link"
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Tag,
  Settings,
  LogOut,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export const metadata = {
  title: "Admin Dashboard | LUXE BAGS",
  description: "Manage your store.",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-secondary/30">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-screen bg-card border-r border-border p-6 hidden md:block">
          <Link href="/" className="block mb-8">
            <span className="font-serif text-xl tracking-wider">LUXE BAGS</span>
            <span className="block text-xs text-muted-foreground mt-1">
              Admin Portal
            </span>
          </Link>

          <nav className="space-y-1">
            <Link
              href="/admin"
              className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-secondary transition-colors"
            >
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="/admin/products"
              className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-secondary transition-colors"
            >
              <Package className="h-4 w-4" />
              Products
            </Link>
            <Link
              href="/admin/orders"
              className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-secondary transition-colors"
            >
              <ShoppingCart className="h-4 w-4" />
              Orders
            </Link>
            <Link
              href="/admin/customers"
              className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-secondary transition-colors"
            >
              <Users className="h-4 w-4" />
              Customers
            </Link>
            <Link
              href="/admin/brands"
              className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-secondary transition-colors"
            >
              <Tag className="h-4 w-4" />
              Brands
            </Link>
          </nav>

          <Separator className="my-6" />

          <nav className="space-y-1">
            <Link
              href="/admin/settings"
              className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-secondary transition-colors"
            >
              <Settings className="h-4 w-4" />
              Settings
            </Link>
            <Link
              href="/"
              className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-secondary transition-colors text-muted-foreground"
            >
              <LogOut className="h-4 w-4" />
              Exit Admin
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-h-screen">{children}</main>
      </div>
    </div>
  )
}
