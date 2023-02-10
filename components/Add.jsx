import React, { useState } from "react";
import axios from "axios";
import { optimizeFonts } from "@/next.config";

const Add = ({ setOpen }) => {
    const [file, setFile] = useState("");
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [prices, setPrices] = useState([]);
    const [extraOptions, setExtraOptions] = useState([]);
    const [extra, setExtra] = useState({
        text: "",
        price: 2,
    });

    const changePrice = (e, index) => {
        const currentPrices = prices;
        currentPrices[index] = e.target.value;
        setPrices(currentPrices);
    };

    const handleCreate = async () => {
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "mighty-uploads");
        try {
            const uploadRes = await axios.post(
                process.env.NEXT_PUBLIC_CLOUDINARY_URL,
                data
            );
            const imageUrl = uploadRes.data.secure_url;

            const product = {
                title,
                image: imageUrl,
                desc,
                prices,
                extraOptions,
            };

            await axios.post("http://localhost:3000/api/products", product);
            setOpen(false);
        } catch (err) {
            console.log(err);
        }
    };

    // Properties of Extra are "text" and "price"
    const handleChangeExtra = (e, property) => {
        const value = e.target.value;
        if (property === "price") {
          setExtra({ ...extra, [property]: Number(value) });
        } else {
          setExtra({ ...extra, [property]: value });
        }
    };

    const handleAddExtra = () => {
        setExtra((extra) => ({
            ...extra,
            price: Number(extra.price),
        }));

        setExtraOptions(extraOptions.concat(extra));
        setExtra({ text: "", price: 2 });
    };

    return (
        // Container
        <div className="flex items-center justify-center w-[200vw] h-[100vh] bg-gray-900/50 fixed top-0 z-[999] text-center sm:text-left">
            {/* Wrapper */}
            <div className="w-[300px] h-[540px] sm:w-[500px] sm:h-[820px] flex flex-col relative bg-slate-800 text-white rounded-lg p-8">
                {/* Need to implement a close modal function here... */}
                <div
                    onClick={() => setOpen(false)}
                    className="absolute right-4 top-3 flex justify-center items-center bg-black rounded-full w-7 h-7 cursor-pointer text-right"
                >
                    <span className="text-white">X</span>
                </div>

                <h1 className="text-2xl sm:text-xl font-bold mb-4">
                    Add New Product
                </h1>

                <div className="flex flex-col mb-4">
                    <label className="sm:text-lg font-semibold" htmlFor="title">
                        Title:{" "}
                    </label>
                    <input
                        className="text-black h-8 sm:32 sm:h-12 rounded-sm"
                        onChange={(e) => setTitle(e.target.value)}
                        id="title"
                        name="title"
                        type="text"
                        value={title}
                    />
                </div>

                <div className="flex flex-col mb-4">
                    <label className="sm:text-lg font-semibold" htmlFor="desc">
                        Description:{" "}
                    </label>
                    <textarea
                        className="resize-none h-10 sm:h-44 text-black"
                        onChange={(e) => setDesc(e.target.value)}
                        id="desc"
                        name="desc"
                        cols={10}
                        rows={3}
                        value={desc}
                        maxLength={200}
                    />
                </div>
                <div className="flex sm:mb-4 gap-4">
                    <div className="flex flex-col w-[50%]">
                        <label
                            className="sm:text-lg font-semibold"
                            htmlFor="price_1"
                        >
                            Normal Price:{" "}
                        </label>
                        <input
                            className="text-black w-24 h-8 sm:32 sm:h-12 rounded-sm"
                            onChange={(e) => changePrice(e, 0)}
                            id="price_1"
                            name="price_1"
                            type="number"
                            value={prices[0]}
                        />
                    </div>

                    <div className="flex flex-col w-[50%]">
                        <label
                            className="sm:text-lg font-semibold"
                            htmlFor="price_2"
                        >
                            Combo Price:{" "}
                        </label>
                        <input
                            className="text-black w-24 h-8 sm:32 sm:h-12 rounded-sm"
                            onChange={(e) => changePrice(e, 1)}
                            id="price_2"
                            name="price_2"
                            type="number"
                            value={prices[1]}
                        />
                    </div>
                </div>

                <div className="flex flex-col mb-4 items">
                    <div className="flex sm:text-[18px] gap-2">
                        <div className="flex flex-col flex-1">
                            <label className="font-semibold" htmlFor="extra_text">Extra Name: </label>
                            <input
                                className="text-black w-[120px] h-8 sm:w-44 sm:h-12 rounded-sm"
                                onChange={(e) => handleChangeExtra(e, "text")}
                                id="extra_text"
                                name="extra_text"
                                type="text"
                                placeholder="extra name"
                                value={extra.text}
                            />
                        </div>
                        <div className="flex flex-col flex-1">
                            <label className="font-semibold" htmlFor="extra_price">Extra Price: </label>
                            <input
                                className="text-black w-24 h-8 sm:w-32 sm:h-12 rounded-sm"
                                onChange={(e) => handleChangeExtra(e, "price")}
                                id="extra_price"
                                name="extra_price"
                                type="number"
                                placeholder="extra price"
                                value={extra.price}
                            />
                        </div>
                    </div>
                    {/* Extra Container */}
                    <div className="flex flex-col">
                        {extraOptions.map((option, idx) => (
                            <span key={idx}>
                                {option.text} for ${option.price}
                            </span>
                        ))}
                    </div>

                    <button
                        onClick={handleAddExtra}
                        className="mt-2 text-[16px] font-semibold w-28 bg-white py-1 rounded-lg text-slate-900 hover:bg-slate-900 ease-in duration-100 hover:text-white"
                    >
                        Add Extra
                    </button>
                </div>
                <div className="flex flex-col mb-4">
                    <label className="sm:text-lg font-semibold" htmlFor="image">
                        Choose an image:
                    </label>
                    <input
                        onChange={(e) => setFile(e.target.files[0])}
                        id="image"
                        name="image"
                        type="file"
                    />
                </div>
                <button
                    onClick={handleCreate}
                    className="mt-2 font-semibold text-lg bg-white py-2 px-4 rounded-lg text-slate-900 hover:bg-slate-900 ease-in duration-100 hover:text-white"
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default Add;
