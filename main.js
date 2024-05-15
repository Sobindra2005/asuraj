const express=require("express");
const app=express()
const port=3000;
const{connectToMongoDB}=require('./mongodbConnection')
const loginRoutes =require('./signup-login-authentication/routes/login')
const signupRoutes=require('./signup-login-authentication/routes/signup')
const homeRouter=require('./signup-login-authentication/routes/home')
const{tokenAuthenticate}=require('./signup-login-authentication/middleware/authenticationCheck')

app.use(express.urlencoded({extended:false})) 


require('dotenv').config()
const uri=process.env.uri
connectToMongoDB(uri);


app.use('/',loginRoutes)
app.use('/',signupRoutes)
app.use('/home/',tokenAuthenticate,homeRouter)

app.listen(port,(res,req)=>{
    console.log(`server is listened at ${port}` )
})
