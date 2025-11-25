import jwt from "jsonwebtoken"
import User from "../models/user.js";
// Middleware to protect routes 
// to check a user is authenticated or not ? 

export const protectRoute = async (req , res , next) => {
    try {
        const token = req.headers.token;

        const decode = jwt.verify(token , process.env.SECRET_KEY)
        
        const user = await User.findById(decode.userId).select("-password") ;

        if(!user) return res.json({ success: false , message: "User not found"});

        req.user  = user ; 

        next();
        
       
    }catch(error) {
        console.log(error.message) ; 
        res.json({ success: false , message : "User Not Found !"}); 
    }
}