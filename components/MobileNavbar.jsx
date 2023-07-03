import Link from "next/link";
import React from "react";
import { BiCart, BiFoodMenu } from "react-icons/bi";

export default function MobileNavbar({ quantity }) {
    return (
        <nav className="flex justify-around items-center fixed left-0 bottom-0 w-full bg-gray-100 border-t-2 border-t-white">
            <Link href="/menu">
                <div className="mt-1 flex flex-col items-center justify-center">
                    <BiFoodMenu size={16} />
                    <span className="text-[16px] font-semibold">MENU</span>
                </div>
            </Link>
            <Link href="/cart" passHref>
                <div className="flex flex-col items-center justify-center">
                    <BiCart size={18} />
                    <span className="text-[16px] font-semibold">CART</span>
                </div>
            </Link>
        </nav>
    );
}
