import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const client = await connectToDatabase();
    const db = client.db("doces-carol");
    const collection = db.collection("orders");

    if (req.method === "GET") {
      const orders = await collection.find({}).toArray();
      res.status(200).json(orders);
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}
