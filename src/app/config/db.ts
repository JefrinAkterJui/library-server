import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv()
const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/library-management"
console.log(MONGO_URI)

export const connectDb = async ()=>{
    await mongoose.connect(MONGO_URI)
    console.log('Connected to Mongodb using mongoose')

}

