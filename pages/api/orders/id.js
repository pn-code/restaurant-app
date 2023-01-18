import dbConnect from "@/lib/dbConnect";
import Order from "../../../models/Order";

export default async function handler(req, res) {
    const { method, query:{id} } = req;

    dbConnect();

    if (method === "GET") {
    }

    if (method === "PUT") {
    }

    if (method === "DELETE") {

    }
}

export default handler;