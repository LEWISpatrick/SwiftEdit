import HeroSection from '@/components/hero-section'
import FeaturesSection from '@/components/features-section'
import TestimonialSection from '@/components/testimonial-section'
import PricingSection from '@/components/pricing-section'
import CtaSection from '@/components/cta-section'
import CountdownSection from '@/components/countdown-section'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <CountdownSection />
      <FeaturesSection />
      <TestimonialSection />
      <PricingSection />
      <CtaSection />
    </main>
  )
}

