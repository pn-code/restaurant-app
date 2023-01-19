import React from "react";

const index = () => {
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
                            <th>Id</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>Image</td>
                            <td>Product Id</td>
                            <td>Product Title</td>
                            <td>Product Price</td>
                            <td>
                                <button className="px-2 py-1 bg-green-600 text-white rounded-md font-semibold">Edit</button>
                                <button className="ml-2 px-2 py-1 bg-red-500 text-white rounded-md font-semibold">Delete</button>
                            </td>
                        </tr>
                    </tbody>
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
                    <tbody>
                        <tr>
                            <td>{"213213124".slice(0, 5)}...</td>
                            <td>John Doe</td>
                            <td>$50</td>
                            <td>Paid</td>
                            <td>Preparing</td>
                            <td>Action</td>
                            <td>
                                <button className="px-2 py-1 bg-blue-600 text-white rounded-md font-semibold">Next Stage</button>
                                <button className="ml-2 px-2 py-1 bg-red-500 text-white rounded-md font-semibold">Cancel</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default index;
