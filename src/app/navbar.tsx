'use client'

import logo from "../image/logo.png";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="sm:flex items-center justify-around w-full bg-[#ffb803]">
      <div className="flex items-center justify-center sm:w-5/12">
        <Link href='/'>
          <Image
            className="w-28 h-28"
            src={logo}
            alt="Logo"
          />
        </Link>
      </div>
      <div className="hidden sm:flex items-center justify-around w-7/12">
        <Link href="/" className="hover:text-white font-medium">HOME</Link>
        <Link href="/about" className="hover:text-white font-medium">ABOUT</Link>
        <Link href="/store" className="hover:text-white font-medium">STORE</Link>
        {/* <Link href="/gallery" className="hover:text-white font-medium">GALLERY</Link>
        <Link href="/contact" className="hover:text-white font-medium">CONTACT</Link> */}
      </div>
      <div className="sm:hidden">
        <button
          className="flex items-center focus:outline-none absolute top-3 right-3"
          onClick={() => setShowMenu(!showMenu)}
        >
          <svg
            className="h-10 w-10 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {showMenu ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.414 4.586a2 2 0 00-2.828 0L12 9.172 7.414 4.586a2 2 0 00-2.828 2.828L9.172 12l-4.586 4.586a2 2 0 102.828 2.828L12 14.828l4.586 4.586a2 2 0 002.828-2.828L14.828 12l4.586-4.586a2 2 0 000-2.828z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 4H4v2h16v-2z"
              />
            )}
          </svg>
        </button>
        {showMenu && (
          <div className="flex justify-center py-2">
            <div className="flex flex-col w-11/12">
              <hr className="border-black" />
              <Link href="/" className="rounded text-base text hover:text-white">
                HOME
              </Link>
              <hr className="border-black" />
              <Link href="/about" className="rounded text-base text hover:text-white">
                ABOUT
              </Link>
              <hr className="border-black" />
              <Link href="/store" className="rounded text-base text hover:text-white">
                STORE
              </Link>
              <hr className="border-black" />
              {/* <Link href="/gallery" className="rounded text-base text hover:text-white">
                GALLERY
              </Link>
              <hr className="border-black" />
              <Link href="/contact" className="rounded text-base text hover:text-white">
                CONTACT
              </Link> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
