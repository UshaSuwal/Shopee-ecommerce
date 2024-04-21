"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { fetchsingleitem, addToCart as addToCartAction } from "@/redux/actions/productActions";

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

export default function ProductDetails() {
    const searchParams = useSearchParams();
    const id = parseInt(searchParams.get('id') || '');
  const [quantity, setQuantity] = useState<number>(1);
  const [cart, setCart] = useState<Product[]>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchsingleitem(id));
    }
  }, [id, dispatch]);

  const item = useSelector((state: { items: Product }) => state.items);

  const addToCart = () => {
    const newItem = { ...item, quantity };
    setCart([...cart, newItem]);
    alert("Added to cart!");
    dispatch(addToCartAction(item.id))
  };

  const buyNow = () => {
    const newItem = { ...item, quantity };
    setCart([newItem]);
    alert("Buy Now: Proceeding to checkout!");
  };

  return (
    <div className="mt-32 mx-auto max-w-2xl">
      {item ? (
        <div key={item.id} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="product-images">
            <img src={item.thumbnail} alt={item.title} className="mb-4 rounded-lg shadow-md" />
            <div className="thumbnails grid grid-cols-5 gap-2">
              {item.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="w-full h-auto rounded-lg shadow-md cursor-pointer"
                />
              ))}
            </div>
          </div>
          <div className="product-info">
            <h2 className="text-3xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <p className="text-2xl text-amber-600 font-semibold mb-2">${item.price}</p>
            {item.discountPercentage > 0 && (
              <p className="text-sm text-gray-600 mb-2">Discount: {item.discountPercentage}%</p>
            )}
            <p className="text-sm text-gray-600 mb-2">Rating: {item.rating}</p>
            <p className="text-sm text-gray-600 mb-2">Brand: {item.brand}</p>
            <p className="text-sm text-gray-600 mb-2">Category: {item.category}</p>
            <p className="text-sm text-gray-600 mb-4">In Stock: {item.stock}</p>
            <div className="mb-4">
              <label htmlFor="quantity" className="text-sm text-gray-600 mr-2">Quantity:</label>
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
            <div className="flex">
              <button
                onClick={addToCart}
                className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded mr-2"
              >
                Add to Cart
              </button>
              <button
                onClick={buyNow}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
