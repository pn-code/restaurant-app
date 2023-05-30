import React from "react";
import Image from "next/image";

const CartCard = ({ product }) => {
    return (
        <tbody className="text-sm border-b-2 border-gray-300">
            <tr className="cartItem">
                {/* Product */}
                <td className="flex-1">
                    <div className="w-[100px] h-[100px] relative">
                        <Image
                            src={product.image}
                            layout="fill"
                            objectFit="cover"
                            alt=""
                        />
                    </div>
                </td>
                {/* Product Name */}
                <td className="flex-[1] pt-10">
                    <span className="font-semibold text-slate-600">
                        {product.title}
                    </span>
                </td>
                {/* Extras */}
                <td className="flex-[2] pt-10">
                    <p className="flex flex-col text-slate-600 font-semibold">
                        {product.extraOptions.map((option) => (
                            <span key={option}>{option}</span>
                        ))}
                    </p>
                </td>
                {/*  Product Combo */}
                <td className="flex-[1] pt-10">
                    <ul>
                        <li>{product.side}</li>
                        <li>{product.drink}</li>
                    </ul>
                </td>
                {/* Product Price */}
                <td className="flex-[1] pt-10">
                    <p>
                        <span className="sm:hidden">PRICE: </span>$
                        {product.price}
                    </p>
                </td>
                {/* Product Quantity */}
                <td className="flex-[1] pt-10">
                    <span className="sm:hidden">COUNT: </span>
                    {product.quantity}
                </td>
                {/* Total */}
                <td className="flex-[1] pt-10">
                    <p className="text-2xl sm:text-lg font-bold">
                        <span className="sm:hidden">TOTAL: </span>$
                        {product.price * product.quantity}
                    </p>
                </td>
            </tr>
        </tbody>
    );
};

export default CartCard;
