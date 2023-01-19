import React from "react";

const index = () => {
    return (
        // Container
        <div>
            {/* Products */}
            <div>
                <h1>Products</h1>
                <table>
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
                            <td>Product Id</td>
                            <td>Product Title</td>
                            <td>Product Price</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* Orders */}
            <div>
                <h1>Orders</h1>
                <table>
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
                            <td>213213124</td>
                            <td>John Doe</td>
                            <td>$50</td>
                            <td>Paid</td>
                            <td>Preparing</td>
                            <td>Action</td>
                            <td>
                                <button>Next Stage</button>
                                <button>Cancel</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default index;
