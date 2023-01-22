import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
    return (
        // Container
        <div className="hover:scale-110 ease-in duration-300 w-[100%] sm:w-[50%] md:w-[33%] xl:w-[20%] flex flex-col items-center justify-center py-5 px-10">
            <Link href={`/products/${product._id}`}>
                {/* Product Image */}
                <Image src={product.image} alt="" width={500} height={500} />
                {/* Product Name */}
                <h1 className="text-center text-[32px] md:text-[24px] font-bold text-slate-600">
                    {product.title}
                </h1>
            </Link>
            {/* Price */}
            <div className="flex flex-col text-[28px] md:text-[20px] text-slate-500 border-b-slate-600/50 border-b-2">
                <p className="text-[14px] sm:text-lg">Normal: <span className="font-bold">${product.prices[0]}</span></p>
                <p className="text-[14px] sm:text-lg">Combo: <span className="font-bold">${product.prices[1]}</span></p>
            </div>

            {/* Description */}
            <p className="mt-2 text-center sm:text-left text-[24px] md:text-[16px] text-slate-400">
                {product.desc}
            </p>
        </div>
    );
};

export default ProductCard;
