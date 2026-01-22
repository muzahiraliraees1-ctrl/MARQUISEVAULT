"use client"

import { useState } from "react"
import {
    Save,
    Globe,
    CreditCard,
    Mail,
    Shield,
    Bell,
    Image,
    Palette,
    Check,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

export default function SettingsPage() {
    const [saved, setSaved] = useState(false)
    const [settings, setSettings] = useState({
        // General
        siteName: "MARQUISE VAULT",
        siteTagline: "Premium Designer Handbags & Purses",
        contactEmail: "support@marquisevault.com",
        contactPhone: "+1 (888) 555-0123",
        address: "123 Fifth Avenue, New York, NY 10001",
        // Payment
        currency: "USD",
        stripeEnabled: true,
        paypalEnabled: true,
        applePayEnabled: false,
        // Email
        smtpHost: "smtp.example.com",
        smtpPort: "587",
        smtpUser: "noreply@marquisevault.com",
        // Security
        twoFactorEnabled: true,
        sessionTimeout: "30",
        passwordMinLength: "8",
        // Notifications
        orderNotifications: true,
        stockAlerts: true,
        marketingEmails: false,
    })

    const handleSave = () => {
        setSaved(true)
        setTimeout(() => setSaved(false), 2000)
    }

    return (
        <div className="p-6 lg:p-8 space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white">Settings</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">
                        Manage your store configuration
                    </p>
                </div>
                <Button
                    onClick={handleSave}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                >
                    {saved ? (
                        <>
                            <Check className="h-4 w-4 mr-2" />
                            Saved!
                        </>
                    ) : (
                        <>
                            <Save className="h-4 w-4 mr-2" />
                            Save Changes
                        </>
                    )}
                </Button>
            </div>

            {/* Settings Tabs */}
            <Tabs defaultValue="general" className="space-y-6">
                <TabsList className="bg-white dark:bg-slate-800 border shadow-sm p-1 h-auto flex-wrap">
                    <TabsTrigger value="general" className="gap-2">
                        <Globe className="h-4 w-4" />
                        General
                    </TabsTrigger>
                    <TabsTrigger value="payment" className="gap-2">
                        <CreditCard className="h-4 w-4" />
                        Payment
                    </TabsTrigger>
                    <TabsTrigger value="email" className="gap-2">
                        <Mail className="h-4 w-4" />
                        Email
                    </TabsTrigger>
                    <TabsTrigger value="security" className="gap-2">
                        <Shield className="h-4 w-4" />
                        Security
                    </TabsTrigger>
                    <TabsTrigger value="notifications" className="gap-2">
                        <Bell className="h-4 w-4" />
                        Notifications
                    </TabsTrigger>
                </TabsList>

                {/* General Settings */}
                <TabsContent value="general">
                    <div className="grid gap-6">
                        <Card className="border-0 shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-lg flex items-center gap-2">
                                    <Globe className="h-5 w-5 text-purple-600" />
                                    Store Information
                                </CardTitle>
                                <CardDescription>Basic information about your store</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="siteName">Store Name</Label>
                                        <Input
                                            id="siteName"
                                            value={settings.siteName}
                                            onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                                            className="mt-1.5"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="tagline">Tagline</Label>
                                        <Input
                                            id="tagline"
                                            value={settings.siteTagline}
                                            onChange={(e) => setSettings({ ...settings, siteTagline: e.target.value })}
                                            className="mt-1.5"
                                        />
                                    </div>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="email">Contact Email</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            value={settings.contactEmail}
                                            onChange={(e) => setSettings({ ...settings, contactEmail: e.target.value })}
                                            className="mt-1.5"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="phone">Contact Phone</Label>
                                        <Input
                                            id="phone"
                                            value={settings.contactPhone}
                                            onChange={(e) => setSettings({ ...settings, contactPhone: e.target.value })}
                                            className="mt-1.5"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <Label htmlFor="address">Store Address</Label>
                                    <Textarea
                                        id="address"
                                        value={settings.address}
                                        onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                                        className="mt-1.5"
                                        rows={2}
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-lg flex items-center gap-2">
                                    <Palette className="h-5 w-5 text-purple-600" />
                                    Branding
                                </CardTitle>
                                <CardDescription>Customize your store's appearance</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <Label>Logo</Label>
                                        <div className="mt-2 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl p-6 text-center">
                                            <Image className="h-8 w-8 mx-auto text-slate-400" />
                                            <p className="text-sm text-slate-500 mt-2">Drag and drop or click to upload</p>
                                            <Button variant="outline" size="sm" className="mt-3">
                                                Upload Logo
                                            </Button>
                                        </div>
                                    </div>
                                    <div>
                                        <Label>Favicon</Label>
                                        <div className="mt-2 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl p-6 text-center">
                                            <Image className="h-8 w-8 mx-auto text-slate-400" />
                                            <p className="text-sm text-slate-500 mt-2">32x32 or 64x64 pixels</p>
                                            <Button variant="outline" size="sm" className="mt-3">
                                                Upload Favicon
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>

                {/* Payment Settings */}
                <TabsContent value="payment">
                    <Card className="border-0 shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                                <CreditCard className="h-5 w-5 text-purple-600" />
                                Payment Methods
                            </CardTitle>
                            <CardDescription>Configure your payment gateways</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div>
                                <Label htmlFor="currency">Default Currency</Label>
                                <Select value={settings.currency} onValueChange={(v) => setSettings({ ...settings, currency: v })}>
                                    <SelectTrigger className="mt-1.5 w-[200px]">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="USD">USD - US Dollar</SelectItem>
                                        <SelectItem value="EUR">EUR - Euro</SelectItem>
                                        <SelectItem value="GBP">GBP - British Pound</SelectItem>
                                        <SelectItem value="JPY">JPY - Japanese Yen</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <Separator />

                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-8 bg-[#635BFF] rounded flex items-center justify-center text-white font-bold text-xs">
                                            Stripe
                                        </div>
                                        <div>
                                            <p className="font-medium">Stripe</p>
                                            <p className="text-sm text-slate-500">Credit cards, Apple Pay, Google Pay</p>
                                        </div>
                                    </div>
                                    <Switch
                                        checked={settings.stripeEnabled}
                                        onCheckedChange={(v) => setSettings({ ...settings, stripeEnabled: v })}
                                    />
                                </div>

                                <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-8 bg-[#003087] rounded flex items-center justify-center text-white font-bold text-xs">
                                            PayPal
                                        </div>
                                        <div>
                                            <p className="font-medium">PayPal</p>
                                            <p className="text-sm text-slate-500">PayPal checkout</p>
                                        </div>
                                    </div>
                                    <Switch
                                        checked={settings.paypalEnabled}
                                        onCheckedChange={(v) => setSettings({ ...settings, paypalEnabled: v })}
                                    />
                                </div>

                                <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-8 bg-black rounded flex items-center justify-center text-white font-bold text-xs">
                                            Pay
                                        </div>
                                        <div>
                                            <p className="font-medium">Apple Pay</p>
                                            <p className="text-sm text-slate-500">Apple Pay checkout</p>
                                        </div>
                                    </div>
                                    <Switch
                                        checked={settings.applePayEnabled}
                                        onCheckedChange={(v) => setSettings({ ...settings, applePayEnabled: v })}
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* Email Settings */}
                <TabsContent value="email">
                    <Card className="border-0 shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                                <Mail className="h-5 w-5 text-purple-600" />
                                Email Configuration
                            </CardTitle>
                            <CardDescription>Configure your SMTP settings for transactional emails</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="smtpHost">SMTP Host</Label>
                                    <Input
                                        id="smtpHost"
                                        value={settings.smtpHost}
                                        onChange={(e) => setSettings({ ...settings, smtpHost: e.target.value })}
                                        className="mt-1.5"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="smtpPort">SMTP Port</Label>
                                    <Input
                                        id="smtpPort"
                                        value={settings.smtpPort}
                                        onChange={(e) => setSettings({ ...settings, smtpPort: e.target.value })}
                                        className="mt-1.5"
                                    />
                                </div>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="smtpUser">SMTP Username</Label>
                                    <Input
                                        id="smtpUser"
                                        value={settings.smtpUser}
                                        onChange={(e) => setSettings({ ...settings, smtpUser: e.target.value })}
                                        className="mt-1.5"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="smtpPass">SMTP Password</Label>
                                    <Input
                                        id="smtpPass"
                                        type="password"
                                        placeholder="••••••••"
                                        className="mt-1.5"
                                    />
                                </div>
                            </div>
                            <Button variant="outline" size="sm">
                                Send Test Email
                            </Button>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* Security Settings */}
                <TabsContent value="security">
                    <Card className="border-0 shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                                <Shield className="h-5 w-5 text-purple-600" />
                                Security Settings
                            </CardTitle>
                            <CardDescription>Configure security options for your admin portal</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                                <div>
                                    <p className="font-medium">Two-Factor Authentication</p>
                                    <p className="text-sm text-slate-500">Require 2FA for all admin users</p>
                                </div>
                                <Switch
                                    checked={settings.twoFactorEnabled}
                                    onCheckedChange={(v) => setSettings({ ...settings, twoFactorEnabled: v })}
                                />
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
                                    <Input
                                        id="sessionTimeout"
                                        type="number"
                                        value={settings.sessionTimeout}
                                        onChange={(e) => setSettings({ ...settings, sessionTimeout: e.target.value })}
                                        className="mt-1.5"
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="passwordMin">Minimum Password Length</Label>
                                    <Input
                                        id="passwordMin"
                                        type="number"
                                        value={settings.passwordMinLength}
                                        onChange={(e) => setSettings({ ...settings, passwordMinLength: e.target.value })}
                                        className="mt-1.5"
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* Notification Settings */}
                <TabsContent value="notifications">
                    <Card className="border-0 shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                                <Bell className="h-5 w-5 text-purple-600" />
                                Notification Preferences
                            </CardTitle>
                            <CardDescription>Configure how you receive notifications</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                                <div>
                                    <p className="font-medium">Order Notifications</p>
                                    <p className="text-sm text-slate-500">Get notified when a new order is placed</p>
                                </div>
                                <Switch
                                    checked={settings.orderNotifications}
                                    onCheckedChange={(v) => setSettings({ ...settings, orderNotifications: v })}
                                />
                            </div>

                            <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                                <div>
                                    <p className="font-medium">Stock Alerts</p>
                                    <p className="text-sm text-slate-500">Get notified when products are low in stock</p>
                                </div>
                                <Switch
                                    checked={settings.stockAlerts}
                                    onCheckedChange={(v) => setSettings({ ...settings, stockAlerts: v })}
                                />
                            </div>

                            <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                                <div>
                                    <p className="font-medium">Marketing Emails</p>
                                    <p className="text-sm text-slate-500">Receive updates and tips from MARQUISE VAULT</p>
                                </div>
                                <Switch
                                    checked={settings.marketingEmails}
                                    onCheckedChange={(v) => setSettings({ ...settings, marketingEmails: v })}
                                />
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}
