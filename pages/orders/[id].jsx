import React from "react";
import { MdPayment, MdOutlineDoneOutline } from "react-icons/md";
import { GrDeliver, GrStatusGood } from "react-icons/gr";
import { GiCookingPot } from "react-icons/gi";
import axios from "axios";

const Order = ({ order }) => {
    const status = order.status;

    const statusClass = (index) => {
        // IF DONE...
        if (index - status < 1)
            return "flex flex-col items-center text-green-700 w-full border-green-700 border-2 rounded-sm py-2 mr-2";
        // IF IN PROGRESS...
        if (index - status === 1)
            return "flex flex-col items-center animate-pulse w-full border-gray-300 border-2 rounded-sm py-2 mr-2";
        // IF NOT DONE...
        if (index - status > 1)
            return "flex flex-col items-center opacity-[0.3] w-full border-gray-300 border-2 rounded-sm py-2 mr-2";
    };

    return (
        // Container
        <main className="bg-gray-50 pb-5 mt-4">
            <header className="px-14 py-1 bg-zinc-900">
                <h1 className="text-4xl font-bold text-white">Your Order</h1>
                <h2 className="font-semibold bold text-lg mb-5 text-amber-300">
                    Track your delivery!
                </h2>
            </header>

            <div className="flex flex-col md:flex-row p-4 sm:p-14">
                {/* Left */}
                <div className="flex-[3]">
                    {/* Row 1 */}
                    <div>
                        <table className="flex flex-col w-[100%] mb-8">
                            <thead>
                                <tr className="hidden md:flex text-left">
                                    <th className="flex-1">Order ID</th>
                                    <th className="flex-1">Customer</th>
                                    <th className="flex-1">Address</th>
                                    <th className="flex-1">Total</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr className="flex flex-col md:flex-row text-left">
                                    {/* ORDER ID */}
                                    <td className="flex-1">
                                        <p className="font-semibold text-lg">
                                            <span className="md:hidden">
                                                ORDER ID:{" "}
                                            </span>
                                            {order._id.slice(0, 7)}...
                                        </p>
                                    </td>
                                    {/*  CUSTOMER NAME */}
                                    <td className="flex-1">
                                        <p className="text-lg">
                                            <span className="md:hidden">
                                                CUSTOMER:{" "}
                                            </span>
                                            {order.customer.length > 20
                                                ? order.customer.substring(
                                                      0,
                                                      17
                                                  )
                                                : order.customer}
                                        </p>
                                    </td>
                                    {/* Address */}
                                    <td className="flex-1">
                                        <p className="text-lg">
                                            <span className="md:hidden text-lg">
                                                ADDRESS:{" "}
                                            </span>
                                            {order.address}
                                        </p>
                                    </td>
                                    {/* Total */}
                                    <td className="flex-1">
                                        <p className="text-lg">
                                            <span className="md:hidden text-lg">
                                                TOTAL:{" "}
                                            </span>
                                            ${order.total}
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Row 2: Status */}
                    <div className="w-full flex flex-col mb-10 md:mb-0 md:justify-between items-center md:w-[90%] xl:w-[83%]">
                        <div className="w-full flex flex-col md:flex-row md:justify-between items-start">
                            {/* Paid */}
                            <div className={statusClass(0)}>
                                <div className="flex items-center justify-between w-full px-10">
                                    <span className="text-lg font-semibold">Payment</span>
                                    <MdPayment className="text-[60px] md:text-3xl" />
                                </div>
                            </div>

                            {/* Preparing... */}
                            <div className={statusClass(1)}>
                                <div className="flex items-center justify-between w-full px-10">
                                    <span className="text-lg font-semibold">Preparing</span>
                                    <GiCookingPot
                                        className="text-[60px] md:text-3xl"
                                        title="preparing"
                                    />
                                </div>
                            </div>

                            {/* On the Way */}
                            <div className={statusClass(2)}>
                                <div className="flex items-center justify-between w-full px-10">
                                    <span className="text-lg font-semibold">On the Way</span>
                                    <GrDeliver className="text-[52px] md:text-3xl" />
                                </div>
                            </div>

                            {/* Delivered */}
                            <div className={statusClass(2)}>
                                <div className="flex items-center justify-between w-full px-10">
                                    <span className="text-lg font-semibold">Delivered</span>
                                    <MdOutlineDoneOutline className="text-[52px] md:text-3xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right */}
                <div className="w-full h-full text-center sm:text-left flex-1 bg-black/90 rounded-md flex py-10 px-12">
                    {/* Wrapper */}
                    <div className="w-full h-full p-2 pt-[16px] max-h-[300px] rounded-md text-white text-[18px]">
                        <h2 className="font-extrabold text-4xl md:text-xl my-2">
                            CART TOTAL
                        </h2>
                        {/* Subtotal Text */}
                        <div className="text-[24px] md:text-[18px] mr-[10px]">
                            <b>Subtotal: </b> ${order.total}
                        </div>
                        {/* Discount Text */}
                        <div className="text-[24px] md:text-[18px] mr-[10px]">
                            <b>Discount:</b> $0.00
                        </div>
                        {/* Total Text */}
                        <div className="text-[24px] md:text-[18px] mr-[10px]">
                            <b>Total:</b> ${order.total}
                        </div>
                        <button
                            disabled
                            className="w-full p-4 md:p-0 md:h-8 text-3xl md:text-[18px] text-slate-600 font-bold bg-white mt-6 rounded-md cursor-not-allowed"
                        >
                            PAID
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Order;

export const getServerSideProps = async ({ params }) => {
    const res = await axios.get(
        `${process.env.HOST_URI}/api/orders/${params.id}`
    );
    return {
        props: {
            order: res.data,
        },
    };
};
