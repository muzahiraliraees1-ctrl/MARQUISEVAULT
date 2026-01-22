"use client"

import { useState } from "react"
import {
    Search,
    Plus,
    MoreHorizontal,
    Mail,
    Phone,
    MapPin,
    Calendar,
    ShoppingBag,
    Ban,
    CheckCircle,
    Eye,
    Pencil,
    Trash2,
    UserCircle,
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
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

// Mock customers data
const customersData = [
    {
        id: "1",
        name: "Emma Wilson",
        email: "emma.wilson@email.com",
        phone: "+1 (555) 123-4567",
        location: "New York, NY",
        status: "active",
        totalOrders: 12,
        totalSpent: 28450,
        joinedDate: "2025-03-15",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    {
        id: "2",
        name: "James Chen",
        email: "james.chen@email.com",
        phone: "+1 (555) 234-5678",
        location: "Los Angeles, CA",
        status: "active",
        totalOrders: 8,
        totalSpent: 15680,
        joinedDate: "2025-05-22",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    {
        id: "3",
        name: "Sofia Rodriguez",
        email: "sofia.r@email.com",
        phone: "+1 (555) 345-6789",
        location: "Miami, FL",
        status: "active",
        totalOrders: 15,
        totalSpent: 42300,
        joinedDate: "2025-01-08",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
    {
        id: "4",
        name: "Oliver Smith",
        email: "oliver.smith@email.com",
        phone: "+1 (555) 456-7890",
        location: "Chicago, IL",
        status: "blocked",
        totalOrders: 3,
        totalSpent: 4200,
        joinedDate: "2025-08-12",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    },
    {
        id: "5",
        name: "Ava Johnson",
        email: "ava.johnson@email.com",
        phone: "+1 (555) 567-8901",
        location: "Seattle, WA",
        status: "active",
        totalOrders: 21,
        totalSpent: 68900,
        joinedDate: "2024-11-03",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    },
    {
        id: "6",
        name: "William Brown",
        email: "w.brown@email.com",
        phone: "+1 (555) 678-9012",
        location: "Austin, TX",
        status: "inactive",
        totalOrders: 5,
        totalSpent: 8750,
        joinedDate: "2025-04-28",
        avatar: null,
    },
]

export default function CustomersPage() {
    const [search, setSearch] = useState("")
    const [statusFilter, setStatusFilter] = useState("all")
    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
    const [selectedCustomer, setSelectedCustomer] = useState<typeof customersData[0] | null>(null)
    const [customers, setCustomers] = useState(customersData)

    const filteredCustomers = customers.filter((customer) => {
        const matchesSearch =
            customer.name.toLowerCase().includes(search.toLowerCase()) ||
            customer.email.toLowerCase().includes(search.toLowerCase())
        const matchesStatus =
            statusFilter === "all" || customer.status === statusFilter
        return matchesSearch && matchesStatus
    })

    const toggleCustomerStatus = (customerId: string) => {
        setCustomers(prev =>
            prev.map(c =>
                c.id === customerId
                    ? { ...c, status: c.status === "blocked" ? "active" : "blocked" }
                    : c
            )
        )
    }

    const getStatusBadge = (status: string) => {
        switch (status) {
            case "active":
                return <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">Active</Badge>
            case "blocked":
                return <Badge variant="destructive">Blocked</Badge>
            case "inactive":
                return <Badge variant="secondary">Inactive</Badge>
            default:
                return <Badge>{status}</Badge>
        }
    }

    return (
        <div className="p-6 lg:p-8 space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white">Customers</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">
                        Manage your customer base
                    </p>
                </div>
                <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                    <DialogTrigger asChild>
                        <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                            <Plus className="h-4 w-4 mr-2" />
                            Add Customer
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                        <DialogHeader>
                            <DialogTitle>Add New Customer</DialogTitle>
                        </DialogHeader>
                        <form className="space-y-4 mt-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="firstName">First Name</Label>
                                    <Input id="firstName" className="mt-1.5" />
                                </div>
                                <div>
                                    <Label htmlFor="lastName">Last Name</Label>
                                    <Input id="lastName" className="mt-1.5" />
                                </div>
                            </div>
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" className="mt-1.5" />
                            </div>
                            <div>
                                <Label htmlFor="phone">Phone</Label>
                                <Input id="phone" type="tel" className="mt-1.5" />
                            </div>
                            <div>
                                <Label htmlFor="location">Location</Label>
                                <Input id="location" className="mt-1.5" placeholder="City, State" />
                            </div>
                            <DialogFooter>
                                <Button type="button" variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                                    Cancel
                                </Button>
                                <Button type="submit">Add Customer</Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <Card className="border-0 shadow-md">
                    <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
                                <UserCircle className="h-5 w-5 text-purple-600" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-slate-900 dark:text-white">{customers.length}</p>
                                <p className="text-sm text-slate-500">Total Customers</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="border-0 shadow-md">
                    <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
                                <CheckCircle className="h-5 w-5 text-emerald-600" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-slate-900 dark:text-white">
                                    {customers.filter(c => c.status === "active").length}
                                </p>
                                <p className="text-sm text-slate-500">Active</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="border-0 shadow-md">
                    <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30">
                                <ShoppingBag className="h-5 w-5 text-amber-600" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-slate-900 dark:text-white">
                                    {customers.reduce((sum, c) => sum + c.totalOrders, 0)}
                                </p>
                                <p className="text-sm text-slate-500">Total Orders</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="border-0 shadow-md">
                    <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                                <Calendar className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-slate-900 dark:text-white">
                                    ${(customers.reduce((sum, c) => sum + c.totalSpent, 0) / 1000).toFixed(0)}k
                                </p>
                                <p className="text-sm text-slate-500">Total Revenue</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Filters */}
            <Card className="border-0 shadow-lg">
                <CardHeader className="pb-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <CardTitle className="text-lg">All Customers ({filteredCustomers.length})</CardTitle>
                        <div className="flex gap-2">
                            <div className="relative w-full sm:w-64">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                <Input
                                    placeholder="Search customers..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="pl-9"
                                />
                            </div>
                            <Select value={statusFilter} onValueChange={setStatusFilter}>
                                <SelectTrigger className="w-[130px]">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Status</SelectItem>
                                    <SelectItem value="active">Active</SelectItem>
                                    <SelectItem value="inactive">Inactive</SelectItem>
                                    <SelectItem value="blocked">Blocked</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Customer</TableHead>
                                <TableHead>Contact</TableHead>
                                <TableHead>Location</TableHead>
                                <TableHead>Orders</TableHead>
                                <TableHead>Total Spent</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="w-[50px]"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredCustomers.map((customer) => (
                                <TableRow key={customer.id}>
                                    <TableCell>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center overflow-hidden">
                                                {customer.avatar ? (
                                                    <img src={customer.avatar} alt={customer.name} className="w-full h-full object-cover" />
                                                ) : (
                                                    <span className="text-white font-medium text-sm">
                                                        {customer.name.split(" ").map(n => n[0]).join("")}
                                                    </span>
                                                )}
                                            </div>
                                            <div>
                                                <p className="font-medium text-slate-900 dark:text-white">{customer.name}</p>
                                                <p className="text-xs text-slate-500">Joined {customer.joinedDate}</p>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="space-y-1">
                                            <p className="text-sm flex items-center gap-1">
                                                <Mail className="h-3 w-3 text-slate-400" />
                                                {customer.email}
                                            </p>
                                            <p className="text-sm flex items-center gap-1">
                                                <Phone className="h-3 w-3 text-slate-400" />
                                                {customer.phone}
                                            </p>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <p className="text-sm flex items-center gap-1">
                                            <MapPin className="h-3 w-3 text-slate-400" />
                                            {customer.location}
                                        </p>
                                    </TableCell>
                                    <TableCell>
                                        <span className="font-medium">{customer.totalOrders}</span>
                                    </TableCell>
                                    <TableCell>
                                        <span className="font-medium">${customer.totalSpent.toLocaleString()}</span>
                                    </TableCell>
                                    <TableCell>{getStatusBadge(customer.status)}</TableCell>
                                    <TableCell>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="icon">
                                                    <MoreHorizontal className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem>
                                                    <Eye className="h-4 w-4 mr-2" />
                                                    View Details
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <Pencil className="h-4 w-4 mr-2" />
                                                    Edit
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem onClick={() => toggleCustomerStatus(customer.id)}>
                                                    {customer.status === "blocked" ? (
                                                        <>
                                                            <CheckCircle className="h-4 w-4 mr-2" />
                                                            Activate
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Ban className="h-4 w-4 mr-2" />
                                                            Block
                                                        </>
                                                    )}
                                                </DropdownMenuItem>
                                                <DropdownMenuItem className="text-red-600">
                                                    <Trash2 className="h-4 w-4 mr-2" />
                                                    Delete
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
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
