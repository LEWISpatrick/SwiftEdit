'use client'

import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-[#0A2540] mb-4">
        Create. Upload. Repeat.<br />Let SwiftEdit Handle the Rest.
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl">
        Effortlessly add subtitles and remove silences with AI-powered editing.
      </p>
      <Button
  size="lg"
  className="bg-[#007BFF] hover:bg-[#0056b3] text-white"
  onClick={() => (window.location.href = '#pricing')}
>        Get Started for Free
      </Button>
    </section>
  )
}

