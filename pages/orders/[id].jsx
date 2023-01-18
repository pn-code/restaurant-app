import React from "react";
import { MdPayment, MdOutlineDoneOutline } from "react-icons/md";
import { GrDeliver, GrStatusGood } from "react-icons/gr";
import { GiCookingPot } from "react-icons/gi";
import axios from "axios";

const Order = ({ order }) => {
    const status = order.status;

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
        <div className="flex flex-col md:flex-row p-12 ">
            {/* Left */}
            <div className="flex-[2]">
                {/* Row 1 */}
                <div className="">
                    <table className="flex flex-col w-[100%] mb-12 gap-2">
                        <tr className="hidden md:flex gap-12">
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Address</th>
                            <th>Total</th>
                        </tr>
                        <tr className="flex flex-col md:flex-row text-center md:text-left">
                            {/* ORDER ID */}
                            <td>
                                <p className="font-bold text-slate-600 text-2xl md:text-lg">
                                    <span className="md:hidden">
                                        ORDER ID:{" "}
                                    </span>
                                    {order._id}
                                </p>
                            </td>
                            {/*  CUSTOMER NAME */}
                            <td>
                                <p className="font-semibold text-xl md:text-[18px]">
                                    <span className="md:hidden">
                                        CUSTOMER:{" "}
                                    </span>
                                    {order.customer}
                                </p>
                            </td>
                            {/* Address */}
                            <td className="font-semibold text-xl md:text-[18px]">
                                <span className="md:hidden">ADDRESS: </span>
                                {order.address}
                            </td>
                            {/* Total */}
                            <td>
                                <p className="font-bold text-xl md:text-[18px]">
                                    <span className="md:hidden">TOTAL: </span>
                                    ${order.total}
                                </p>
                            </td>
                        </tr>
                    </table>
                </div>
                {/* Row 2: Status */}
                <div className="flex flex-col md:flex-row mb-10 md:mb-0 md:justify-between items-center w-[100%] md:w-[80%]">
                    {/* Paid */}
                    <div className={statusClass(0)}>
                        <MdPayment className="text-[80px] md:text-3xl" />
                        <span>Payment</span>
                        <div>
                            <GrStatusGood
                                className={`${checkClass(
                                    0
                                )} text-[28px] md:text-3xl`}
                                title="paid"
                            />
                        </div>
                    </div>

                    {/* Preparing... */}
                    <div className={statusClass(1)}>
                        <GiCookingPot
                            className="text-[80px] md:text-3xl"
                            title="preparing"
                        />
                        <span>Preparing...</span>
                        <div>
                            <GrStatusGood
                                className={`${checkClass(
                                    1
                                )} text-[28px] md:text-3xl`}
                                size={30}
                                title="paid"
                            />
                        </div>
                    </div>

                    {/* On the Way */}
                    <div className={statusClass(2)}>
                        <GrDeliver className="text-[80px] md:text-3xl" />
                        <span>On The Way...</span>
                        <div>
                            <GrStatusGood
                                className={`${checkClass(
                                    2
                                )} text-[28px] md:text-3xl`}
                                size={30}
                                title="paid"
                            />
                        </div>
                    </div>

                    {/* Delivered */}
                    <div className={statusClass(2)}>
                        <MdOutlineDoneOutline className="text-[80px] md:text-3xl" />
                        <span>Delivered</span>
                        <div>
                            <GrStatusGood
                                className={`${checkClass(
                                    2
                                )} text-[28px] md:text-3xl`}
                                size={30}
                                title="paid"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Right */}
            <div className="flex-1">
                {/* Wrapper */}
                <div className="flex text-center md:text-left flex-col w-[100%] md:w-[90%] justify-between p-14 pt-[16px] h-auto md:max-h-[300px] rounded-md bg-gray-800 text-white">
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
                        className="h-auto p-4 md:p-0 md:h-8 text-3xl md:text-[18px] text-slate-600 font-bold bg-white mt-6 rounded-md hover:scale-105 ease-out duration-150 cursor-not-allowed"
                    >
                        PAID
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Order;

export const getServerSideProps = async ({ params }) => {
    const res = await axios.get(
        `http://localhost:3000/api/orders/${params.id}`
    );
    return {
        props: {
            order: res.data,
        },
    };
};