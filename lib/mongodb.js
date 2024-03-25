import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
};

let cachedClient = null

export const connectToDatabase = async () => {
    if (cachedClient) {
        return cachedClient
    }

    const client = await MongoClient.connect(uri, options)
    cachedClient = client

    return cachedClient
}