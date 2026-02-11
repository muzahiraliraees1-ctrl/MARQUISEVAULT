"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { products } from "@/lib/data"
import { ProductCard } from "@/components/product-card"

export default function BlogsPage() {
    const posts = [
        {
            id: 2,
            title: "Investment Pieces: Why Chanel Classic Flaps Retain Value",
            excerpt: "Analyzing the market trends and historical data that make the Chanel Classic Flap a sound financial investment.",
            date: "September 28, 2025",
            category: "Investment",
            image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 3,
            title: "Care & Maintenance: Preserving Your Luxury Assets",
            excerpt: "Essential tips and techniques for maintaining the pristine condition of your luxury handbags in humid climates.",
            date: "September 15, 2025",
            category: "Care Guide",
            image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=800&auto=format&fit=crop"
        }
    ]

    // Get bags that are on the landing page (Featured or New)
    const landingPageBags = products.filter(p => p.isFeatured || p.isNew).slice(0, 8)

    return (
        <main className="bg-[#FBFAF8] min-h-screen py-24 md:py-32">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <p className="text-accent uppercase tracking-[0.4em] text-xs mb-4 font-semibold">The Journal</p>
                    <h1 className="font-serif text-5xl md:text-7xl text-primary tracking-tight">The Atelier <span className="italic font-light">Insights</span></h1>
                    <div className="h-px w-24 bg-primary/10 mx-auto mt-10" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
                    {posts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group flex flex-col"
                        >
                            <div className="aspect-[4/5] relative overflow-hidden rounded-[2.5rem] shadow-xl mb-8">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                                <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-widest text-primary">
                                    {post.category}
                                </div>
                            </div>
                            <div className="space-y-4 px-2">
                                <p className="text-secondary text-xs uppercase tracking-widest">{post.date}</p>
                                <h3 className="font-serif text-2xl text-primary leading-tight group-hover:text-accent transition-colors duration-300">
                                    {post.title}
                                </h3>
                                <p className="text-muted-foreground font-light text-sm leading-relaxed line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <Link
                                    href={`#`}
                                    className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-primary hover:text-accent transition-colors pt-4"
                                >
                                    Experience Article <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* New Section: Featured Collection */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32 pt-24 border-t border-primary/5"
                >
                    <div className="text-center mb-16">
                        <p className="text-accent uppercase tracking-[0.4em] text-xs mb-4 font-semibold">Featured Collection</p>
                        <h2 className="font-serif text-4xl md:text-5xl text-primary">As Seen on <span className="italic font-light">Landing Page</span></h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {landingPageBags.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    <div className="text-center mt-16">
                        <Link href="/collections/all">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-12 py-4 bg-primary text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-accent transition-colors"
                            >
                                Shop the Collection
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </main>
    )
}

