"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { fetchsingleitem } from "@/redux/actions/productActions";
import { useEffect } from "react";
import Link from "next/link";

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

export default function Checkout() {
  const searchParams = useSearchParams();
  const id = parseInt(searchParams.get("id") || "");

  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchsingleitem(id));
    }
  }, [id, dispatch]);

  const items = id
    ? useSelector((state: { items: Product[] }) => state.items)
    : useSelector((state: { cart: Product[] }) => state.cart);

    console.log("items in checkout",items)

  const totalPrice =
    id && items
      ? items.price
      : items?.reduce((total, item) => total + item.price, 0);

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-xl w-full">
        {id ? (
          <div>
            <h1 className="text-2xl font-bold mb-4">Checkout</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h2 className="text-xl font-semibold mb-2">Your Cart:</h2>
                <ul>
                  <li key={items.id} className="mb-4">
                    <div className="flex items-center">
                      <img
                        src={items.thumbnail}
                        alt={items.title}
                        className="w-16 h-16 mr-4 rounded"
                      />
                      <div>
                        <h3 className="font-semibold">{items.title}</h3>
                        
                        <p className="text-gray-600">${items.price}</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Total:</h2>
                <p className="text-2xl font-bold">${totalPrice.toFixed(2)}</p>
                <Link href="#">
                  <button className="bg-blue-500 text-white px-4 py-2 mt-4 inline-block rounded hover:bg-blue-600">
                    Proceed to Payment
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h1 className="text-2xl font-bold mb-4">Checkout</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h2 className="text-xl font-semibold mb-2">Your Cart:</h2>
                {items.length === 0 ? (
                  <p>Your cart is empty.</p>
                ) : (
                  <ul>
                    {items.map((item) => (
                      <li key={item.id} className="mb-4">
                        <div className="flex items-center">
                          <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="w-16 h-16 mr-4 rounded"
                          />
                          <div>
                            <h3 className="font-semibold">{item.title}</h3>
                            
                            <p className="text-gray-600">${item.price}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Total:</h2>
                <p className="text-2xl font-bold">${totalPrice.toFixed(2)}</p>
                <Link href="#">
                  <button className="bg-blue-500 text-white px-4 py-2 mt-4 inline-block rounded hover:bg-blue-600">
                    Proceed to Payment
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}