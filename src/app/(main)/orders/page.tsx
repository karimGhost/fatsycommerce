"use client"
import { useAuth } from "@/hooks/useAuth"
import { auth } from "@/lib/firebase"
import { redirect } from "next/navigation"

export default function OrdersPage() {
  const {user, loading} = useAuth()

  if (loading) return <p>Loading...</p>
  if (!user) redirect("/")

  return (
    <div className="container py-10">
      <h1 className="text-2xl font-bold mb-6">My Orders</h1>
      <p>Here you will see all your past and current orders.</p>
      {/* TODO: fetch user orders from Firestore and display */}
    </div>
  )
}
