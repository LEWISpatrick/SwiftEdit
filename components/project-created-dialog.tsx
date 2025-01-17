'use client'

import { useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import Confetti from 'react-confetti'

interface ProjectCreatedDialogProps {
  isOpen: boolean
  onClose: () => void
  projectName: string
  fileNames: string[]
}

export function ProjectCreatedDialog({ isOpen, onClose, projectName, fileNames }: ProjectCreatedDialogProps) {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener('resize', updateWindowSize)
    updateWindowSize()

    return () => window.removeEventListener('resize', updateWindowSize)
  }, [])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Project Created Successfully!</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <p className="font-semibold">Project Name: {projectName}</p>
          <p className="mt-2">Videos added:</p>
          <ul className="list-disc list-inside mt-1">
            {fileNames.map((fileName, index) => (
              <li key={index}>{fileName}</li>
            ))}
          </ul>
        </div>
        <Button onClick={onClose} className="mt-4">Close</Button>
      </DialogContent>
      {isOpen && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={200}
        />
      )}
    </Dialog>
  )
}

