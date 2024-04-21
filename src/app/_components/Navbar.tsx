'use client'
import React from 'react';
import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="w-full bg-amber-100 p-4 text-white top-0 fixed z-50">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-5xl text-black font-bold ml-10" style={{ fontFamily: 'Cinzel, serif' }}>Sho<span className="text-black">pee <i className="fa-brands fa-shopify text-3xl"></i></span></span>
        <span className="mr-10">
        <Link href='/cart'>
          
        <i className="fas fa-cart-shopping text-3xl text-black"></i>
      
          </Link>

          
        </span>
      </div>
    </nav>
  )
}




