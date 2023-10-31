import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="bg-[#0f0f0f]/60 flex flex-col lg:flex-row">
            <section className="flex-[2]">
                <Image src="/assets/hero-img.png" height={600} width={1000} />
            </section>

            <section className="p-2 text-center lg:mr-[2%] flex-[1.5] py-20 text-white flex justify-center items-center w-full flex-col text-2xl font-bold gap-8 lg:text-4xl lg:gap-10">
                <div className="text-2xl lg:text-4xl">A Legacy of Flavor: </div>
                <div className="text-xl lg:text-3xl">HANDCRAFTED BURGERS &amp; FRIES</div>
                <div className="text-xl lg:text-2xl">SINCE 1926</div>
                <Link
                    passHref
                    href="/menu"
                    className="border-4 border-gray-100 py-2 px-4 lg:py-4 lg:px-8 hover:text-black hover:bg-gray-50 ease-linear duration-200 mt-5"
                >
                    ORDER NOW
                </Link>
            </section>
        </section>
    );
}
