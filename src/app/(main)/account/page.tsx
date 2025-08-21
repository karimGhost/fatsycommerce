"use client"

import { useAuth } from "@/hooks/useAuth"
import { auth } from "@/lib/firebase"
import { redirect } from "next/navigation"

export default function AccountPage() {
  const {user, loading} = useAuth();

  if (loading) return <p>Loading...</p>
  if (!user) redirect("/")

  return (
    <div className="container py-10">
      <h1 className="text-2xl font-bold mb-6">Profile & Settings</h1>
      <p>Email: {user.email}</p>
      {/* TODO: add form for updating name, password, profile image */}
    </div>
  )
}
