'use client'

import { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Trash2, Upload, ChevronDown, ChevronUp } from 'lucide-react'
import { VideoList } from '@/components/video-list'

interface Project {
  id: string
  name: string
  videos: string[]
}

interface ProjectCardProps {
  project: Project
  onDelete: (id: string) => void
}

export function ProjectCard({ project, onDelete }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          {project.name}
          <Button variant="ghost" size="sm" onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? <ChevronUp /> : <ChevronDown />}
          </Button>
        </CardTitle>
      </CardHeader>
      {isExpanded && (
        <CardContent>
          <VideoList videos={project.videos} />
          <Button className="w-full mt-4" variant="outline">
            <Upload className="mr-2 h-4 w-4" /> Upload Video
          </Button>
        </CardContent>
      )}
      <CardFooter className="justify-between">
        <Button variant="destructive" onClick={() => onDelete(project.id)}>
          <Trash2 className="mr-2 h-4 w-4" /> Delete Project
        </Button>
      </CardFooter>
    </Card>
  )
}

