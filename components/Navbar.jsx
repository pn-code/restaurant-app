import Image from "next/image";
import React from "react";
import Link from "next/link";
import { BiCart } from "react-icons/bi";
import { useSelector } from "react-redux";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div className="flex w-full z-50 sticky top-0 items-center justify-between h-[70px] py-0 px-4 bg-gray-50 text-black shadow-xl">
      {/* Left*/}
      <Link
        className="w-full sm:w-[320px] flex justify-center sm:justify-start hover:scale-105 ease-linear duration-200"
        href="/"
        passHref
      >
        <Image
          className="rounded-md"
          src="/assets/logo.png"
          alt=""
          width={240}
          height={160}
        />
      </Link>

      {/* Right: visible if not mobile */}
      <ul className="hidden sm:flex font-bold text-lg gap-5 items-center">
        <li>
          <Link
            className="text-xl font-bold border-2 bg-red-700 text-white border-red-700 rounded-sm hover:bg-red-800 hover:border-red-900 ease-linear duration-100 px-4 py-1.5"
            href="/menu"
            passHref
          >
            MENU
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center text-white hover:bg-gray-50 px-5 py-1.5 border-2 border-gray-900 hover:border-red-900 ease-linear duration-100 rounded-full"
            href="/cart"
            passHref
          >
            <div className="relative">
              <BiCart className="text-black" size={28} />
              <div className="flex items-center justify-center absolute -top-1.5 border border-red-600 -right-2 w-4 h-4 rounded-full bg-red-500 p-[8px] font-semibold text-sm text-white">
                {quantity}
              </div>
            </div>
          </Link>
        </li>
      </ul>

      {/* Mobile Nav */}
      <MobileNavbar quantity={quantity} />
    </div>
  );
};

export default Navbar;
