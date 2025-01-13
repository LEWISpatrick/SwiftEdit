import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function CtaSection() {
  return (
    <section className="w-full py-20 bg-gradient-to-r from-[#0A2540] to-[#1E3A8A] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Dont Miss This Limited-Time Offer!
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Get lifetime access to SwiftEdit for just $5 during our pre-order period. Transform your video editing process today!
        </p>
        <Link href="#pricing">
          <Button size="lg" className="bg-[#007BFF] hover:bg-[#0056b3] text-white text-lg py-6 px-8 rounded-full transition-transform hover:scale-105">
            Pre-order Now for $5
          </Button>
        </Link>
      </div>
    </section>
  )
}

