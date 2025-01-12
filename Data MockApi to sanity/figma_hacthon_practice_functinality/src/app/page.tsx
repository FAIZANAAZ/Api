"use client";

import { client } from "@/sanity/lib/client";
import { fetchAndUploadProducts } from "@/services/api";
import Image from "next/image";
import { useEffect, useState } from "react";

const Home = () => {
  const [Card, setCard] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await client.fetch(`*[_type == "product" ][]{
        name,
        description,
        price,
        discountPercentage,
        priceWithoutDiscount,
        rating,
        ratingCount,
        tags,
        sizes,
        "image": image.asset->url
      }
    `);
      setCard(products);
      if (!products || products.length === 0) {
        await fetchAndUploadProducts();

        const products = await client.fetch(`*[_type == "product" ][]{
          name,
          description,
          price,
          discountPercentage,
          priceWithoutDiscount,
          rating,
          ratingCount,
          tags,
          sizes,
          "image": image.asset->url
        }
      `);
        setCard(products);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-10 py-12 gap-4 flex flex-col justify-center items-center">
      <h1 className="text-white text-[40px]">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {Card.map((product: any, index: number) => {
          const discountedPrice =
            product.discountPercentage > 0
              ? (
                  product.price -
                  (product.price * product.discountPercentage) / 100
                ).toFixed(2)
              : product.price;

          return (
            <div
              key={index}
              data-aos="flip-left"
              className="group flex flex-col rounded-lg overflow-hidden bg-white 
                transition-all duration-300 border border-green-500 
                hover:-translate-y-1
                hover:shadow-[0_0_15px_3px_rgb(34,197,94,0.7)]"
            >
              {/* Product Image */}
              <div className="relative h-[300px] w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain flex justify-center items-center p-2 transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Product Details */}
              <div className="flex flex-col p-6">
                {/* Name */}
                <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="mt-2 text-gray-600 line-clamp-3">
                  {product.description}
                </p>

                {/* Price */}
                <div className="mt-4 text-gray-900">
                  <p className="text-lg font-bold">Price: ${discountedPrice}</p>
                  {product.discountPercentage > 0 && (
                    <p className="text-sm line-through text-gray-500">
                      Original: ${product.price}
                    </p>
                  )}
                </div>

                {/* Ratings */}
                <div className="mt-2 text-yellow-500 flex items-center">
                  <span className="text-sm font-medium">{product.rating} / 5</span>
                  <span className="ml-2 text-gray-600">
                    ({product.ratingCount} ratings)
                  </span>
                </div>

                {/* Tags */}
                {product.tags?.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {product.tags.map((tag: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Sizes */}
                {product.sizes?.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {product.sizes.map((size: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                )}

                {/* Button */}
                <div className="mt-6">
                  <button className="w-full px-4 py-2 bg-green-500 text-white text-center rounded-lg hover:bg-green-600 transition-colors duration-300">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

