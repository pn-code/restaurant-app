import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";

const Index = ({ orders, products }) => {
  const [productList, setProductList] = useState(products);
  const [orderList, setOrderList] = useState(orders);
  const status = ["Preparing...", "On the Way...", "Delivered."];

  const handleDeleteProduct = async (id) => {
    try {
      const res = await axios.delete(
        `${process.env.NEXT_PUBLIC_HOST_URI}/api/products/${id}`
      );
      setProductList((prevProductList) =>
        prevProductList.filter((product) => product._id !== id)
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleStatus = async (id) => {
    const item = orderList.filter((order) => order._id === id)[0];
    const currentStatus = item.status;

    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_HOST_URI}/api/orders/${id}`,
        { status: currentStatus + 1 }
      );
      setOrderList((prevOrderList) => [
        res.data.updatedOrder,
        ...prevOrderList.filter((order) => order._id !== id),
      ]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    // Container
    <div className="p-12 flex bg-gray-50">
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

          {productList.map((product) => (
            <tbody key={productList._id}>
              <tr>
                <td>
                  <Image src={product.image} alt="" width={50} height={50} />
                </td>
                <td>{product._id.slice(0, 8)}...</td>
                <td>{product.title}</td>
                <td>${product.prices[0]}</td>
                <td>
                  <button className="px-2 py-1 bg-green-600 text-white rounded-md font-semibold">
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteProduct(product._id)}
                    className="ml-2 px-2 py-1 bg-red-500 text-white rounded-md font-semibold"
                  >
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
        <div className="h-[500px] w-full overflow-y-auto">
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
            {orderList.map((order) => (
              <tbody key={order._id}>
                <tr>
                  <td>{order._id.slice(0, 8)}...</td>
                  <td>{order.customer}</td>
                  <td>${order.total}</td>
                  <td>{order.method === 1 ? "Paypal" : "Cash"}</td>
                  <td>{status[order.status]}</td>
                  <td>
                    {status[order.status] !== "Delivered." ? (
                      <span>
                        <button
                          onClick={() => handleStatus(order._id)}
                          className="px-2 py-1 bg-blue-600 text-white rounded-md font-semibold"
                        >
                          Next Stage
                        </button>
                        <button className="ml-2 px-2 py-1 bg-red-500 text-white rounded-md font-semibold">
                          Cancel
                        </button>
                      </span>
                    ) : (
                      <span>Completed</span>
                    )}
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Index;

export const getServerSideProps = async (ctx) => {
  const productRes = await axios.get(`${process.env.HOST_URI}/api/products`);
  const orderRes = await axios.get(`${process.env.HOST_URI}/api/orders`);
  const myCookie = ctx.req?.cookies || "";

  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      products: productRes.data,
      orders: orderRes.data,
    },
  };
};
