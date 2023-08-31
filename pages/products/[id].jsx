import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import AddToCartFooter from "@/components/AddToCartFooter";

const Product = ({ product }) => {
    const [extraOptions, setExtraOptions] = useState([]);
    const [extraPrice, setExtraPrice] = useState(0);

    const total = product.prices[0] + extraPrice;

    const handleChange = (e, option) => {
        const checked = e.target.checked;

        if (checked) {
            setExtraOptions((extraOptions) => extraOptions.concat(option.text));
            setExtraPrice((extraPrice) => extraPrice + option.price);
        } else {
            setExtraOptions((extraOptions) =>
                extraOptions.filter((item) => item !== option.text)
            );
            setExtraPrice((extraPrice) => extraPrice - option.price);
        }
    };

    return (
        // Container
        <div className="flex h-full p-10 text-center flex-col sm:text-left sm:flex-row items-center">
            {/* Left */}
            <div className="flex flex-1 h-[100%] items-center justify-center">
                <div className="w-full h-[30vh] sm:h-[60vh] sm:min-w-[100px] sm:min-h-[100px] sm:max-w-[80%] sm:max-h-[80%] relative">
                    <Image
                        src={product.image}
                        layout="fill"
                        objectFit="contain"
                        alt={product.title}
                    />
                </div>
            </div>

            {/* Right */}
            <div className="flex-1 p-5">
                <h1 className="text-xl sm:text-3xl font-bold">
                    {product.title}
                </h1>
                <span className="text-slate-600 text-lg sm:text-xl font-semibold border-b-[1px] mt-5">
                    ${total}.00
                </span>
                <p className="text-[16px] mt-10 text-gray-700 text-left">
                    {product.desc}
                </p>

                {/* Extra Options */}
                <div>
                    <h3 className="text-xl font-bold mt-6 mb-5">
                        Additional Toppings (optional)
                    </h3>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-2 sm:flex-row sm:gap-4 mb-5">
                            {product.extraOptions.map((option) => (
                                <div
                                    key={option.text}
                                    className="flex justify-start sm:justify-center items-center gap-2"
                                >
                                    <input
                                        className="w-8 h-8 rounded-md sm:w-6 sm:h-6"
                                        id={option.text}
                                        name={option.text}
                                        onClick={(e) => handleChange(e, option)}
                                        type="checkbox"
                                    />
                                    <label
                                        className="text-[16px]"
                                        htmlFor={option.text}
                                    >
                                        {option.text}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <AddToCartFooter
                total={total}
                product={product}
                extraOptions={extraOptions}
            />
        </div>
    );
};

export default Product;

export const getServerSideProps = async ({ params }) => {
    const res = await axios.get(
        `${process.env.HOST_URI}/api/products/${params.id}`
    );
    return {
        props: {
            product: res.data,
        },
    };
};
