import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ReturnExchangePage() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-24">
            <div className="max-w-3xl mx-auto">
                <h1 className="font-serif text-4xl md:text-5xl mb-6 text-center">Returns & Exchange</h1>
                <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
                    Our commitment to your satisfaction. Please review our policies regarding returns and exchanges for your luxury purchases.
                </p>

                <div className="space-y-8">
                    <section>
                        <h2 className="font-serif text-2xl mb-4">Our Policy</h2>
                        <div className="prose prose-sm max-w-none text-muted-foreground">
                            <p className="mb-4">
                                At MARQUISE VAULT, we guarantee the authenticity and quality of every item we sell. Due to the nature of pre-loved luxury items and consignment, we operate on a strict return policy to protect both our buyers and consignors.
                            </p>
                            <p className="mb-4">
                                <strong>All sales are final.</strong> We do not offer refunds or exchanges for change of mind. We strongly encourage you to review the item description, photos, and condition report carefully before making a purchase.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="font-serif text-2xl mb-4">Exceptions & Authenticity</h2>
                        <div className="prose prose-sm max-w-none text-muted-foreground">
                            <p className="mb-4">
                                In the unlikely event that an item is proven to be inauthentic by a verified third-party authenticator, we will offer a full refund, including return shipping costs.
                            </p>
                            <p className="mb-4">
                                If you believe an item has been significantly misrepresented in its description, please contact our concierge team within 48 hours of receiving your order to request a review.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="font-serif text-2xl mb-4">Common Questions</h2>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>How do I start a return for an authenticity claim?</AccordionTrigger>
                                <AccordionContent>
                                    Please contact us at concierge@marquisevault.com within 48 hours of delivery. Include your order number and the written statement from a recognized authenticator.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Do you offer buy-backs?</AccordionTrigger>
                                <AccordionContent>
                                    Yes, we offer a buy-back program for certain items purchased from Marquise Vault within 12 months, subject to condition inspection. Please contact us for a quote.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>What if my item arrives damaged?</AccordionTrigger>
                                <AccordionContent>
                                    All items are insured during transit. If your package arrives damaged, please document the packaging and item immediately and contact us within 24 hours.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </section>
                </div>
            </div>
        </div>
    )
}
