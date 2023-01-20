import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Add = ({ setOpen }) => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [prices, setPrices] = useState([]);
  const [combo, setCombo] = useState(true);

  return (
    // Container
    <div>
      {/* Wrapper */}
      <div className="flex flex-col">
        {/* Need to implement a close modal function here... */}
        <div className="flex justify-center items-center bg-black rounded-full w-6 h-6 text-right">
          <span
            className="cursor-pointer text-right text-white"
          >
            X
          </span>
        </div>

        <h1 className="text-2xl sm:text-xl font-semibold">Add New Product</h1>

        <div className="flex flex-col">
          <label htmlFor="title">Title: </label>
          <input id="title" name="title" type="text" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="desc">Description: </label>
          <textarea id="desc" name="desc" cols={30} rows={4} />
        </div>

        <div className="flex flex-col">
          <label htmlFor="price_1">Price with no combo: </label>
          <input id="price_1" name="price_1" type="number" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="price_2">Price with combo: </label>
          <input id="price_2" name="price_2" type="number" />
        </div>

        <div className="flex flex-col">
          <p>Does this item have a combo?</p>
          <div>
            <input id="true" name="combo" type="radio" value={combo} />
            <label htmlFor="combo">Yes</label>
          </div>

          <div>
            <input id="false" name="combo" type="radio" value={combo} />
            <label htmlFor="combo">No</label>
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="image">Choose an image:</label>
          <input id="image" name="image" type="file" />
        </div>
        <button className="font-semibold text-lg bg-slate-700 py-2 px-4 rounded-lg text-white">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Add;
