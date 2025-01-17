'use client'

import { useState, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { X, Upload, FileVideo } from 'lucide-react'
import { useDropzone } from 'react-dropzone'
import { ProjectCreatedDialog } from '@/components/project-created-dialog'

export function CreateProjectButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [projectName, setProjectName] = useState('')
  const [step, setStep] = useState(1)
  const [files, setFiles] = useState<File[]>([])
  const [uploadProgress, setUploadProgress] = useState(0)
  const [showConfirmation, setShowConfirmation] = useState(false)

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'video/*': ['.mp4', '.mov', '.avi', '.wmv']
    },
    onDrop: (acceptedFiles) => {
      setFiles(prevFiles => [...prevFiles, ...acceptedFiles])
    }
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (step === 1) {
      setStep(2)
    } else {
      // Here you would typically create the project and upload videos in your backend
      console.log('Creating project:', projectName, 'with videos:', files)
      
      // Simulating upload progress
      for (let i = 0; i <= 400; i += 10) {
        setUploadProgress(i)
        await new Promise(resolve => setTimeout(resolve, 50))
      }

      setIsOpen(false)
      setShowConfirmation(true)
    }
  }

  const removeFile = (fileToRemove: File) => {
    setFiles(files.filter(file => file !== fileToRemove))
  }

  const handleConfirmationClose = useCallback(() => {
    setShowConfirmation(false)
    setProjectName('')
    setFiles([])
    setStep(1)
    setUploadProgress(0)
  }, [])

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button>Create New Project</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{step === 1 ? 'Create New Project' : 'Upload Videos'}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            {step === 1 ? (
              <div>
                <Label htmlFor="projectName">Project Name</Label>
                <Input
                  id="projectName"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  placeholder="Enter project name"
                />
              </div>
            ) : (
              <div>
                <div {...getRootProps()} className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-gray-400 transition-colors">
                  <input {...getInputProps()} />
                  {isDragActive ? (
                    <p>Drop the video files here ...</p>
                  ) : (
                    <div>
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <p>Drag or drop some video files here, or click to select files</p>
                    </div>
                  )}
                </div>
                {files.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {files.map((file, index) => (
                      <li key={index} className="flex items-center justify-between bg-gray-100 p-2 rounded">
                        <div className="flex items-center">
                          <FileVideo className="h-5 w-5 mr-2" />
                          <span className="text-sm">{file.name}</span>
                        </div>
                        <Button variant="ghost" size="sm" onClick={() => removeFile(file)}>
                          <X className="h-4 w-4" />
                        </Button>
                      </li>
                    ))}
                  </ul>
                )}
                {uploadProgress > 0 && (
                  <div className="mt-4">
                    <Progress value={uploadProgress} className="w-full" />
                  </div>
                )}
              </div>
            )}
            <div className="flex justify-between">
              {step === 2 && (
                <Button type="button" variant="outline" onClick={() => setStep(1)}>
                  Back
                </Button>
              )}
              <Button type="submit">
                {step === 1 ? 'Next' : 'Create Project'}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
      <ProjectCreatedDialog
        isOpen={showConfirmation}
        onClose={handleConfirmationClose}
        projectName={projectName}
        fileNames={files.map(file => file.name)}
      />
    </>
  )
}

