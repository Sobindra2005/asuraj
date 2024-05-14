const express=require('express')
const router=express.Router()

router.get('/home/',(req,res)=>{
   res.send({msg:"on home page !!"})
})



module.exports=router