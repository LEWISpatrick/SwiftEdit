'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote: "SwiftEdit has revolutionized my workflow. I can focus on creating content, not editing it.",
    author: "Alex Johnson, Tech Reviewer"
  },
  {
    quote: "The AI subtitle feature is a game-changer. It's accurate and saves me hours of work.",
    author: "Sarah Lee, Cooking Channel"
  },
  {
    quote: "Simple, fast, and effective. SwiftEdit is now an essential part of my video production process.",
    author: "Mike Brown, Travel Vlogger"
  }
]

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0A2540] mb-12">
          Loved by Small Creators Everywhere
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-xl italic mb-4">"{testimonials[currentIndex].quote}"</p>
            <p className="text-right font-semibold">- {testimonials[currentIndex].author}</p>
          </div>
          <div className="flex justify-center mt-8">
            <Button variant="outline" onClick={prevTestimonial} className="mr-4">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" onClick={nextTestimonial}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

