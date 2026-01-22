"use client"

import {
  DollarSign,
  ShoppingBag,
  Users,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
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
import { products } from "@/lib/data"

// Mock data for dashboard
const stats = [
  {
    title: "Total Revenue",
    value: "$248,500",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
  },
  {
    title: "Orders",
    value: "1,234",
    change: "+8.2%",
    trend: "up",
    icon: ShoppingBag,
  },
  {
    title: "Customers",
    value: "892",
    change: "+18.7%",
    trend: "up",
    icon: Users,
  },
  {
    title: "Conversion Rate",
    value: "3.24%",
    change: "-0.5%",
    trend: "down",
    icon: TrendingUp,
  },
]

const recentOrders = [
  {
    id: "ORD-001",
    customer: "Emma Wilson",
    product: "Classic Flap Bag",
    amount: 8950,
    status: "shipped",
  },
  {
    id: "ORD-002",
    customer: "James Chen",
    product: "Neverfull MM",
    amount: 2030,
    status: "processing",
  },
  {
    id: "ORD-003",
    customer: "Sofia Rodriguez",
    product: "Birkin 30",
    amount: 12500,
    status: "delivered",
  },
  {
    id: "ORD-004",
    customer: "Oliver Smith",
    product: "GG Marmont Small",
    amount: 2350,
    status: "pending",
  },
  {
    id: "ORD-005",
    customer: "Ava Johnson",
    product: "Lady Dior Medium",
    amount: 5900,
    status: "shipped",
  },
]

const topProducts = products.slice(0, 5).map((p, i) => ({
  ...p,
  sales: [156, 143, 128, 112, 98][i],
  revenue: p.price * [156, 143, 128, 112, 98][i],
}))

export default function AdminDashboard() {
  return (
    <div className="p-6 md:p-8">
      <div className="mb-8">
        <h1 className="font-serif text-3xl">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Welcome back. Here's what's happening with your store.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div
                className={`flex items-center text-xs mt-1 ${
                  stat.trend === "up" ? "text-green-600" : "text-red-600"
                }`}
              >
                {stat.trend === "up" ? (
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                ) : (
                  <ArrowDownRight className="h-3 w-3 mr-1" />
                )}
                {stat.change} from last month
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
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
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>${order.amount.toLocaleString()}</TableCell>
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
        <Card>
          <CardHeader>
            <CardTitle>Top Products</CardTitle>
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
                      <div>
                        <div className="font-medium">{product.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {product.brand}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{product.sales}</TableCell>
                    <TableCell>${product.revenue.toLocaleString()}</TableCell>
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
