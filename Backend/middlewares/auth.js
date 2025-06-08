import { User } from "../models/User.js";
import jwt from "jsonwebtoken";
export const verifyJWT=async(req,res,next)=>{
    try {
        const token=req.cookies?.token || req.header
        ("Authorization")?.replace("Bearer ","")
        if(!token){
            return res.status(404).json({
                success:false,
                message:"unauthorized request"
            })
        }
        const decodedToken=jwt.verify(token,process.env.JWT_SECRET)
        req.user=decodedToken
        next();
    } catch (error) {
        console.log("error in auth middleware: ",error)
        return res.status(500).json({
            success:false,
            message:"something went wrong while validating the token"
        })
    }
}