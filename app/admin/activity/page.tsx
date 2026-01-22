"use client"

import { useState } from "react"
import {
    Search,
    Filter,
    Download,
    Clock,
    User,
    Package,
    ShoppingCart,
    Settings,
    Shield,
    Eye,
    RefreshCcw,
} from "lucide-react"
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

// Mock activity log data
const activityData = [
    {
        id: 1,
        action: "Product Created",
        type: "create",
        description: 'Added new product "Birkin 35 Black"',
        user: "Super Admin",
        userEmail: "admin@luxe.com",
        timestamp: "2026-01-23 01:30:15",
        ip: "192.168.1.100",
        category: "product",
    },
    {
        id: 2,
        action: "Order Status Updated",
        type: "update",
        description: "Order #ORD-005 status changed to Shipped",
        user: "Store Manager",
        userEmail: "manager@luxe.com",
        timestamp: "2026-01-23 01:15:42",
        ip: "192.168.1.101",
        category: "order",
    },
    {
        id: 3,
        action: "Customer Blocked",
        type: "security",
        description: "Blocked user oliver.smith@email.com",
        user: "Super Admin",
        userEmail: "admin@luxe.com",
        timestamp: "2026-01-23 00:45:33",
        ip: "192.168.1.100",
        category: "user",
    },
    {
        id: 4,
        action: "Settings Updated",
        type: "update",
        description: "Updated payment gateway settings",
        user: "Super Admin",
        userEmail: "admin@luxe.com",
        timestamp: "2026-01-22 23:12:08",
        ip: "192.168.1.100",
        category: "settings",
    },
    {
        id: 5,
        action: "Product Deleted",
        type: "delete",
        description: 'Removed product "Test Product"',
        user: "Super Admin",
        userEmail: "admin@luxe.com",
        timestamp: "2026-01-22 22:30:55",
        ip: "192.168.1.100",
        category: "product",
    },
    {
        id: 6,
        action: "Admin Login",
        type: "security",
        description: "Successful login from new device",
        user: "Store Manager",
        userEmail: "manager@luxe.com",
        timestamp: "2026-01-22 21:45:22",
        ip: "192.168.1.105",
        category: "auth",
    },
    {
        id: 7,
        action: "Refund Processed",
        type: "update",
        description: "Refund $2,350 for Order #ORD-002",
        user: "Super Admin",
        userEmail: "admin@luxe.com",
        timestamp: "2026-01-22 20:18:11",
        ip: "192.168.1.100",
        category: "order",
    },
    {
        id: 8,
        action: "Price Updated",
        type: "update",
        description: 'Updated price for "Classic Flap Bag"',
        user: "Store Manager",
        userEmail: "manager@luxe.com",
        timestamp: "2026-01-22 19:33:47",
        ip: "192.168.1.101",
        category: "product",
    },
]

const getCategoryIcon = (category: string) => {
    switch (category) {
        case "product":
            return <Package className="h-4 w-4" />
        case "order":
            return <ShoppingCart className="h-4 w-4" />
        case "user":
            return <User className="h-4 w-4" />
        case "settings":
            return <Settings className="h-4 w-4" />
        case "auth":
            return <Shield className="h-4 w-4" />
        default:
            return <Clock className="h-4 w-4" />
    }
}

const getTypeBadge = (type: string) => {
    switch (type) {
        case "create":
            return <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">Create</Badge>
        case "update":
            return <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Update</Badge>
        case "delete":
            return <Badge variant="destructive">Delete</Badge>
        case "security":
            return <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100">Security</Badge>
        default:
            return <Badge variant="secondary">{type}</Badge>
    }
}

export default function ActivityPage() {
    const [search, setSearch] = useState("")
    const [typeFilter, setTypeFilter] = useState("all")
    const [categoryFilter, setCategoryFilter] = useState("all")

    const filteredActivity = activityData.filter((log) => {
        const matchesSearch =
            log.action.toLowerCase().includes(search.toLowerCase()) ||
            log.description.toLowerCase().includes(search.toLowerCase()) ||
            log.user.toLowerCase().includes(search.toLowerCase())
        const matchesType = typeFilter === "all" || log.type === typeFilter
        const matchesCategory = categoryFilter === "all" || log.category === categoryFilter
        return matchesSearch && matchesType && matchesCategory
    })

    return (
        <div className="p-6 lg:p-8 space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white">Activity Logs</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">
                        Track all admin actions and system events
                    </p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                        <RefreshCcw className="h-4 w-4 mr-2" />
                        Refresh
                    </Button>
                    <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Export
                    </Button>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <Card className="border-0 shadow-md">
                    <CardContent className="p-4">
                        <p className="text-2xl font-bold text-slate-900 dark:text-white">{activityData.length}</p>
                        <p className="text-sm text-slate-500">Total Actions</p>
                    </CardContent>
                </Card>
                <Card className="border-0 shadow-md">
                    <CardContent className="p-4">
                        <p className="text-2xl font-bold text-emerald-600">{activityData.filter(a => a.type === "create").length}</p>
                        <p className="text-sm text-slate-500">Creates</p>
                    </CardContent>
                </Card>
                <Card className="border-0 shadow-md">
                    <CardContent className="p-4">
                        <p className="text-2xl font-bold text-blue-600">{activityData.filter(a => a.type === "update").length}</p>
                        <p className="text-sm text-slate-500">Updates</p>
                    </CardContent>
                </Card>
                <Card className="border-0 shadow-md">
                    <CardContent className="p-4">
                        <p className="text-2xl font-bold text-amber-600">{activityData.filter(a => a.type === "security").length}</p>
                        <p className="text-sm text-slate-500">Security</p>
                    </CardContent>
                </Card>
            </div>

            {/* Activity Table */}
            <Card className="border-0 shadow-lg">
                <CardHeader className="pb-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <CardTitle className="text-lg">Recent Activity</CardTitle>
                        <div className="flex flex-wrap gap-2">
                            <div className="relative w-full sm:w-64">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                <Input
                                    placeholder="Search activity..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="pl-9"
                                />
                            </div>
                            <Select value={typeFilter} onValueChange={setTypeFilter}>
                                <SelectTrigger className="w-[120px]">
                                    <SelectValue placeholder="Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Types</SelectItem>
                                    <SelectItem value="create">Create</SelectItem>
                                    <SelectItem value="update">Update</SelectItem>
                                    <SelectItem value="delete">Delete</SelectItem>
                                    <SelectItem value="security">Security</SelectItem>
                                </SelectContent>
                            </Select>
                            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                                <SelectTrigger className="w-[130px]">
                                    <SelectValue placeholder="Category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Categories</SelectItem>
                                    <SelectItem value="product">Product</SelectItem>
                                    <SelectItem value="order">Order</SelectItem>
                                    <SelectItem value="user">User</SelectItem>
                                    <SelectItem value="settings">Settings</SelectItem>
                                    <SelectItem value="auth">Auth</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Action</TableHead>
                                <TableHead>Admin</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead>Timestamp</TableHead>
                                <TableHead>IP Address</TableHead>
                                <TableHead className="w-[50px]"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredActivity.map((log) => (
                                <TableRow key={log.id}>
                                    <TableCell>
                                        <div className="flex items-start gap-3">
                                            <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 mt-0.5">
                                                {getCategoryIcon(log.category)}
                                            </div>
                                            <div>
                                                <p className="font-medium text-slate-900 dark:text-white">{log.action}</p>
                                                <p className="text-sm text-slate-500">{log.description}</p>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div>
                                            <p className="font-medium">{log.user}</p>
                                            <p className="text-xs text-slate-500">{log.userEmail}</p>
                                        </div>
                                    </TableCell>
                                    <TableCell>{getTypeBadge(log.type)}</TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-1 text-sm text-slate-500">
                                            <Clock className="h-3 w-3" />
                                            {log.timestamp}
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-sm text-slate-500 font-mono">{log.ip}</TableCell>
                                    <TableCell>
                                        <Button variant="ghost" size="icon">
                                            <Eye className="h-4 w-4" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
