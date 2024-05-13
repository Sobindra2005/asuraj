const express=require('express')
const router=express.Router()
const {authenticateUserLogin}=require('../controllers/login')

router.get('/login/',(req,res)=>{
   res.send({msg:"success"})
})

router.post('/login/',authenticateUserLogin)

module.exports=router