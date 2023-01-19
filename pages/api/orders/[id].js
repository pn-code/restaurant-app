import dbConnect from "@/lib/dbConnect";
import Order from "../../../models/Order";

export default async function handler(req, res) {
    const {
        method,
        query: { id },
    } = req;

    dbConnect();

    if (method === "GET") {
        try {
            const order = await Order.findById(id);
            res.status(200).json(order);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    if (method === "PUT") {
        try {
            const order = await Order.findByIdAndUpdate(id, req.body, {
                new: true,
            });
            res.status(200).json({status: "Success", updatedOrder: order});
        } catch (err) {
            res.status(500).json(err);
        }
    }

    if (method === "DELETE") {
        try {
            const order = await Order.findByIdAndDelete(id);
            res.status(200).json({
                status: "Successful",
                deletedOrder: order,
            });
        } catch (err) {
            res.status(500).json(err);
        }
    }
}
