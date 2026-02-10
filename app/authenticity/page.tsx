"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Award, CheckCircle2, Search } from "lucide-react"

export default function AuthenticityPage() {
    const pillars = [
        {
            icon: Search,
            title: "Meticulous Inspection",
            description: "Every piece undergoes a multi-point physical inspection to verify materials, hardware, and craftsmanship."
        },
        {
            icon: ShieldCheck,
            title: "Expert Authentication",
            description: "Our specialists cross-reference each item against our extensive database of designer signatures and artisanal techniques."
        },
        {
            icon: Award,
            title: "Certificate of Provenance",
            description: "Each authenticated item is issued a Marquise Vault Certificate, guaranteeing its origin and quality standards."
        }
    ]

    return (
        <main className="bg-[#FBFAF8] min-h-screen py-24 md:py-32">
            <div className="container mx-auto px-4 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <p className="text-accent uppercase tracking-[0.4em] text-xs mb-4 font-semibold">Trust & Quality</p>
                    <h1 className="font-serif text-5xl md:text-6xl text-primary tracking-tight">Authenticity <span className="italic font-light">Guarantee</span></h1>
                    <div className="h-px w-24 bg-primary/10 mx-auto mt-10" />
                </motion.div>

                {/* Promise Section */}
                <section className="bg-white rounded-[3rem] p-12 md:p-20 shadow-sm border border-black/5 mb-32 relative overflow-hidden">
                    <div className="max-w-2xl relative z-10">
                        <h2 className="font-serif text-3xl md:text-4xl text-primary mb-8 leading-tight">Our Absolute Commitment to <span className="italic font-light text-accent">Excellence</span></h2>
                        <p className="text-muted-foreground text-lg font-light leading-relaxed mb-8">
                            At Marquise Vault, we believe that luxury is founded on trust. Our authentication process is rigorous and uncompromising, ensuring that every piece in our collection meets the highest standards of the industry.
                        </p>
                        <div className="space-y-4">
                            {["100% Authenticity Guaranteed", "Rigorous Multi-Point Verification", "Expert Curated Selection", "Lifetime Provenance Guarantee"].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-primary">
                                    <CheckCircle2 className="w-5 h-5 text-accent" />
                                    <span className="font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-primary/5 md:flex items-center justify-center hidden">
                        <ShieldCheck className="w-64 h-64 text-primary/10 rotate-12" />
                    </div>
                </section>

                {/* Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center space-y-6"
                        >
                            <div className="mx-auto w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-accent">
                                <pillar.icon className="w-8 h-8" strokeWidth={1.5} />
                            </div>
                            <h3 className="font-serif text-xl text-primary">{pillar.title}</h3>
                            <p className="text-muted-foreground font-light text-sm leading-relaxed">
                                {pillar.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    )
}
