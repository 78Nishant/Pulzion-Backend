const User =require( '../model/userSchema.js')
// import bcrypt from 'bcryptjs/dist/bcrypt.js';  //To save password in encrypted form
// import generateToken from '../utils/generateToken.js'; //Generate jwt token

//For new user signup method
exports.signup= async(req,res)=>{
    try{
        const {fullName,userName,password,confirmPassword,gender}=req.body;
        if(password!=confirmPassword){
           return res.status(400).json({error:"Password don't match! Try checking password"})
        }
        const user=await User.findOne({userName}); //search if userName already exist 

        if(user){
           return res.status(400).json("Username already exists! Try new Username")
        }
        //encrypting password
        // const salt=await bcrypt.genSalt(10) //here 10 denotes strength of encrypted password
        // const hashedPassword=await bcrypt.hash(password,salt);

        const ProfilePic=`https://avatar.iran.liara.run/username?username=${userName}`
        
        const newUser= new User({
            fullName,
            userName,
            password,
            gender,
            profilePic:ProfilePic,
        })
        if(newUser){
            // generateToken(newUser._id,res)
            await newUser.save();
            return res.status(201).json("User Succesfully created");}
        else{
           return res.status(400).json("invalid user data")
        }
    }catch(error){
        console.log("error in signup controller",error.message)
       res.status(400).json("Internal server error");
    }
}
exports.check=(req,res)=>{
    res.json("Working")
}
// //User already exsist login  
// export const login=async(req,res)=>{
//     try{
//     const {userName,password}=req.body;
//     const user=await User.findOne({userName});
//     if(user){
//         if(await bcrypt.compare(password,user.password)){
//             generateToken(user._id,res);
//             return res.status(200).json("Logged In Succesfully");
//         }
//         else{
//             return res.status(400).json("Wrong Password")}
//     }
//     else{
//         return res.status(400).json("No such Username")
//     }
// }catch(error){
//     console.log("error in login controller",error.message)
//     return res.status(400).json("Internal server error");
// }
// }
// //Logout a user
// export const logout=(req,res)=>{
//     try{
//         res.cookie('jwt',"",{maxAge:0});
//         return res.status(200).json("Logged out succesfully")
//     }catch(error){
//         console.log("error in logout controller",error.message)
//         return res.status(400).json("Internal server error");
//     }

// }

