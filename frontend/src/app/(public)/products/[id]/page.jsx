"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Next.js 13 app router
import useAxiosSecure from "@/lib/api";
import Image from "next/image";
import Link from "next/link";

export default function ProductDetails() {
  const { id } = useParams(); // get ID from URL
  const axiosSecure = useAxiosSecure();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const res = await axiosSecure.get(`/api/items/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load product.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, axiosSecure]);

  if (loading) {
    return <p className="text-center py-12">Loading product...</p>;
  }

  if (error) {
    return <p className="text-center py-12 text-red-500">{error}</p>;
  }

  if (!product) {
    return <p className="text-center py-12 text-red-500">Product not found!</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6 min-h-screen">
      <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

      {/* Product Image */}
      <div className="relative w-80 h-100 md:w-100 md:h-110 mb-4">
        <Image
          src={product.image.replace("i.ibb.co.com", "i.ibb.co")} // safeguard
          alt={product.name}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Product Description */}
      <p className="text-gray-700 mb-4">{product.description}</p>

      {/* Price */}
      <div className="flex justify-between">
        <p className="text-2xl font-semibold text-green-600">
          ${product.price?.toLocaleString()}
        </p>
        <Link href="/products">
          <button className="bg-blue-600 p-2 rounded cursor-pointer hover:bg-blue-400 text-white">
            Back To ALL Products
          </button>
        </Link>
      </div>
    </div>
  );
}
