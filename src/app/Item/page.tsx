'use client'
import React from 'react';
import Link from 'next/link';
import { Product } from "../../app/DataType";

export function Item({ item }: { item: Product }) {
  return (
    <div key={item.id} className="border border-amber-200 rounded-lg p-1 m-1 bg-orange-50 max-w-xs h-3/5 mb-5 overflow-hidden">
      <h2 className="text-sm font-semibold mb-1 text-amber-900">{item.title}</h2>
      <p className="text-xs text-gray-600 mb-1">ID: {item.id}</p>
      <div className="flex justify-center">
        <Link href={`/Item/${item.id}?id=${item.id}`}>
          <div className="flex ml-6 justify-center w-[80%]">
            <img
              src={item.images[0]}
              alt={item.title}
              className="h-auto mb-1 rounded-lg px-1 py-1"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
