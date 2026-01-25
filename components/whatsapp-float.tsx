"use client"

import { MessageCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export function WhatsAppFloat() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener("scroll", toggleVisibility)
        return () => window.removeEventListener("scroll", toggleVisibility)
    }, [])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.a
                    href="https://wa.me/923243499882" // Updated contact number
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileHover={{ scale: 1.1 }}
                    className={cn(
                        "fixed bottom-8 right-8 z-50 flex items-center justify-center",
                        "w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg",
                        "hover:bg-[#128C7E] transition-colors duration-300"
                    )}
                    aria-label="Contact Concierge on WhatsApp"
                >
                    <MessageCircle className="h-7 w-7" />
                    <span className="absolute right-full mr-4 bg-primary text-primary-foreground text-xs font-medium px-3 py-1.5 rounded-md whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity pointer-events-none group-hover:opacity-100">
                        Chat with Concierge
                    </span>
                </motion.a>
            )}
        </AnimatePresence>
    )
}
