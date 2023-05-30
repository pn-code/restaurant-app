const Footer = () => {
    return (
        // Container
        <div className="h-auto bg-black/[92%] flex pt-10 w-full justify-center">
            {/* Contact */}
            <div className="flex flex-col sm:flex-row flex-2 relative text-gray-200 p-12 justify-between text-center sm:text-left">
                {/* Motto */}
                <div className="flex flex-1 pb-10 sm:py-0">
                    <h1 className="text-[32px] font-bold text-gray-100">ALWAYS SERVING THE BEST FOODS</h1>
                </div>
                {/* Locations */}
                <div className="flex-2 py-0 sm:px-5">
                    <h1 className="text-[28px] sm:text-[18px] text-amber-300 font-bold pb-5">FIND OUR RESTAURANTS</h1>
                    <p className="text-[20px] sm:text-[16px] pb-5">
                        123 Addy Way,
                        <br />
                        Notacity, 98765
                        <br /> (123) 456-7890
                    </p>
                    <p className="text-[20px] sm:text-[16px] pb-5">
                        1234 Addy Way,
                        <br />
                        Notacity, 98765
                        <br /> (123) 456-7890
                    </p>
                </div>
                
                {/* Hours */}
                <div className="flex-1 py-0 sm:px-5">
                    <h1 className="text-[28px] sm:text-[18px] text-amber-300 font-bold pb-5">WORKING HOURS</h1>
                    <p className="text-[20px] sm:text-[16px] pb-5">
                        MONDAY THROUGH FRIDAY
                        <br /> 9:00 - 24:00
                    </p>
                    <p className="text-[20px] sm:text-[16px] pb-5">
                        SATURDAY &amp; SUNDAY
                        <br /> 12:00 - 21:00
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
