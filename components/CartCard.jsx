import { updateProductQuantity } from "@/redux/cartSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const CartCard = ({ product, index }) => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    const quantity = cart.products[index].quantity;

    const handleQuantityChange = (newQuantity, index) => {
        dispatch(updateProductQuantity({ index, newQuantity }));
    };

    const handleDecrement = () => {
        if (quantity === 1) return;
        handleQuantityChange(quantity - 1, index)
    };

    const handleIncrement = () => {
        handleQuantityChange(quantity + 1, index)
    };

    return (
        <article className="bg-gray-50 w-full h-fit p-6 border-2 border-gray-300 rounded-sm shadow-md flex flex-col">
            <header className="flex justify-between">
                {/* Product Name */}
                <h2 className="text-lg font-semibold">{product.title}</h2>
                {/* Total */}
                <p className="sm:text-lg font-semibold">${product.price}</p>
            </header>

            {/* Extras */}
            <p className="text-gray-600 text-sm">
                {product.extraOptions.join(", ").toLowerCase()}
            </p>

            {/* Product Quantity */}
            <section className="w-full flex justify-between mt-5 gap-5 sm:items-center sm:justify-start">
                <div className="text-[16px] font-bold">QUANTITY</div>

                <div className="flex gap-4 items-center">
                    <button
                        onClick={handleDecrement}
                        className={
                            quantity == 1
                                ? " flex justify-center items-center w-7 h-7 rounded-full text-white bg-gray-400 text-xl font-bold cursor-not-allowed"
                                : " flex justify-center items-center w-7 h-7 rounded-full text-red-700 bg-white text-xl font-bold border-2 border-red-700 hover:bg-red-50 hover:shadow-md ease-linear duration-200"
                        }
                    >
                        -
                    </button>
                    <div className="text-[16px] font-bold">{quantity}</div>
                    <button
                        onClick={handleIncrement}
                        className=" flex justify-center items-center w-7 h-7 rounded-full text-red-700 bg-white text-xl font-bold border-2 border-red-700 hover:bg-red-50 hover:shadow-md ease-linear duration-200"
                    >
                        +
                    </button>
                </div>
            </section>
        </article>
    );
};

export default CartCard;
