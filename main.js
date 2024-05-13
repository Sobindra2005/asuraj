const express=require("express");
const app=express()
const port=8080;
const{connectTomongoDB}=require('./mongodbConnection')
const loginRoutes =require('./routes/login')
const signupRoutes=require('./routes/signup')

//body parser
app.use(express.urlencoded({extended:false}))

//connection to the mongodb 
connectTomongoDB('mongodb://127.0.0.1:27017/asuraj')

//routes
app.use('/',loginRoutes)
app.use('/',signupRoutes)

app.listen(port,(res,req)=>{
    console.log(`server is listened at ${port}` )
})