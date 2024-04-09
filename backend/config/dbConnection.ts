import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const connectionString = process.env.CONNECTION_STRING || "";

export async function connectToDatabase() {
  const client = new MongoClient(connectionString);

  try {
    await client.connect();
    console.log("MongoDB Connected");
    return client;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}
