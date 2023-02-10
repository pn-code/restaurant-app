import Head from "next/head";
import Featured from "@/components/Featured";
import ProductList from "@/components/ProductList";
import axios from "axios";

const host = process.env.HOST_URI + "/api/products";

export default function Home({ productList, admin }) {
    return (
        <>
            <Head>
                <title>Restaurant</title>
                <meta name="description" content="restaurant app" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Featured />
            <ProductList productList={productList} admin={admin}/>
        </>
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
            admin
        },
    };
};
