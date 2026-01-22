"use client"

import { useState } from "react"
import {
    Calendar,
    Download,
    TrendingUp,
    TrendingDown,
    DollarSign,
    ShoppingBag,
    Users,
    Eye,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell,
    LineChart,
    Line,
    Legend,
} from "recharts"

// Sales data
const salesData = [
    { date: "Jan 1", revenue: 4200, orders: 28, visitors: 1200 },
    { date: "Jan 8", revenue: 5100, orders: 34, visitors: 1450 },
    { date: "Jan 15", revenue: 4800, orders: 31, visitors: 1380 },
    { date: "Jan 22", revenue: 6200, orders: 42, visitors: 1680 },
    { date: "Jan 29", revenue: 7500, orders: 48, visitors: 1920 },
    { date: "Feb 5", revenue: 6800, orders: 45, visitors: 1750 },
    { date: "Feb 12", revenue: 8200, orders: 52, visitors: 2100 },
    { date: "Feb 19", revenue: 9100, orders: 58, visitors: 2350 },
    { date: "Feb 26", revenue: 8500, orders: 54, visitors: 2200 },
    { date: "Mar 5", revenue: 10200, orders: 65, visitors: 2600 },
    { date: "Mar 12", revenue: 11500, orders: 72, visitors: 2850 },
    { date: "Mar 19", revenue: 12800, orders: 78, visitors: 3100 },
]

// Brand revenue data
const brandRevenueData = [
    { name: "Hermès", revenue: 85000, growth: 15.2 },
    { name: "CHANEL", revenue: 72000, growth: 12.8 },
    { name: "Louis Vuitton", revenue: 65000, growth: 8.5 },
    { name: "DIOR", revenue: 48000, growth: 22.1 },
    { name: "GUCCI", revenue: 42000, growth: -3.2 },
    { name: "PRADA", revenue: 38000, growth: 5.6 },
]

// Category distribution
const categoryData = [
    { name: "Totes", value: 35, color: "#8b5cf6" },
    { name: "Shoulder Bags", value: 28, color: "#3b82f6" },
    { name: "Crossbody", value: 20, color: "#10b981" },
    { name: "Clutches", value: 12, color: "#f59e0b" },
    { name: "Other", value: 5, color: "#6b7280" },
]

// Traffic sources
const trafficData = [
    { source: "Organic Search", visits: 12500, conversion: 3.2 },
    { source: "Direct", visits: 8200, conversion: 4.8 },
    { source: "Social Media", visits: 6800, conversion: 2.1 },
    { source: "Email", visits: 4500, conversion: 5.6 },
    { source: "Referral", visits: 2800, conversion: 3.9 },
]

export default function AnalyticsPage() {
    const [dateRange, setDateRange] = useState("30d")

    return (
        <div className="p-6 lg:p-8 space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white">Analytics</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">
                        Track your store performance and insights
                    </p>
                </div>
                <div className="flex gap-2">
                    <Select value={dateRange} onValueChange={setDateRange}>
                        <SelectTrigger className="w-[150px]">
                            <Calendar className="h-4 w-4 mr-2" />
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="7d">Last 7 days</SelectItem>
                            <SelectItem value="30d">Last 30 days</SelectItem>
                            <SelectItem value="90d">Last 90 days</SelectItem>
                            <SelectItem value="1y">Last year</SelectItem>
                        </SelectContent>
                    </Select>
                    <Button variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        Export
                    </Button>
                </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Total Revenue</p>
                                <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">$248.5k</p>
                                <div className="flex items-center gap-1 mt-2 text-emerald-600">
                                    <TrendingUp className="h-4 w-4" />
                                    <span className="text-sm font-medium">+12.5%</span>
                                </div>
                            </div>
                            <div className="p-3 rounded-xl bg-emerald-100 dark:bg-emerald-900/30">
                                <DollarSign className="h-6 w-6 text-emerald-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Total Orders</p>
                                <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">1,234</p>
                                <div className="flex items-center gap-1 mt-2 text-emerald-600">
                                    <TrendingUp className="h-4 w-4" />
                                    <span className="text-sm font-medium">+8.2%</span>
                                </div>
                            </div>
                            <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30">
                                <ShoppingBag className="h-6 w-6 text-blue-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Total Visitors</p>
                                <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">45.2k</p>
                                <div className="flex items-center gap-1 mt-2 text-emerald-600">
                                    <TrendingUp className="h-4 w-4" />
                                    <span className="text-sm font-medium">+18.7%</span>
                                </div>
                            </div>
                            <div className="p-3 rounded-xl bg-purple-100 dark:bg-purple-900/30">
                                <Eye className="h-6 w-6 text-purple-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Conversion Rate</p>
                                <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">3.24%</p>
                                <div className="flex items-center gap-1 mt-2 text-red-500">
                                    <TrendingDown className="h-4 w-4" />
                                    <span className="text-sm font-medium">-0.5%</span>
                                </div>
                            </div>
                            <div className="p-3 rounded-xl bg-amber-100 dark:bg-amber-900/30">
                                <Users className="h-6 w-6 text-amber-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Main Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Revenue & Orders Trend */}
                <Card className="lg:col-span-2 border-0 shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-lg">Revenue & Orders Trend</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-80">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={salesData}>
                                    <defs>
                                        <linearGradient id="colorRevenue2" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                                        </linearGradient>
                                        <linearGradient id="colorOrders2" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                                    <XAxis dataKey="date" stroke="#94a3b8" fontSize={12} />
                                    <YAxis stroke="#94a3b8" fontSize={12} />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: "white",
                                            border: "none",
                                            borderRadius: "12px",
                                            boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                                        }}
                                    />
                                    <Legend />
                                    <Area
                                        type="monotone"
                                        dataKey="revenue"
                                        stroke="#8b5cf6"
                                        strokeWidth={2}
                                        fillOpacity={1}
                                        fill="url(#colorRevenue2)"
                                        name="Revenue ($)"
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="orders"
                                        stroke="#3b82f6"
                                        strokeWidth={2}
                                        fillOpacity={1}
                                        fill="url(#colorOrders2)"
                                        name="Orders"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                {/* Category Distribution */}
                <Card className="border-0 shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-lg">Sales by Category</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={categoryData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={50}
                                        outerRadius={80}
                                        paddingAngle={4}
                                        dataKey="value"
                                    >
                                        {categoryData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="space-y-2 mt-4">
                            {categoryData.map((item) => (
                                <div key={item.name} className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                                        <span className="text-sm text-slate-600 dark:text-slate-300">{item.name}</span>
                                    </div>
                                    <span className="text-sm font-medium">{item.value}%</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Brand Performance & Traffic */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Brand Performance */}
                <Card className="border-0 shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-lg">Brand Performance</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-72">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={brandRevenueData} layout="vertical">
                                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" horizontal={false} />
                                    <XAxis type="number" stroke="#94a3b8" fontSize={12} tickFormatter={(v) => `$${v / 1000}k`} />
                                    <YAxis type="category" dataKey="name" stroke="#94a3b8" fontSize={12} width={80} />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: "white",
                                            border: "none",
                                            borderRadius: "12px",
                                            boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                                        }}
                                        formatter={(value: number) => [`$${value.toLocaleString()}`, "Revenue"]}
                                    />
                                    <Bar dataKey="revenue" fill="#8b5cf6" radius={[0, 8, 8, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                {/* Traffic Sources */}
                <Card className="border-0 shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-lg">Traffic Sources</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {trafficData.map((item, index) => (
                                <div key={item.source} className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{item.source}</span>
                                        <div className="flex items-center gap-4">
                                            <span className="text-sm text-slate-500">{item.visits.toLocaleString()} visits</span>
                                            <span className="text-sm font-medium text-emerald-600">{item.conversion}%</span>
                                        </div>
                                    </div>
                                    <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-500"
                                            style={{ width: `${(item.visits / 12500) * 100}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
