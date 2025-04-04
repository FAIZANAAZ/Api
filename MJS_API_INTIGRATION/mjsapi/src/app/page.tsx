"use client"
import { client } from "@/sanity/lib/client";
import { get } from "@/service/api";
import { useState, useEffect } from "react";

interface Product {
  isNew: boolean;
  name: string;
  _createdAt: string;
  colors: string[];
  sizes: string[];
  category: string;
  discountPercent: number;
  _updatedAt: string;
  image: string;
  _id: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
const [error, setError] = useState<string | null>(null);

 useEffect(() => {
  
  try {
    const fetchProducts = async () => {
      const api = await get();
      setProducts(api);
    };
    fetchProducts();
  } catch (error) {
    setError("Failed to fetch products");
  }
 },[]);

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 py-10 px-5">
        <h1 className="text-3xl font-bold text-center mb-8">Error</h1>
        <p className="text-red-500 text-center">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <h1 className="text-3xl font-bold text-center mb-8">Latest Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="shadow-lg rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all bg-white"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              {product.isNew && (
                <span className="bg-green-500 text-white px-3 py-1 rounded-full mb-2 inline-block">
                  New Arrival
                </span>
              )}
              <h2 className="text-lg font-bold mb-1">{product.name}</h2>
              <p className="text-gray-600 text-sm">Category: {product.category}</p>
              {product.discountPercent > 0 && (
                <span className="text-red-500 text-sm font-bold">
                  {product.discountPercent}% OFF
                </span>
              )}
              <div className="mt-3 flex gap-2">
                {product.colors.map((color, index) => (
                  <span
                    key={index}
                    className="w-5 h-5 rounded-full border border-gray-400"
                    style={{ backgroundColor: color }}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
