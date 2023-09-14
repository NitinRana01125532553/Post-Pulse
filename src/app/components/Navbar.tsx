"use client"

import React, { useState } from 'react';
import { Menu, Search } from "lucide-react";
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';

function Navbar() {

    const [menu, setMenu] = useState(false);

    interface menu {
      title: string;
      path: string;
    }

  type menus = menu[]

const menus: menus = [
  { title: "Home", path: "#" },
  { title: "Blog", path: "#" },
  { title: "About Us", path: "#" },
  { title: "Contact Us", path: "#" },
];
    
  return (
    <nav className="bg-white w-full border-b md:border-0">
      <div className="items-center px-6 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="#">
            <h1 className="text-3xl font-bold ">Post-Pulse</h1>
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setMenu((prev) => !prev)}
            >
              <Menu className='h-6 w-6' />
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            menu ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            <form className='flex items-center space-x-2 border rounded-md p-2'>
              <Search className='h-5 w-5 flex-none text-gray-300' />
              <input className='w-full outline-none appearance-none placeholder-gray-500 text-gray-500 sm:w-auto'
              type="text"
              placeholder='Search here'
              />
            </form>
            {menus.map((item, idx) => (
              <li key={idx} className="text-gray-600 hover:text-gray-400">
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
            <UserButton afterSignOutUrl="/" />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar