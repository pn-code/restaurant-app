import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Featured = () => {
    const [index, setIndex] = useState(0);

    const images = [
        "/assets/featured1.png",
        "/assets/featured2.png",
        "/assets/featured3.png",
    ];

    const handleArrow = (direction) => {
        switch (direction) {
            case "left":
                setIndex(index !== 0 ? index - 1 : 2);
                break;
            case "right":
                setIndex(index !== 2 ? index + 1 : 0);
                break;
        }
    };

    return (
        // Container
        <div className="h-[50vh] md:h-[calc(100vh-116px)] overflow-hidden z-0 relative">
            <div
                className="featuredArrow left-0"
                onClick={() => handleArrow("left")}
            >
                <IoIosArrowBack size={106} />
            </div>

            {/* Wrapper */}
            <div
                className={`flex w-[300vw] h-[100%] z-0 transition ease-in-out duration-500`}
                style={{ transform: `translateX(${-100 * index}vw)` }}
            >
                {images.map((img, i) => (
                    <div className="w-[100vw] h-[100%] relative" key={i}>
                        <Image
                            src={img}
                            alt=""
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                ))}
            </div>

            <div className="featuredArrow right-0">
                <IoIosArrowForward
                    size={100}
                    onClick={() => handleArrow("right")}
                />
            </div>
        </div>
    );
};

export default Featured;
