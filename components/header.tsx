import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="w-full py-4 px-4 bg-white/80 backdrop-blur-sm shadow-sm fixed top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-[#0A2540]">
          SwiftEdit
        </Link>
        <nav>
          <Button variant="ghost" className="text-[#0A2540] hover:text-[#007BFF]">
            Login
          </Button>
          <Button className="ml-4 bg-[#007BFF] hover:bg-[#0056b3] text-white rounded-full">
            Sign Up
          </Button>
        </nav>
      </div>
    </header>
  )
}

