"use client"

import { useState } from "react"
import {
  DollarSign,
  ShoppingBag,
  Users,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Package,
  Clock,
  Eye,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/data"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend,
} from "recharts"
import Link from "next/link"

// Mock data for dashboard
const stats = [
  {
    title: "Total Revenue",
    value: "$248,500",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Orders",
    value: "1,234",
    change: "+8.2%",
    trend: "up",
    icon: ShoppingBag,
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    title: "Customers",
    value: "892",
    change: "+18.7%",
    trend: "up",
    icon: Users,
    gradient: "from-purple-500 to-pink-600",
  },
  {
    title: "Conversion",
    value: "3.24%",
    change: "-0.5%",
    trend: "down",
    icon: TrendingUp,
    gradient: "from-amber-500 to-orange-600",
  },
]

// Revenue chart data
const revenueData = [
  { month: "Jan", revenue: 18500, orders: 120 },
  { month: "Feb", revenue: 22000, orders: 145 },
  { month: "Mar", revenue: 19500, orders: 132 },
  { month: "Apr", revenue: 28000, orders: 180 },
  { month: "May", revenue: 32500, orders: 210 },
  { month: "Jun", revenue: 38000, orders: 245 },
  { month: "Jul", revenue: 42000, orders: 278 },
  { month: "Aug", revenue: 45500, orders: 295 },
  { month: "Sep", revenue: 41000, orders: 265 },
  { month: "Oct", revenue: 48500, orders: 312 },
  { month: "Nov", revenue: 52000, orders: 340 },
  { month: "Dec", revenue: 58000, orders: 385 },
]

// Order status data for pie chart
const orderStatusData = [
  { name: "Delivered", value: 540, color: "#10b981" },
  { name: "Shipped", value: 320, color: "#6366f1" },
  { name: "Processing", value: 180, color: "#f59e0b" },
  { name: "Pending", value: 94, color: "#ef4444" },
]

// Top performing brands
const brandPerformance = [
  { name: "CHANEL", sales: 72000 },
  { name: "DIOR", sales: 48000 },
  { name: "GUCCI", sales: 42000 },
]

const recentOrders = [
  {
    id: "ORD-001",
    customer: "Emma Wilson",
    product: "Classic Flap Bag",
    amount: 8950,
    status: "shipped",
    date: "2 hours ago",
  },
  {
    id: "ORD-002",
    customer: "James Chen",
    product: "Neverfull MM",
    amount: 2030,
    status: "processing",
    date: "5 hours ago",
  },
  {
    id: "ORD-003",
    customer: "Sofia Rodriguez",
    product: "Birkin 30",
    amount: 12500,
    status: "delivered",
    date: "1 day ago",
  },
  {
    id: "ORD-004",
    customer: "Oliver Smith",
    product: "GG Marmont Small",
    amount: 2350,
    status: "pending",
    date: "1 day ago",
  },
  {
    id: "ORD-005",
    customer: "Ava Johnson",
    product: "Lady Dior Medium",
    amount: 5900,
    status: "shipped",
    date: "2 days ago",
  },
]

const recentActivity = [
  { action: "New order placed", detail: "Order #ORD-006 for $3,450", time: "2 min ago", icon: ShoppingBag },
  { action: "Product updated", detail: "Birkin 30 stock updated", time: "15 min ago", icon: Package },
  { action: "New customer", detail: "john.smith@email.com registered", time: "1 hour ago", icon: Users },
  { action: "Order shipped", detail: "Order #ORD-003 shipped via DHL", time: "3 hours ago", icon: TrendingUp },
]

const topProducts = products.slice(0, 5).map((p, i) => ({
  ...p,
  sales: [156, 143, 128, 112, 98][i],
  revenue: p.price * [156, 143, 128, 112, 98][i],
}))

export default function AdminDashboard() {
  return (
    <div className="p-6 lg:p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white">Dashboard</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Welcome back! Here's what's happening with your store.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Clock className="h-4 w-4 mr-2" />
            Last 30 Days
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            Download Report
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={stat.title} className="relative overflow-hidden border-0 shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50 hover:shadow-xl transition-all duration-300 group">
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{stat.title}</p>
                  <p className="text-3xl font-bold text-slate-900 dark:text-white mt-2">{stat.value}</p>
                  <div
                    className={`flex items-center text-sm mt-2 ${stat.trend === "up" ? "text-emerald-600" : "text-red-500"
                      }`}
                  >
                    {stat.trend === "up" ? (
                      <ArrowUpRight className="h-4 w-4 mr-1" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 mr-1" />
                    )}
                    <span className="font-medium">{stat.change}</span>
                    <span className="text-slate-400 ml-1">vs last month</span>
                  </div>
                </div>
                <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.gradient}`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <Card className="lg:col-span-2 border-0 shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold">Revenue Overview</CardTitle>
              <div className="flex gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-purple-500" />
                  <span className="text-slate-500">Revenue</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                  <span className="text-slate-500">Orders</span>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorOrders" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} />
                  <YAxis stroke="#94a3b8" fontSize={12} tickFormatter={(value) => `$${value / 1000}k`} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      border: "none",
                      borderRadius: "12px",
                      boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                    }}
                    formatter={(value: number, name: string) => [
                      name === "revenue" ? `$${value.toLocaleString()}` : value,
                      name === "revenue" ? "Revenue" : "Orders"
                    ]}
                  />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="#8b5cf6"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorRevenue)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Order Status Pie Chart */}
        <Card className="border-0 shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-semibold">Order Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={orderStatusData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {orderStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      border: "none",
                      borderRadius: "12px",
                      boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-4">
              {orderStatusData.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-sm text-slate-600 dark:text-slate-300">{item.name}</span>
                  <span className="text-sm font-medium text-slate-900 dark:text-white ml-auto">{item.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Brand Performance & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Brand Performance */}
        <Card className="lg:col-span-2 border-0 shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-semibold">Top Performing Brands</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={brandPerformance} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" horizontal={false} />
                  <XAxis type="number" stroke="#94a3b8" fontSize={12} tickFormatter={(value) => `$${value / 1000}k`} />
                  <YAxis type="category" dataKey="name" stroke="#94a3b8" fontSize={12} width={100} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      border: "none",
                      borderRadius: "12px",
                      boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                    }}
                    formatter={(value: number) => [`$${value.toLocaleString()}`, "Sales"]}
                  />
                  <Bar
                    dataKey="sales"
                    fill="url(#brandGradient)"
                    radius={[0, 8, 8, 0]}
                  />
                  <defs>
                    <linearGradient id="brandGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="border-0 shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700">
                    <activity.icon className="h-4 w-4 text-slate-600 dark:text-slate-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900 dark:text-white">{activity.action}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{activity.detail}</p>
                  </div>
                  <span className="text-xs text-slate-400 whitespace-nowrap">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tables Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <Card className="border-0 shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-semibold">Recent Orders</CardTitle>
            <Link href="/admin/orders">
              <Button variant="ghost" size="sm">
                View All
                <Eye className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-mono text-sm">{order.id}</TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium text-sm">{order.customer}</p>
                        <p className="text-xs text-slate-500">{order.date}</p>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">${order.amount.toLocaleString()}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          order.status === "delivered"
                            ? "default"
                            : order.status === "shipped"
                              ? "secondary"
                              : order.status === "processing"
                                ? "outline"
                                : "destructive"
                        }
                        className="capitalize"
                      >
                        {order.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Top Products */}
        <Card className="border-0 shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-semibold">Top Products</CardTitle>
            <Link href="/admin/products">
              <Button variant="ghost" size="sm">
                View All
                <Eye className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Sales</TableHead>
                  <TableHead>Revenue</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-700 overflow-hidden">
                          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="font-medium text-sm truncate max-w-[120px]">{product.name}</p>
                          <p className="text-xs text-slate-500">{product.brand}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{product.sales}</TableCell>
                    <TableCell className="font-medium">${product.revenue.toLocaleString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
