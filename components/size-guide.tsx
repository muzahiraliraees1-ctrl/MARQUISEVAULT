"use client"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Ruler, Smartphone } from "lucide-react"

export function SizeGuide() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary">
                    <Ruler className="h-4 w-4 mr-2" />
                    Size & Fit Guide
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                    <DialogTitle className="font-serif text-2xl">Size & Fit Guide</DialogTitle>
                    <DialogDescription>
                        Compare dimensions to ensure the perfect fit for your lifestyle.
                    </DialogDescription>
                </DialogHeader>

                <div className="grid grid-cols-2 gap-8 py-6">
                    {/* Silhouette Comparison */}
                    <div className="space-y-4 text-center">
                        <h4 className="font-medium text-sm uppercase tracking-wide">On the Body</h4>
                        <div className="bg-secondary/30 rounded-lg p-6 aspect-[3/4] relative flex items-center justify-center">
                            <div className="w-1/3 bg-primary/10 h-full rounded-full mx-auto relative">
                                {/* Abstract Silhouette */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[20%] w-24 h-32 bg-primary/20 rounded-md border border-primary/40 flex items-center justify-center">
                                    <span className="text-xs font-mono text-primary">BAG</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-xs text-muted-foreground">
                            Visual estimation of bag size relative to an average 5&apos;7&quot; silhouette.
                        </p>
                    </div>

                    {/* Device Comparison */}
                    <div className="space-y-4 text-center">
                        <h4 className="font-medium text-sm uppercase tracking-wide">What Fits Inside</h4>
                        <div className="bg-secondary/30 rounded-lg p-6 aspect-[3/4] flex flex-col items-center justify-center gap-4">
                            <div className="flex items-end gap-2">
                                <div className="w-12 h-24 border-2 border-primary rounded-md flex items-center justify-center">
                                    <Smartphone className="h-6 w-6 text-primary" />
                                </div>
                                <span className="text-xs">iPhone Pro Max</span>
                            </div>
                            <div className="w-full h-px bg-border" />
                            <div className="text-left w-full px-4 space-y-2">
                                <div className="flex items-center gap-2 text-sm">
                                    <div className="w-2 h-2 rounded-full bg-green-500" /> Wallet
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <div className="w-2 h-2 rounded-full bg-green-500" /> Keys
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <div className="w-2 h-2 rounded-full bg-green-500" /> Makeup Pouch
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
