"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

export default function PressPage() {
    const features = [
        {
            publication: "Vogue Arabia",
            title: "The Rise of Ethical Luxury in South Asia",
            date: "January 2026",
            image: "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?q=80&w=800&auto=format&fit=crop"
        },
        {
            publication: "Harper's Bazaar",
            title: "Marquise Vault: Redefining the Modern Tote",
            date: "December 2025",
            image: "https://images.unsplash.com/photo-1492681262514-ee7a67825f3c?q=80&w=800&auto=format&fit=crop"
        },
        {
            publication: "Elle Magazine",
            title: "10 Conscious Brands to Watch This Year",
            date: "November 2025",
            image: "https://images.unsplash.com/photo-1544716124-759f23b24b46?q=80&w=800&auto=format&fit=crop"
        }
    ]

    return (
        <main className="bg-[#FBFAF8] min-h-screen py-24 md:py-32">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <p className="text-accent uppercase tracking-[0.4em] text-xs mb-4 font-semibold">In the Spotlight</p>
                    <h1 className="font-serif text-5xl md:text-7xl text-primary tracking-tight">Press <span className="italic font-light">& News</span></h1>
                    <div className="h-px w-24 bg-primary/10 mx-auto mt-10" />
                </motion.div>

                {/* Featured Section */}
                <section className="mb-40">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-sm mb-6">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                                        <p className="text-white/60 text-[10px] uppercase tracking-widest mb-2 font-bold">{item.publication}</p>
                                        <h3 className="text-white font-serif text-xl leading-snug">{item.title}</h3>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between px-2">
                                    <span className="text-muted-foreground text-xs uppercase tracking-widest">{item.date}</span>
                                    <button className="text-primary hover:text-accent font-bold text-[10px] uppercase tracking-widest flex items-center gap-1 transition-colors">
                                        View Feature <ArrowUpRight className="w-3 h-3" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Media Kit */}
                <section className="bg-white rounded-[3rem] p-12 md:p-20 shadow-sm border border-black/5 text-center">
                    <h2 className="font-serif text-3xl md:text-4xl text-primary mb-8">Media Essentials</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed mb-12">
                        For press inquiries, brand assets, or collaborations, please reach out to our dedicated communications team.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <button className="px-10 py-4 bg-primary text-white rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-accent transition-colors">
                            Download Brand Guidelines
                        </button>
                        <button className="px-10 py-4 bg-white border border-primary text-primary rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-primary hover:text-white transition-colors">
                            Contact Media Relations
                        </button>
                    </div>
                </section>
            </div>
        </main>
    )
}
