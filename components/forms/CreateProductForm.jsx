import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const CreateProductForm = () => {
  const [file, setFile] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [prices, setPrices] = useState([]);
  const [extraOptions, setExtraOptions] = useState([]);
  const [extra, setExtra] = useState({
    text: "",
    price: 2,
  });

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const changePrice = (e, index) => {
    const currentPrices = prices;
    currentPrices[index] = e.target.value;
    setPrices(currentPrices);
  };

  const handleCreateProduct = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "mighty-uploads");

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

      const productRes = await axios.post(`/api/products`, product);

      if (productRes.status === 201) {
        router.push("/admin");
      }
    } catch (err) {
      console.error(err.message);
    } finally {
      setLoading(false);
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
    <form onSubmit={(e) => handleCreateProduct(e)} className="bg-gray-50">
      <div className="flex flex-col mb-4">
        <label className="sm:text-lg font-semibold" htmlFor="title">
          Title:{" "}
        </label>
        <input
          placeholder="New Product Title"
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
          placeholder="Add new product description here..."
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
          <label className="sm:text-lg font-semibold" htmlFor="price_1">
            Normal Price:{" "}
          </label>
          <input
            className="text-black w-24 h-8 sm:32 sm:h-12 rounded-sm"
            onChange={(e) => changePrice(e, 0)}
            id="price_1"
            name="price_1"
            type="number"
            value={prices[0]}
            placeholder="15"
          />
        </div>

        {/* <div className="flex flex-col w-[50%]">
          <label className="sm:text-lg font-semibold" htmlFor="price_2">
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
        </div> */}
      </div>

      <div className="flex flex-col mb-4 items">
        <div className="flex sm:text-[18px] gap-2">
          <div className="flex flex-col flex-1">
            <label className="font-semibold" htmlFor="extra_text">
              Extra Name:{" "}
            </label>
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
            <label className="font-semibold" htmlFor="extra_price">
              Extra Price:{" "}
            </label>
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
          type="button"
          onClick={handleAddExtra}
          className="mt-2 text-[16px] font-semibold w-28 bg-blue-600/90 py-1 rounded-lg text-white hover:bg-blue-700 ease-in duration-100 hover:text-white"
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
        disabled={loading}
        type="submit"
        className="disabled:bg-blue-600/40 mt-2 font-semibold text-lg bg-blue-600/90 py-2 px-4 rounded-lg text-white hover:bg-blue-700  ease-in duration-100 hover:text-white"
      >
        Submit
      </button>
    </form>
  );
};

export default CreateProductForm;
