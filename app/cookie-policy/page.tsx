"use client"

import { motion } from "framer-motion"

export default function CookiePolicy() {
    const cookieTypes = [
        {
            title: "Essential Cookies",
            content: "These are necessary for the website to function, such as maintaining your cart and authentication state during your stay at our atelier."
        },
        {
            title: "Performance & Analytics",
            content: "We use these to understand how our visitors interact with the site, helping us refine the luxury experience and optimize our collections."
        },
        {
            title: "Preference Cookies",
            content: "These allow us to remember your choices, such as your preferred currency or shipping region, providing a more personalized journey."
        },
        {
            title: "Marketing Cookies",
            content: "These are used to deliver advertisements more relevant to your interests and to measure the effectiveness of our campaigns."
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
                    <h1 className="font-serif text-5xl md:text-6xl text-primary tracking-tight">Cookie <span className="italic font-light">Policy</span></h1>
                    <div className="h-px w-24 bg-primary/10 mx-auto mt-10" />
                </motion.div>

                <section className="mb-20 text-center max-w-2xl mx-auto">
                    <p className="text-muted-foreground font-light leading-relaxed text-lg">
                        At Marquise Vault, we use cookies to ensure you have the most seamless and personalized experience possible.
                        This policy outlines the types of cookies we use and how you can manage them.
                    </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {cookieTypes.map((type, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-black/5 hover:shadow-xl hover:shadow-black/5 transition-all duration-500"
                        >
                            <h2 className="font-serif text-xl text-primary mb-4">{type.title}</h2>
                            <p className="text-muted-foreground font-light text-sm leading-relaxed">
                                {type.content}
                            </p>
                        </motion.div>
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
