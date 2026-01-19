"use client";
import React, { use } from "react";
import useAxiosSecure from "@/lib/api";
import { useRouter } from "next/navigation";

const AddModel = () => {
  const axiosSecure = useAxiosSecure();

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = {
      name: e.target.name.value,
      price: e.target.price.value,
      description: e.target.description.value,
      image: e.target.image.value,
    };

    try {
      const res = await axiosSecure.post("/api/items", form);
      console.log(res.data);
      router.push("/products");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Add New Product</h2>

        <input
          type="text"
          placeholder="Product Name"
          name="name"
          className="w-full border rounded px-3 py-2 mb-3"
          required
        />

        <input
          type="number"
          placeholder="Price"
          name="price"
          className="w-full border rounded px-3 py-2 mb-3"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          className="w-full border rounded px-3 py-2 mb-3"
        ></textarea>

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          className="w-full mb-3"
          required
        />

        <button
          type="submit"
          className="w-full py-2.5 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddModel;
