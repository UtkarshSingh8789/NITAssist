import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import connectDb from "./config/database.js"
const app=express();
app.use(cors({
    origin:"*",
    credentials:true
}))
app.use(express.json(
    {
        limit:"16kb"
    }
))
app.use(express.urlencoded({
    extended:true,
    limit:"16kb"
}))
app.use(cookieParser());
dotenv.config()
connectDb().then(()=>{
    app.listen(process.env.PORT || 5000,()=>{
        console.log(`server is runnig at port : ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MongoDB connection failed: ",err)
})
