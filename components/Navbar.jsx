import Image from "next/image";
import React from "react";
import { BiPhoneCall, BiCart } from "react-icons/bi";
import { useSelector } from "react-redux";

const Navbar = () => {
    const quantity = useSelector((state) => state.cart.quantity);

    return (
        <div className="flex z-50 sticky top-0 items-center justify-between h-[100px] py-0 px-12 bg-slate-600 text-white ">
            {/* Call Section */}
            <div className="flex flex-[3] md:flex-1">
                <BiPhoneCall className="mt-2" size={32} />

                <div className="font-bold ml-5">
                    <div>ORDER NOW</div>
                    <div className="text-xl">123 456 7890</div>
                </div>
            </div>

            {/* Center */}
            <div className="hidden md:block justify-between flex-[3]">
                <ul className="flex m-5 font-semibold text-lg justify-between">
                    <li className="navList">Home</li>
                    <li className="navList">Products</li>
                    <li className="navList">Menu</li>
                    <Image
                        src="/assets/logo.png"
                        alt=""
                        width={160}
                        height={70}
                    />
                    <li className="navList">Events</li>
                    <li className="navList">Blog</li>
                    <li className="navList">Contact</li>
                </ul>
            </div>

            {/* Links */}
            <div className="flex flex-1 justify-end">
                <div className="relative">
                    <BiCart size={36} />
                    <div className="flex items-center justify-center absolute -top-2 -right-2 w-5 h-5 rounded-full bg-slate-800 p-2 font-semibold text-sm">
                        {quantity}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
