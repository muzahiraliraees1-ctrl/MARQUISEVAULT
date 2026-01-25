import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-24">
            <div className="max-w-4xl mx-auto">
                <h1 className="font-serif text-4xl md:text-5xl mb-6 text-center">Contact Us</h1>
                <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
                    Our dedicated concierge team is available to assist you with any inquiries regarding our collections, services, or your order.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Details */}
                    <div className="space-y-8">
                        <h2 className="font-serif text-2xl mb-6">Get in Touch</h2>

                        <div className="flex items-start gap-4">
                            <Phone className="h-5 w-5 mt-1 text-primary" />
                            <div>
                                <p className="font-medium mb-1">Phone & WhatsApp</p>
                                <p className="text-muted-foreground">+92 324 3499882</p>
                                <p className="text-xs text-muted-foreground mt-1">Available 9am - 6pm PKS</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Mail className="h-5 w-5 mt-1 text-primary" />
                            <div>
                                <p className="font-medium mb-1">Email</p>
                                <p className="text-muted-foreground">concierge@marquisevault.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <MapPin className="h-5 w-5 mt-1 text-primary" />
                            <div>
                                <p className="font-medium mb-1">Boutique</p>
                                <p className="text-muted-foreground">
                                    Marquise Vault Headquarters<br />
                                    Fashion Avenue, Karachi Mall<br />
                                    Karachi, Pakistan
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-secondary/30 p-8 rounded-lg border border-border">
                        <h2 className="font-serif text-2xl mb-6">Send a Message</h2>
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="first-name" className="text-sm font-medium">First Name</label>
                                    <Input id="first-name" placeholder="Jane" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="last-name" className="text-sm font-medium">Last Name</label>
                                    <Input id="last-name" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                <Input id="email" type="email" placeholder="jane@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                                <Input id="subject" placeholder="Inquiry about..." />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                <Textarea id="message" placeholder="How can we assist you?" className="min-h-[120px]" />
                            </div>

                            <Button type="submit" className="w-full">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
