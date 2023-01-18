import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "@/components/CartCard";

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

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

                {cart.products.map((product) => (
                    <CartCard product={product} />
                ))}

            </table>
            {/* Right */}
            <div className="flex-1">
                {/* Wrapper */}
                <div className="flex flex-col w-[100%] sm:w-[90%] justify-between p-14 pt-[16px] max-h-[300px] rounded-md bg-gray-800 text-white">
                    <h2 className="font-bold text-xl my-2">CART TOTAL</h2>
                    {/* Subtotal Text */}
                    <div>
                        <b className="mr-[10px]">Subtotal: </b> ${cart.total}
                    </div>
                    {/* Discount Text */}
                    <div>
                        <b className="mr-[10px]">Discount:</b> $0.00
                    </div>
                    {/* Total Text */}
                    <div>
                        <b className="mr-[10px]">Total:</b> ${cart.total}
                    </div>
                    <button className="h-8 text-slate-600 font-bold cursor-pointer bg-white mt-6 rounded-md hover:scale-105 ease-out duration-150">
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
