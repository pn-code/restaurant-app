import React from "react";
import Image from "next/image";

const CartCard = ({ product }) => {
    return (
        <tr className="cartItem">
            {/* Product */}
            <td>
                <div className="w-[52vw] h-[52vw] sm:w-[100px] sm:h-[100px] relative">
                    <Image
                        src={product.image}
                        layout="fill"
                        objectFit="cover"
                        alt=""
                    />
                </div>
            </td>
            {/* Product Name */}
            <td>
                <span className="font-semibold text-slate-600 text-3xl sm:text-lg">
                    {product.title}
                </span>
            </td>
            {/*  Product Combo */}
            <td>
                <ul className="text-xl sm:text-[18px]">
                    <li>{product.side}</li>
                    <li>{product.drink}</li>
                </ul>
            </td>
            {/* Product Price */}
            <td className="text-xl sm:text-[18px] font-semibold">
                <p>
                    <span className="sm:hidden">PRICE: </span>${product.price}
                </p>
            </td>
            {/* Product Quantity */}
            <td className="text-xl sm:text-[18px] font-semibold">
                <span className="sm:hidden">COUNT: </span>
                {product.quantity}
            </td>
            {/* Total */}
            <td>
                <p className="text-2xl sm:text-lg font-bold">
                    <span className="sm:hidden">TOTAL: </span>$
                    {product.price * product.quantity}
                </p>
            </td>
        </tr>
    );
};

export default CartCard;
