'use client'
import React from 'react';
import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="w-full bg-amber-100 p-4 text-white top-0 fixed z-50">
      <div className="container mx-auto flex justify-between items-center">
      <Link href='/'>
        <span className="text-5xl text-black font-bold ml-10" style={{ fontFamily: 'Cinzel, serif' }}>Sho<span className="text-black">pee <i className="fa-brands fa-shopify text-3xl"></i> </span></span>
        </Link>
        <span className="mr-10">
        <Link href='/cart'>
          
        <i className="fas fa-cart-shopping text-2xl text-black ml-[-11rem] "></i>
        
      
          </Link>
          <i className="fa-solid fa-user-pen text-2xl text-black ml-7"></i>
        <i className="fa-solid fa-right-from-bracket text-2xl text-black ml-7"></i>

          
        </span>
      </div>
    </nav>
  )
}




