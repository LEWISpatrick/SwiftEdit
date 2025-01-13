import { Button } from "@/components/ui/button"

const pricingPlans = [
  {
    title: "Per Video",
    price: "$5",
    description: "Perfect for occasional use",
    features: ["AI subtitle generation", "Silence removal", "One-time payment"]
  },
  {
    title: "Lifetime Access",
    price: "$30",
    description: "Best value for regular creators",
    features: ["Unlimited video processing", "All features included", "Future updates"]
  }
]

export default function PricingSection() {
  return (
    <section className="w-full py-20 bg-white" id="pricing">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0A2540] mb-12">
          Fair Pricing for Creators
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
              <p className="text-4xl font-bold text-[#007BFF] mb-4">{plan.price}</p>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <ul className="mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="mb-2">{feature}</li>
                ))}
              </ul>
              <Button className="bg-[#007BFF] hover:bg-[#0056b3] text-white w-full">
                Choose Plan
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

