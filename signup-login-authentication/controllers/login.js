const { user } = require("../models/userAccountDetails");
const { setUser } = require("../service/authentication")
const bcrypt = require('bcrypt')

async function userLogin(req, res) {

    try {
        const { email, password } = req.body;//take the email and password from the body
        const userData = await user.findOne({ email })
        console.log(userData)
        const userPassword= await userData.password
        const passwordMatch = await bcrypt.compare(password, userData.password)
        if (!email || !password) {
            res.status(400).send({ msg: "email and password is required" });
        }
        if (!userData) {
            res.status(404).send({ msg: "user not found!!" })
        }
        if (passwordMatch) {
            const token = setUser(userData)
            res.status(200).send(userData)

        }
        else {
            res.status(401).send({ msg: "incorrect password!!" })
        }
     

    }
    catch (err) {
        console.log("err occur during authenticating ", err)
    }

}

module.exports = { userLogin };
