import { User } from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
const registerUser= async(req,res)=>{
    try {
        const {firstName,lastName,email,password} =req.body
        if(!firstName || !lastName || !email || !password){
            return res.status(403).json({
                success:false,
                message:"plz fill all the necessary detail"
            })
        }
        const exitstingUser = await User.findOne({ email })
        if (exitstingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exist with this mail id",
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,

        })
        return res.status(200).json({
            success: true,
            message: "User created Successfully",
        })

    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "User cannot be registered, Please try again",
        })
    }
}
const login= async(req,res)=>{
    try {
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(403).json({
                success:false,
                message:"plz fill all the necessary detail"
            })
        }
        const user= await User.findOne({email});
        if(!user){
            return res.status(401).json({
                success:false,
                message:"user is not registered with us"
            })
        }
        const checkPassword=await bcrypt.compare(password,user.password);
        if(!checkPassword){
            return res.status(401).json({
                success:false,
                message:"Incorrect Password!"
            })
        }
        const token=jwt.sign(
            { email: user.email, id: user._id, role: user.role },
          process.env.JWT_SECRET,
            { expiresIn: "24h" }
        )
        user.token=token;
        user.password=undefined;
        const options = {
          httpOnly: true,
          secure:false  // Set to true in production with HTTPS
        };
        res.cookie("token", token, options).status(200).json({
          success: true,
          token,
          user,
          message: `User Login Success`,
        });
    } catch (error) {
        console.error("Login error:", error); // Log error
        return res.status(500).json({
            success: false,
            message: `Login Failure Please Try Again`,
        });
    }
}
export{
    registerUser,
    login
}