const dotenv=require('dotenv')
const express=require('express')
const MongoDB=require('./db/connectToMongoDB')
const connectToMongoDB=MongoDB.connectToMongoDB()
const authRoutes=require('./routes/auth.routes')
dotenv.config()
const app=express()
app.use(express.json())
app.use('/auth',authRoutes.router)


const port=process.env.PORT || 5000;

app.listen(port,async ()=>{
    await connectToMongoDB; //mongoDb connection
    console.log(`Server is running on port ${port}`)
})