import ProductList from "@/components/ProductList";
import axios from "axios";

const host = process.env.HOST_URI + "/api/products";

export default function MenuPage({ productList }) {
  return (
    <main className="bg-gray-50 mt-4">
      <header className="sm:px-14 py-1 bg-zinc-900 text-center sm:text-left">
        <h1 className="text-4xl font-bold text-white">Menu</h1>
        <h2 className="font-semibold bold text-lg mb-5 text-amber-300">
          Order the best food in town!
        </h2>
      </header>

      <section className="sm:p-10 bg-gray-50">
        <ProductList productList={productList} />
      </section>
    </main>
  );
}

export const getServerSideProps = async (ctx) => {
  const res = await axios.get(host);
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  return {
    props: {
      productList: res.data,
      admin,
    },
  };
};
