import React from "react";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "./SearchBar";
import ShoppingCartIcon from "./ShoppingCartIcon";
import { Bell, Home, ShoppingBag, ShoppingCart } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between border-b border-gray-200 pb-4">
      {/* LEFT SIDE */}
      <Link href="/" className="flex items-center ">
        <Image
          src="/logo.png"
          alt="logo"
          width={36}
          height={36}
          className="w-6 h-6 md:w-9 md:h-9"
        />
        <p className="hidden md:block text-md font-medium  tracking-wider">Kani Arte</p>
      </Link>
      {/* RIGHT SIDE */}
      <div className="flex items-center gap-6">
        <SearchBar />
        <Link href="/">
            <Home className="w-4 h-4 text-gray-600"/>        
        </Link>
        <Bell className="w-4 h-4 text-gray-600"/>
        <ShoppingCartIcon />
        <Link href="/login">Sign In </Link>
      </div>
    </nav>
  );
};
