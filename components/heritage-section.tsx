"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeritageSection() {
    return (
        <section className="py-24 bg-secondary/30 overflow-hidden relative">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <div className="order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h4 className="text-accent uppercase tracking-[0.2em] text-sm font-medium mb-4">
                                Our Vision
                            </h4>
                            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight text-primary">
                                Vision, Courage & <br /> Empowerment
                            </h2>
                            <div className="space-y-6 text-muted-foreground text-lg font-light leading-relaxed">
                                <p>
                                    Founded by Nida Fatima in her final year of university, Marquise Vault is a testament to
                                    resilience and purpose. Born from a dream to challenge norms, the brand began with
                                    no prior path—only the clarity of vision and the courage to enter spaces where
                                    women are rarely seen.
                                </p>
                                <p>
                                    Our journey is one of absolute determination. From studying every texture of synthetic leather
                                    to navigating traditionally male-dominated markets, every Marquise piece represents the
                                    unwavering commitment of a woman who chose to build her own future.
                                </p>
                            </div>

                            <div className="mt-10 flex gap-6">
                                <Button asChild variant="luxury" size="lg">
                                    <Link href="/about">Discover Our Story</Link>
                                </Button>
                                <Button asChild variant="link" className="text-primary hover:text-accent">
                                    <Link href="/sustainability">Our Sustainability Promise</Link>
                                </Button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Visuals */}
                    <div className="order-1 lg:order-2">
                        {/* Unconstrained Width Container -> Now centered with w-[60%] */}
                        <div className="relative w-[60%] mx-auto aspect-[3/4]">
                            {/* Decorative Accent - Offset 'Back Box' */}
                            <div className="absolute top-4 -right-4 w-full h-full border border-accent/30 -z-0" />

                            {/* Image Container - Matches Parent Size */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="relative z-10 w-full h-full shadow-2xl"
                            >
                                <img
                                    src="/heritage/craftsmanship.png"
                                    className="w-full h-full object-cover rounded-xl shadow-lg"
                                    alt="Handcrafting"
                                />
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
