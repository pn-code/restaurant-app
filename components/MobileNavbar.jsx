import Link from "next/link";
import React from "react";
import { BiCart, BiFoodMenu } from "react-icons/bi";
import { useSelector } from "react-redux";

export default function MobileNavbar() {
    const quantity = useSelector((state) => state.cart.quantity);

    return (
        <nav className="z-[99999] h-16 sm:hidden flex justify-around items-center fixed left-0 bottom-0 w-full bg-gray-100 border-t-2 border-t-white">
            <Link href="/menu" passHref>
                <div className="mt-1 flex flex-col items-center justify-center">
                    <BiFoodMenu size={16} />
                    <span className="text-[16px] font-semibold">MENU</span>
                </div>
            </Link>
            <Link href="/cart" passHref>
                <div className="relative flex flex-col items-center justify-center">
                    <BiCart size={18} />
                    <span className="text-[16px] font-semibold">CART</span>
                    <span className="absolute -top-[9px] -right-1 text-xs rounded-full text-white w-4 h-4 flex items-center justify-center bg-red-700">{quantity}</span>
                </div>
            </Link>
        </nav>
    );
}
