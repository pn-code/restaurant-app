import Head from "next/head";
import Featured from "@/components/Featured";
import ProductList from "@/components/ProductList";
import axios from "axios";
import { useSession, signIn, signOut } from "next-auth/react"

export default function Home({productList}) {
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
            <ProductList productList={productList}/>
        </>
    );
}

export const getServerSideProps = async () => {
    const res = await axios.get("http://localhost:3000/api/products");
    return {
        props: {
            productList: res.data
        }
    }
}