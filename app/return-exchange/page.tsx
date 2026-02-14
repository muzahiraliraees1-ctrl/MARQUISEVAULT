import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ReturnExchangePage() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-24">
            <div className="max-w-3xl mx-auto">
                <h1 className="font-serif text-4xl md:text-5xl mb-6 text-center">Returns & Exchange</h1>
                Our commitment to your satisfaction. Return and Exchange policy is available for your luxury purchases.

                <div className="space-y-8">
                    <section>
                        <h2 className="font-serif text-2xl mb-4">Our Policy</h2>
                        <div className="prose prose-sm max-w-none text-muted-foreground">
                            <p className="mb-4">
                                At MARQUISE VAULT, we guarantee the authenticity and quality of every item we sell. Due to the nature of pre-loved luxury items and consignment, we operate on a strict return policy to protect both our buyers and consignors.
                            </p>
                            <p className="mb-4">
                                <strong>Return and Exchange available.</strong> We offer returns and exchanges within 14 days of delivery for unworn items in their original condition. Please review the item description and photos carefully to ensure a perfect fit.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="font-serif text-2xl mb-4">Exceptions & Authenticity</h2>
                        <div className="prose prose-sm max-w-none text-muted-foreground">
                            <p className="mb-4">
                                In the unlikely event that an item is proven to be inauthentic by a verified third-party authenticator, we will offer a full refund, including return shipping costs.
                            </p>
                            <p className="text-muted-foreground font-light mb-8">
                                Our clients' satisfaction is our ultimate priority. If you're not completely satisfied with your purchase, contact us at <strong>marquisevault1@gmail.com</strong> or WhatsApp at <strong>0345 2618575</strong> within 14 days of receiving your item.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="font-serif text-2xl mb-4">Common Questions</h2>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>How do I start a return for an authenticity claim?</AccordionTrigger>
                                <AccordionContent>
                                    Please contact us at marquisevault1@gmail.com within 48 hours of delivery. Include your order number and the written statement from a recognized authenticator.
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
