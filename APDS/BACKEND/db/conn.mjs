import pkg from 'mongodb';
import dotenv from "dotenv";

const { MongoClient } = pkg;
dotenv.config();

const connectionString = process.env.ATLAS_URI || "";
console.log(connectionString);

const client = new MongoClient(connectionString);

async function connectToMongo() {
    try {
        await client.connect();
        console.log('mongoDB is connected!!! :)');
        return client.db("users");
    } catch (e) {
        console.error("Error connecting to MongoDB:", e);
    }
}

const db = await connectToMongo();

export default db;
