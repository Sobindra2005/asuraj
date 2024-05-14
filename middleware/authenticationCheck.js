const { getUser } = require("../service/authentication")

function tokenAuthenticate(req, res, next) {
    const authorizationHeader = req.headers["authorization"];
    const token = authorizationHeader.split("Bearer ")[1]
    if (!authorizationHeader || !token) {
        res.redirect("/")
    }
    const user = getUser(token)
    if(!user){
        res.redirect("/")
    }
    req.user = user
    next()
}

module.exports={tokenAuthenticate}