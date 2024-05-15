const jwt = require('jsonwebtoken')
const crypto = require('crypto')

secretKey = crypto.randomBytes(56).toString('hex')

function setUser(user) {
    return jwt.sign({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password
    }, secretKey).catch((err) => {
        res.send({ msg: "error making the jsonwebtoken" })
    })
}

function getUser(token) {
    if (!token) return null;
    return jwt.verify(token, secretKey)
        .catch((err) => {
            res.send({ msg: "error " })
        })
}

module.exports = { setUser, getUser }