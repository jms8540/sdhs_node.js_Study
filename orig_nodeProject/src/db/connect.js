const mongoose = require('mongoose')

const id = 'wkdwnsghd617'
const password = '1heKZzmHNNyKLFbh'
const connectionString = `mongodb+srv://${id}:${password}@cluster0.adgnrvm.mongodb.net/?retryWrites=true&w=majority`

module.exports = async function () {
    await mongoose.connect(connectionString)
    console.log('Connected!')
}