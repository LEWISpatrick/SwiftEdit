import { Zap, Scissors, Workflow } from 'lucide-react'

const features = [
  {
    icon: <Zap className="h-12 w-12 text-[#007BFF]" />,
    title: "AI Subtitle Sync",
    description: "No manual syncing—just accurate captions instantly."
  },
  {
    icon: <Scissors className="h-12 w-12 text-[#007BFF]" />,
    title: "Silence Remover",
    description: "Save hours trimming awkward pauses."
  },
  {
    icon: <Workflow className="h-12 w-12 text-[#007BFF]" />,
    title: "Simple Workflow",
    description: "Designed for creators who need speed and precision."
  }
]

export default function FeaturesSection() {
  return (
    <section className="w-full py-20 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#0A2540] mb-16">
          Why Choose SwiftEdit?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center bg-white/50 backdrop-blur-sm rounded-lg p-8 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-[#0A2540]">{feature.title}</h3>
              <p className="text-gray-600 text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

