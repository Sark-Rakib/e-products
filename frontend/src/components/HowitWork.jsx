export default function HowItWorksSection() {
  return (
    <section className="mb-15 bg-gray-50 p-10 rounded-lg">
      <h2 className="text-4xl font-bold text-center mb-12">
        How It <span className="text-sky-400">Works</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h3 className="font-bold text-xl mb-2">1. Browse</h3>
          <p>Explore our product collection</p>
        </div>
        <div className="text-center">
          <h3 className="font-bold text-xl mb-2">2. Purchase</h3>
          <p>Secure and fast checkout</p>
        </div>
        <div className="text-center">
          <h3 className="font-bold text-xl mb-2">3. Download</h3>
          <p>Instant access to files</p>
        </div>
      </div>
    </section>
  );
}
