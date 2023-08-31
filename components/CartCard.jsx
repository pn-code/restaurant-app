import React from "react";

const CartCard = ({ product }) => {
    return (
        <article className="bg-gray-50 w-full h-fit p-6 border-2 border-gray-300 rounded-sm shadow-md flex flex-col">
            <header className="flex justify-between">
                {/* Product Name */}
                <h2 className="text-lg font-semibold">{product.title}</h2>
                {/* Total */}
                <p className="sm:text-lg font-semibold">
                    <span className="sm:hidden">TOTAL: </span>$
                    {product.price * product.quantity}
                </p>
            </header>

            {/* Extras */}
            <p className="text-gray-600 text-sm">
                {product.extraOptions.join(", ").toLowerCase()}
            </p>

            {/* Product Quantity */}
            <span className="text-sm mt-3">quantity: {product.quantity}</span>
        </article>
    );
};

export default CartCard;
