import React from "react";
import { useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ productList }) => {
  return (
    // Container
    <section className="flex items-center py-5 px-[10px] flex-col rounded-md">
      {/* Wrapper */}
      <div className="flex w-[100%] flex-wrap gap-4">
        {productList.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;

//  Add New Product

// {admin && (
//     <>
//         {" "}
//         <button
//             onClick={() => setOpen(true)}
//             className="font-semibold text-lg bg-slate-700 py-2 px-4 rounded-lg text-white"
//         >
//             Add Product
//         </button>
//         {open && <Add setOpen={setOpen} />}
//     </>
// )}
