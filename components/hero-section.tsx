





import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center  text-center px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold text-[#0A2540] mb-6 leading-tight">
        Focus on your Videos,<br/>
      
        Not video <span className="text-[#007BFF]">editing.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Effortlessly add subtitles and remove silences with AI-powered editing.
        </p>
        <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 mb-8 inline-block">
          
          <Link href="#pricing">
            <Button size="lg" className="bg-[#007BFF] hover:bg-[#0056b3] text-white text-lg py-6 px-8 rounded-full transition-transform hover:scale-105">
              Get Lifetime Access for $5
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

