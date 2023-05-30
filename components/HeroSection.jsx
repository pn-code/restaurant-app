import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-black flex flex-col lg:flex-row">
      <Image
        src="/assets/hero-img.png"
        height={600}
        width={1200}
      />
        <section className="py-20 text-white flex justify-center items-center w-full flex-col text-2xl font-bold gap-8 lg:text-4xl lg:gap-10">
            <div className="text-3xl lg:text-5xl">A Legacy of Flavor: </div>
            <div>HANDCRAFTED BURGERS &amp; FRIES</div>
            <div className="text-2xl lg:text-4xl">since 1926</div>
            <Link href="/menu" className="border-4 border-gray-100 py-2 px-4 lg:py-4 lg:px-8 hover:text-black hover:bg-gray-50 ease-linear duration-200 mt-5">ORDER NOW</Link>
        </section>
    </section>
  );
}
