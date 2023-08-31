import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "@/redux/cartSlice";
import toast from "react-hot-toast";

export default function AddToCartFooter({ total, product, extraOptions }) {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);

    const handleDecrement = () => {
        if (quantity === 1) return;
        setQuantity((prev) => prev - 1);
    };

    const handleIncrement = () => {
        setQuantity((prev) => prev + 1);
    };

    const handleAddItemToCart = (
        product,
        quantity,
        total,
        extraOptions,
    ) => {
        dispatch(
            addProduct({
                ...product,
                quantity,
                price: total,
                extraOptions,
            })
        );
        toast.success(`Added ${quantity} ${product.title} to cart!`);
    };

    return (
        <footer className="flex flex-col gap-4 sm:flex-row sm:justify-between fixed left-0 bottom-14 sm:bottom-0 w-full bg-white py-4 px-[6%] z-20 items-center shadow-md">
            {/* Counter */}
            <section className="w-full flex justify-between gap-5 sm:items-center sm:justify-start">
                <div className="text-lg font-bold">QUANTITY</div>

                <div className="flex gap-4 items-center">
                    <button
                        onClick={handleDecrement}
                        className={
                            quantity == 1
                                ? " flex justify-center items-center w-8 h-8 rounded-full text-white bg-gray-400 text-xl font-bold cursor-not-allowed"
                                : " flex justify-center items-center w-8 h-8 rounded-full text-red-700 bg-white text-xl font-bold border-2 border-red-700 hover:bg-red-50 hover:shadow-md ease-linear duration-200"
                        }
                    >
                        -
                    </button>
                    <div className="text-lg font-bold">{quantity}</div>
                    <button
                        onClick={handleIncrement}
                        className=" flex justify-center items-center w-8 h-8 rounded-full text-red-700 bg-white text-xl font-bold border-2 border-red-700 hover:bg-red-50 hover:shadow-md ease-linear duration-200"
                    >
                        +
                    </button>
                </div>
            </section>

            <button
                onClick={() =>
                    handleAddItemToCart(product, quantity, total, extraOptions)
                }
                type="button"
                className="w-full sm:w-[250px] rounded-sm bg-red-700 px-6 py-2 text-white font-semibold hover:bg-red-800 ease-linear duration-200"
            >
                Add To Cart - ${total * quantity}.00
            </button>
        </footer>
    );
}
