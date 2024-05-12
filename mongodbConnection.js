const mongoose = require('mongoose')

function connectTomongoDB(url) {
    return mongoose.connect(url).then(()=>{
        console.log("mongodb is connected successfully!!!")
    })
    .catch((err)=>{
console.log("err is ",err)
    })
}

module.exports = {connectTomongoDB}