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
            <span className="text-[28px] md:text-[20px] font-bold text-slate-500">
                <span className="mr-5">Normal: ${product.prices[0]}</span>
                <span className="mr-5">Combo: ${product.prices[1]}</span>
            </span>

            {/* Description */}
            <p className="text-center sm:text-left text-[24px] md:text-[16px] text-slate-400">
                {product.desc}
            </p>
        </div>
    );
};

export default ProductCard;
