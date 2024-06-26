"use client";
import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { Product } from "../../app/DataType";

export default function Cart() {
  const items = useSelector((state: { cart: Product[] }) => state.cart);

  
  const totalAmountBeforeDiscounts = items.reduce(
    (acc, item) => acc + item.price * item.quantity, 
    0
  );  

  
  const totalDiscountAmount = items.reduce(
    (acc, item) => acc + (item.price * item.discountPercentage) / 100 * item.quantity, 
    0
  );  

  
  const totalAmountAfterDiscounts =totalAmountBeforeDiscounts - totalDiscountAmount;

  return (
    <div className="flex justify-center mt-32 m-20">
      <div className="w-3/5 mr-8">
        <h2 className="text-2xl font-bold text-amber-800 mb-4">Your Cart</h2>
        {items.length > 0 ? (
          <div>
            <div className="flex justify-between font-semibold mb-2">
              <div className="w-1/4">Product</div>
              <div className="w-1/6">Price</div>
              <div className="w-1/6">Discount (%)</div>
              <div className="w-1/6">Quantity</div>
              <div className="w-1/4">Total</div>
            </div>
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center border-b border-amber-300 py-4"
              >
                <div className="w-1/4 flex items-center">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded mr-4"
                  />
                  <div>{item.title}</div>
                </div>
                <div className="w-1/6">${item.price}</div>
                <div className="w-1/6">{item.discountPercentage}%</div>
                <div className="w-1/6">{item.quantity}</div> 
                <div className="w-1/4">
                  ${(item.price - (item.price * item.discountPercentage) / 100) * item.quantity} 
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
      <div className="w-2/5 bg-gray-100 p-4">
        <h2 className="text-xl font-bold text-amber-800 mb-4">Order Summary</h2>
        <div className="mb-2">
          <p>
            Total Amount Before Discounts: $
            {totalAmountBeforeDiscounts.toFixed(2)}
          </p>
          <p>Total Discount Amount: ${totalDiscountAmount.toFixed(2)}</p>
          <p>
            Total Amount After Discounts: $
            {totalAmountAfterDiscounts.toFixed(2)}
          </p>
        </div>

        <Link href={"/checkout"}>
          <button className="bg-amber-600 text-white px-4 py-2 rounded">
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}
