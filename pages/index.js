import Head from "next/head";
import Image from "next/image";
import Featured from "@/components/Featured";

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
            <Featured/>
        </>
    );
}
