"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Wallet, CheckCircle2, Headphones } from "lucide-react"

const services = [
  {
    icon: ShieldCheck,
    title: "Authenticity Guaranteed",
    description: "Every item is meticulously inspected and certified by our expert authenticators."
  },
  {
    icon: Wallet,
    title: "Cash on Delivery",
    description: "Enjoy the convenience of paying at your doorstep for a seamless and secure shopping experience."
  },
  {
    icon: CheckCircle2,
    title: "Verified Payment",
    description: "Secure transaction monitoring—we confirm every payment swiftly for your absolute peace of mind."
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Expert assistance available to help with your inquiries, order tracking, and style needs."
  }
]

export function LuxuryExperience() {
  return (
    <section className="py-20 md:py-32 bg-[#FBFAF8]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.4em] text-accent mb-4 font-semibold"
          >
            The Marquise Commitment
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary tracking-tight"
          >
            Luxury Without <span className="italic font-light">Compromise</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group text-center space-y-4 p-8 rounded-[2rem] hover:bg-white hover:shadow-2xl hover:shadow-black/5 transition-all duration-500"
            >
              <div className="mx-auto w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                <service.icon className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl text-primary">{service.title}</h3>
              <p className="text-muted-foreground font-light text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
