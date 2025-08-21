"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
// import { auth } from "@/lib/firebase"; // your firebase init
import GuestHome from "@/components/home/guest-home";
import UserHome from "@/components/home/user-home";
import { useAuth } from "@/hooks/useAuth";

export default function HomePage() {
const {user, loading} = useAuth()
  // useEffect(() => {
  //   const unsub = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //     setLoading(false);
  //   });
  //   return () => unsub();
  // }, []);


  // const user ={
  //   displayName: "jjojo"
  // }
  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  // 🔹 Not logged in → show marketing version
  if (!user) {
    return <GuestHome  />;
  }

  // 🔹 Logged in → show personalized homepage
  return <UserHome user={user} />;
}

