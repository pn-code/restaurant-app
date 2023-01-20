import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Add = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [prices, setPrices] = useState([]);
  const [combo, setCombo] = useState(true);

  return (
    // Container
    <div>
      {/* Wrapper */}
      <div>
        {/* Need to implement a close modal function here... */}
        <span>X</span>
        <h1>Add New Product</h1>

        <div>
          <label htmlFor="image">Choose an image.</label>
          <input id="image" name="image" type="file" />
        </div>

        <div>
          <label htmlFor="title">Title: </label>
          <input id="title" name="title" type="text" />
        </div>

        <div>
          <label htmlFor="desc">Description: </label>
          <input id="desc" name="desc" type="text" />
        </div>

        <div>
          <label htmlFor="prices">Prices: </label>
          <input id="prices" name="prices" type="number" />
        </div>

        <div>
          <p>Does this item have a combo?</p>

          <input
            id="true"
            name="combo"
            type="radio"
            value={combo}
          />
          <label htmlFor="combo">Yes</label>

          <input
            id="false"
            name="combo"
            type="radio"
            value={combo}
          />
          <label htmlFor="combo">No</label>
        </div>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Add;
