const mongoose =require('mongoose')

const signUpSchema =new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
   

    
},{
    timestamps:true
})

const user =mongoose.model('signup',signUpSchema)

module.exports= {user}