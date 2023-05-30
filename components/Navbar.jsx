import Image from "next/image";
import React from "react";
import Link from "next/link";
import { BiPhoneCall, BiCart } from "react-icons/bi";
import { useSelector } from "react-redux";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div className="flex z-50 sticky top-0 items-center justify-center h-[80px] py-0 px-4 md:px-12 bg-white text-black shadow-xl">
      <div className="w-full xl:w-[65%] flex">
        {/* Left*/}
        <div className="hidden xl:flex justify-between flex-1">
          <ul className="flex m-5 font-bold text-lg gap-10">
            <li className="navList">
              <Link href="/menu">MENU</Link>
            </li>
            <li className="navList">CAREERS</li>
            <li className="navList">CONTACT</li>
          </ul>
        </div>

        <Link className="flex-1 flex justify-center" href="/" passHref>
          <Image
            className="rounded-md"
            src="/assets/logo.png"
            alt=""
            width={320}
            height={160}
          />
        </Link>

        {/* Cart */}
        <section className="flex flex-1 justify-end xl:justify-center items-center">
          <Link
            className="rounded-md flex items-center bg-gray-900 text-white h-12 px-4 group hover:bg-gray-800/90"
            href="/cart"
            passHref
          >
            <div className="relative hover:text-gray-700 text-black">
              <BiCart size={30} color="white" />
              <div className="flex items-center justify-center absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 p-2 font-semibold text-sm text-white">
                {quantity}
              </div>
            </div>
            <p className="ml-4 text-xl font-bold">CART</p>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Navbar;
