import React from "react";
import Image from "next/image";

const CartCard = ({ product }) => {
    return (
        <tbody className="text-sm border-b-2 border-gray-300">
            <tr className="w-full flex py-2 items-center justify-center sm:items-start sm:justify-start sm:flex-row">
                {/* Product */}
                <td className="flex-1">
                    <div className="max-w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] relative">
                        <Image
                            src={product.image}
                            layout="fill"
                            objectFit="cover"
                            alt=""
                        />
                    </div>
                </td>
                {/* Product Name */}
                <td className="flex-[1] sm:pt-10">
                    <span className="font-semibold text-slate-600">
                        {product.title}
                    </span>
                </td>
                {/* Extras */}
                <td className="flex-[2] pt-10 hidden sm:flex">
                    <p className="flex-col text-slate-600 font-semibold hidden sm:flex">
                        {product.extraOptions.map((option) => (
                            <span key={option}>{option}</span>
                        ))}
                    </p>
                </td>
                {/*  Product Combo */}
                <td className="flex-[1] pt-10 text-slate-600 font-semibold hidden sm:flex">
                    <ul>
                        <li>{product.side}</li>
                        <li>{product.drink}</li>
                    </ul>
                </td>
                {/* Product Price */}
                <td className="flex-[1] pt-10 hidden sm:flex text-slate-600 font-semibold">
                    <p>
                        <span className="sm:hidden">PRICE: </span>$
                        {product.price}
                    </p>
                </td>
                {/* Product Quantity */}
                <td className="flex-[1] pt-10 hidden sm:flex text-slate-600 font-semibold">
                    <span className="sm:hidden">COUNT: </span>
                    {product.quantity}
                </td>
                {/* Total */}
                <td className="flex-[1] sm:pt-10">
                    <p className="sm:text-lg sm:font-bold font-semibold">
                        <span className="sm:hidden">TOTAL: </span>$
                        {product.price * product.quantity}
                    </p>
                </td>
            </tr>
            {product.side && product.drink && (
                <div className="sm:hidden text-left text-slate-600 font-semibold text-xs">
                    Served with {product.side} and {product.drink}
                </div>
            )}
            {product.extraOptions && (
                <div className="sm:hidden text-left text-slate-600 font-semibold text-xs">
                    {product.extraOptions.join(", ")}
                </div>
            )}
        </tbody>
    );
};

export default CartCard;
