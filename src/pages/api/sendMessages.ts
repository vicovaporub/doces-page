import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { META_KEY } = process.env;
  const url = "https://graph.facebook.com/v18.0/257816520754202/messages";

  try {
    const { method, body } = req;

    if (method !== "POST") {
      return res.status(405).json({ message: "Method Not Allowed" });
    }

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${META_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    return res.status(response.status).json(data);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
