"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus, Search } from "lucide-react"

export default function FAQPage() {
    const [searchQuery, setSearchQuery] = useState("")

    const faqs = [
        {
            category: "Orders & Payment",
            questions: [
                { q: "How do I know the item is authentic?", a: "Every piece at Marquise Vault undergoes a multi-point authentication process by our experts. We provide a Certificate of Provenance with every purchase." },
                { q: "What payment methods do you accept?", a: "We accept all major credit cards, bank transfers, and premium digital payment methods. For orders in Pakistan, we also offer secure direct transfers." },
                { q: "Can I cancel my order?", a: "To maintain our high standards of service, orders are processed quickly. Cancellations are possible within 12 hours of order placement." }
            ]
        },
        {
            category: "Shipping & Delivery",
            questions: [
                { q: "How long does delivery take?", a: "Domestic orders within Pakistan typically take 3-5 business days. International shipping ranges from 7-10 business days." },
                { q: "Is shipping insured?", a: "Yes, every shipment from Marquise Vault is fully insured and tracked for your peace of mind." },
                { q: "Do you ship internationally?", a: "We ship to over 50 countries globally. International shipping costs are calculated at checkout." }
            ]
        },
        {
            category: "Returns & Exchanges",
            questions: [
                { q: "What is your return policy?", a: "Due to the exclusive nature of our collections, we offer a 7-day return period for select items. Please refer to our Return & Exchange page for full details." },
                { q: "Are items returnable if they don't fit?", a: "We provide detailed measurements and descriptions for every piece. We encourage clients to review these carefully before purchase." }
            ]
        }
    ]

    const filteredFaqs = faqs.map(cat => ({
        ...cat,
        questions: cat.questions.filter(item =>
            item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.a.toLowerCase().includes(searchQuery.toLowerCase())
        )
    })).filter(cat => cat.questions.length > 0)

    return (
        <main className="bg-[#FBFAF8] min-h-screen py-24 md:py-32">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <p className="text-accent uppercase tracking-[0.4em] text-xs mb-4 font-semibold">Concierge Support</p>
                    <h1 className="font-serif text-5xl md:text-6xl text-primary tracking-tight">Frequently Asked <span className="italic font-light">Questions</span></h1>
                    <div className="h-px w-24 bg-primary/10 mx-auto mt-10" />
                </motion.div>

                {/* Search Bar */}
                <div className="relative mb-20 max-w-xl mx-auto">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Search your question..."
                        className="w-full pl-12 pr-4 py-4 rounded-full border border-black/5 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                {/* FAQ List */}
                <div className="space-y-16">
                    {filteredFaqs.map((category, catIndex) => (
                        <div key={catIndex}>
                            <h2 className="font-serif text-2xl text-primary mb-8 border-b border-black/5 pb-4">{category.category}</h2>
                            <div className="space-y-4">
                                {category.questions.map((faq, faqIndex) => (
                                    <FAQItem key={faqIndex} question={faq.q} answer={faq.a} />
                                ))}
                            </div>
                        </div>
                    ))}
                    {filteredFaqs.length === 0 && (
                        <p className="text-center text-muted-foreground py-20">No matching questions found. Please contact our concierge for assistance.</p>
                    )}
                </div>
            </div>
        </main>
    )
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="bg-white rounded-3xl border border-black/5 overflow-hidden transition-all duration-300 hover:shadow-md">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
            >
                <span className="font-serif text-lg text-primary">{question}</span>
                <div className="flex-shrink-0 ml-4 p-2 bg-primary/5 rounded-full text-primary transition-transform duration-300">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="px-8 pb-8 text-muted-foreground font-light leading-relaxed">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
