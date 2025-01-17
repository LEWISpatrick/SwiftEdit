import Link from 'next/link'
import { Home, Film, Settings, LogOut } from 'lucide-react'

export function DashboardSidebar() {
  return (
    <aside className="w-64 bg-white h-full shadow-md">
      <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-800">SwiftEdit</h2>
      </div>
      <nav className="mt-8">
        <Link href="/dashboard" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
          <Home className="mr-3 h-5 w-5" />
          Dashboard
        </Link>
        <Link href="/dashboard/projects" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
          <Film className="mr-3 h-5 w-5" />
          Projects
        </Link>
        <Link href="/dashboard/settings" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
          <Settings className="mr-3 h-5 w-5" />
          Settings
        </Link>
      </nav>
      <div className="absolute bottom-0 w-full p-4">
        <button className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 w-full">
          <LogOut className="mr-3 h-5 w-5" />
          Logout
        </button>
      </div>
    </aside>
  )
}

