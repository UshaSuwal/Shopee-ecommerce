'use client'
import React, { useEffect, useState } from "react";
import { Item } from "./Item/page";

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

export default function Home() {
  const [items, setItems] = useState<Product[]>([]);
  const [searchItem, setSearchItem] = useState<string>("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data: { products: Product[] }) => setItems(data.products));
  }, []);

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div className="mt-24">
      <div className="mb-4">
        <label>Search Item</label>
        <input
          type="text"
          placeholder="Search items..."
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded"
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {filteredItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
