// /frontend/app/(public)/about/page.js

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            About E-Products
          </h1>
          <p className="max-w-4xl mx-auto text-xl text-gray-600">
            E-Products is a modern e-commerce platform built to deliver a
            seamless, secure, and enjoyable online shopping experience. We focus
            on quality products, transparent pricing, and customer satisfaction.
          </p>
        </header>

        {/* Decorative Divider */}
        <div className="flex justify-center mb-16">
          <div className="w-24 h-1 bg-blue-600 rounded-full"></div>
        </div>

        {/* Mission, Vision, Values Section */}
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Mission Card */}
          <div className="bg-white rounded-xl shadow-xl p-8 text-center border-t-4 border-blue-600 transition hover:shadow-2xl hover:-translate-y-1 duration-300">
            <div className="text-blue-600 mb-4 mx-auto">
              <svg
                className="w-10 h-10 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h18v4H3V3zm0 6h18v12H3V9zm4 4h10"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-3 text-gray-900">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700">
              To make online shopping simple and reliable by offering carefully
              selected products, smooth checkout, and fast, secure delivery.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-xl shadow-xl p-8 text-center border-t-4 border-green-600 transition hover:shadow-2xl hover:-translate-y-1 duration-300">
            <div className="text-green-600 mb-4 mx-auto">
              <svg
                className="w-10 h-10 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-3 text-gray-900">
              Our Vision
            </h2>
            <p className="text-lg text-gray-700">
              To become a trusted e-commerce destination where customers
              confidently discover, compare, and purchase products with ease.
            </p>
          </div>

          {/* Values Card */}
          <div className="bg-white rounded-xl shadow-xl p-8 text-center border-t-4 border-indigo-600 transition hover:shadow-2xl hover:-translate-y-1 duration-300">
            <div className="text-indigo-600 mb-4 mx-auto">
              <svg
                className="w-10 h-10 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 
                     2-.9 2-2-.9-2-2-2zm0 12
                     c-4.4 0-8-3.6-8-8s3.6-8 8-8
                     8 3.6 8 8-3.6 8-8 8z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-3 text-gray-900">
              Our Values
            </h2>
            <p className="text-lg text-gray-700">
              Customer Trust, Product Quality, Secure Payments, and Continuous
              Improvement guide everything we do at E-Products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
