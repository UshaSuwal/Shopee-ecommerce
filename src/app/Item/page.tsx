'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface ItemData {
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

export function Item({ item }: { item: ItemData }) {
  return (
    <div key={item.id} className="border border-amber-200 rounded-lg p-4 m-4 w-96 bg-orange-50">
      <h2 className="text-2xl font-bold mb-4 text-amber-900">{item.title}</h2>
      <p className="text-gray-600 mb-3">ID: {item.id}</p>
      <div className="flex justify-center">
        <Link href={`/Item/${item.id}?id=${item.id}`}>
          
            <img
              src={item.images[0]}
              alt={item.title}
              className="w-fit h-auto mb-2 rounded-lg px-4 py-2 mb-2"
              style={{ maxWidth: '500px', maxHeight: '200px' }}
            />
        
        </Link>
      </div>
      <p className="text-xl font-semibold text-amber-900">Price: ${item.price}</p>
    </div>
  );
}
