import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../lib/mongodb";
import { UserType } from "@/types/UserType";

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
        res.status(400).json({ message: "User already exists" });
      } else {
        const newUser: UserType = {
          username: data.username,
          phone: data.phone,
        };
        await collection.insertOne(newUser);
        res.status(200).json({ message: "User created", user: newUser });
      }
    } else {
      return;
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}
