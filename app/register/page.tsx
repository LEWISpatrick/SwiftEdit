'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { signinWithGoogle } from "../utills/actions"

export default function SignupPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Sign up for SwiftEdit</CardTitle>
          <CardDescription>Create your account to get started</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center items-center">
        <form action={signinWithGoogle}>
  <Button className="btn w-full" type="submit">
    Sign up with Google
  </Button>
</form>
        </CardContent>
      </Card>
    </div>
  )
}

