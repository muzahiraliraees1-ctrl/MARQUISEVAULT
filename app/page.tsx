"use client"

import { HeroCarousel } from "@/components/hero-carousel"
import { FeaturedProducts } from "@/components/featured-products"
import { NewArrivals } from "@/components/new-arrivals"
import { HeritageSection } from "@/components/heritage-section"
import { LuxuryExperience } from "@/components/luxury-experience"
import { motion } from "framer-motion"

export default function HomePage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <HeroCarousel />

      {/* Staggered Sections */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <FeaturedProducts />
      </motion.div>

      <HeritageSection />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <LuxuryExperience />
      </motion.div>



      {/* Promotional Banner */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Decorative background texture could go here */}
        <div className="absolute inset-0 opacity-5 mix-blend-overlay"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <p className="text-accent text-sm uppercase tracking-[0.3em] mb-6">
            Experience Luxury
          </p>
          <h2 className="font-serif text-4xl md:text-6xl mb-8 max-w-4xl mx-auto text-balance leading-tight">
            Every Piece Tells a Story of <br />
            <span className="italic text-accent">Exceptional Craftsmanship</span>
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Our curated collection features only the finest designer bags, each authenticated
            and carefully selected for discerning collectors who appreciate timeless elegance.
          </p>
        </div>
      </section>
    </motion.main>
  )
}
