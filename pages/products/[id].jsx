import React, { useState } from "react";
import Image from "next/image";

const Product = () => {
    const [combo, setCombo] = useState(0);

    // Dummy Data
    const product = {
        id: 1,
        img: "/assets/dummy_product.jpg",
        name: "Monster Burger",
        price: [14, 18],
        desc: "Lorem ipsum dolor sit amet",
    };

    return (
        // Container
        <div className="h-[calc(100vh-116px)] flex">
            {/* Left */}
            <div className="flex flex-1 h-[100%] items-center justify-center">
                <div className="w-[80%] h-[80%] relative">
                    <Image
                        src={product.img}
                        layout="fill"
                        objectFit="contain"
                        alt=""
                    />
                </div>
            </div>
            {/* Right */}
            <div className="flex-1 p-5">
                <h1 className="">{product.name}</h1>
                <span className="">{product.price[combo]}</span>
                <p className="">
                    A whopping 10 oz, charbroiled, beef patty placed on top of
                    our freshly made burger buns. This burger is blessed with
                    two slices of American cheese and paired with freshly-cut
                    red onions, pickles, chopped lettuce, and our special house
                    sauce.
                </p>
                <h3 className="">Choose your Combo</h3>
                <div className="">
                    <div>Just the {product.name}</div>
                    <div>
                        {product.name} paired with a side of your
                        choice and a drink.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
