import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ productList }) => {
    return (
        // Container
        <div className="flex items-center py-5 px-[10px] flex-col">
            <h1 className="text-center font-bold text-3xl mb-5">
                The best food in town!
            </h1>
            <p className="w-[90%] text-center sm:w-[70%] text-[24px] mb-20 text-gray-700 font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                tristique mi eu augue maximus, in venenatis nibh venenatis.
                Praesent elit orci, porta sed arcu vel, pulvinar tempor dui.
            </p>

            {/* Wrapper */}
            <div className="flex items-center justify-center w-[100%] flex-wrap">
                {productList.map((product) => (
                    <ProductCard key={product._id} product={product}/>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
