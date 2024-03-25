import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../lib/mongodb";

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
      const existingUser = await collection.findOne({ phone: data.phone });
      if (existingUser) {
        res.status(200).json({ user: existingUser });
      } else {
        res.status(404).json({ message: "Usuário não registrado" });
      }
    } else {
      return;
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}
