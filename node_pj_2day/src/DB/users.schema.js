const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: false
    }
})

module.exports = mongoose.model('User', userSchema)