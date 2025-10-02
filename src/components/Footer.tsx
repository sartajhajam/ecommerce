import React from 'react'
import Link from "next/link";
import Image from "next/image";
export const Footer = () => {
  return (
    <div className='mt-16 flex flex-col items-center md:flex-row md:items-start md:justify-between md:gap-0 bg-gray-800 p-8 rounded-lg'>
        <div className='flex flex-col gap-4 text-center md:text-start'>
        <Link href="/" className="flex items-center ">
        <Image
          src="/logo.png"
          alt="logo"
          width={36}
          height={36}
          className="w-6 h-6 md:w-9 md:h-9"
        />
         <p className="hidden md:block text-md font-medium  tracking-wider text-gray-200">Kani Arte</p>
         </Link>
         <p className='text-sm text-gray-400 '> 2025 Kani Arte.</p>
         <p className='text-sm text-gray-400 '>All rights reserved.</p>
        </div>
        
        <div className='flex flex-col text-sm text-gray-400 items-center md:items-start'>
            <p className='text-sm text-amber-500'>Links</p>
            <Link href="/" className='text-sm text-gray-400'>Home</Link>
            <Link href="/" className='text-sm text-gray-400'>Privacy Policy</Link>
            <Link href="/" className='text-sm text-gray-400'>Terms of Service</Link>
            </div>
        <div className='flex flex-col text-sm text-gray-400 items-center md:items-start'>
            <p className='text-sm text-amber-500'>Links</p>
            <Link href="/" className='text-sm text-gray-400'>All Products</Link>
            <Link href="/" className='text-sm text-gray-400'>New Arrivals</Link>
            <Link href="/" className='text-sm text-gray-400'>Best Sellar </Link>
            <Link href="/" className='text-sm text-gray-400'>Sale </Link>
            
            </div>
        <div className='flex flex-col text-sm text-gray-400 items-center md:items-start'>
            <p className='text-sm text-amber-500'>Links</p>
            
            <Link href="/" className='text-sm text-gray-400'>About</Link>
            <Link href="/" className='text-sm text-gray-400'>Contact</Link>
            <Link href="/" className='text-sm text-gray-400'>Blog</Link>
            <Link href="/" className='text-sm text-gray-400'>Affiliate Program </Link>


        </div>
    </div>
  )
}
