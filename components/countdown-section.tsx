
export default function CountdownSection() {

  return (
    <section className="w-full py-12 bg-[#0A2540] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Pre-order Offer Ends By:
        </h2>
        <div className="flex justify-center space-x-4">
            <div  className="text-center">
              <div className="text-4xl font-bold">10/Feb</div>
              <div className="text-sm uppercase">2025</div>
            </div>
        </div>
      </div>
    </section>
  )
}

