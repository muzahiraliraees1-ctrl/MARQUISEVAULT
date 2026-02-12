"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
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
        <main className="bg-[#FBFAF8] min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/products/essence-1.jpg"
                        alt="Marquise Vault Craftsmanship"
                        fill
                        className="object-cover opacity-20 grayscale"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FBFAF8]" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.p
                        initial={{ opacity: 0, letterSpacing: "0.2em" }}
                        animate={{ opacity: 1, letterSpacing: "0.5em" }}
                        className="text-accent uppercase text-sm mb-6 font-medium"
                    >
                        The Journey of Marquise Vault
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="font-serif text-5xl md:text-7xl lg:text-8xl text-primary tracking-tight"
                    >
                        Vision, Courage & <br /> <span className="italic font-light">Empowerment</span>
                    </motion.h1>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-4 max-w-4xl">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-24"
                    >
                        {/* Intro Segment */}
                        <motion.div variants={itemVariants} className="text-center md:text-left">
                            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-8 leading-tight">
                                A Journey of Purpose
                            </h2>
                            <div className="prose prose-lg prose-stone max-w-none text-muted-foreground font-light leading-relaxed space-y-6">
                                <p>
                                    My name is **Nida Fatima**, and I am a 24-year-old BS Accounting and Finance student,
                                    currently in my final year of studies. During my last year, while balancing academics,
                                    projects, and exams, I took a step that changed my life — I founded **Marquise Vault**,
                                    a synthetic leather tote bag brand built not just on fashion, but on purpose, resilience,
                                    and women empowerment.
                                </p>
                                <p>
                                    Marquise Vault did not begin with privilege, connections, or a ready-made path. It began
                                    with a dream, determination, and countless challenges. Starting from absolute scratch with
                                    no prior exposure to the industry, I relied on clarity of vision and the courage to walk
                                    into spaces where women are rarely seen.
                                </p>
                            </div>
                        </motion.div>

                        {/* Research Segment */}
                        <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/products/essence-2.jpg"
                                    alt="Market Research"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="space-y-6">
                                <h3 className="font-serif text-2xl text-primary">Breaking Barriers</h3>
                                <p className="text-muted-foreground font-light leading-relaxed">
                                    The first phase was market research. As a young woman, stepping into male-dominated
                                    markets was a challenge. These were spaces where women are often discouraged or
                                    underestimated. Despite unspoken barriers, I chose to go anyway.
                                </p>
                                <p className="text-muted-foreground font-light leading-relaxed">
                                    I walked through markets, interacted with vendors, and studied every detail — from texture
                                    and durability to the finish of synthetic leather (rexine). Each visit strengthened my
                                    belief that women deserve a place in every industry.
                                </p>
                            </div>
                        </motion.div>

                        {/* Design Segment */}
                        <motion.div variants={itemVariants} className="text-center max-w-2xl mx-auto">
                            <h3 className="font-serif text-3xl text-primary mb-6">Meticulous Design</h3>
                            <p className="text-muted-foreground font-light leading-relaxed">
                                After months of analysis, I moved to the design stage. From selecting the right colors to
                                choosing premium-quality materials, every decision was made thoughtfully. I wanted
                                Marquise Vault to represent elegance, durability, and modern style while remaining
                                meaningful for women.
                            </p>
                        </motion.div>

                        {/* Vendor Segment */}
                        <motion.div variants={itemVariants} className="bg-white p-12 rounded-[3rem] shadow-sm border border-black/5">
                            <h3 className="font-serif text-2xl text-primary mb-6">Persistence in Creation</h3>
                            <p className="text-muted-foreground font-light leading-relaxed mb-6">
                                Finding the right vendors tested my patience. Without connections, I relied solely on
                                self-research and personal visits. After discussions, rejections, and months of trial and error,
                                I finally found partners who aligned with my vision.
                            </p>
                            <p className="text-muted-foreground font-semibold italic">
                                Finally, after long days and unwavering commitment, Marquise Vault was born.
                            </p>
                        </motion.div>

                        {/* Mission & Movement */}
                        <motion.div variants={itemVariants} className="text-center space-y-8">
                            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary">
                                The Movement
                            </h2>
                            <p className="text-xl text-muted-foreground font-light italic max-w-3xl mx-auto">
                                "Marquise Vault is not just a brand. It is a movement. It stands for women empowerment,
                                independence, and opportunity."
                            </p>
                            <div className="prose prose-lg prose-stone max-w-none text-muted-foreground font-light leading-relaxed space-y-6 text-left md:text-center">
                                <p>
                                    My vision is to actively involve women at every stage. From production to leadership —
                                    my goal is to hire women, work with women, and grow alongside women. We aim to create job
                                    opportunities and contribute to reducing poverty in society.
                                </p>
                                <p>
                                    I believe that when more women-led businesses grow, society progresses. Through
                                    Marquise Vault, I want to play my part in building a stronger, more inclusive future.
                                </p>
                            </div>
                        </motion.div>

                        {/* Conclusion */}
                        <motion.div variants={itemVariants} className="pt-12 border-t border-black/10 text-center">
                            <p className="text-muted-foreground font-light leading-relaxed mb-12 italic">
                                This journey has taught me that success is not defined by how easy the path is,
                                but by how determined you remain when the path is difficult.
                                <br /><br />
                                This is not the end of my story — it is only the beginning.
                            </p>
                            <Button asChild variant="luxury" size="lg">
                                <Link href="/collections/all">SHOP OUR COLLECTION</Link>
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}
