"use client"

import { useState } from "react"
import { Search, Eye, Download, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

// Mock orders data
const orders = [
  {
    id: "ORD-001",
    customer: {
      name: "Emma Wilson",
      email: "emma@example.com",
      address: "123 Park Ave, New York, NY 10001",
    },
    items: [{ name: "Classic Flap Bag", brand: "CHANEL", price: 8950, qty: 1 }],
    total: 8950,
    status: "shipped",
    date: "2026-01-20",
    shipping: "Express",
  },
  {
    id: "ORD-002",
    customer: {
      name: "James Chen",
      email: "james@example.com",
      address: "456 Oak St, Los Angeles, CA 90001",
    },
    items: [{ name: "Neverfull MM", brand: "Louis Vuitton", price: 2030, qty: 1 }],
    total: 2030,
    status: "processing",
    date: "2026-01-19",
    shipping: "Standard",
  },
  {
    id: "ORD-003",
    customer: {
      name: "Sofia Rodriguez",
      email: "sofia@example.com",
      address: "789 Maple Dr, Miami, FL 33101",
    },
    items: [{ name: "Birkin 30", brand: "Hermès", price: 12500, qty: 1 }],
    total: 12500,
    status: "delivered",
    date: "2026-01-18",
    shipping: "Express",
  },
  {
    id: "ORD-004",
    customer: {
      name: "Oliver Smith",
      email: "oliver@example.com",
      address: "321 Pine Ave, Chicago, IL 60601",
    },
    items: [
      { name: "GG Marmont Small", brand: "GUCCI", price: 2350, qty: 1 },
      { name: "Re-Edition 2005", brand: "PRADA", price: 1850, qty: 1 },
    ],
    total: 4200,
    status: "pending",
    date: "2026-01-21",
    shipping: "Standard",
  },
  {
    id: "ORD-005",
    customer: {
      name: "Ava Johnson",
      email: "ava@example.com",
      address: "654 Cedar Ln, Seattle, WA 98101",
    },
    items: [{ name: "Lady Dior Medium", brand: "DIOR", price: 5900, qty: 1 }],
    total: 5900,
    status: "shipped",
    date: "2026-01-17",
    shipping: "Express",
  },
]

const Loading = () => null

export default function AdminOrdersPage() {
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedOrder, setSelectedOrder] = useState<(typeof orders)[0] | null>(
    null
  )
  const searchParams = useSearchParams()

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(search.toLowerCase()) ||
      order.customer.name.toLowerCase().includes(search.toLowerCase())
    const matchesStatus =
      statusFilter === "all" || order.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "delivered":
        return <Badge variant="default">Delivered</Badge>
      case "shipped":
        return <Badge variant="secondary">Shipped</Badge>
      case "processing":
        return <Badge variant="outline">Processing</Badge>
      case "pending":
        return (
          <Badge variant="destructive" className="bg-amber-500">
            Pending
          </Badge>
        )
      default:
        return <Badge>{status}</Badge>
    }
  }

  return (
    <Suspense fallback={<Loading />}>
      <div className="p-6 md:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="font-serif text-3xl">Orders</h1>
            <p className="text-muted-foreground mt-1">
              View and manage customer orders
            </p>
          </div>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>

        <Card>
          <CardHeader className="pb-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <CardTitle>All Orders ({orders.length})</CardTitle>
              <div className="flex gap-2">
                <div className="relative w-full sm:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search orders..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="pl-9"
                  />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-[140px]">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="processing">Processing</SelectItem>
                    <SelectItem value="shipped">Shipped</SelectItem>
                    <SelectItem value="delivered">Delivered</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-mono font-medium">
                      {order.id}
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{order.customer.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {order.customer.email}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell>PKR {order.total.toLocaleString()}</TableCell>
                    <TableCell>{getStatusBadge(order.status)}</TableCell>
                    <TableCell>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setSelectedOrder(order)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-lg">
                          <DialogHeader>
                            <DialogTitle>Order {order.id}</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4 mt-4">
                            <div>
                              <h4 className="text-sm font-medium text-muted-foreground mb-1">
                                Customer
                              </h4>
                              <p className="font-medium">{order.customer.name}</p>
                              <p className="text-sm text-muted-foreground">
                                {order.customer.email}
                              </p>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-muted-foreground mb-1">
                                Shipping Address
                              </h4>
                              <p className="text-sm">{order.customer.address}</p>
                            </div>
                            <Separator />
                            <div>
                              <h4 className="text-sm font-medium text-muted-foreground mb-2">
                                Items
                              </h4>
                              <div className="space-y-2">
                                {order.items.map((item, i) => (
                                  <div
                                    key={i}
                                    className="flex justify-between text-sm"
                                  >
                                    <span>
                                      {item.name} ({item.brand}) x{item.qty}
                                    </span>
                                    <span>PKR {item.price.toLocaleString()}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <Separator />
                            <div className="flex justify-between font-medium">
                              <span>Total</span>
                              <span>PKR {order.total.toLocaleString()}</span>
                            </div>
                            <div className="flex gap-2 pt-4">
                              <Select defaultValue={order.status}>
                                <SelectTrigger className="flex-1">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="pending">Pending</SelectItem>
                                  <SelectItem value="processing">
                                    Processing
                                  </SelectItem>
                                  <SelectItem value="shipped">Shipped</SelectItem>
                                  <SelectItem value="delivered">
                                    Delivered
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                              <Button>Update Status</Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </Suspense>
  )
}
