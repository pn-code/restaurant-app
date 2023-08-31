import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "@/redux/cartSlice";
import toast from "react-hot-toast";
import AddToCartFooter from "@/components/AddToCartFooter";

const Product = ({ product }) => {
    const [combo, setCombo] = useState(0);
    const [drink, setDrink] = useState("");
    const [side, setSide] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [extraOptions, setExtraOptions] = useState([]);
    const [extraPrice, setExtraPrice] = useState(0);

    const total = product.prices[combo] + extraPrice;
    const dispatch = useDispatch();

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

    const handleAddItemToCart = () => {
        dispatch(
            addProduct({
                ...product,
                drink,
                side,
                quantity,
                price: total,
                extraOptions,
            })
        );
        toast.success(`Added ${quantity} ${product.title} to cart!`);
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

                {/* Add to Cart */}
                <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row sm:justify-start items-center mt-5">
                    <section className="flex gap-2 items-center">
                        <label htmlFor="quantity" className="text-lg font-bold">
                            AMOUNT:
                        </label>
                        <input
                            id="quantity"
                            name="quantity"
                            className="w-14 h-12 rounded-md"
                            type="number"
                            onChange={(e) => setQuantity(e.target.value)}
                            value={quantity}
                        />
                    </section>

                    <button
                        onClick={handleAddItemToCart}
                        className="w-full sm:w-[200px] text-[20px] rounded-md p-3 ml-[10px] bg-blue-600/95 text-white font-bold cursor-pointer hover:bg-white hover:text-blue-600/95 border-4 border-transparent hover:border-blue-600/95 ease-out duration-150"
                    >
                        ADD TO CART
                    </button>
                </div>
            </div>
            <AddToCartFooter />
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
