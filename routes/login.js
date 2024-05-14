const express=require('express')
const router=express.Router()
const {userLogin}=require('../controllers/login')

router.get('/login/',(req,res)=>{
   res.send({msg:"on login page "})
})

router.post('/login/',userLogin)

module.exports=router