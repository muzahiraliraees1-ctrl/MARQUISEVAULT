"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function CraftsmanshipPage() {
    const steps = [
        {
            title: "Material Selection",
            description: "Our journey begins with the selection of the finest premium synthetic leathers. We choose materials that offer the perfect balance of suppleness, durability, and ethical responsibility.",
            image: "https://images.unsplash.com/photo-1524290266577-fb3669677356?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Precision Cutting",
            description: "Each panel is cut with absolute precision, ensuring that the silhouette of a Marquise bag remains structured and elegant for years to come.",
            image: "https://images.unsplash.com/photo-1589410115094-984487f95080?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Intricate Assembly",
            description: "Our artisans meticulously hand-assemble each piece, focusing on reinforced stitching and edge-finishing techniques that define high-end craftsmanship.",
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop"
        }
    ]

    return (
        <main className="bg-[#FAF9F6] min-h-screen py-24 md:py-32">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-32"
                >
                    <p className="text-accent uppercase tracking-[0.4em] text-xs mb-4 font-semibold">The Atelier</p>
                    <h1 className="font-serif text-5xl md:text-7xl text-primary tracking-tight">Artisanal <span className="italic font-light">Craftsmanship</span></h1>
                    <div className="h-px w-24 bg-primary/10 mx-auto mt-10" />
                </motion.div>

                {/* Philosophy */}
                <section className="grid md:grid-cols-2 gap-20 items-center mb-40">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="font-serif text-3xl md:text-4xl text-primary leading-tight">Tradition Meets <span className="italic font-light text-accent">Responsibility</span></h2>
                        <p className="text-muted-foreground text-lg font-light leading-relaxed">
                            At the heart of Marquise Vault lies a commitment to preserving the art of bag making while embracing modern, ethical alternatives. Our craftsmen bring decades of experience to the atelier, blending traditional techniques with contemporary materials.
                        </p>
                        <div className="pt-8 flex gap-12">
                            <div className="text-center">
                                <div className="font-serif text-3xl text-primary mb-1">100%</div>
                                <p className="text-[10px] uppercase tracking-widest text-accent font-bold">Cruelty Free</p>
                            </div>
                            <div className="text-center">
                                <div className="font-serif text-3xl text-primary mb-1">Hand</div>
                                <p className="text-[10px] uppercase tracking-widest text-accent font-bold">Assembled</p>
                            </div>
                            <div className="text-center">
                                <div className="font-serif text-3xl text-primary mb-1">Premium</div>
                                <p className="text-[10px] uppercase tracking-widest text-accent font-bold">Finishing</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=800&auto=format&fit=crop"
                            alt="Craftsmanship Excellence"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </section>

                {/* Steps */}
                <div className="space-y-40">
                    {steps.map((step, index) => (
                        <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-20 items-center`}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="flex-1 space-y-6"
                            >
                                <div className="text-accent/20 font-serif text-8xl mb-4 font-bold outline-text">0{index + 1}</div>
                                <h3 className="font-serif text-2xl md:text-3xl text-primary">{step.title}</h3>
                                <p className="text-muted-foreground font-light leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                            <div className="flex-1 w-full">
                                <motion.div
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl"
                                >
                                    <Image
                                        src={step.image}
                                        alt={step.title}
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}
