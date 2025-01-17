import { Metadata } from 'next'
import { ProjectList } from '@/components/project-list'
import { CreateProjectButton } from '@/components/create-project-button'

export const metadata: Metadata = {
  title: 'Dashboard | SwiftEdit',
  description: 'Manage your video editing projects',
}

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard 💨</h1>
      <CreateProjectButton />
      <ProjectList />
    </div>
  )
}