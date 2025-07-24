import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const connectDb=async()=>{
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
        return connectionInstance;
    } catch (error) {
        console.log("MONGODB connection failed:", error.message)
        console.error("Database connection error details:", error);
        process.exit(1);
    }
}
export default connectDb