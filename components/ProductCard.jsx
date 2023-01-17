import React from "react";
import Image from "next/image";

const ProductCard = () => {
    return (
        // Container
        <div className="w-[100%] sm:w-[50%] md:w-[33%] xl:w-[20%] flex flex-col items-center justify-center py-5 px-10">
            {/* Product Image */}
            <Image
                src="/assets/featured1.png"
                alt=""
                width={500}
                height={500}
            />

            {/* Product Name */}
            <h1 className="text-[32px] md:text-[24px] font-bold text-slate-600">
                Product Name
            </h1>

            {/* Price */}
            <span className="text-[28px] md:text-[20px] font-bold text-slate-500">Price</span>

            {/* Description */}
            <p className="text-[24px] md:text-[16px] text-center text-slate-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.
            </p>
        </div>
    );
};

export default ProductCard;
