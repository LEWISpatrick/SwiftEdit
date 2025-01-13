import { Zap, Scissors, Workflow } from 'lucide-react'

const features = [
  {
    icon: <Zap className="h-8 w-8 text-[#007BFF]" />,
    title: "AI Subtitle Sync",
    description: "No manual syncing—just accurate captions instantly."
  },
  {
    icon: <Scissors className="h-8 w-8 text-[#007BFF]" />,
    title: "Silence Remover",
    description: "Save hours trimming awkward pauses."
  },
  {
    icon: <Workflow className="h-8 w-8 text-[#007BFF]" />,
    title: "Simple Workflow",
    description: "Designed for creators who need speed and precision."
  }
]

export default function FeaturesSection() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0A2540] mb-12">
          Why Choose SwiftEdit?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

