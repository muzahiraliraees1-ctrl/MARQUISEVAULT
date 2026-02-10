import Image from "next/image"
import { motion } from "framer-motion"

export function BrandShowcase() {
  const images = [
    { src: "/products/essence-1.jpg", alt: "Marquise Essence - Luxury Handbag 1" },
    { src: "/products/essence-2.jpg", alt: "Marquise Essence - Luxury Handbag 2" },
    { src: "/products/essence-3.jpg", alt: "Marquise Essence - Luxury Handbag 3" },
  ]

  return (
    <section className="py-8 md:py-12 bg-[#FAFAF9] overflow-hidden">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Ultra-Compact Header */}
        <div className="text-center mb-10 md:mb-12 relative">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[7px] uppercase tracking-[0.4em] text-muted-foreground mb-2 font-semibold"
          >
            Artisanal Excellence
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="font-serif text-2xl md:text-3xl lg:text-4xl text-primary tracking-tight"
          >
            Our <span className="italic font-light opacity-80">Essence</span>
          </motion.h2>
        </div>

        {/* Minimal 3-Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center">

          {/* Hero: Now only 4 columns wide */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-4 relative group"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-[1rem] shadow-md">
              <Image
                src={images[0].src}
                alt={images[0].alt}
                fill
                className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 25vw"
                priority
              />
            </div>
          </motion.div>

          {/* Supporting Images: Thumbnail sizes */}
          <div className="md:col-span-8 flex flex-col gap-4 md:gap-6">
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="relative group w-full max-w-[160px] self-center md:self-end"
            >
              <div className="relative aspect-square overflow-hidden rounded-[0.75rem] shadow-sm">
                <Image
                  src={images[1].src}
                  alt={images[1].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 10vw"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="relative group w-full max-w-[200px] self-center md:self-start md:ml-4"
            >
              <div className="relative aspect-video overflow-hidden rounded-[0.75rem] shadow-sm">
                <Image
                  src={images[2].src}
                  alt={images[2].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 15vw"
                />
              </div>
              <div className="mt-2 flex items-center gap-2 text-primary/20">
                <div className="h-px w-4 bg-primary/10" />
                <span className="text-[7px] uppercase tracking-[0.1em] font-medium">Refined</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
