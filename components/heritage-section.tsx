"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeritageSection() {
    return (
        <section className="py-24 bg-secondary/30 overflow-hidden relative">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">

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

                        <div className="mt-10 flex gap-6 justify-center">
                            <Button asChild variant="luxury" size="lg">
                                <Link href="/about">Discover Our Story</Link>
                            </Button>
                            <Button asChild variant="link" className="text-primary hover:text-accent">
                                <Link href="/sustainability">Our Sustainability Promise</Link>
                            </Button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
