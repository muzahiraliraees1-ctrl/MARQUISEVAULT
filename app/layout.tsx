"use client"

import React from "react"
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CartProvider } from "@/lib/cart-context"
import { AdminProvider } from "@/lib/admin-context"
import './globals.css'

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartDrawer } from "@/components/cart-drawer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { usePathname } from "next/navigation"

const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });
const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAdminPage = pathname?.startsWith('/admin')

  return (
    <>
      {!isAdminPage && <Header />}
      <main className="min-h-screen">
        {children}
      </main>
      {!isAdminPage && <Footer />}
      {!isAdminPage && <CartDrawer />}
      {!isAdminPage && <WhatsAppFloat />}
    </>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        <AdminProvider>
          <CartProvider>
            <LayoutContent>{children}</LayoutContent>
          </CartProvider>
        </AdminProvider>
        <Analytics />
      </body>
    </html>
  )
}
