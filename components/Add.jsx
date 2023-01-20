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
    <div className="flex items-center justify-center w-[200vw] h-[100vh] bg-gray-800/50 fixed top-0 z-[999] text-center sm:text-left">
      {/* Wrapper */}
      <div className="flex flex-col bg-slate-800 text-white rounded-lg p-10">
        {/* Need to implement a close modal function here... */}
        <div
          onClick={() => setOpen(false)}
          className="flex justify-center items-center bg-black rounded-full w-6 h-6 cursor-pointer text-right"
        >
          <span className="text-white">X</span>
        </div>

        <h1 className="text-2xl sm:text-xl font-bold">Add New Product</h1>

        <div className="flex flex-col">
          <label className="text-lg font-semibold" htmlFor="title">Title: </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            name="title"
            type="text"
            value={title}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-semibold" htmlFor="desc">Description: </label>
          <textarea
          className="resize-none"
            onChange={(e) => setDesc(e.target.value)}
            id="desc"
            name="desc"
            cols={30}
            rows={4}
            value={desc}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-semibold" htmlFor="price_1">Price with no combo: </label>
          <input
            onChange={(e) => changePrice(e, 0)}
            id="price_1"
            name="price_1"
            type="number"
            value={prices[0]}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-semibold" htmlFor="price_2">Price with combo: </label>
          <input
            onChange={(e) => changePrice(e, 1)}
            id="price_2"
            name="price_2"
            type="number"
            value={prices[1]}
          />
        </div>

        <div className="flex flex-col">
          <p className="text-lg font-semibold">Does this item have a combo?</p>
          <div>
            <input
              onClick={() => setCombo(true)}
              id="true"
              name="combo"
              type="radio"
              value={combo}
            />
            <label className="text-lg font-semibold" htmlFor="combo">Yes</label>
          </div>

          <div>
            <input
              onClick={() => setCombo(false)}
              id="false"
              name="combo"
              type="radio"
              value={combo}
            />
            <label className="text-lg font-semibold" htmlFor="combo">No</label>
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-lg font-semibold" htmlFor="image">Choose an image:</label>
          <input
            onChange={() => setFile(e.target.files[0])}
            id="image"
            name="image"
            type="file"
            value={file}
          />
        </div>
        <button className="mt-5 font-semibold text-lg bg-white py-2 px-4 rounded-lg text-slate-900 hover:bg-slate-900 ease-in duration-100 hover:text-white">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Add;
