import React from "react";
import Image from "next/image";

const Cart = () => {
    return (
        // Container
        <div className="flex flex-col gap-8 p-12 sm:flex-row">
            {/* Left */}
            <table className="flex flex-col items-center justify-center sm:items-start sm:justify-start w-[100%] flex-[2]">
                <tr className="hidden sm:flex gap-12 text-[20px]">
                    <th>Product</th>
                    <th>Name</th>
                    <th>Combo</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
                <tr className="cartItem">
                    {/* Product */}
                    <td>
                        <div className="w-[52vw] h-[52vw] sm:w-[100px] sm:h-[100px] relative">
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
                        <span className="font-semibold text-slate-600 text-3xl sm:text-lg">
                            Monster Burger
                        </span>
                    </td>
                    {/*  Product Combo */}
                    <td>
                        <ul className="text-xl sm:text-[18px]">
                            <li>Sparkling Water</li>
                            <li>Seasoned Fries</li>
                        </ul>
                    </td>
                    {/* Product Price */}
                    <td className="text-xl sm:text-[18px] font-semibold"><p><span className="sm:hidden">PRICE: </span>$18.00</p></td>
                    {/* Product Quantity */}
                    <td className="text-xl sm:text-[18px] font-semibold"><span className="sm:hidden">COUNT: </span>1</td>
                    {/* Total */}
                    <td>
                        <p className="text-2xl sm:text-lg font-bold"><span className="sm:hidden">TOTAL: </span>$18.00</p>
                    </td>
                </tr>

                <tr className="cartItem">
                    {/* Product */}
                    <td>
                        <div className="w-[52vw] h-[52vw] sm:w-[100px] sm:h-[100px] relative">
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
                        <span className="font-semibold text-slate-600 text-3xl sm:text-lg">
                            Monster Burger
                        </span>
                    </td>
                    {/*  Product Combo */}
                    <td>
                        <ul className="text-xl sm:text-[18px]">
                            <li>Sparkling Water</li>
                            <li>Seasoned Fries</li>
                        </ul>
                    </td>
                    {/* Product Price */}
                    <td className="text-xl sm:text-[18px] font-semibold"><p><span className="sm:hidden">PRICE: </span>$18.00</p></td>
                    {/* Product Quantity */}
                    <td className="text-xl sm:text-[18px] font-semibold"><span className="sm:hidden">COUNT: </span>1</td>
                    {/* Total */}
                    <td>
                        <p className="text-2xl sm:text-lg font-bold"><span className="sm:hidden">TOTAL: </span>$18.00</p>
                    </td>
                </tr>
                
                <tr className="cartItem">
                    {/* Product */}
                    <td>
                        <div className="w-[52vw] h-[52vw] sm:w-[100px] sm:h-[100px] relative">
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
                        <span className="font-semibold text-slate-600 text-3xl sm:text-lg">
                            Monster Burger
                        </span>
                    </td>
                    {/*  Product Combo */}
                    <td>
                        <ul className="text-xl sm:text-[18px]">
                            <li>Sparkling Water</li>
                            <li>Seasoned Fries</li>
                        </ul>
                    </td>
                    {/* Product Price */}
                    <td className="text-xl sm:text-[18px] font-semibold"><p><span className="sm:hidden">PRICE: </span>$18.00</p></td>
                    {/* Product Quantity */}
                    <td className="text-xl sm:text-[18px] font-semibold"><span className="sm:hidden">COUNT: </span>1</td>
                    {/* Total */}
                    <td>
                        <p className="text-2xl sm:text-lg font-bold"><span className="sm:hidden">TOTAL: </span>$18.00</p>
                    </td>
                </tr>

            </table>
            {/* Right */}
            <div className="flex-1">
                {/* Wrapper */}
                <div className="flex flex-col w-[100%] sm:w-[90%] justify-between p-14 pt-[16px] max-h-[300px] rounded-md bg-gray-800 text-white">
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
