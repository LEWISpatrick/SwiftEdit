import { Button } from "@/components/ui/button"

export default function CtaSection() {
  return (
    <section className="w-full py-20 bg-[#0A2540] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Ready to Streamline Your Video Editing?
        </h2>
        <Button size="lg" className="bg-[#007BFF] hover:bg-[#0056b3] text-white">
          Get Started for Free
        </Button>
      </div>
    </section>
  )
}

