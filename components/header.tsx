import Link from 'next/link'
import { Button } from "@/components/ui/button"
import UserButton from './user-button'

export default function Header() {
  return (
    <header className="w-full py-4  bg-white/80 backdrop-blur-sm shadow-sm fixed top-0 ">
      <div className="container  flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-[#0A2540]">
          SwiftEdit
        </Link>
        <div className="ml-6">
          <UserButton />
        </div>
      </div>
    </header>
  )
}
