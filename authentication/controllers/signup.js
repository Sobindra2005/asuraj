const { user } = require("../models/userAccountDetails");

async function userDataForLogin(req, res) {
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

module.exports = { userDataForLogin };