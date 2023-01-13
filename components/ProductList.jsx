import React from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
    return (
        <div className="">
            <h1>The best food in town!</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                tristique mi eu augue maximus, in venenatis nibh venenatis.
                Praesent elit orci, porta sed arcu vel, pulvinar tempor dui.
            </p>

            {/* Wrapper */}
            <div className="">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    );
};

export default ProductList;
