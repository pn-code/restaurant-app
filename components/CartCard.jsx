import React from "react";
import Image from "next/image";

const CartCard = ({ product }) => {
    return (
        <tbody>
            <tr className="cartItem">
                {/* Product */}
                <td className="flex-[2]">
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
                <td className="flex-[1]">
                    <span className="font-semibold text-slate-600 text-3xl sm:text-lg">
                        {product.title}
                    </span>
                </td>
                {/*  Product Combo */}
                <td className="flex-[1]">
                    <ul className="text-xl sm:text-[18px]">
                        <li>{product.side}</li>
                        <li>{product.drink}</li>
                    </ul>
                </td>
                {/* Product Price */}
                <td className="flex-[1]">
                    <p>
                        <span className="sm:hidden">PRICE: </span>$
                        {product.price}
                    </p>
                </td>
                {/* Product Quantity */}
                <td className="flex-[1]">
                    <span className="sm:hidden">COUNT: </span>
                    {product.quantity}
                </td>
                {/* Total */}
                <td className="flex-[1]">
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
