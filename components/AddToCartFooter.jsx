import { useState } from "react";

export default function AddToCartFooter() {
    const [quantity, setQuantity] = useState(1);

    const handleDecrement = () => {
        if (quantity === 1) return;
        setQuantity((prev) => prev - 1);
    };

    const handleIncrement = () => {
        setQuantity((prev) => prev + 1);
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

            <button className="w-full sm:w-[250px] rounded-sm bg-red-700 px-6 py-2 text-white text-lg">Add To Cart</button>
        </footer>
    );
}
