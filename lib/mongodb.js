import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;


let cachedClient = null

export const connectToDatabase = async () => {
    if (cachedClient) {
        return cachedClient
    }

    const client = await MongoClient.connect(uri)
    cachedClient = client

    return cachedClient
}