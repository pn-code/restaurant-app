import React from "react";
import Image from "next/image";

const Cart = () => {
    return (
        // Container
        <div className="p-12 flex gap-8">
            {/* Left */}
            <table className="w-[100%] flex-[2]">
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
                        <span className="font-semibold text-lg">$18.00</span>
                    </td>
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
                        <span className="font-semibold text-lg">$18.00</span>
                    </td>
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
                        <span className="font-semibold text-lg">$18.00</span>
                    </td>
                </tr>
            </table>
            {/* Right */}
            <div className="flex-1">
                {/* Wrapper */}
                <div className="flex flex-col w-[90%] justify-between p-14 pt-[16px] max-h-[300px] rounded-md bg-gray-800 text-white">
                    <h2 className="font-bold text-xl my-2">CART TOTAL</h2>
                    {/* Subtotal Text */}
                    <div>
                        <b className="mr-[10px]">Subtotal: </b> $100.00
                    </div>
                    {/* Discount Text */}
                    <div>
                        <b className="mr-[10px]">Discount:</b> $0.00
                    </div>
                    {/* Total Text */}
                    <div>
                        <b className="mr-[10px]">Total:</b> $100.00
                    </div>
                    <button className="h-8 text-slate-600 font-bold cursor-pointer bg-white mt-6 rounded-md hover:scale-105 ease-out duration-150">Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
