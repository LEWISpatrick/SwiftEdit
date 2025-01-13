'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote: "I cant wait to get my hands on SwiftEdit! The pre-order deal is unbeatable.",
    author: "Alex Johnson, Tech Reviewer"
  },
  {
    quote: "As a beta tester, I can confirm that SwiftEdit is a game-changer for content creators.",
    author: "Sarah Lee, Cooking Channel"
  },
  {
    quote: "The AI subtitle feature alone is worth the pre-order price. Its incredibly accurate!",
    author: "Mike Brown, Travel Vlogger"
  },
  {
    quote: "Ive been waiting for a tool like SwiftEdit. Cant believe its launching so soon!",
    author: "Emma Watson, Beauty Influencer"
  },
  {
    quote: "SwiftEdit is set to revolutionize video editing for small creators. Im all in!",
    author: "David Chen, Tech Startup Founder"
  },
  {
    quote: "The silence removal feature is a lifesaver. No more tedious manual editing!",
    author: "Olivia Rodriguez, Lifestyle Blogger"
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
    <section className="w-full py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#0A2540] mb-16">
          Loved by Small Creators Everywhere
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-lg shadow-lg">
            <p className="text-2xl italic mb-6 text-gray-700">"{testimonials[currentIndex].quote}"</p>
            <p className="text-right font-semibold text-[#007BFF] text-lg">- {testimonials[currentIndex].author}</p>
          </div>
          <div className="flex justify-center mt-8">
            <Button variant="outline" onClick={prevTestimonial} className="mr-4 text-[#0A2540] hover:bg-[#007BFF] hover:text-white">
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button variant="outline" onClick={nextTestimonial} className="text-[#0A2540] hover:bg-[#007BFF] hover:text-white">
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

