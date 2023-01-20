import Image from "next/image";
import React from "react";
import Link from "next/link";
import { BiPhoneCall, BiCart } from "react-icons/bi";
import { useSelector } from "react-redux";


const Navbar = () => {
    const quantity = useSelector((state) => state.cart.quantity);

    return (
        <div className="flex z-50 sticky top-0 items-center justify-between h-[100px] py-0 px-12 bg-slate-600 text-white ">
            {/* Call Section */}
            <div className="flex flex-[3] md:flex-1 hover:text-[#d7905c] ease-in duration-200">
                <BiPhoneCall className="mt-2" size={32} />

                <div className="font-bold ml-5">
                    <div>ORDER NOW</div>
                    <div className="text-xl">123 456 7890</div>
                </div>
            </div>

            {/* Center */}
            <div className="hidden md:block justify-between flex-[3]">
                <ul className="flex m-5 font-semibold text-lg justify-between">
                    <li className="navList">
                        <Link href="/" passHref>
                            Home
                        </Link>
                    </li>
                    <li className="navList">
                        <Link href="/#menu" passHref>
                            Menu
                        </Link>
                    </li>
                    <Link href="/" passHref>
                        <Image
                            src="/assets/logo.png"
                            alt=""
                            width={160}
                            height={70}
                        />
                    </Link>

                    <li className="navList">
                        <Link href="/about" passHref>
                            About
                        </Link>
                    </li>
                    <li className="navList">
                        <Link href="/contact" passHref>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Cart */}
            <div className="flex flex-1 justify-end">
                <Link href="/cart" passHref>
                    <div className="relative hover:scale-110 ease-in duration-200 hover:text-[#d7905c]">
                        <BiCart size={36} />
                        <div className="flex items-center justify-center absolute -top-2 -right-2 w-5 h-5 rounded-full bg-slate-800 p-2 font-semibold text-sm">
                            {quantity}
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
