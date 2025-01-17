'use client'

import { useState } from 'react'
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd'
import { Video, Move } from 'lucide-react'

interface VideoListProps {
  videos: string[]
}

export function VideoList({ videos: initialVideos }: VideoListProps) {
  const [videos, setVideos] = useState(initialVideos)

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return

    const items = Array.from(videos)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    setVideos(items)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="videos">
        {(provided: any) => (
          <ul {...provided.droppableProps} ref={provided.innerRef} className="space-y-2">
            {videos.map((video, index) => (
              <Draggable key={video} draggableId={video} index={index}>
                {(provided: any) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="flex items-center p-2 bg-gray-100 rounded-md"
                  >
                    <Video className="mr-2 h-4 w-4" />
                    <span className="flex-grow">{video}</span>
                    <Move className="h-4 w-4 text-gray-400" />
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  )
}

