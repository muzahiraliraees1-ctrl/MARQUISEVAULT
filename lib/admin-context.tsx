"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react"

export type AdminRole = "super_admin" | "admin" | "manager" | "viewer"

export interface AdminUser {
    id: string
    email: string
    name: string
    role: AdminRole
    avatar?: string
}

interface AdminContextType {
    admin: AdminUser | null
    isAuthenticated: boolean
    isLoading: boolean
    login: (email: string, password: string) => Promise<boolean>
    logout: () => void
    hasPermission: (requiredRole: AdminRole) => boolean
}

const AdminContext = createContext<AdminContextType | undefined>(undefined)

// Mock admin users for demo
const MOCK_ADMINS: { email: string; password: string; user: AdminUser }[] = [
    {
        email: "admin@luxe.com",
        password: "admin123",
        user: {
            id: "1",
            email: "admin@luxe.com",
            name: "Super Admin",
            role: "super_admin",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
        }
    },
    {
        email: "manager@luxe.com",
        password: "manager123",
        user: {
            id: "2",
            email: "manager@luxe.com",
            name: "Store Manager",
            role: "manager",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
        }
    }
]

const ROLE_HIERARCHY: Record<AdminRole, number> = {
    super_admin: 4,
    admin: 3,
    manager: 2,
    viewer: 1
}

export function AdminProvider({ children }: { children: ReactNode }) {
    const [admin, setAdmin] = useState<AdminUser | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Check for existing session
        const stored = localStorage.getItem("admin_session")
        if (stored) {
            try {
                const parsed = JSON.parse(stored)
                setAdmin(parsed)
            } catch {
                localStorage.removeItem("admin_session")
            }
        }
        setIsLoading(false)
    }, [])

    const login = async (email: string, password: string): Promise<boolean> => {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 800))

        const found = MOCK_ADMINS.find(
            a => a.email.toLowerCase() === email.toLowerCase() && a.password === password
        )

        if (found) {
            setAdmin(found.user)
            localStorage.setItem("admin_session", JSON.stringify(found.user))
            return true
        }
        return false
    }

    const logout = () => {
        setAdmin(null)
        localStorage.removeItem("admin_session")
    }

    const hasPermission = (requiredRole: AdminRole): boolean => {
        if (!admin) return false
        return ROLE_HIERARCHY[admin.role] >= ROLE_HIERARCHY[requiredRole]
    }

    return (
        <AdminContext.Provider
            value={{
                admin,
                isAuthenticated: !!admin,
                isLoading,
                login,
                logout,
                hasPermission
            }}
        >
            {children}
        </AdminContext.Provider>
    )
}

export function useAdmin() {
    const context = useContext(AdminContext)
    if (context === undefined) {
        throw new Error("useAdmin must be used within an AdminProvider")
    }
    return context
}
