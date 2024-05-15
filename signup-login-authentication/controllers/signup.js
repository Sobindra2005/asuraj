const { user , LocalSetupData} = require("../models/userAccountDetails");

async function userDataForSignup(req, res) {
    const { firstName, lastName, email, password } = req.body;
    await user.create({
        firstName,
        lastName,
        email,
        password,
    });
    const allUsersSignupDetails = user.find();
    
    res.send({msg:'successfully signup '});
    res.redirect("/login/")
}


async function userDataForProfileSetup(){
    const{ dob,passion,experience,country,createdBy}=req.body
 await LocalSetupData.create({
    dob,
    passion,
    experience,
    country,
    createdBy:req.user._id
 })
 const profileSetupData=LocalSetupData.find({
    createdBy:req.user._id
 })

 res.send( profileSetupData )
}

module.exports = { userDataForSignup,userDataForProfileSetup };
