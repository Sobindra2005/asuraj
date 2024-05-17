const mongoose = require('mongoose')

const signUpSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

const profileDataSchema = new mongoose.Schema({
    dob: {
        type: String,
        required: true
    },
    passion: {
        type: String,
        required: true,
    },
    experience: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "signups"
    }

})




const user = mongoose.model('signup', signUpSchema)
const LocalSetupData = mongoose.model('LocalSetupData', profileDataSchema)

module.exports = { user, LocalSetupData }

