"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { fetchsingleitem, addToProduct } from "@/redux/actions/productActions";
import { useEffect } from "react";
import Link from "next/link";
import { Product } from "../../app/DataType";

export default function Checkout() {
  const searchParams = useSearchParams();
  const id = parseInt(searchParams.get("id") || "");
  const quantity = searchParams.get("quantity");

  const dispatch = useDispatch();

  

  useEffect(() => {
    if (id) {
      dispatch(fetchsingleitem(id));
      dispatch(addToProduct(id, quantity));
    }
  }, [id, quantity, dispatch]);

  const items = id
    ? useSelector((state) => state.items)
    : useSelector((state: { cart: Product[] }) => state.cart);

  return (
    <div className="flex justify-center items-center bg-gray-100 py-32 ">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-xl w-full">
        {id ? (
          <div>
            <h1 className="text-2xl font-bold mb-4 text-amber-900">Checkout</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h2 className="text-lg font-semibold mb-2">Your Cart:</h2>
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
                        <p className="text-gray-600">
                          Quantity:{items.quantity}
                        </p>
                        <p className="text-gray-600">
                          Discount:{items.discountPercentage}%
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              
              
                <h2 className="text-xl font-semibold mb-2">Total:</h2>
                <p className="text-lg font-bold">${(items.price * items.quantity)-(((items.price * items.discountPercentage)/100)*items.quantity)}</p>
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
            <h1 className="text-2xl font-bold mb-4 text-amber-900">Checkout</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h2 className="text-lg font-semibold mb-2">Your Cart:</h2>
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
                            <p className="text-gray-600">
                              Quantity:{item.quantity}
                            </p>
                            <p className="text-gray-600">
                          Discount:{item.discountPercentage}%
                        </p>
                          </div>
                        </div>
                        <h2 className="text-xl font-semibold mb-2">Total:</h2>
                        <p className="text-lg font-bold">
                          $
                          {(item.price * item.quantity)-(((item.price * item.discountPercentage)/100)*item.quantity)}
                        </p>
                        
                      </li>
                    ))}
                  </ul>
                )}
              
              
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
