import Image from "next/image";
import React from "react";

const Footer = () => {
    return (
        // Container
        <div className="h-auto sm:h-[calc(100vh-116px)] bg-gray-900 flex mt-12">
            {/* Image */}
            <div className="hidden sm:flex flex-1 relative">
              {/* Photo by Ronan Kruithof <a href="https://unsplash.com/@ronank?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ronan Kruithof</a> on <a href="https://unsplash.com/photos/PCE0T5i4pDI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>*/}
                <Image src="/assets/contact.jpg" layout="fill" objectFit="cover" alt="" />
            </div>

            {/* Contact */}
            <div className="flex flex-col sm:flex-row flex-2 relative text-gray-300 p-12 justify-between text-center sm:text-left">
                {/* Motto */}
                <div className="flex flex-1 pb-10 sm:py-0">
                    <h1 className="text-[48px] sm:text-[32px] font-bold text-gray-100">ALWAYS SERVING THE BEST FOODS</h1>
                </div>
                {/* Locations */}
                <div className="flex-2 py-0 sm:px-5">
                    <h1 className="text-[32px] sm:text-[18px] text-[#b7903c] font-bold pb-5">FIND OUR RESTAURANTS</h1>
                    <p className="text-[24px] sm:text-[16px] pb-5">
                        123 Addy Way,
                        <br />
                        Notacity, 98765
                        <br /> (123) 456-7890
                    </p>
                    <p className="text-[24px] sm:text-[16px] pb-5">
                        1234 Addy Way,
                        <br />
                        Notacity, 98765
                        <br /> (123) 456-7890
                    </p>
                    <p className="text-[24px] sm:text-[16px] pb-5">
                        12345 Addy Way,
                        <br />
                        Notacity, 98765
                        <br /> (123) 456-7890
                    </p>
                </div>
                {/* Hours */}
                <div className="flex-1 py-0 sm:px-5">
                    <h1 className="text-[32px] sm:text-[18px] text-[#b7903c] font-bold pb-5">WORKING HOURS</h1>
                    <p className="text-[24px] sm:text-[16px] pb-5">
                        MONDAY THROUGH FRIDAY
                        <br /> 9:00 - 24:00
                    </p>
                    <p className="text-[24px] sm:text-[16px] pb-5">
                        SATURDAY & SUNDAY
                        <br /> 12:00 - 21:00
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
