import jwt from 'jsonwebtoken'
import User from '../models/user.model.js';

const protectRoute=async (req,res,next)=>{
    try{
        const token=req.cookies.jwt; //read the jwt cookie stored by us during generateToken
        if(!token){
            return res.status(401).json({error: "Unauthorized - No token provided"});
        }
        const decoded=jwt.verify(token,process.env.Secret_key)

        if(!decoded){
            return res.status(401).json({error: "Unauthorized - Invalid Token"});
        }
     
        const user=await User.findById(decoded.userId).select("-password") //To remove password field
     
        if(!user){
            return res.status(401).json({error: "User Not Found in protectRoute"})
        }
        req.user=user;
        next();
    }
    catch(error){
        console.log("Error in protectRoute Middleware",error.message)
        return res.status(400).json({error: "Internal server error"});
    }
}
export default protectRoute;