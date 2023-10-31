import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
    return (
        // Container
        <div className="bg-gray-50 rounded-md shadow-md border-2 border-gray-300 w-[100%] sm:w-[50%] md:w-[33%] xl:w-[20%] flex flex-col items-center justify-center py-5 px-10">
            {/* Product Image */}
            <div className="flex flex-col gap-2">
                <section className="w-[200px] h-[200px] flex justify-center items-center">
                    <Image
                        className="rounded-md"
                        src={product.image}
                        alt={product.title}
                        width={500}
                        height={500}
                    />
                </section>

                {/* Product Name */}
                <h1 className="text-center text-[18px] font-bold text-slate-900 pb-2">
                    {product.title}
                </h1>
            </div>
            {/* Price */}
            <div className="font-semibold text-gray-800">
                ${product.prices[0]}.00
            </div>

            <Link
                passHref
                href={`/products/${product._id}`}
                className="bg-red-700 hover:bg-red-800 ease-linear duration-200 text-white w-full text-center py-1 rounded-sm text-lg font-semibold mt-4"
            >
                Add
            </Link>
        </div>
    );
};

export default ProductCard;
