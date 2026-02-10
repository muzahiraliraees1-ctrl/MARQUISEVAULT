"use client"

import { motion } from "framer-motion"

export default function PrivacyPolicy() {
    const sections = [
        {
            title: "Data We Collect",
            content: "We collect information you provide directly to us, such as when you create an account, make a purchase, or contact our concierge services. This may include your name, email, phone number, and shipping address."
        },
        {
            title: "How We Use Your Information",
            content: "Your information is used to process orders, personalize your luxury experience, and provide updates on new collections and private events. We do not sell your personal data to third parties."
        },
        {
            title: "Security & Protection",
            content: "Marquise Vault employs advanced encryption and security protocols to protect your sensitive information. We are committed to maintaining the highest standards of data privacy for our discerning clients."
        },
        {
            title: "Your Rights",
            content: "You have the right to access, correct, or delete your personal information at any time. Please contact our dedicated team if you wish to exercise these rights."
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
                    <p className="text-accent uppercase tracking-[0.4em] text-xs mb-4 font-semibold">Legal & Privacy</p>
                    <h1 className="font-serif text-5xl md:text-6xl text-primary tracking-tight">Privacy <span className="italic font-light">Policy</span></h1>
                    <div className="h-px w-24 bg-primary/10 mx-auto mt-10" />
                </motion.div>

                <div className="space-y-16">
                    {sections.map((section, index) => (
                        <motion.section
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <h2 className="font-serif text-2xl text-primary mb-6 group-hover:text-accent transition-colors duration-300">
                                {index + 1}. {section.title}
                            </h2>
                            <p className="text-muted-foreground font-light leading-relaxed text-lg">
                                {section.content}
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
