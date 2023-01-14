import Head from "next/head";
import Featured from "@/components/Featured";
import ProductList from "@/components/ProductList";

export default function Home() {
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
            <ProductList />
        </>
    );
}
