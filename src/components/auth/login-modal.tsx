"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { auth } from "@/lib/firebase"
import { useToast } from "@/hooks/use-toast" // ✅ hook you shared

export default function LoginModal({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const [isSignup, setIsSignup] = useState(false)
  const [isForgot, setIsForgot] = useState(false)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [loading, setLoading] = useState(false)

  const { toast } = useToast()

  const getFriendlyError = (code: string) => {
    switch (code) {
      case "auth/user-not-found":
        return "No account found with this email."
      case "auth/wrong-password":
        return "Incorrect password. Please try again."
      case "auth/too-many-requests":
        return "Too many login attempts. Please try again later."
      case "auth/invalid-email":
        return "Please enter a valid email address."
      case "auth/popup-closed-by-user":
        return "You closed the Google sign-in popup before finishing."
      case "auth/cancelled-popup-request":
        return "Another sign-in popup is already open."
      case "auth/popup-blocked":
        return "Popup was blocked by the browser. Please enable popups."
      case "auth/account-exists-with-different-credential":
        return "This email is already registered with a different method."
      default:
        return "Something went wrong. Please try again."
    }
  }

  // 🔹 Google Login
  const handleGoogleLogin = async () => {
    try {
      setLoading(true)
      await signInWithPopup(auth, new GoogleAuthProvider())
      toast({ title: "Success", description: "Logged in with Google 🎉" })
      onOpenChange(false)
    } catch (err: any) {
      toast({
        title: "Login Failed",
        description: getFriendlyError(err.code),
      })
    } finally {
      setLoading(false)
    }
  }

  // 🔹 Email Login/Signup
  const handleEmailAuth = async () => {
    try {
      setLoading(true)

      if (isSignup) {
        if (!agreeTerms) {
          toast({
            title: "Signup Error",
            description: "You must agree to the Terms & Conditions.",
          })
          setLoading(false)
          return
        }
        if (password !== confirmPassword) {
          toast({
            title: "Signup Error",
            description: "Passwords do not match.",
          })
          setLoading(false)
          return
        }
        await createUserWithEmailAndPassword(auth, email, password)
        toast({ title: "Account Created 🎉", description: "Welcome aboard!" })
      } else {
        await signInWithEmailAndPassword(auth, email, password)
        toast({ title: "Welcome Back 👋", description: "Logged in successfully." })
      }

      onOpenChange(false)
    } catch (err: any) {
      toast({
        title: "Authentication Error",
        description: getFriendlyError(err.code),
      })
    } finally {
      setLoading(false)
    }
  }

  // 🔹 Forgot Password
  const handleForgotPassword = async () => {
    try {
      setLoading(true)

      if (!email) {
        toast({
          title: "Reset Error",
          description: "Please enter your email to reset password.",
        })
        setLoading(false)
        return
      }

      await sendPasswordResetEmail(auth, email)
      toast({
        title: "Password Reset Sent",
        description: "Check your inbox for the reset link.",
      })
    } catch (err: any) {
      toast({
        title: "Reset Failed",
        description: getFriendlyError(err.code),
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {isForgot
              ? "Reset Your Password"
              : isSignup
              ? "Create a FatsyCommerce Account"
              : "Login to FatsyCommerce"}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Google Button */}
          {!isForgot && (
            <>
              <Button
                onClick={handleGoogleLogin}
                className="w-full"
                disabled={loading}
              >
                {loading ? "Loading..." : "Continue with Google"}
              </Button>

              <div className="flex items-center justify-between">
                <div className="border-t flex-grow" />
                <span className="mx-2 text-muted-foreground text-sm">or</span>
                <div className="border-t flex-grow" />
              </div>
            </>
          )}

          {/* Email / Password */}
          <div className="space-y-3">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />

            {!isForgot && (
              <>
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                />

                {isSignup && (
                  <>
                    <Input
                      type="password"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      disabled={loading}
                    />

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        checked={agreeTerms}
                        onCheckedChange={(val) => setAgreeTerms(Boolean(val))}
                        disabled={loading}
                      />
                      <label
                        htmlFor="terms"
                        className="text-sm text-muted-foreground leading-none"
                      >
                        I agree to the{" "}
                        <Link href="/terms" className="text-primary hover:underline">
                          Terms & Conditions
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-primary hover:underline">
                          Privacy Policy
                        </Link>
                      </label>
                    </div>
                  </>
                )}
              </>
            )}

            {/* Submit */}
            <Button
              onClick={isForgot ? handleForgotPassword : handleEmailAuth}
              className="w-full"
              disabled={
                loading ||
                !email ||
                (!isForgot &&
                  (!password ||
                    (isSignup && (!confirmPassword || !agreeTerms))))
              }
            >
              {loading
                ? "Please wait..."
                : isForgot
                ? "Send Reset Link"
                : isSignup
                ? "Sign Up"
                : "Login"}
            </Button>
          </div>

          {/* Footer Links */}
          <div className="text-sm text-center text-muted-foreground space-y-1">
            {!isForgot && !isSignup && (
              <button
                onClick={() => setIsForgot(true)}
                className="text-primary hover:underline"
              >
                Forgot Password?
              </button>
            )}
            {isForgot ? (
              <button
                onClick={() => {
                  setIsForgot(false)
                  setIsSignup(false)
                }}
                className="text-primary hover:underline"
              >
                Back to Login
              </button>
            ) : (
              <p>
                {isSignup ? "Already have an account?" : "Don’t have an account?"}{" "}
                <button
                  onClick={() => setIsSignup(!isSignup)}
                  className="text-primary hover:underline"
                  disabled={loading}
                >
                  {isSignup ? "Login" : "Sign Up"}
                </button>
              </p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
