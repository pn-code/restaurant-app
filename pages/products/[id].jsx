import React, { useState } from "react";
import Image from "next/image";
import { FaHamburger } from "react-icons/fa";
import { AiFillPlusCircle } from "react-icons/ai";
import axios from "axios";

const Product = ({ product }) => {
    const [combo, setCombo] = useState(0);
    const [quantity, setQuantity] = useState(1);

    return (
        // Container
        <div className="flex h-auto text-center flex-col sm:text-left sm:h-[calc(100vh-116px)] sm:flex-row">
            {/* Left */}
            <div className="flex flex-1 h-[100%] items-center justify-center">
                <div className="w-[70vw] h-[70vw] sm:w-[80%] sm:h-[80%] relative">
                    <Image
                        src={product.image}
                        layout="fill"
                        objectFit="contain"
                        alt=""
                    />
                </div>
            </div>
            {/* Right */}
            <div className="flex-1 p-5">
                <h1 className="text-3xl font-bold">{product.title}</h1>
                <span className="text-slate-600 text-2xl sm:text-xl font-semibold border-b-[1px] mt-5">
                    ${product.prices[combo]}.00
                </span>
                <p className="text-xl sm:text-lg mt-10">{product.desc}</p>
                <h3 className="text-xl font-bold mt-6 mb-5">
                    Choose your Combo
                </h3>
                <div className="flex justify-center sm:justify-start gap-4">
                    <div className="mb-2">
                        <button
                            onClick={() => setCombo(0)}
                            className="text-[20px] sm:text-[18px] flex items-center font-bold bg-slate-600 py-2 px-5 rounded-full text-white hover:scale-110 ease-out duration-150"
                        >
                            <FaHamburger size={24} />
                            <span className="ml-3">NONE</span>
                        </button>
                    </div>
                    <div className="mb-4">
                        <button
                            onClick={() => setCombo(1)}
                            className="text-[20px] sm:text-[18px] flex font-bold bg-slate-600 py-2 px-5 rounded-full text-white hover:scale-110 ease-out duration-150"
                        >
                            <div className="absolute">
                                <FaHamburger
                                    size={24}
                                    className="relative top-[3px]"
                                />
                                <AiFillPlusCircle
                                    size={18}
                                    className="relative -top-7 -right-4 text-green-400"
                                />
                            </div>
                            <span className="ml-10">* COMBO</span>
                        </button>
                    </div>
                </div>
                <span className="text-sm font-semibold mt-10">
                    * COMBO: Paired with a side of your choice and a drink.
                </span>
                {/* Conditionally Render Side & Drink Form when COMBO is selected */}
                {combo == 1 && (
                    <form>
                        <div className="mt-4">
                            <label
                                className="text-md font-semibold mr-2"
                                htmlFor="side"
                            >
                                SIDE:
                            </label>
                            <select
                                className="rounded-md"
                                name="side"
                                id="side"
                            >
                                <option default value="">
                                    SELECT SIDE
                                </option>
                                <option value="fries">Seasoned Fries</option>
                                <option value="onions">
                                    Beer-Battered Onion Rings
                                </option>
                                <option value="pickles">Pickles</option>
                                <option value="vegetables">
                                    Steamed Vegetables
                                </option>
                            </select>
                        </div>
                        <div className="mt-4">
                            <label
                                className="text-md font-semibold mr-2"
                                htmlFor="drink"
                            >
                                DRINK:
                            </label>
                            <select
                                className="rounded-md"
                                name="drink"
                                id="drink"
                            >
                                <option default value="">
                                    SELECT DRINK
                                </option>
                                <option value="sprite">Sprite</option>
                                <option value="coke">Coke</option>
                                <option value="lemonade">Lemonade</option>
                                <option value="water">Sparkling Water</option>
                            </select>
                        </div>
                    </form>
                )}
                {/* Add to Cart */}
                <div className="flex justify-center sm:justify-start items-center mt-5">
                    <input
                        id="quantity"
                        name="quantity"
                        className="h-16 w-12 sm:h-10 rounded-md"
                        type="number"
                        defaultValue={1}
                        onChange={(e) => setQuantity(e.target.value)}
                        value={quantity}
                    />
                    <button className="w-[200px] h-16 text-[24px] sm:text-[16px] rounded-md px-3 sm:h-10 ml-[10px] bg-slate-600 text-white font-semibold cursor-pointer hover:scale-105 ease-out duration-150">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;

export const getServerSideProps = async ({ params }) => {
    const res = await axios.get(
        `http://localhost:3000/api/products/${params.id}`
    );
    return {
        props: {
            product: res.data,
        },
    };
};
