import Image from "next/image";
import React from "react";
import Link from "next/link";
import { BiCart } from "react-icons/bi";
import { useSelector } from "react-redux";

const Navbar = () => {
    const quantity = useSelector((state) => state.cart.quantity);

    return (
        <div className="flex w-full z-50 sticky top-0 items-center justify-between h-[80px] py-0 px-4 bg-white text-black shadow-xl">
            {/* Left*/}
            <Link className="flex-1 flex justify-center sm:justify-start" href="/" passHref>
                <Image
                    className="rounded-md"
                    src="/assets/logo.png"
                    alt=""
                    width={320}
                    height={160}
                />
            </Link>

            {/* Right */}
            <ul className="hidden sm:flex font-bold text-lg gap-5 items-center">
                <li>
                    <Link
                        className="text-xl font-bold border-4 border-black p-2 hover:text-white hover:bg-black ease-linear duration-200"
                        href="/menu"
                    >
                        MENU
                    </Link>
                </li>
                <li>
                    <Link
                        className="flex items-center bg-gray-900 text-white p-3 group hover:bg-gray-800/90"
                        href="/cart"
                        passHref
                    >
                        <div className="relative hover:text-gray-700 text-black">
                            <BiCart size={28} color="white" />
                            <div className="flex items-center justify-center absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 p-2 font-semibold text-sm text-white">
                                {quantity}
                            </div>
                        </div>
                        <p className="ml-2 sm:text-xl font-bold">CART</p>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
