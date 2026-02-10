"use client"

import { motion } from "framer-motion"
import { Truck, Globe, Clock, ShieldCheck } from "lucide-react"

export default function ShippingPage() {
    const methods = [
        {
            icon: Truck,
            title: "Domestic Delivery",
            region: "Pakistan",
            duration: "3-5 Business Days",
            cost: "Complimentary over PKR 50,000",
            description: "Our domestic orders are handled by premium courier partners to ensure safe and timely delivery to your doorstep."
        },
        {
            icon: Globe,
            title: "International Express",
            region: "Global",
            duration: "7-10 Business Days",
            cost: "Calculated at Checkout",
            description: "We ship to over 50 countries worldwide using DHL and FedEx Express services for maximum security."
        }
    ]

    const steps = [
        { title: "Order Processing", description: "Each order is meticulously packed within 24-48 hours of confirmation." },
        { title: "Quality Check", description: "Our team performs a final inspection before the piece leaves the atelier." },
        { title: "Secure Transit", description: "Real-time tracking is provided so you can follow your piece's journey." },
        { title: "White Glove Delivery", description: "Hand-delivered to your specified address with care." }
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
                    <p className="text-accent uppercase tracking-[0.4em] text-xs mb-4 font-semibold">Client Services</p>
                    <h1 className="font-serif text-5xl md:text-6xl text-primary tracking-tight">Shipping <span className="italic font-light">& Delivery</span></h1>
                    <div className="h-px w-24 bg-primary/10 mx-auto mt-10" />
                </motion.div>

                {/* Shipping Methods */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                    {methods.map((method, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-black/5 flex flex-col items-center text-center group hover:shadow-2xl hover:shadow-black/5 transition-all duration-500"
                        >
                            <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                                <method.icon className="w-8 h-8" />
                            </div>
                            <h2 className="font-serif text-2xl text-primary mb-2">{method.title}</h2>
                            <p className="text-accent text-sm uppercase tracking-widest mb-6">{method.region}</p>
                            <div className="space-y-2 mb-8 text-sm">
                                <p className="flex items-center justify-center gap-2"><Clock className="w-4 h-4" /> {method.duration}</p>
                                <p className="flex items-center justify-center gap-2"><ShieldCheck className="w-4 h-4" /> {method.cost}</p>
                            </div>
                            <p className="text-muted-foreground font-light leading-relaxed">
                                {method.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* The Journey */}
                <section>
                    <h2 className="font-serif text-3xl text-center mb-16">The Journey of Your <span className="italic">Marquise Piece</span></h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="relative text-center"
                            >
                                <div className="text-accent/20 font-serif text-6xl mb-4 font-bold select-none">0{index + 1}</div>
                                <h3 className="font-serif text-xl text-primary mb-4">{step.title}</h3>
                                <p className="text-muted-foreground text-sm font-light leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    )
}
