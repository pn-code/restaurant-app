import React from "react";
import Image from "next/image";

const Cart = () => {
    return (
        // Container
        <div className="p-12">
            {/* Left */}
            <table className="w-[100%] flex-2 border-spacing-5">
                <tr>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Combo</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
                <tr>
                    {/* Product */}
                    <td>
                        <div className="w-[100px] h-[100px] relative">
                            <Image
                                src={"/assets/dummy_product.jpg"}
                                layout="fill"
                                objectFit="cover"
                                alt=""
                            />
                        </div>
                    </td>
                    {/* Product Name */}
                    <td>
                        <span className="font-semibold text-slate-600 text-lg">
                            Monster Burger
                        </span>
                    </td>
                    {/*  Product Combo */}
                    <td>
                        <span>Seasoned Fries & Sparkling Water</span>
                    </td>
                    {/* Product Price */}
                    <td>$18.00</td>
                    {/* Product Quantity */}
                    <td>1</td>
                    {/* Total */}
                    <td>
                        <span className="font-semibold text-lg">
                            $18.00
                        </span>
                    </td>
                </tr>
            </table>
            {/* Right */}
            <div className="flex-1"></div>
        </div>
    );
};

export default Cart;
