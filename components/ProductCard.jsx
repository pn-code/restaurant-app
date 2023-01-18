import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
    return (
        // Container
        <div className="w-[100%] sm:w-[50%] md:w-[33%] xl:w-[20%] flex flex-col items-center justify-center py-5 px-10">
            <Link href={`/products/${product._id}`}>
                {/* Product Image */}
                <Image src={product.image} alt="" width={500} height={500} />
                {/* Product Name */}
                <h1 className="text-[32px] md:text-[24px] font-bold text-slate-600">
                    {product.title}
                </h1>
            </Link>
            {/* Price */}
            <span className="text-[28px] md:text-[20px] font-bold text-slate-500">
                {product.prices.map((price) => (
                    <span className="mr-5" key={price}>
                        ${price}
                    </span>
                ))}
            </span>

            {/* Description */}
            <p className="text-[24px] md:text-[16px] text-center text-slate-400">
                {product.desc}
            </p>
        </div>
    );
};

export default ProductCard;
