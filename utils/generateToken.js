const jwt=require( "jsonwebtoken");

const generateToken=async(userId,res)=>{
    const token=jwt.sign({userId},process.env.Secret_key,{
        expiresIn:'15d'
    })
    //lifetime of a cookie
    res.cookie('jwt',token,{
        maxAge: 15*24*60*60*1000, //time of a cookie to live in ms
        httpOnly:true, //prevent attacks
        sameSite:"strict"
    })
}
export default generateToken