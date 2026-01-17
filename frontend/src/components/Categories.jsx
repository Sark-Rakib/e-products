export default function CategoriesSection() {
  return (
    <section className="mb-15 bg-gray-50 p-10 rounded-lg">
      <h2 className="text-4xl font-bold text-center mb-12">
        Popular <span className="text-sky-400">Categories</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {["Mobile", "Laptops", "HeadPhone", "Earbuds"].map((cat) => (
          <div
            key={cat}
            className="px-8 py-4 bg-white shadow rounded-lg font-semibold"
          >
            {cat}
          </div>
        ))}
      </div>
    </section>
  );
}
