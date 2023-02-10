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

const Cart = () => {
    const [open, setOpen] = useState(false);
    const [cash, setCash] = useState(false);

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const router = useRouter();

    // Create Order
    const createOrder = async (data) => {
        try {
            const res = await axios.post(
                "http://localhost:3000/api/orders",
                data
            );
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
        }, [dispatch, options, currency, showSpinner]);

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
        <div className="flex flex-col gap-8 p-12 lg:flex-row">
            {/* Left */}
            <table className="text-center sm:text-left flex-[2]">
                <tbody>
                    <tr className="hidden sm:flex text-[16px]">
                        <th className="flex-[2]">Product</th>
                        <th className="flex-[1]">Name</th>
                        <th className="flex-[1]">Extras</th>
                        <th className="flex-[1]">Combo</th>
                        <th className="flex-[1]">Price</th>
                        <th className="flex-[1]">Quantity</th>
                        <th className="flex-[1]">Total</th>
                    </tr>
                </tbody>

                {cart.products.map((product, idx) => (
                    <CartCard key={idx} product={product} />
                ))}
            </table>
            {/* Right */}
            <div className="text-center sm:text-left flex-1">
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
                            <button
                                onClick={() => setCash(true)}
                                className="p-2 mt-4 cursor-pointer mb-2 bg-white text-slate-800 font-bold rounded-md"
                            >
                                Pay Cash on Delivery
                            </button>
                            <div
                                style={{
                                    maxWidth: "750px",
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
            {cash && (
                <OrderDetails
                    total={cart.total}
                    createOrder={createOrder}
                    setCash={setCash}
                />
            )}
        </div>
    );
};

export default Cart;
