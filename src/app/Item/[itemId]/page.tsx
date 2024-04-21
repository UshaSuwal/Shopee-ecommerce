"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export default function ProductDetails({ params }: any) {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [item, setItem] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    if (!id) return;
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data: Product) => setItem(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  const addToCart = () => {
    if (item) {
      const newItem = { ...item, quantity };
      setCart([...cart, newItem]);
      alert("Added to cart!");
    }
  };

  return (
    <div className="mt-32 mx-auto max-w-2xl">
      {item ? (
        <div key={item.id} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="product-images">
            <img
              src={selectedImage || item.thumbnail}
              alt={item.title}
              className="mb-4 rounded-lg shadow-md"
            />
            <div className="thumbnails grid grid-cols-5 gap-2">
              {item.images.map(
                (image, index) =>
                    index !== 0 && index !== 1 && (
                    <img
                      key={index}
                      src={image}
                      alt={`Image ${index + 1}`}
                      className="w-full h-auto rounded-lg shadow-md cursor-pointer"
                      onClick={() => setSelectedImage(image)}
                    />
                  )
              )}
            </div>
          </div>
          <div className="product-info">
            <h2 className="text-3xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <p className="text-2xl text-amber-600 font-semibold mb-2">
              ${item.price}
            </p>
            {item.discountPercentage > 0 && (
              <p className="text-sm text-gray-600 mb-2">
                Discount: {item.discountPercentage}%
              </p>
            )}
            <p className="text-sm text-gray-600 mb-2">Rating: {item.rating}</p>
            <p className="text-sm text-gray-600 mb-2">Brand: {item.brand}</p>
            <p className="text-sm text-gray-600 mb-2">
              Category: {item.category}
            </p>
            <p className="text-sm text-gray-600 mb-4">In Stock: {item.stock}</p>
            <div className="mb-4">
              <label htmlFor="quantity" className="text-sm text-gray-600 mr-2">
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                min={1}
                max={item.stock}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="px-2 py-1 border border-gray-300 rounded"
              />
            </div>
            <button
              onClick={addToCart}
              className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
