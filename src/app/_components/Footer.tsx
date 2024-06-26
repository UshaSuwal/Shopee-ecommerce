'use client'
import React from "react";
export function Footer() {
    return (
      <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <i className="fa-brands fa-shopify text-4xl text-amber-900 "></i>
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-amber-900">Shopee</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-amber-700">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">About</a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Contact</a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm  sm:text-center text-amber-700">© 2023 <a href="#" className="hover:underline">Shopee</a>. All Rights Reserved.</span>
        </div>
      </footer>
    );
  }
  