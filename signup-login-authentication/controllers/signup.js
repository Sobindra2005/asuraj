const { user, LocalSetupData } = require("../models/userAccountDetails");
const bcrypt = require('bcrypt')

async function userDataForSignup(req, res) {
    const { firstName, lastName, email, password } = req.body;
    await user.create({
        firstName,
        lastName,
        email,
        password,
    });
    const salt = await bcrypt.genSalt(10)
    const hashedPasssword = await bcrypt.hash(password, salt)//generate the hash form of password 
    const updateUser = await user.updateOne({ email: email }, { $set: { password: hashedPasssword } })
    const allUsersSignupDetails = await user.find();
    res.status(200).send(updateUser);

}


async function userDataForProfileSetup() {
    const { dob, passion, experience, country, createdBy } = req.body
    await LocalSetupData.create({
        dob,
        passion,
        experience,
        country,
        createdBy: req.user._id
    })
    const profileSetupData = LocalSetupData.find({
        createdBy: req.user._id
    })

    res.send(profileSetupData)
}

module.exports = { userDataForSignup, userDataForProfileSetup };
