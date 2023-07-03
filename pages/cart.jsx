import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "@/components/CartCard";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import axios from "axios";
import { useRouter } from "next/router";
import { reset } from "@/redux/cartSlice";
import OrderDetails from "@/components/OrderDetails";

const host = process.env.NEXT_PUBLIC_HOST_URI;

const Cart = () => {
    const [cash, setCash] = useState(false);

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const router = useRouter();

    // Create Order
    const createOrder = async (data) => {
        try {
            const res = await axios.post(host + "/api/orders", data);
            res.status === 201 && router.push(`/orders/${res.data._id}`);
            dispatch(reset());
        } catch (err) {
            console.log(err);
        }
    };

    // This values are the props in the UI
    const amount = cart.total;
    const currency = "USD";
    const style = { layout: "vertical" };

    // Custom component to wrap the PayPalButtons and handle currency changes
    const ButtonWrapper = ({ currency, showSpinner }) => {
        // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
        // This is the main reason to wrap the PayPalButtons in a new component
        const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

        useEffect(() => {
            dispatch({
                type: "resetOptions",
                value: {
                    ...options,
                    currency: currency,
                },
            });
        }, [currency, showSpinner]);

        return (
            <>
                {showSpinner && isPending && <div className="spinner" />}
                <PayPalButtons
                    style={style}
                    disabled={false}
                    forceReRender={[amount, currency, style]}
                    fundingSource={undefined}
                    createOrder={(data, actions) => {
                        return actions.order
                            .create({
                                purchase_units: [
                                    {
                                        amount: {
                                            currency_code: currency,
                                            value: amount,
                                        },
                                    },
                                ],
                            })
                            .then((orderId) => {
                                // Your code here after create the order
                                return orderId;
                            });
                    }}
                    onApprove={function (data, actions) {
                        return actions.order.capture().then(function (details) {
                            const shipping = details.purchase_units[0].shipping;
                            createOrder({
                                customer: shipping.name.full_name,
                                address: shipping.address.address_line_1,
                                total: cart.total,
                                method: 1,
                            });
                        });
                    }}
                />
            </>
        );
    };

    return (
        // Container
        <main className="bg-gray-50 h-full">
            <header className="p-10 bg-black/95">
                <h1 className="text-4xl font-bold text-white">Your Cart</h1>
                <h2 className="font-semibold bold text-lg mb-5 text-gray-200">
                    Review and check out items
                </h2>
            </header>

            <div className="w-full h-full flex flex-col gap-8 p-12 md:flex-row">
                {/* Left */}
                <table className="text-center sm:text-left flex-[5] p-10 text-lg">
                    <thead className="bg-gray-900/95 text-white">
                        <tr className="hidden sm:flex text-[16px]">
                            <th className="flex-[1]">Product</th>
                            <th className="flex-[1]">Name</th>
                            <th className="flex-[2]">Extras</th>
                            <th className="flex-[1]">Combo</th>
                            <th className="flex-[1]">Price</th>
                            <th className="flex-[1]">Quantity</th>
                            <th className="flex-[1]">Total</th>
                        </tr>
                    </thead>

                    {cart.products.map((product, idx) => (
                        <CartCard key={idx} product={product} />
                    ))}
                </table>

                {/* Right */}
                <div className="w-full h-full text-center sm:text-left flex-1 bg-black/90 rounded-md flex">
                    {/* Wrapper */}
                    <div className="w-full p-2 pt-[16px] max-h-[300px] rounded-md text-white text-[18px]">
                        <h2 className="font-bold text-2xl my-2">CART TOTAL</h2>
                        {/* Subtotal Text */}
                        <div>
                            <b className="mr-[10px]">Subtotal: </b> $
                            {cart.total}.00
                        </div>
                        {/* Discount Text */}
                        <div>
                            <b className="mr-[10px]">Discount:</b> $0.00
                        </div>
                        {/* Total Text */}
                        <div>
                            <b className="mr-[10px]">Total:</b> ${cart.total}.00
                        </div>

                        {/* Payment Methods */}
                        <div className="mt-[10px] flex flex-col w-full">
                            <button
                                onClick={() => setCash(true)}
                                className="w-full text-[16px] font-semibold p-4 mt-4 cursor-pointer mb-2 bg-white text-gray-800 rounded-sm hover:bg-black/90 hover:text-white ease-linear duration-200 border-2 border-transparent hover:border-white"
                            >
                                Pay Cash on Delivery
                            </button>
                            <div
                                style={{
                                    maxWidth: "600px",
                                    minHeight: "200px",
                                }}
                            >
                                <PayPalScriptProvider
                                    options={{
                                        "client-id":
                                            "AS-yzG-mgpM8nC7Vd12LhyDimVQYzW2hTH1tQH7P_MlhDDDJmnk4Tzhra6F353dZKvyBIMmRazefk-9I",
                                        components: "buttons",
                                        currency: "USD",
                                        "disable-funding":
                                            "card,paylater,venmo",
                                    }}
                                >
                                    <ButtonWrapper
                                        currency={currency}
                                        showSpinner={false}
                                    />
                                </PayPalScriptProvider>
                            </div>
                        </div>
                    </div>
                </div>
                {cash && (
                    <OrderDetails
                        total={cart.total}
                        createOrder={createOrder}
                        setCash={setCash}
                    />
                )}
            </div>
        </main>
    );
};

export default Cart;
