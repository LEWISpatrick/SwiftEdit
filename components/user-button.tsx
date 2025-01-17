'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { useCurrentUser } from '@/hooks/use-current-user'
import { signOut } from 'next-auth/react'
import {
  Book,
  CreditCard,
  LayoutDashboard,
  LogOut,
  Settings
} from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

export const UserButton = () => {
  const userButtonItems = [
    {
      label: 'Dashboard',
      href: '/dashboard',
      icon: LayoutDashboard
    },
   
  ]
  // Random gradient colors for Avatar

  const router = useRouter()
  const session = useCurrentUser()

  const onClick = () => {
    router.push('/register')
  }
  const Logout = () => {
    signOut()
    router.push('/register')
  }

  return (
    <>
      {!session ? (
  <nav>
  <Link href='/register'>
  <Button variant="ghost" className="text-[#0A2540]  hover:text-[#007BFF]">
    Login
  </Button>          
  </Link>
  <Link href='/register'>
              <Button className="ml-4 bg-[#007BFF] hover:bg-[#0056b3] text-white rounded-full">
                Sign Up
              </Button>
  </Link>
 
</nav>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            {/* User Avatar / Logo */}
            <Avatar className="cursor-pointer">
              <AvatarImage src={session.image ? session.image : ''} alt="pfp" />
              <AvatarFallback className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700"></AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          {/* Content */}
          <DropdownMenuContent className="w-48">
            <DropdownMenuLabel className="py-0 pt-1">
              {session?.name}
            </DropdownMenuLabel>
            <DropdownMenuLabel className="opacity-70 text-sm font-normal">
              {session?.email}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {/* Main Icons */}
            <DropdownMenuGroup>
              {userButtonItems.map((item, index) => (
                <DropdownMenuItem key={index}>
                  <Link href={item.href} className="flex">
                    <item.icon className="mr-2 mt-0.5 h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
            {/* Logout Button */}
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={Logout} className="cursor-pointer">
              <LogOut className="mr-2 mt-0.5 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </>
  )
}

export default UserButton
