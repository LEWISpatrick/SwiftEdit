'use client'

import { useState } from 'react'
import { ProjectCard } from '@/components/project-card'

// This is mock data. In a real application, you'd fetch this from an API.
const initialProjects = [
  { id: '1', name: 'Summer Vlog Series', videos: ['beach.mp4', 'hiking.mp4'] },
  { id: '2', name: 'Cooking Tutorials', videos: ['pasta.mp4', 'cake.mp4', 'smoothie.mp4'] },
]

export function ProjectList() {
  const [projects, setProjects] = useState(initialProjects)

  const deleteProject = (id: string) => {
    setProjects(projects.filter(project => project.id !== id))
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} onDelete={deleteProject} />
      ))}
    </div>
  )
}

