"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SustainabilityPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    }

    return (
        <main className="bg-[#FAF9F6] min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/products/essence-3.jpg"
                        alt="Marquise Vault Sustainability"
                        fill
                        className="object-cover opacity-15 grayscale"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FAF9F6]" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.p
                        initial={{ opacity: 0, letterSpacing: "0.2em" }}
                        animate={{ opacity: 1, letterSpacing: "0.4em" }}
                        className="text-accent uppercase text-xs mb-4 font-medium"
                    >
                        Our Sustainable Commitment
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="font-serif text-4xl md:text-6xl lg:text-7xl text-primary tracking-tight"
                    >
                        Building Fashion <br /> <span className="italic font-light">with Responsibility</span>
                    </motion.h1>
                </div>
            </section>

            {/* Philosophy & Purpose */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 max-w-4xl">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-20"
                    >
                        <motion.div variants={itemVariants} className="text-center max-w-2xl mx-auto">
                            <p className="text-muted-foreground text-lg font-light leading-relaxed">
                                At Marquise Vault, sustainability is not a trend — it is a responsibility. From the
                                very beginning, the brand has been built with a conscious approach toward ethical
                                production, mindful sourcing, and long-term social impact.
                            </p>
                        </motion.div>

                        {/* Cruelty-Free Segment */}
                        <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6 order-2 md:order-1">
                                <h2 className="font-serif text-2xl md:text-3xl text-primary">Cruelty-Free Elegance</h2>
                                <div className="prose prose-stone text-muted-foreground font-light leading-relaxed space-y-4">
                                    <p>
                                        As a synthetic leather tote bag brand, Marquise Vault actively supports cruelty-free fashion.
                                        By choosing high-quality synthetic leather over animal leather, we reduce harm while offering
                                        durable, elegant products.
                                    </p>
                                    <p>
                                        Our materials are selected for longevity, minimizing the need for frequent replacements
                                        and reducing overall consumption. Sustainability begins at the material selection stage.
                                    </p>
                                </div>
                            </div>
                            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl order-1 md:order-2">
                                <Image
                                    src="/products/essence-1.jpg"
                                    alt="Cruelty-Free Materials"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>

                        {/* Pillar: Responsible Production */}
                        <motion.div variants={itemVariants} className="bg-white p-10 md:p-16 rounded-[2.5rem] shadow-sm border border-black/5">
                            <div className="max-w-2xl mx-auto text-center space-y-6">
                                <h2 className="font-serif text-2xl md:text-3xl text-primary">Responsible Production</h2>
                                <p className="text-muted-foreground font-light leading-relaxed">
                                    We work closely with craftsmen to ensure ethical working conditions and transparent
                                    processes. We believe sustainability is incomplete without social responsibility, striving
                                    to support fair employment and respectful work environments.
                                </p>
                                <p className="text-muted-foreground font-light leading-relaxed">
                                    Our production is done in controlled quantities to avoid overproduction and unnecessary stock waste.
                                    Packaging is kept minimal and functional, reducing excess materials while maintaining safety and aesthetics.
                                </p>
                            </div>
                        </motion.div>

                        {/* Pillar: Women-Led Sustainability */}
                        <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl">
                                <Image
                                    src="/products/essence-2.jpg"
                                    alt="Women Empowerment"
                                    fill
                                    className="object-cover transition-transform duration-1000"
                                />
                            </div>
                            <div className="space-y-6">
                                <h2 className="font-serif text-2xl md:text-3xl text-primary">Empowering Communities</h2>
                                <p className="text-muted-foreground font-light leading-relaxed">
                                    Marquise Vault is deeply committed to women-led sustainability. Our mission is to involve
                                    women at every stage — from production to operations. By creating opportunities, we contribute
                                    to economic stability and financial independence.
                                </p>
                                <p className="text-muted-foreground font-light leading-relaxed italic">
                                    "Empowered women lead to empowered communities, making sustainability not just environmental but social as well."
                                </p>
                            </div>
                        </motion.div>

                        {/* Vision Segment */}
                        <motion.div variants={itemVariants} className="text-center space-y-10 pt-10">
                            <h2 className="font-serif text-3xl md:text-4xl text-primary">The Future of Conscious Fashion</h2>
                            <p className="text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
                                Our journey is evolving. Future goals include exploring eco-friendlier synthetic alternatives,
                                improving packaging solutions, and expanding community-based employment opportunities for women.
                            </p>
                            <div className="flex flex-col items-center gap-6">
                                <div className="h-px w-24 bg-primary/10" />
                                <p className="font-serif italic text-primary/60 text-xl">
                                    Fashion that supports people, protects resources, and creates lasting impact.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}
