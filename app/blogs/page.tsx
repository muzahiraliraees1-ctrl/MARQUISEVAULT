import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function BlogsPage() {
    const posts = [
        {
            id: 1,
            title: "The Art of Authenticity: Identifying Genuine Hermès Leathers",
            excerpt: "A comprehensive guide to understanding the various leathers used by the House of Hermès, from Togo to Clemence.",
            date: "October 12, 2025",
            category: "Expertise",
            image: "https://images.unsplash.com/photo-1549439602-43ebca23d7e9?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 2,
            title: "Investment Pieces: Why Chanel Classic Flaps Retain Value",
            excerpt: "Analyzing the market trends and historical data that make the Chanel Classic Flap a sound financial investment.",
            date: "September 28, 2025",
            category: "Investment",
            image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 3,
            title: "Care & Maintenance: Preserving Your Luxury Assets",
            excerpt: "Essential tips and techniques for maintaining the pristine condition of your luxury handbags in humid climates.",
            date: "September 15, 2025",
            category: "Care Guide",
            image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=800&auto=format&fit=crop"
        }
    ]

    return (
        <div className="container mx-auto px-4 py-12 md:py-24">
            <div className="max-w-6xl mx-auto">
                <h1 className="font-serif text-4xl md:text-5xl mb-4 text-center">The Atelier Journal</h1>
                <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
                    Insights, guides, and stories from the world of luxury handbags and investments.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <Card key={post.id} className="overflow-hidden border-border hover:shadow-lg transition-shadow">
                            <div className="aspect-[4/3] relative overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-medium uppercase tracking-wider text-accent">{post.category}</span>
                                    <span className="text-xs text-muted-foreground">{post.date}</span>
                                </div>
                                <h3 className="font-serif text-xl mb-3 line-clamp-2">{post.title}</h3>
                                <p className="text-sm text-muted-foreground mb-6 line-clamp-3">{post.excerpt}</p>
                                <Link href={`#`} className="inline-flex items-center text-sm font-medium hover:text-accent transition-colors">
                                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
