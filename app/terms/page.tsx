"use client"

import { motion } from "framer-motion"

export default function TermsOfService() {
    const terms = [
        {
            title: "Agreement to Terms",
            content: "By accessing or using the Marquise Vault website, you agree to be bound by these Terms of Service. If you do not agree, please refrain from using our services."
        },
        {
            title: "Intellectual Property",
            content: "All content, designs, and branding elements on this site are the exclusive property of Marquise Vault. Unauthorized use, reproduction, or distribution is strictly prohibited."
        },
        {
            title: "Conditions of Sale",
            content: "All orders are subject to acceptance and availability. We reserve the right to refuse service or cancel orders at our discretion. Prices are subject to change without notice."
        },
        {
            title: "Limitation of Liability",
            content: "Marquise Vault shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our products or services."
        }
    ]

    return (
        <main className="bg-[#FBFAF8] min-h-screen py-24 md:py-32">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <p className="text-accent uppercase tracking-[0.4em] text-xs mb-4 font-semibold">Legal & Policy</p>
                    <h1 className="font-serif text-5xl md:text-6xl text-primary tracking-tight">Terms of <span className="italic font-light">Service</span></h1>
                    <div className="h-px w-24 bg-primary/10 mx-auto mt-10" />
                </motion.div>

                <div className="space-y-16">
                    {terms.map((term, index) => (
                        <motion.section
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <h2 className="font-serif text-2xl text-primary mb-6 group-hover:text-accent transition-colors duration-300">
                                {index + 1}. {term.title}
                            </h2>
                            <p className="text-muted-foreground font-light leading-relaxed text-lg">
                                {term.content}
                            </p>
                        </motion.section>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-24 pt-12 border-t border-black/5 text-center text-sm text-muted-foreground/60"
                >
                    Last Updated: February 2026
                </motion.div>
            </div>
        </main>
    )
}
