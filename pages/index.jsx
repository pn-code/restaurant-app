import Head from "next/head";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Monster Burger</title>
        <meta name="description" content="This Restaurant App is a full-stack Next.js application that allows users to browse the menu, customize orders with add-ons and meal combos, view and manage their cart, place orders with PayPal or cash, and track order status." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <HeroSection/>
    </>
  );
}