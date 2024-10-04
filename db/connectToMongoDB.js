
const dotenv=require('dotenv')
dotenv.config()
const mongoose=require('mongoose')
 
const connectToMongoDB=async ()=>{
    try{
        await mongoose.connect(process.env.CONNECT_URL)
       
        console.log("Connected to MongoDB")
    }
    catch(error){
        console.log("Sorry ! Error Connecting to mongoDB", error.message)
    }
};

module.exports= {connectToMongoDB}