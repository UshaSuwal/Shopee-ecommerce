'use client'
import React, { useEffect, useState } from "react";
import { Item } from "./Item/page";
import { useDispatch, useSelector } from "react-redux";
import { fetchproductRequest } from "../redux/actions/productActions";
import { Product } from "./DataType";

export default function Home() {
  const items = useSelector((state: { product: Product[] }) => state.product);
  const dispatch = useDispatch();

  const [searchItem, setSearchItem] = useState<string>("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data: { products: Product[] }) => dispatch(fetchproductRequest(data.products)));
  }, []);

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div className="container mx-auto mt-32 flex">
      <div className="w-1/4 ">
        <div className="fixed m-10">
          <label className="block text-gray-700 font-bold mb-2">Search Item</label>
          <input
            type="text"
            placeholder="Search items..."
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
      <div className="w-3/4 pl-1 ml-1 mr-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ">
              <Item item={item} />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-700">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
