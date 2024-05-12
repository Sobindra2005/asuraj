const express=require("express");
const app=express()
const port=8080;
const{connectTomongoDB}=require('./mongodbConnection')
const{}=require('./routes/signup')
const login =require('./routes/login')
const signup=require('./routes/signup')

//connection to the mongodb 
connectTomongoDB('mongodb://127.0.0.1:27017/asuraj')
app.use('/',login)
app.use('/',signup)

app.listen(port,(res,req)=>{
    console.log(`server is listened at ${port}` )
})