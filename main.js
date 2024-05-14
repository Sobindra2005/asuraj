const express=require("express");
const app=express()
const port=3000;
const{connectToMongoDB}=require('./authentication/mongodbConnection')
const loginRoutes =require('./authentication/routes/login')
const signupRoutes=require('./authentication/routes/signup')
const homeRouter=require('./authentication/routes/home')
const{tokenAuthenticate}=require('./authentication/middleware/authenticationCheck')

app.use(express.urlencoded({extended:false})) //body parser

//connection to the mongodb 
require('dotenv').config()
const uri=process.env.uri
connectToMongoDB(uri);

//routes
app.use('/',loginRoutes)
app.use('/',signupRoutes)
app.use('/home/',tokenAuthenticate,homeRouter)

app.listen(port,(res,req)=>{
    console.log(`server is listened at ${port}` )
})
