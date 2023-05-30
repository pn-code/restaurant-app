import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    // Container
    <div className="rounded-sm hover:shadow-xl hover:bg-gray-200 ease-in duration-300 w-[100%] sm:w-[50%] md:w-[33%] xl:w-[20%] flex flex-col items-center justify-center py-5 px-10">
      <Link
        className="flex flex-col justify-center items-center"
        href={`/products/${product._id}`}
      >
        {/* Product Image */}
        <section className="w-[200px] h-[200px] flex justify-center items-center">
          <Image
            className="rounded-md"
            src={product.image}
            alt={product.title}
            width={500}
            height={500}
          />
        </section>

        {/* Product Name */}
        <h1 className="text-center text-[24px] font-bold text-slate-900 hover:text-slate-800 hover:underline">
          {product.title}
        </h1>
      </Link>
      {/* Price */}
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-center">Normal</th>
            <th className="text-center">Combo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center">${product.prices[0]}.00</td>
            <td className="text-center">${product.prices[1]}.00</td>
          </tr>
        </tbody>
      </table>

      {/* Description */}
      <p className="mt-2 text-center sm:text-left text-[16px] text-slate-800">
        {product.desc.length > 100
          ? `${product.desc.substring(0, 97)}...`
          : product.desc}
      </p>
    </div>
  );
};

export default ProductCard;
