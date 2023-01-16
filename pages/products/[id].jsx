import React, { useState } from "react";
import Image from "next/image";
import { FaHamburger } from "react-icons/fa";
import { AiFillPlusCircle } from "react-icons/ai";

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
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <span className="text-slate-600 text-xl font-semibold border-b-[1px] mt-5">
                    ${product.price[combo]}.00
                </span>
                <p className="mt-10">
                    A whopping 10 oz, charbroiled, beef patty placed on top of
                    our freshly made burger buns. This burger is blessed with
                    two slices of American cheese and paired with freshly-cut
                    red onions, pickles, chopped lettuce, and our special house
                    sauce.
                </p>
                <h3 className="text-xl font-bold mt-10 mb-5">Choose your Combo</h3>
                <div className="flex-col">
                    <div className="my-2">
                        <button className="flex items-center font-bold bg-slate-600 py-2 px-5 rounded-full text-white hover:scale-110 ease-out duration-150">
                            <FaHamburger size={24} />
                            <span className="ml-3">NONE</span>
                        </button>
                    </div>
                    <div className="my-2">
                        <button className="flex font-bold bg-slate-600 py-2 px-5 rounded-full text-white hover:scale-110 ease-out duration-150">
                            <div className="absolute">
                                <FaHamburger size={24} />
                                <AiFillPlusCircle
                                    size={18}
                                    className="relative -top-7 -right-4 text-green-400"
                                />
                            </div>
                            <span className="ml-10">* COMBO</span>
                        </button>
                    </div>
                </div>
                <span className="text-sm font-semibold mt-5">
                    * COMBO: Paired with a side of your choice and a drink.
                </span>
            </div>
        </div>
    );
};

export default Product;
