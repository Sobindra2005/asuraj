const express=require("express");
const app=express()
const port=3000;
const{connectToMongoDB}=require('./mongodbConnection')
const loginRoutes =require('./routes/login')
const signupRoutes=require('./routes/signup')
const crypto=require('crypto')
//body parser
app.use(express.urlencoded({extended:false}))

app.listen(port,(res,req)=>{
    console.log(`server is listened at ${port}` )
})

//connection to the mongodb 
require('dotenv').config()
const uri=process.env.uri
connectToMongoDB(uri);


//routes
app.use('/',loginRoutes)
app.use('/',signupRoutes)

