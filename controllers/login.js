const { user } = require("../models/userAccountDetails");
const{setUser} =require("../service/authentication")

async function userLogin(req, res) {
    const { email, password } = req.body;//take the email and password from the body
    if (!req.body) {
        res.send({ msg: "didn't get the data from the body !" });
    }


    const authenticatedUser = await user.find({ email, password });// checks whether the user having the email and password is on database or not 
    if (!authenticatedUser) { //if not then this will execute
        res.send({ msg: "Sorry , email and passowrd doesnot matched !!" });
    } else {//else success
        res.send({ msg: "successfully login" });
    }

    const token=setUser(user)
    
}

module.exports = { userLogin };
