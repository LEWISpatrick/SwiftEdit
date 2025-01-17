'use client'
import { Button } from "@/components/ui/button"
import { Check } from 'lucide-react'

const pricingPlans = [
  {
    title: "Pre-order Lifetime Access",
    price: "$5",
    originalPrice: "$50",
    description: "Limited time offer",
    features: [
      "AI subtitle generation",
      "Silence removal",
      "Unlimited video processing",
      "All future updates",
      "90% discount"
    ]
  }
]

export default function PricingSection() {
  return (
    <section id="pricing" className="w-full py-20 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#0A2540] mb-16">
          Exclusive Pre-order Offer
        </h2>
        <div className="max-w-md mx-auto">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="border-2 border-[#007BFF] rounded-lg p-8 text-center bg-white/50 backdrop-blur-sm transition-all hover:shadow-lg hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-2 text-[#0A2540]">{plan.title}</h3>
              <p className="text-5xl font-bold text-[#007BFF] mb-2">{plan.price}</p>
              <p className="text-xl text-gray-500 line-through mb-4">{plan.originalPrice}</p>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <ul className="mb-8 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="mb-2 flex items-center text-gray-700">
                    <Check className="w-5 h-5 mr-2 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button 
  className="bg-[#007BFF] hover:bg-[#0056b3] text-white w-full text-lg py-6 rounded-full transition-transform hover:scale-105"
  onClick={() => {
    const newTab = window.open('https://buy.stripe.com/fZe3fb3f5bwFaTS8wC', '_blank');
    if (newTab) {
      newTab.focus();
    } else {
      alert('Please allow popups for this website');
    }
  }}
>
  Pre-order Now
</Button>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

