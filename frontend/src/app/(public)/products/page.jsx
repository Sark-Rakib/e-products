"use client";

import { useEffect, useState } from "react";
import useAxiosSecure from "@/lib/api";
import Link from "next/link";

export default function ProductListPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure
      .get("/api/items")
      .then((res) => setProducts(res.data))
      .finally(() => setLoading(false));
  }, [axiosSecure]);

  const filteredProducts = products.filter((p) =>
    p.name?.toLowerCase().includes(search.toLowerCase()),
  );

  if (loading) return <p className="text-center mt-8">Loading products...</p>;
  if (error) return <p className="text-center mt-8 text-red-500">{error}</p>;

  return (
    <main className="max-w-7xl mx-auto p-4 md:p-8 min-h-screen">
      <div className="text-center mb-6">
        <h1 className="text-5xl font-extrabold mb-3 text-gray-900">
          All Products
        </h1>
        <p className="text-xl text-gray-600">Browse all available products.</p>
      </div>

      <div className="mb-6 text-center">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md p-2 border rounded"
        />
      </div>

      <div className="my-15 grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product._id}
            className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            {/* Product Image */}
            <div className="relative  aspect-square overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                fill="true"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 min-h-[2rem]">
                {product.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-2 min-h-[2.5rem]">
                {product.description.split(" ").slice(0, 15).join(" ")}....
              </p>

              {/* Price */}
              <div className="flex items-center gap-3">
                <span className="text-xl font-bold text-gray-900">
                  ${product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    ${product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>

              {/* Add to Cart Button */}
              <Link
                href={`/products/${product._id}`}
                className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg text-center block font-medium transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
