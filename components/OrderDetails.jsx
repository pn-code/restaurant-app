import React, { useState } from "react";

const OrderDetails = ({ total, createOrder, setCash }) => {
    const [customer, setCustomer] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleClick = () => {
        createOrder({ customer, address, total, method: 0 });
    };

    return (
        // Container
        <div className="z-[999] w-[100%] h-[100vh] absolute top-0 left-0 flex items-center justify-center bg-gray-600/50">
            {/* Wrapper */}
            <div className="w-[500px] gap-2 bg-white rounded-md p-12 flex flex-col items-center justify-center">
                {/* Title */}
                <h1 className="font-semibold text-xl">
                    You will pay $__ after delivery.
                </h1>
                {/* Name Input */}
                <div className="flex flex-col w-[100%]">
                    <label htmlFor="name">Name</label>
                    <input
                        onChange={(e) => setCustomer(e.target.value)}
                        value={customer}
                        type="text"
                        placeholder="John Doe"
                        id="name"
                        name="name"
                    />
                </div>
                {/* Address Input */}
                <div className="flex flex-col w-[100%]">
                    <label htmlFor="address">Address</label>
                    <input
                        onChange={(e) => setAddress(e.target.value)}
                        value={address}
                        type="text"
                        placeholder="Address"
                        id="address"
                        name="address"
                    />
                </div>
                {/* Phone Number Input */}
                <div className="flex flex-col w-[100%]">
                    <label htmlFor="">Phone Number</label>
                    <input
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        value={phoneNumber}
                        type="tel"
                        placeholder="(123) 456-7890"
                        id="phone_number"
                        name="phone_number"
                    />
                </div>
                <div className="w-[70%] mt-6 flex justify-between">
                    <button onClick={() => setCash(false)} className="border-none bg-slate-300 text-slate-900 py-3 px-5 font-semibold text-2xl sm:text-xl rounded-md cursor-pointer hover:scale-105 ease-in-out duration-300">
                        Cancel
                    </button>
                    <button onClick={handleClick} className="border-none bg-slate-900 text-white py-3 px-5 font-semibold text-2xl sm:text-xl rounded-md cursor-pointer hover:scale-105 ease-in-out duration-300">
                        Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;
