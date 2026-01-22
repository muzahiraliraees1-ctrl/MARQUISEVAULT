"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { heroSlides } from "@/lib/data"
import { cn } from "@/lib/utils"

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide ? "opacity-100" : "opacity-0"
          )}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-foreground/40" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-center text-center px-4">
            <div className="max-w-3xl">
              <h1
                className={cn(
                  "font-serif text-4xl md:text-6xl lg:text-7xl text-card mb-6 tracking-tight transition-all duration-700 delay-200",
                  index === currentSlide
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                )}
              >
                {slide.title}
              </h1>
              <p
                className={cn(
                  "text-lg md:text-xl text-card/90 mb-8 max-w-xl mx-auto transition-all duration-700 delay-300",
                  index === currentSlide
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                )}
              >
                {slide.subtitle}
              </p>
              <Link
                href={slide.link}
                className={cn(
                  "transition-all duration-700 delay-400",
                  index === currentSlide
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                )}
              >
                <Button
                  size="lg"
                  className="bg-card text-card-foreground hover:bg-card/90 uppercase tracking-wider px-8"
                >
                  {slide.cta}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/20 backdrop-blur-sm flex items-center justify-center text-card hover:bg-card/30 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/20 backdrop-blur-sm flex items-center justify-center text-card hover:bg-card/30 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === currentSlide
                ? "bg-card w-8"
                : "bg-card/50 hover:bg-card/70"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
