import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import AddToCartFooter from "@/components/AddToCartFooter";
import { BiCheckCircle } from "react-icons/bi";

const Product = ({ product }) => {
    const [extraOptions, setExtraOptions] = useState([]);

    const extraPrice = extraOptions.length * 2;
    const total = product.prices[0] + extraPrice;

    const handleExtraOptionsChange = (option) => {
        if (extraOptions.includes(option)) {
            setExtraOptions((prev) =>
                prev.filter((prevOption) => prevOption != option)
            );
            return;
        }

        setExtraOptions((prev) => [...prev, option]);
    };

    return (
        // Container
        <div className="w-full flex bg-gray-50 min-h-[calc(100vh-400px)] p-4 md:px-[10%] xl:px-[16%] sm:gap-4 xl:gap-20 text-center flex-col sm:text-left sm:flex-row items-center">
            {/* Left */}
            <Image
                className="rounded-md"
                src={product.image}
                alt={product.title}
                width={400}
                height={400}
            />

            {/* Right */}
            <div className="w-full flex-1 p-5">
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
                        <div className="flex flex-col gap-2 sm:flex-row sm:gap-4 mb-5 flex-wrap">
                            {product.extraOptions.map((option) => (
                                <button
                                    key={option.text}
                                    onClick={() =>
                                        handleExtraOptionsChange(option.text)
                                    }
                                    className={
                                        extraOptions.includes(option.text)
                                            ? "bg-white shadow-lg border-2 border-black text-red-700 font-bold w-full h-10 xl:w-32 xl:h-32 rounded-sm relative hover:bg-red-50 ease-linear duration-200"
                                            : "bg-white shadow-lg border-2 border-gray-400 text-red-700 font-bold w-full h-10 xl:w-32 xl:h-32 rounded-sm relative hover:bg-red-50 ease-linear duration-200"
                                    }
                                >
                                    {option.text}

                                    {extraOptions.includes(option.text) && (
                                        <span className="absolute top-1 right-1">
                                            <BiCheckCircle size={24} />
                                        </span>
                                    )}
                                </button>
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
