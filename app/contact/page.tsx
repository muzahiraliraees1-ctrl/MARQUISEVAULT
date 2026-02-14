"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function ContactPage() {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        setIsSubmitted(true)
        setIsSubmitting(false)
    }

    return (
        <div className="container mx-auto px-4 py-12 md:py-24">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="font-serif text-4xl md:text-5xl mb-6 text-center text-primary">Contact Us</h1>
                    <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto font-light">
                        Our dedicated concierge team is available to assist you with any inquiries regarding our collections, services, or your order.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
                    {/* Contact Details */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-12"
                    >
                        <h2 className="font-serif text-3xl mb-8 text-primary">Get in Touch</h2>

                        <div className="space-y-8">
                            <div className="flex items-start gap-5">
                                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary flex-shrink-0">
                                    <Phone className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="font-medium mb-1 tracking-wide">Phone & WhatsApp</p>
                                    <p className="text-muted-foreground font-light">03452618575</p>
                                    <p className="text-[10px] uppercase tracking-widest text-accent mt-2">Available 9am - 6pm PST</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5">
                                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary flex-shrink-0">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="font-medium mb-1 tracking-wide">Email</p>
                                    <p className="text-muted-foreground font-light">marquisevault1@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5">
                                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary flex-shrink-0">
                                    <MapPin className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="font-medium mb-1 tracking-wide">Boutique</p>
                                    <p className="text-muted-foreground font-light leading-relaxed">
                                        Karachi, Pakistan
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form / Success Message */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <AnimatePresence mode="wait">
                            {!isSubmitted ? (
                                <motion.div
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="bg-white p-10 rounded-3xl border border-black/5 shadow-xl shadow-black/[0.02]"
                                >
                                    <h2 className="font-serif text-3xl mb-8 text-primary">Send a Message</h2>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label htmlFor="first-name" className="text-[10px] uppercase tracking-[0.2em] font-medium text-accent">First Name</label>
                                                <Input id="first-name" placeholder="Jane" required className="bg-secondary/10 border-none h-12 rounded-xl focus-visible:ring-1 focus-visible:ring-primary/20" />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="last-name" className="text-[10px] uppercase tracking-[0.2em] font-medium text-accent">Last Name</label>
                                                <Input id="last-name" placeholder="Doe" required className="bg-secondary/10 border-none h-12 rounded-xl focus-visible:ring-1 focus-visible:ring-primary/20" />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] font-medium text-accent">Email</label>
                                            <Input id="email" type="email" placeholder="marquisevault1@gmail.com" required className="bg-secondary/10 border-none h-12 rounded-xl focus-visible:ring-1 focus-visible:ring-primary/20" />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="subject" className="text-[10px] uppercase tracking-[0.2em] font-medium text-accent">Subject</label>
                                            <Input id="subject" placeholder="Inquiry about..." required className="bg-secondary/10 border-none h-12 rounded-xl focus-visible:ring-1 focus-visible:ring-primary/20" />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="message" className="text-[10px] uppercase tracking-[0.2em] font-medium text-accent">Message</label>
                                            <Textarea id="message" placeholder="How can we assist you?" required className="bg-secondary/10 border-none min-h-[120px] rounded-xl focus-visible:ring-1 focus-visible:ring-primary/20 resize-none" />
                                        </div>

                                        <Button
                                            type="submit"
                                            className="w-full h-14 text-sm tracking-[0.3em] uppercase rounded-xl transition-all duration-500"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? "Sending..." : "Send Message"}
                                        </Button>
                                    </form>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-white p-12 rounded-3xl border border-black/5 shadow-xl shadow-black/[0.02] text-center flex flex-col items-center justify-center min-h-[500px]"
                                >
                                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-8">
                                        <CheckCircle2 className="h-10 w-10 text-green-600" />
                                    </div>
                                    <h2 className="font-serif text-3xl mb-4 text-primary">Message Received</h2>
                                    <p className="text-muted-foreground font-light mb-10">
                                        yours msg send successfully...
                                    </p>
                                    <Button
                                        variant="outline"
                                        onClick={() => setIsSubmitted(false)}
                                        className="rounded-xl px-10 h-12 text-xs tracking-widest uppercase"
                                    >
                                        Send Another Message
                                    </Button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
