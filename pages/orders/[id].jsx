import React from "react";
import { MdPayment, MdOutlineDoneOutline } from "react-icons/md";
import { GrDeliver, GrStatusGood } from "react-icons/gr";
import { GiCookingPot } from "react-icons/gi";

const Order = () => {
    const status = 0;

    const statusClass = (index) => {
        // IF DONE...
        if (index - status < 1) return "flex flex-col items-center";
        // IF IN PROGRESS...
        if (index - status === 1)
            return "flex flex-col items-center animate-pulse";
        // IF NOT DONE...
        if (index - status > 1)
            return "flex flex-col items-center opacity-[0.3]";
    };

    const checkClass = (index) => {
        // IF DONE...
        if (index - status >= 1) return "hidden";
    };

    return (
        // Container
        <div className="flex p-12 ">
            {/* Left */}
            <div className="flex-[2]">
                {/* Row 1 */}
                <div className="">
                    <table className="w-[100%] mb-12">
                        <tr>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Address</th>
                            <th>Total</th>
                        </tr>
                        <tr>
                            {/* ORDER ID */}
                            <td>
                                <span className="font-semibold text-slate-600 text-lg">
                                    #151561
                                </span>
                            </td>
                            {/*  CUSTOMER NAME */}
                            <td>
                                <span>Philip N</span>
                            </td>
                            {/* Address */}
                            <td>123 Addy Way, City 98765</td>
                            {/* Total */}
                            <td>
                                <span className="font-semibold text-lg">
                                    $100.00
                                </span>
                            </td>
                        </tr>
                    </table>
                </div>
                {/* Row 2: Status */}
                <div className="flex justify-between items-center w-[80%]">
                    {/* Paid */}
                    <div className={statusClass(0)}>
                        <MdPayment size={30} />
                        <span>Payment</span>
                        <div>
                            <GrStatusGood
                                className={checkClass(0)}
                                size={30}
                                title="paid"
                            />
                        </div>
                    </div>

                    {/* Preparing... */}
                    <div className={statusClass(1)}>
                        <GiCookingPot size={36} title="preparing" />
                        <span>Preparing...</span>
                        <div>
                            <GrStatusGood className={checkClass(1)} size={30} title="paid" />
                        </div>
                    </div>

                    {/* On the Way */}
                    <div className={statusClass(2)}>
                        <GrDeliver size={30} />
                        <span>On The Way...</span>
                        <div>
                            <GrStatusGood className={checkClass(1)} size={30} title="paid" />
                        </div>
                    </div>

                    {/* Delivered */}
                    <div className={statusClass(2)}>
                        <MdOutlineDoneOutline size={30} />
                        <span>Delivered</span>
                        <div>
                            <GrStatusGood className={checkClass(2)} size={30} title="paid" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Right */}
            <div className="flex-1">
                {/* Wrapper */}
                <div className="flex flex-col w-[90%] justify-between p-14 pt-[16px] max-h-[300px] rounded-md bg-gray-800 text-white">
                    <h2 className="font-bold text-xl my-2">CART TOTAL</h2>
                    {/* Subtotal Text */}
                    <div>
                        <b className="mr-[10px]">Subtotal: </b> $100.00
                    </div>
                    {/* Discount Text */}
                    <div>
                        <b className="mr-[10px]">Discount:</b> $0.00
                    </div>
                    {/* Total Text */}
                    <div>
                        <b className="mr-[10px]">Total:</b> $100.00
                    </div>
                    <button
                        disabled
                        className="h-8 text-slate-600 font-bold bg-white mt-6 rounded-md hover:scale-105 ease-out duration-150 cursor-not-allowed"
                    >
                        PAID
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Order;
