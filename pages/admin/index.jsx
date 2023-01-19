import React from "react";
import axios from "axios";
import Image from "next/image";

const index = ({ orders, products }) => {

    return (
        // Container
        <div className="p-12 flex">
            {/* Products */}
            <div className="flex-1">
                <h1 className="text-2xl font-bold mb-2">Products</h1>
                <table className="w-[100%] border-spacing-5 text-left">
                    <tbody>
                        <tr>
                            <th>Image</th>
                            <th>Product Id</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </tbody>

                    {products.map((product) => (
                        <tbody key={products._id}>
                            <tr>
                                <td>
                                    <Image
                                        src={product.image}
                                        alt=""
                                        width={50}
                                        height={50}
                                    />
                                </td>
                                <td>{product._id.slice(0, 8)}...</td>
                                <td>{product.title}</td>
                                <td>${product.prices[0]}</td>
                                <td>
                                    <button className="px-2 py-1 bg-green-600 text-white rounded-md font-semibold">
                                        Edit
                                    </button>
                                    <button className="ml-2 px-2 py-1 bg-red-500 text-white rounded-md font-semibold">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
            {/* Orders */}
            <div className="flex-1">
                <h1 className="text-2xl font-bold mb-2">Orders</h1>
                <table className="w-[100%] border-spacing-5 text-left">
                    <tbody>
                        <tr>
                            <th>Order #</th>
                            <th>Customer</th>
                            <th>Total</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </tbody>
                    {orders.map((order) => (
                        <tbody key={order._id}>
                            <tr>
                                <td>{order._id.slice(0, 5)}...</td>
                                <td>{order.customer}</td>
                                <td>${order.total}</td>
                                <td>{order.method === 1 ? "Paypal" : "Cash"}</td>
                                <td>{order.status}</td>
                                <td>Action</td>
                                <td>
                                    <button className="px-2 py-1 bg-blue-600 text-white rounded-md font-semibold">
                                        Next Stage
                                    </button>
                                    <button className="ml-2 px-2 py-1 bg-red-500 text-white rounded-md font-semibold">
                                        Cancel
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
        </div>
    );
};

export default index;

export const getServerSideProps = async () => {
    const productRes = await axios.get(`http://localhost:3000/api/products`);
    const orderRes = await axios.get(`http://localhost:3000/api/orders`);

    return {
        props: {
            products: productRes.data,
            orders: orderRes.data,
        },
    };
};
