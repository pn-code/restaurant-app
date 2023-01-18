import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "@/components/CartCard";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

const Cart = () => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    // This values are the props in the UI
    const amount = "2";
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
                        return actions.order.capture().then(function () {
                            // Your code here after capture the order
                        });
                    }}
                />
            </>
        );
    };

    return (
        // Container
        <div className="flex flex-col gap-8 p-12 sm:flex-row">
            {/* Left */}
            <table className="flex flex-col items-center justify-center sm:items-start sm:justify-start w-[100%] flex-[2]">
                <tr className="hidden sm:flex gap-12 text-[20px]">
                    <th>Product</th>
                    <th>Name</th>
                    <th>Combo</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>

                {cart.products.map((product) => (
                    <CartCard product={product} />
                ))}
            </table>
            {/* Right */}
            <div className="flex-1">
                {/* Wrapper */}
                <div className="flex flex-col w-[100%] sm:w-[90%] justify-between p-14 pt-[16px] max-h-[300px] rounded-md bg-gray-800 text-white">
                    <h2 className="font-bold text-xl my-2">CART TOTAL</h2>
                    {/* Subtotal Text */}
                    <div>
                        <b className="mr-[10px]">Subtotal: </b> ${cart.total}
                    </div>
                    {/* Discount Text */}
                    <div>
                        <b className="mr-[10px]">Discount:</b> $0.00
                    </div>
                    {/* Total Text */}
                    <div>
                        <b className="mr-[10px]">Total:</b> ${cart.total}
                    </div>
                    {open ? (
                        // Payment Methods
                        <div className="mt-[10px] flex flex-col">
                            <button className="p-2 mt-4 cursor-pointer mb-2 bg-white text-slate-800 font-bold rounded-md" >Pay Cash on Delivery</button>
                            <div
                                style={{
                                    maxWidth: "750px",
                                    minHeight: "200px",
                                }}
                            >
                                <PayPalScriptProvider
                                    options={{
                                        "client-id": "test",
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
                    ) : (
                        <button
                            onClick={() => setOpen(true)}
                            className="h-8 text-slate-600 font-bold cursor-pointer bg-white mt-6 rounded-md hover:scale-105 ease-out duration-150"
                        >
                            Checkout
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cart;
