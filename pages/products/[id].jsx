import { useState } from "react";
import Image from "next/image";
import { FaHamburger } from "react-icons/fa";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "@/redux/cartSlice";
import { BiPlusCircle } from "react-icons/bi";
import toast from "react-hot-toast";

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
    toast.success(`Added ${quantity} ${product.title} to cart!`)
  };

  return (
    // Container
    <div className="flex h-full p-10 text-center flex-col sm:text-left sm:flex-row">
      {/* Left */}
      <div className="flex flex-1 h-[100%] items-center justify-center">
        <div className="w-full h-[70vw] sm:w-[80%] sm:h-[80%] relative">
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
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <span className="text-slate-600 text-2xl sm:text-xl font-semibold border-b-[1px] mt-5">
          ${total}.00
        </span>
        <p className="text-xl sm:text-lg mt-10">{product.desc}</p>

        <h3 className="text-2xl font-bold mt-6 mb-5">Choose your Combo</h3>
        <div className="flex sm:flex-row justify-center sm:justify-start gap-4 flex-col items-center">
          <div className="mb-4">
            <button
              onClick={() => setCombo(0)}
              className="w-[160px] text-[20px] sm:text-[18px] flex justify-center items-center font-bold bg-gray-900 py-2 border-4 border-transparent hover:border-black hover:bg-gray-100 hover:text-gray-900 px-5 rounded-md text-white ease-out duration-150"
            >
              <FaHamburger size={24} />
              <span className="ml-3">NONE</span>
            </button>
          </div>
          <div className="mb-4">
            <button
              onClick={() => setCombo(1)}
              className="w-[160px] text-[20px] sm:text-[18px] flex font-bold bg-gray-900 py-2 px-5 rounded-md text-white border-4 border-transparent hover:border-black hover:bg-gray-100 hover:text-gray-900 ease-out duration-150"
            >
              <div className="absolute">
                <FaHamburger size={24} className="relative top-[3px]" />
                <BiPlusCircle
                  size={20}
                  className="relative -top-7 -right-4 text-green-500 bg-white rounded-full"
                />
              </div>
              <span className="ml-10">COMBO</span>
            </button>
          </div>
        </div>
        <span className="text-sm font-semibold mt-10">
          * COMBO: Paired with a side of your choice and a drink.
        </span>

        {/* Extra Options */}
        <div>
          <h3 className="text-2xl font-bold mt-6 mb-5">Extra Options</h3>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-4 mb-5">
              {product.extraOptions.map((option) => (
                <div
                  key={option.text}
                  className="flex justify-start sm:justify-center items-center gap-2"
                >
                  <input
                    className="w-10 h-10 rounded-md sm:w-6 sm:h-6"
                    id={option.text}
                    name={option.text}
                    onClick={(e) => handleChange(e, option)}
                    type="checkbox"
                  />
                  <label
                    className="text-xl sm:text-[16px]"
                    htmlFor={option.text}
                  >
                    {option.text}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Conditionally Render Side & Drink Form when COMBO is selected */}
        {combo == 1 && (
          <form>
            <div className="mt-4">
              <label className="text-md font-semibold mr-2" htmlFor="side">
                SIDE:
              </label>
              <select
                className="rounded-md"
                name="side"
                id="side"
                value={side}
                onChange={(e) => setSide(e.target.value)}
              >
                <option default value="">
                  SELECT SIDE
                </option>
                <option value="fries">Seasoned Fries</option>
                <option value="onions">Beer-Battered Onion Rings</option>
                <option value="pickles">Pickles</option>
                <option value="vegetables">Steamed Vegetables</option>
              </select>
            </div>
            <div className="mt-4">
              <label className="text-md font-semibold mr-2" htmlFor="drink">
                DRINK:
              </label>
              <select
                className="rounded-md"
                name="drink"
                id="drink"
                value={drink}
                onChange={(e) => setDrink(e.target.value)}
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
        <div className="flex justify-between sm:justify-start items-center mt-5">
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
            className="w-[200px] h-12 text-[20px] rounded-md px-3 ml-[10px] bg-blue-600/95 text-white font-bold cursor-pointer hover:bg-white hover:text-blue-600/95 border-4 border-transparent hover:border-blue-600/95 ease-out duration-150"
          >
            ADD TO CART
          </button>
        </div>
      </div>
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
