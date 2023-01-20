import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Add = ({ setOpen }) => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [prices, setPrices] = useState([]);
  const [combo, setCombo] = useState(true);

  const changePrice = (e, index) => {
    const currentPrices = prices;
    currentPrices[index] = e.target.value;
    setPrices(currentPrices);
  };

  const handleCreate = async () => {
    console.log();
  };

  return (
    // Container
    <div className="flex items-center justify-center w-[200vw] h-[100vh] bg-gray-900/50 fixed top-0 z-[999] text-center sm:text-left">
      {/* Wrapper */}
      <div className="w-[300px] h-[540px] flex flex-col relative bg-slate-800 text-white rounded-lg p-8">
        {/* Need to implement a close modal function here... */}
        <div
          onClick={() => setOpen(false)}
          className="absolute right-4 top-3 flex justify-center items-center bg-black rounded-full w-7 h-7 cursor-pointer text-right"
        >
          <span className="text-white">X</span>
        </div>

        <h1 className="text-2xl sm:text-xl font-bold mb-4">Add New Product</h1>

        <div className="flex flex-col mb-4">
          <label className="sm:text-lg font-semibold" htmlFor="title">
            Title:{" "}
          </label>
          <input
            className="text-black h-8"
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
            className="resize-none h-10 sm:h-30 text-black"
            onChange={(e) => setDesc(e.target.value)}
            id="desc"
            name="desc"
            cols={10}
            rows={3}
            value={desc}
          />
        </div>
        <div className="flex gap-2">
          <div className="flex flex-col mb-4 w-[50%]">
            <label className="sm:text-lg font-semibold" htmlFor="price_1">
              Normal Price:{" "}
            </label>
            <input
              className="text-black"
              onChange={(e) => changePrice(e, 0)}
              id="price_1"
              name="price_1"
              type="number"
              value={prices[0]}
            />
          </div>

          <div className="flex flex-col mb-4 w-[50%]">
            <label className="sm:text-lg font-semibold" htmlFor="price_2">
              Combo Price:{" "}
            </label>
            <input
              className="text-black"
              onChange={(e) => changePrice(e, 1)}
              id="price_2"
              name="price_2"
              type="number"
              value={prices[1]}
            />
          </div>
        </div>

        <div className="flex flex-col mb-4">
          <p className="sm:text-lg font-semibold">This item has a combo?</p>
          <div className="flex">
            <div className="flex-1">
              <input
                className="text-black mr-2"
                onClick={() => setCombo(true)}
                id="true"
                name="combo"
                type="radio"
                value={combo}
              />
              <label className="sm:text-lg font-semibold" htmlFor="combo">
                Yes
              </label>
            </div>

            <div className="flex-1">
              <input
                className="text-black mr-2"
                onClick={() => setCombo(false)}
                id="false"
                name="combo"
                type="radio"
                value={combo}
              />
              <label className="sm:text-lg font-semibold" htmlFor="combo">
                No
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col mb-4">
          <label className="sm:text-lg font-semibold" htmlFor="image">
            Choose an image:
          </label>
          <input
            onChange={() => setFile(e.target.files[0])}
            id="image"
            name="image"
            type="file"
            value={file}
          />
        </div>
        <button className="mt-2 font-semibold text-lg bg-white py-2 px-4 rounded-lg text-slate-900 hover:bg-slate-900 ease-in duration-100 hover:text-white">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Add;
