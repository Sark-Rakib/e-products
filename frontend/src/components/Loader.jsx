import React from "react";

const ProductLoader = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      {/* Spinner */}
      <div className="w-14 h-14 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>

      {/* Text */}
      <p className="mt-4 text-gray-600 font-medium text-lg">
        Loading E-Products...
      </p>
    </div>
  );
};

export default ProductLoader;
