import { OrderType } from "@/types/OrderType";
import { connectToDatabase } from "../../../lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const client = await connectToDatabase();
    const db = client.db("doces-carol");
    const collection = db.collection("users");

    if (req.method === "POST") {
      const data = req.body;
      const newOrder: OrderType = {
        username: data.username,
        phone: data.phone,
        order: data.order,
        total: data.total,
      };

      await collection.insertOne(newOrder);
      res.status(200).json({ message: "Order created", order: newOrder });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}
