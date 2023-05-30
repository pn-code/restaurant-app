import ProductList from "@/components/ProductList";
import axios from "axios";

const host = process.env.HOST_URI + "/api/products";

export default function MenuPage({ productList }) {
  return (
    <main className="bg-gray-50">
      <header className="p-10 bg-black/95">
        <h1 className="text-4xl font-bold text-white">Menu</h1>
        <h2 className="font-semibold bold text-lg mb-5 text-gray-200">
          Order the best food in town!
        </h2>
      </header>

      <section className="p-10 bg-gray-50">
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
