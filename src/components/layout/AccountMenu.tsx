"use client"

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { User, LogOut, LayoutDashboard } from "lucide-react"
import { signOut } from "firebase/auth"
import { auth } from "@/lib/firebase"
import Link from "next/link"
import { Button } from "../ui/button"
import LoginModal from "../auth/login-modal";
import { useRouter } from "next/navigation"; 
import { useState } from "react"

export function AccountMenu({
  user,
  role,
}: {
  user: any
  role?: string
}) {
  const [loginOpen, setLoginOpen] = useState(false)

  const router = useRouter();
    const signoutuser = () =>{
    signOut(auth);
    router.push("/");

  }
  // 🔹 If no user, show "Login" button instead of menu
  if (!user) {
    return (
      <>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setLoginOpen(true)}
        >
          <User className="h-5 w-5" />
          <span className="sr-only">Login</span>
        </Button>
        <LoginModal open={loginOpen} onOpenChange={setLoginOpen} />
      </>
    )
  }

  // 🔹 If user exists, show dropdown menu
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
          <span className="sr-only">User Account</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <Link href="/account">Profile & Settings</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/orders">My Orders</Link>
        </DropdownMenuItem>

        {role === "seller" && (
          <DropdownMenuItem asChild>
            <Link href="/seller/dashboard">
              <LayoutDashboard className="mr-2 h-4 w-4" /> Seller Dashboard
            </Link>
          </DropdownMenuItem>
        )}

        {role === "admin" && (
          <DropdownMenuItem asChild>
            <Link href="/admin/dashboard">
              <LayoutDashboard className="mr-2 h-4 w-4" /> Admin Panel
            </Link>
          </DropdownMenuItem>
        )}

        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => signoutuser()}
          className="text-red-600"
        >
          <LogOut className="mr-2 h-4 w-4" /> Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
